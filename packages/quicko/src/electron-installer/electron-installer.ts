import fs from 'fs';
import os from 'os';
import path from 'path';
import download from './download';
import open from 'open';
import unzipper from 'unzipper';
import { spawnSync } from 'child_process';

const USER_HOME = os.homedir();
const QUICKO_HOME = path.join(USER_HOME, '.quicko');
const QUICKO_ZIP_LOCATION = path.join(QUICKO_HOME, 'quicko.zip');
const QUICKO_BIN_LOCATION = path.join(QUICKO_HOME, 'bin');
const QUICKO_APPLICATION_PATH = path.join(QUICKO_BIN_LOCATION, 'Quicko.app/Contents/MacOS/Quicko');
const QUICKO_ZIP_FILE_URL = 'https://github.com/loic-carbonne/quicko/releases/latest/download/Quicko.zip';

const unzipAndOpen = () => {
  const readStream = fs.createReadStream(QUICKO_ZIP_LOCATION);
  // const writeStream = fs.createWriteStream(QUICKO_BIN_LOCATION);

  readStream
    .pipe(unzipper.Extract({ path: QUICKO_BIN_LOCATION }))
    .promise()
    .then( () => openQuicko(), e => console.log('error',e));

}

const openQuicko = () => {
  const currentDir = process.cwd();
  console.log( QUICKO_APPLICATION_PATH, [ '-','--location', currentDir] );
  const q = spawnSync( QUICKO_APPLICATION_PATH, [ '-','--location', currentDir] );

/*
  q.stdout.on( 'data', data => {
    console.log( `stdout: ${data}` );
  } );

  q.stderr.on( 'data', data => {
    console.log( `stderr: ${data}` );
  } );

  q.on( 'close', code => {
    console.log( `child process exited with code ${code}` );
  } );*/
  // open(QUICKO_APPLICATION_PATH, currentDir);
}

const initApp = () => {
  if (!fs.existsSync(QUICKO_HOME)) {
    fs.mkdirSync(QUICKO_HOME);
  }
}

const main = () => {
  initApp();
  if (!fs.existsSync(QUICKO_APPLICATION_PATH)) {
    download(QUICKO_ZIP_FILE_URL, QUICKO_ZIP_LOCATION, unzipAndOpen, () => {});
  } else {
    openQuicko();
  }
}

main();
