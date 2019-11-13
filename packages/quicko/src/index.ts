import fs from 'fs';
import os from 'os';
import path from 'path';
import download from './download';
import open from './open';
import { unzip } from 'zlib';

const USER_HOME = os.homedir();
const TBD_HOME = path.join(USER_HOME, '.tbd');
const TBD_APPLICATION_PATH = path.join(TBD_HOME, 'tbd.app');

const unzipAndOpen = () => {
  //unzip()
  open(TBD_APPLICATION_PATH);
}

const main = () => {
  if (!fs.existsSync(TBD_HOME)) {
    fs.mkdirSync(TBD_HOME);
  }

  if (!fs.existsSync(TBD_APPLICATION_PATH)) {
    const fileUrl = `https://unsplash.com/photos/FHo4labMPSQ/download`;
    download(fileUrl, `${TBD_HOME}/knot.jpg`, unzipAndOpen);
  } else {
    open(TBD_APPLICATION_PATH);
  }
}

main();
