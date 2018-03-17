const { app, BrowserWindow, Menu, MenuItem, ipcMain } = require("electron");
const path = require("path");
const url = require("url");
const navbar = require("../navbar/navbar.js");

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
var dateToday = require("../navbar/navbar.js").remote;

function createWindow() {
  // Create the browser window.
  let mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: true,
    parent: dateToday
  });
  // and load the index.html of the app.
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "../src/main.html"),
      protocol: "file:",
      slashes: true
    })
  );

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();
  // // childWindow.webContents.openDevTools()

  // Show the main window when it is ready
    mainWindow.once("ready-to-show", () => {
      mainWindow.show();
    });

  // Emitted when the window is closed.
  mainWindow.on("closed", () => {
    app.quit();
  });

  // End of Funtion
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow();
  }
});

module.exports = "./navbar.navbar.js";
