const { app, BrowserWindow, screen } = require("electron");

function createWindow() {
  const { height } = screen.getPrimaryDisplay().workAreaSize;

  const win = new BrowserWindow({
    width: 300,
    height,
    x: 0,
    y: 0,
    frame: false,
    transparent: true,
    alwaysOnTop: false,
    resizable: false,
    show: false,
    webPreferences: {
      preload: null
    }
  });

  win.loadFile("index.html");

  let isCorrectingPosition = false;

  function keepWindowInsideScreen() {
    if (isCorrectingPosition) return;

    const bounds = win.getBounds();
    const display = screen.getDisplayMatching(bounds);
    const area = display.workArea;

    const minX = area.x;
    const minY = area.y;

    const maxX = Math.max(minX, area.x + area.width - bounds.width);
    const maxY = Math.max(minY, area.y + area.height - bounds.height);

    const newX = Math.min(Math.max(bounds.x, minX), maxX);
    const newY = Math.min(Math.max(bounds.y, minY), maxY);

    if (newX !== bounds.x || newY !== bounds.y) {
      isCorrectingPosition = true;
      win.setPosition(newX, newY);

      setTimeout(() => {
        isCorrectingPosition = false;
      }, 0);
    }
  }

  win.webContents.once("did-finish-load", async () => {
    const dateWidth = await win.webContents.executeJavaScript(`
      new Promise(resolve => {
        requestAnimationFrame(() => {
          const date = document.querySelector("body");
          resolve(Math.ceil(date.scrollWidth));
        });
      });
    `);

    console.log("dateWidth =", dateWidth);

    win.setSize(dateWidth, height);
    keepWindowInsideScreen();
    win.show();
  });

  win.on("moved", keepWindowInsideScreen);
}

app.whenReady().then(createWindow);