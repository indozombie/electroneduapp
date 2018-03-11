const {app, Menu, globalShortcut} = require('electron')
const BrowserWindow = require('electron')
const electron = require('electron')
const ipcRenderer = require('electron')
const template = [
    {
      label: 'File',
      submenu: [
        {label: 'Create File'},
        {label: 'Import File'},
        {label: 'Open Recent'},
        {type: 'separator'},
        {label: 'Save',
        accelerator: 'CmdorCtrl+ALT+S'},
        {label: 'Save As',
        accelerator: 'CmdorCtrl+S'},
        {type: 'separator'},
        {label: 'Exit',
        accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
          click () {
            app.quit();}
        }
      ]
    },
    {
      label: 'Edit',
      submenu: [
        {label: 'a'},
        {label: 'a'},
        {label: 'a'},
        {label: 'separator'},
        {label: 'a'},
        {label: 'a'},
        {label: 'a'},
        {type: 'separator'},
        {label: 'a'},
      ]
    },
    {
      label: 'Comments',
      submenu: [
        {label: 'Create File',
        accelerator: 'CmdorCtrl+F'},
        {label: 'Import File',
        accelerator: 'CmdorCtrl+ALT+F'},
        {label: 'Save File',
        accelerator: 'CmdorCtrl+Shift+F'},
        {type: 'separator'},
        {label: 'Create Comment Database',
        accelerator: 'CmdorCtrl+D'},
        {label: 'Find Comment Database',
        accelerator: 'CmdorCtrl+D'},
        {label: 'Save Comment Database',
        accelerator: 'CmdorCtrl+Shift+D'},
        {type: 'separator'},
        {label: 'Clear All'},
      ]
    },
    {
      label: 'Attendance',
      submenu: [
        {label: 'Create List'},
        {label: 'Import List'},
        {label: 'Save List'},
        {type: 'separator'},
        {label: 'Date Today...',
<<<<<<< HEAD
        id: 'dateToday',
        click () {
          console.log('clicked')
=======
        click (item, browserWindow) {
          if (browserWindow) browserWindow.reload()
>>>>>>> 8b5d44924e190272ee4375863e80e8b7e94e509a
        }},
        {type: 'separator'},
        {label: 'Clear All'},
      ]
    },
    {
      label: 'Options',
      submenu: [
        {label: 'Word Count'},
        {label: 'Character Count'},
        {label: 'Spell Check'},
        {label: 'Grammar Check'}
      ]
    },
    {
      label: 'Help',
      submenu: [
        {label: 'Check for Updates'},
        {label: 'Share with other Teachers'},
        {label: 'Ask the Community'},
      ]
    },
  ]

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)
