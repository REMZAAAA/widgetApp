const { app, BrowserWindow } = require("electron");

function createWindow() {
  const { height } = screen.getPrimaryDisplay().workAreaSize;

  const win = new BrowserWindow({
    width: 320,
    height: height,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    resizable: false,
    webPreferences: {
      preload: null
    }
  });

  win.loadFile("index.html");
}

app.whenReady().then(createWindow);