// angular core
import { Component, ViewChild } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

// RxJS Observable operators
import './pages/shared/rxjs.operators';

// Ionic Core
import { ionicBootstrap, Events, Platform, Nav, MenuController, AlertController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

// Providers / Services
import { FIREBASE_APP_PROVIDERS } from './providers/firebase';
import { AUTH_PROVIDERS, FirebaseAuthService } from './providers/auth';
import {
  DATA_PROVIDERS,
  MenuDataService
} from './providers/data';
import { CONNECTIVITY_PROVIDERS } from './providers/connectivity';

// Shared
import {
  GlobalMethodService,
  GlobalVariableService,
  CONFIG_PROVIDERS,
  IMenu,
  IMenuItem,
  Usuario
} from './pages/shared';

// Views
import { PrincipalPage } from './pages/principal';
import { UsuarioLoginPage } from './pages/usuario';

@Component({
  templateUrl: 'build/app.html'
})
class PartiuApp {

  @ViewChild(Nav) nav: Nav;

  usuario: Usuario = new Usuario({ displayName: 'Nome de usuário', email: 'usuario@usuario.com.br', photoURL: 'img/user-woman.svg' });

  rootPage: any = null;
  menuPages: IMenu[];
  showPage: boolean = false;

  mensagenErro: any = null;

  constructor(
    public _events: Events,
    public _platform: Platform,
    public _menu: MenuController,
    public _globalMethod: GlobalMethodService,
    public _auth: FirebaseAuthService,
    public _menuData: MenuDataService,
    public _alertCtrl: AlertController) {
    this._platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });

    this.menuPages = this._menuData.getMenuPages();

    this._auth.authGuard()
      .subscribe((authenticated: boolean) => { // -- on sucess
        if (authenticated) {
          this.rootPage = PrincipalPage;
        } else {
          this.rootPage = UsuarioLoginPage;
        }
      },
      error => { // -- on error
        console.log('authGuard:[Error] ' + error);
      },
      () => { // -- on completion
        this.showPage = true;
      });
  }

  openPage(page: IMenuItem) {
    if (page.title.indexOf('Logout') !== -1) {
      this.confirmarLogout();
    } else {
      this.nav.push(page.component, { title: page.title });
    }
  }

  confirmarLogout() {
    let confirm = this._alertCtrl.create({
      title: 'Logout',
      message: 'Deseja realmente realizar logout?',
      buttons: [
        {
          text: 'Não',
          handler: () => {
            console.log('Não clicked');
          }
        },
        {
          text: 'Sim',
          handler: () => {
            this.logout();
          }
        }
      ]
    });
    confirm.present();
  }

  private logout(): void {
    this._auth.signOut();
    window.location.reload();
  }

}

ionicBootstrap
  (
  // -- Root Component
  PartiuApp,
  // -- Providers
  [
    HTTP_PROVIDERS,
    AUTH_PROVIDERS,
    CONNECTIVITY_PROVIDERS,
    CONFIG_PROVIDERS,
    DATA_PROVIDERS,
    FIREBASE_APP_PROVIDERS,
    GlobalMethodService,
    GlobalVariableService
  ],
  // -- Config
  {
    prodMode: false,
    backButtonText: 'Voltar',
    monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Juno', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthShortNames: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    dayNames: ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sabado'],
    dayShortNames: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
  });
