const {app, BrowserWindow, dialog} = require('electron');
const path = require('path');

function createWindow () {
const win = new BrowserWindow({
    width: 800,
    length: 600,
    webPreferences: {
        nodeIntegration: true
    }
})

win.loadFile(path.join(__dirname, 'index.html'));
win.setMenu(null);
win.on('close', function(e) {
  const confirmation = require('electron').dialog.showMessageBox(this,
    {
      type: 'question',
      buttons: ['Salir', 'Cancelar'],
      title: '¿Seguro que quieres salir?',
      message: 'Se perderán los cálculos que hayas hecho.',
      noLink: true
    });
    if (confirmation == 1) {
      e.preventDefault();
    }
});
}

app.on('ready', createWindow);

const { nativeTheme } = require('electron')

app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
});
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
});