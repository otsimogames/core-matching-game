const http = require('https');
import * as pb from './pb';

/**
 * Download file by given url
 * returns buffer object
 */
async function getFile(url: string) {
  return new Promise<Buffer>((resolve, reject) => {
    http.get(url, (resp) => {
      const data = []; // List of Buffer objects
      resp.on('data', function (chunk) {
        data.push(chunk); // Append Buffer object
      });
      resp.on('end', function () {
        resolve(Buffer.concat(data));
      });
      resp.on('error', (err) => {
        reject(err);
      })
    })
  })
}

/**
 * 
 * 
 * @param {otsimo.GameBuild} d 
 */
function buildProject(task: pb.otsimo.IBuildTask, game: pb.otsimo.GameBuild) {
  console.log('build project')
}

/**
 * Get build data from given url string
 * @param {string} url 
 */
async function fetchBuildData(url: string) {
  const data = await getFile(url);
  return pb.otsimo.GameBuild.decode(data)
}

async function run({ buildId = '', debug = false, customInGameData = false, bucket = 'otsimo-games', folder = 'd' }) {
  console.log('start to building', buildId, 'debug:', debug, 'customInGameData', customInGameData)
  const buildDataURL = `https://s3-eu-west-1.amazonaws.com/${bucket}/${folder}/${buildId}`
  const data = await fetchBuildData(buildDataURL)
  for (const t of data.tasks) {
    if (t.build) {
      buildProject(t.build, data);
    }
  }
  for (const t of data.tasks) {
    if (t.deploy) {
      console.log('deploy project')
    } else if (t.preview) {
      console.log('preview project')
    }
  }
}

function main() {
  const debug = process.env['DEBUG'] == '1' || process.env['DEBUG'] == 'true'
  const stdInGame = !!process.env['CUSTOM_IN_GAME_DATA']
  run({
    buildId: process.env['OTSIMO_BUILD_ID'],
    customInGameData: stdInGame,
    debug: debug,
    bucket: process.env['OTSIMO_BUCKET'],
    folder: process.env['OTSIMO_FOLDER']
  }).then(res => console.log('tasks completed', res))
    .catch(err => {
      console.error(err)
      process.exit(2)
    })
}

if (typeof process.env['OTSIMO_IN_K8S'] !== 'undefined') {
  main();
} else {
  console.log(process.argv);
  run({
    buildId: process.argv[2],
    customInGameData: false,
    debug: true,
    bucket: 'otsimo-games',
    folder: 'd'
  }).then(res => console.log('tasks completed', res))
    .catch(err => {
      console.error(err)
      process.exit(2)
    })
}