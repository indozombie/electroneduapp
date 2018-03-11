const {app, BrowserWindow, Menu, MenuItem, ipcMain} = require('electron')
const path = require('path')
const url = require('url')
const navbar = require('../navbar/navbar.js')

  // Keep a global reference of the window object, if you don't, the window will
  // be closed automatically when the JavaScript object is garbage collected.
  let mainWindow
  let childWindow

  function createWindow () {
    // Create the browser window.
    mainWindow = new BrowserWindow({width:800, height:600})
    childWindow = new BrowserWindow({width:400, height:300, parent:mainWindow, modal:true, frame:true, show:false})
    childWindow.once('ready-to-show', () => {
      childWindow.show()
    })
    // and load the index.html of the app.
    mainWindow.loadURL(url.format({
      pathname: path.join(__dirname, 'main.html'),
      protocol: 'file:',
      slashes: true
    }))
    childWindow.loadURL(url.format({
      pathname: path.join(__dirname, '../navbar.navbar.html'),
      protocol: 'file:',
      slashes: true
    }))

    // Open the DevTools.
    // mainWindow.webContents.openDevTools()
    // childWindow.webContents.openDevTools()

    // Emitted when the window is closed.
    mainWindow.on('closed', () => {
      mainWindow = null
    })
    childWindow.on('closed', () => {
      mainWindow = null
    })



// End of Funtion
  }

  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  app.on('ready', createWindow)

  // Quit when all windows are closed.
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
      createWindow()
    }
  })

module.exports = ('./navbar.navbar.js')
