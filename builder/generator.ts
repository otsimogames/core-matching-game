const http = require('https');
import * as pb from './pb';

interface RunConfig {
  buildId: string,
  debug: boolean,
  customInGameData: boolean,
  bucket: string
  folder: string
}

interface GameBuildConfig {
  run: RunConfig
  data: pb.otsimo.GameBuild
}

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
async function buildProject(task: pb.otsimo.IBuildTask, game: GameBuildConfig) {
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

async function run(config: RunConfig) {
  console.log('start to building', config.buildId, 'debug:', config.debug, 'customInGameData', config.customInGameData)
  const buildDataURL = `https://s3-eu-west-1.amazonaws.com/${config.bucket}/${config.folder}/${config.buildId}`
  const data = await fetchBuildData(buildDataURL)
  const bc: GameBuildConfig = { run: config, data: data }
  for (const t of data.tasks) {
    if (t.build) {
      await buildProject(t.build, bc);
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