const {app, Menu, globalShortcut} = require('electron')

  const template = [
    {
      label: 'File',
      submenu: [
        {label: 'Create File'},
        {label: 'Import File'},
        {label: 'Save File'},
        {label: 'Open Recent'},
        {type: 'separator'},
        {label: 'Save'},
        {label: 'Save As'},
        {type: 'separator'},
        {label: 'Exit',
        accelerator:
        app.on('ready', () => {
          globalShortcut.register('CmdorCTRL+Q', () => {
            app.exit([0]);
        })}),
          click () {
            app.exit([0]);
          }
      ],
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
        {label: 'Create File'},
        {label: 'Import File'},
        {label: 'Save File'},
        {type: 'separator'},
        {label: 'Create Comment Database'},
        {label: 'Find Comment Database'},
        {label: 'Save Comment Database'},
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
        {label: 'Date Today...'},
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


app.on('windows-all-closed', () => {
  if(process.platform !== 'darwin') {
    app.quit();
  }
})
