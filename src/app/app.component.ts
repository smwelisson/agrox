import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Início',
      url: '/tabs/produtos',
      icon: 'contact'
    },
    {
      title: 'Minhas vendas',
      url: '/minhas-vendas',
      icon: 'cash'
    },
    {
      title: 'Minhas compras',
      url: '/minhas-compras',
      icon: 'cart'
    },
    {
      title: 'Alterar dados',
      url: '/alterar-dados',
      icon: 'create'
    },
    {
      title: 'Excluir conta',
      url: '/excluir-conta',
      icon: 'trash'
    },
    {
      title: 'Sobre',
      url: '/sobre',
      icon: 'quote'
    },
    {
      title: 'Sair',
      url: '/sair',
      icon: 'log-out'
    }
  ];


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
