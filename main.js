const { app, BrowserWindow, nativeTheme, Menu, shell, Tray, clipboard } = require('electron')




//Janela principal da aplicação_________________________________
const createWindow = () => {

  nativeTheme.themeSource = 'dark'
  const win = new BrowserWindow({

    // frame: false
    width: 1280,
    height: 720,
    webPreferences: {
      nodeIntegration: true
    },
    // transparent: true ,
    //titleBarStyle: 'hidden',
    //autoHideMenuBar:true,
    //resizable: false,
    icon: "./src/public/img/amz.png",
  })

  Menu.setApplicationMenu(Menu.buildFromTemplate(templeite));
  // win.loadFile('./src/view/index.html');
  // win.loadURL('https://www.facebook.com/PCCesarBrito/');
  win.loadURL('https://www.google.com');


}




///Janela play de musica__________________________________________________________

const playMusic = () => {

  const play = new BrowserWindow({
    width: 450,
    height: 680,
    resizable: false,
    autoHideMenuBar: true,
    icon: "./src/public/img/play.png",

  })

  // play.loadFile('./src/view/play.html')
  play.loadURL('https://bejewelled-toffee-334bfb.netlify.app/');
}

//página do face Book----------------------------------------------------------------
const faceBooK = () => {

  const face = new BrowserWindow({
    width: 1280,
    height: 720,
    //resizable: false,
    autoHideMenuBar: true,
    icon: "./src/public/img/play.png",

  })
  Menu.setApplicationMenu(Menu.buildFromTemplate(templeite));
  // play.loadFile('./src/view/play.html')
  face.loadURL('https://www.facebook.com');

}


//página do youTube----------------------------------------------------------------

const youtub = () => {

  const you = new BrowserWindow({
    width: 1280,
    height: 720,
    //resizable: false,
    autoHideMenuBar: true,
    icon: "./src/public/img/play.png",

  })

  // play.loadFile('./src/view/play.html')
  you.loadURL('https://www.youtube.com/');

}


//Curso de Ingles----------------------------------------------------------------

const curso = () => {

  const cur = new BrowserWindow({
    width: 1280,
    height: 720,
    //resizable: false,
    autoHideMenuBar: true,
    icon: "./src/public/img/play.png",

  })

  // play.loadFile('./src/view/play.html')
  cur.loadURL('https://ingles-com-a-biblia-e-louvores-ibl.memberkit.com.br/');

}


//Curso de Ingles----------------------------------------------------------------

const meiro = () => {

  const mei = new BrowserWindow({
    width: 1280,
    height: 720,
    //resizable: false,
    autoHideMenuBar: true,
    icon: "./src/public/img/play.png",

  })

  // play.loadFile('./src/view/play.html')
  mei.loadURL('https://curso.mairovergara.com/dashboard');

}


//Curso de Ingles- YpuTube---------------------------------------------------------------

const english = () => {

  const eng = new BrowserWindow({
    width: 1280,
    height: 720,
    //resizable: false,
    autoHideMenuBar: true,
    icon: "./src/public/img/play.png",

  })


  // play.loadFile('./src/view/play.html')
  eng.loadURL('https://www.youtube.com/watch?v=2jX0eJ13ezw&list=PLwXhg5fc7iVShymSxULvHvpbyQFrLXcDB');

}


//Curso Canal You tube estudo  de Python---------------------------------------------------------------

const Python = () => {

  const py = new BrowserWindow({
    width: 1280,
    height: 720,
    //resizable: false,
    autoHideMenuBar: true,
    icon: "./src/public/img/play.png",

  })


  // play.loadFile('./src/view/play.html')
  py.loadURL('https://www.youtube.com/@setprogramacao/playlists');

}


//Curso engenharia reversaa---------------------------------------------------------------

const reversa = () => {

  const rv = new BrowserWindow({
    width: 1280,
    height: 720,
    //resizable: false,
    autoHideMenuBar: true,
    icon: "./src/public/img/play.png",

  })


  // play.loadFile('./src/view/play.html')
  rv.loadURL('https://www.youtube.com/watch?v=IkUfXfnnKH4&list=PLIfZMtpPYFP6zLKlnyAeWY1I85VpyshAA');

}


//Curso de Assembly---------------------------------------------------------------

const assembly = () => {

  const acs = new BrowserWindow({
    width: 1280,
    height: 720,
    //resizable: false,
    autoHideMenuBar: true,
    icon: "./src/public/img/play.png",

  })


  // play.loadFile('./src/view/play.html')
  acs.loadURL('https://www.youtube.com/watch?v=0lfikxs967c&list=PLxTkH01AauxRm0LFLlOA9RR5O6hBLqBtC');

}




app.whenReady().then(() => {
  createWindow()
  //playMusic()
})




//templeite menu janela Principal-------------------------------

const templeite = [

  {
    label: 'Arquivos',
    submenu: [{
      label: 'Sair',
      click: () => app.quit(),
      accelerator: 'Alt+F4'
    }]
  },

  {
    label: 'Exibir',
    submenu: [{
      label: 'recarregar',
      role: 'reload'
    },
    {
      label: 'Ferramenta do desemvolvedor',
      role: 'toggleDevTools'
    },
    {
      type: 'separator'
    },
    {
      label: 'Aplicaar zoo',
      role: 'zoomIn'
    },
    {
      label: 'Reduzir',
      role: 'zoomOut'
    },
    {
      label: 'restaurar zoom padrão',
      role: 'resetZoom'
    }
    ]
  },

  {
    label: 'Ajudda',
    submenu: [
      {
        label: 'docs',
        click: () => shell.openExternal('https://www.electronjs.org/pt/docs/latest/README')
      },
      {
        type: 'separator'
      },
      {
        label: 'Play de musica',
        click: () => playMusic()
      },

    ]
  },
  {
    label: 'My Pages',
    submenu: [
      {
        label: 'Face Book',
        click: () => faceBooK(),
      },
      {
        label: 'Home',
        click: () => createWindow()
      },
      {
        label: 'You Tube',
        click: () => youtub(),
      },
      {
        label: 'English with bible',
        click: () => curso()

      },
      {
        label: 'Meiro Veiga',
        click: () => meiro()

      },
      {
        label: 'youTube Englesh',
        click: () => english()

      },
      {
        label: 'Estudo Pyhon',
        click: () => Python()

      },
      {
        label: 'Engenharia Reversa',
        click: () => reversa()

      },

      {
        label: 'Assembly Curso',
        click: () => assembly()

      }
    ]

  }
]


///Para indentar codigp np VsCod atalho Alt + Shift + f
///Atualizar execultável: npm run make



















