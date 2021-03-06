import { Component }  from '@angular/core';

import { App, NavParams, ViewController } from 'ionic-angular';
import { InAppBrowser }  from 'ionic-native';

@Component({
  templateUrl: 'build/pages/sobre/sobre.component.html',
})
export class SobrePage {

  titulo: string = 'Sobre';

  constructor(
    public _app: App,
    public _navParams: NavParams,
    public _viewCtrl: ViewController) {
  }

  ionViewLoaded() { }

  ionViewWillEnter() { }

  ionViewDidEnter() { }

  ionViewWillLeave() { }

  ionViewDidLeave() { }

  ionViewWillUnload() { }

  ionViewDidUnload() { }

  dismiss() {
    this._viewCtrl.dismiss(this.titulo);
  }

  onEntrarEmContato(): void {
    window.open('mailto:' + 'tour.partiu@gmail.com');
  }

  onAcessaNossaPagina(): void {
      new InAppBrowser(`https://www.facebook.com/tour.partiu`, '_blank');
  }

}
