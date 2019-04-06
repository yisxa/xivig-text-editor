const { app, remote, Menu, MenuItem } = require('electron');
// const { Menu, MenuItem } = remote

const menu = new Menu();
menu.append(new MenuItem({ label: 'Open', click() { console.log('open clicked') } }))
menu.append(new MenuItem({ type: 'separator' }))
menu.append(new MenuItem({ label: 'Close', click(){
  app.quit();} }))

window.addEventListener('contextmenu', (e) => {
  e.preventDefault()
  menu.popup({ window: remote.getCurrentWindow() })
}, false)
