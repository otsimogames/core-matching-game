const pb = require('./pb');
const http = require('https');


/**
 * Download file by given url
 * returns buffer object
 * @param {string} url 
 */
async function getFile(url) {
  return new Promise((resolve, reject) => {
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
 * Get build data from given url string
 * @param {string} url 
 */
async function fetchBuildData(url) {
  const data = await getFile(url);
  return pb.otsimo.GameBuild.decode(data)
}

async function run({ buildId = '', debug = false, customInGameData = false, bucket = 'otsimo-games', folder = 'd' }) {
  console.log('start to building', buildId, 'debug:', debug, 'customInGameData', customInGameData)
  const buildDataURL = `https://s3-eu-west-1.amazonaws.com/${bucket}/${folder}/${buildId}`
  const data = await fetchBuildData(buildDataURL)
  
  console.log(JSON.stringify(data.toJSON(), null, '  '))
}

function main() {
  const debug = process.env['DEBUG'] == '1' || process.env['DEBUG'] == 'true'
  const stdInGame = !!process.env['CUSTOM_IN_GAME_DATA']
  run({
    buildId: process.env['OTSIMO_BUILD_ID'],
    custom_in_game_data: stdInGame,
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
    custom_in_game_data: false,
    debug: true,
    bucket: 'otsimo-games',
    folder: 'd'
  }).then(res => console.log('tasks completed', res))
    .catch(err => {
      console.error(err)
      process.exit(2)
    })
}