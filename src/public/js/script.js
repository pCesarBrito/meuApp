const { ipcRenderer } = require('electron ');

ipcRenderer.on('set-file', function (event, data) {

    ~console.log(data);
});