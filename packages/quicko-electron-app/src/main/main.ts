import { app, ipcMain, BrowserWindow } from 'electron';
import * as path from 'path';
import * as url from 'url';
import commandLineArgs from 'command-line-args';
const log = require('electron-log');

let win: BrowserWindow | null;

const installExtensions = async () => {
  const installer = require('electron-devtools-installer');
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = ['REACT_DEVELOPER_TOOLS', 'REDUX_DEVTOOLS'];

  return Promise.all(
    extensions.map(name => installer.default(installer[name], forceDownload))
  ).catch(console.log);
};

const createWindow = async () => {
  if (process.env.NODE_ENV !== 'production') {
    await installExtensions();
  }

  win = new BrowserWindow({ width: 800, height: 600 });

  if (process.env.NODE_ENV !== 'production') {
    process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = '1';
    win.loadURL(`http://localhost:2003`);
  } else {
    win.loadURL(
      url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
      })
    );
  }

  if (process.env.NODE_ENV !== 'production') {
    // Open DevTools, see https://github.com/electron/electron/issues/12438 for why we wait for dom-ready
    win.webContents.once('dom-ready', () => {
      win!.webContents.openDevTools();
    });
  }

  win.show();

  win.on('closed', () => {
    win = null;
  });
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});

const optionDefinitions = [
  { name: 'location', alias: 'l', type: String, defaultValue: './' },
]

const extractQuickoFileLocationFromParam = () => {
  log.info('args', process.argv);
  const options = commandLineArgs(optionDefinitions)
  log.info('Hello', options);
  return options.location;
}

ipcMain.on('get-quicko-file-location-param', (event) => {
  event.returnValue = extractQuickoFileLocationFromParam();
})
