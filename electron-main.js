// modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');
// keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow() {
  // create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      webSecurity: false,
      nodeIntegration: true,
    },
    frame: false,
  });
  // and load the index.html of the app.
  mainWindow.loadURL('http://localhost:8080/');
  // open the DevTools.
  // mainWindow.webContents.openDevTools()

  // emitted when the window is closed.
  mainWindow.on('closed', () => {
    // dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
}

// this method will be called when Electron has finished
// initialization and is ready to create browser windows.
// some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// quit when all windows are closed.
app.on('window-all-closed', () => {
  // on macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // on macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// in this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
