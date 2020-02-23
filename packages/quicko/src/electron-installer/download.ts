import request from 'request';
import fs from 'fs';
import cliProgress from 'cli-progress';

const download = (url, filename, successCallBack, errorCallback) => {

  const progressBar = new cliProgress.SingleBar({
    format: '{bar} {percentage}% | ETA: {eta}s'
  }, cliProgress.Presets.shades_classic);

  const file = fs.createWriteStream(filename);
  let receivedBytes = 0


  request.get(url)
  .on('response', (response) => {
    if (response.statusCode !== 200) {
      return errorCallback('Response status was ' + response.statusCode);
    }

    const totalBytes = response.headers['content-length'];
    progressBar.start(totalBytes, 0);
  })
  .on('data', (chunk) => {
    receivedBytes += chunk.length;
    progressBar.update(receivedBytes);
  })
  .pipe(file)
  .on('error', (err) => {
    fs.unlink(filename, ()=> {});
    progressBar.stop();
    return errorCallback(err.message);
  });

  file.on('finish', () => {
    progressBar.stop();
    file.close();
    successCallBack();
  });

  file.on('error', (err) => {
    fs.unlink(filename, ()=> {});
    progressBar.stop();
    return errorCallback(err.message);
  });
}

export default download;
