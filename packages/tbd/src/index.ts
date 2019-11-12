console.log('Hello world!');

import open from 'open';

const TBD_HOME = '~/.tbd/';

(async () => {
  // Opens the image in the default image viewer and waits for the opened app to quit.
  await open(
    '/Users/loiccarbonne/workspace/perso/tbd/packages/tbd-electron-app/release/ProductName.app'
  );
})();
