const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu;
const globalShortcut = electron.globalShortcut;
const remote = electron.remote;
var currentWindow;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function createWindow (width,height) {
  // Create the browser window.
  let win = new BrowserWindow({
    width: width*0.9,
    height: height*0.9,
    frame: false,
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.center();
  // and load the index.html of the app
  win.loadFile('loading.html');
  //Sleep in milliseconds for loading screen
  await sleep(2000);
  let iwin = new BrowserWindow({
    width: width*0.9,
    height: height*0.9,
    'minHeight': height*0.8,
    'minWidth': width*0.8,
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.hide();
  iwin.hide();
  iwin.loadFile('index.html');
  iwin.setPosition(win.getPosition()[0],win.getPosition()[1]);
  iwin.show();
  win.close()
  const template = [
    {
      label: 'Home',
      click: function(){
        iwin.loadFile('index.html');
      }
    },
    {
      label: 'Documentation',
      click: function(){
        iwin.loadFile('docs.html');
      }
    },
    {
      label: 'Interactive',
      click: function(){
        iwin.loadFile('interactive.html');
      }
    },
    {
      label: 'Notebooks',
      click: function(){
        iwin.loadFile('notebooks.html')
      }
    }
  ]
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
  globalShortcut.register('CommandOrControl+Shift+i', () => {
  iwin.toggleDevTools();
  });
  globalShortcut.register('CommandOrControl+r', () => {
  iwin.reload();
  });
}

app.on('ready', function(){
  const { width, height } = electron.screen.getPrimaryDisplay().workAreaSize
  currentWindow = createWindow(width,height);
})


// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
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
