const electron = require('electron');
const {app} = electron;
const {BrowserWindow} = electron;

let win;

function createWindow() {
	win = new BrowserWindow({width: 800, height: 600});
	win.loadURL('file://' + __dirname + '/public/index.html');
	win.webContents.openDevTools();
	win.on('closed', () => {
		win = null;
	});
}

app.on('window-all-closed', () => {
	if(process.platform != 'darwin') {
		app.quit();
	}
});

app.on('ready', createWindow);

app.on('activate', () => {
	if (win === null) {
		createWindow();
	}
});
