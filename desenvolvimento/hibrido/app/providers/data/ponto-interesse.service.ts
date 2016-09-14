import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Observable } from 'rxjs/Observable';

import { FirebaseAuthService } from '../auth';
import {
  FIREBASE_CONFIG,
  FirebaseConfig,
  PONTO_INTERESSE_URL,
  IPontoInteresse
} from '../../pages/shared';

@Injectable()
export class PontoInteresseService {

  list: FirebaseListObservable<IPontoInteresse[]>;

  constructor(
    public _af: AngularFire,
    public _auth: FirebaseAuthService,
    public _http: Http,
    @Inject(FIREBASE_CONFIG) public _firebaseConfig: FirebaseConfig) {
    this.list = _af.database.list(`${_firebaseConfig.ponto_interesse}/${this._auth.uid || this._auth.userInfo.uid}`);
  }

  create(pontoInteresse: IPontoInteresse): any {
    // console.log('create: ' + JSON.stringify(pontoInteresse));
    return this.list.push(pontoInteresse).key;
  }

  remove(pontoInteresse: string): firebase.Promise<any> {
    return this.list.remove(pontoInteresse);
  }

  update(pontoInteresse: IPontoInteresse, changes: any): firebase.Promise<any> {
    // console.log('update:[pontoInteresse] ' + JSON.stringify(pontoInteresse) + ' changes: ' + JSON.stringify(changes));
    return this.list.update(pontoInteresse.$key, changes);
  }

  setRota(key: string, changes: any): firebase.Promise<any> {
    return this._af.database.object(`${this._firebaseConfig.ponto_interesse}/${key}/${this._firebaseConfig.rota}/${this._auth.uid || this._auth.userInfo.uid}`).update(changes);
  }

  getMock(): Observable<IPontoInteresse[]> {
    let data = this._http.get(PONTO_INTERESSE_URL);
    return data.map((response: Response) => <IPontoInteresse[]>response.json());
  }

}
