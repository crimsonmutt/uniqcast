import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Token} from "./app.component"

@Injectable()
export class ServerService {
    constructor(private _http: Http) { }

    login(obj) {
        var url = "http://176.31.182.158:3001/auth/local";
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var options = new RequestOptions({ headers: headers, });
        return this._http.post(url, obj, options)
            .map(res => res.json())
            .catch(e => Observable.throw(e.status));
    }

    getData(s){
        var url;
        s == 0 ? url = "http://176.31.182.158:3001/packages" : url = "http://176.31.182.158:3001/channels";
        var headers = new Headers({ 'Content-Type': 'application/json', Authorization: "Bearer " + Token.jwt });
        var options = new RequestOptions({ headers: headers, });
        return this._http.get(url, options)
            .map(res => res.json())
            .catch(e => Observable.throw(e.status));
    }

    addData(s, obj){
        var url;
        s == 0 ? url = "http://176.31.182.158:3001/packages" : url = "http://176.31.182.158:3001/channels";
        var headers = new Headers({ 'Content-Type': 'application/json', Authorization: "Bearer " + Token.jwt });
        var options = new RequestOptions({ headers: headers, });
        return this._http.post(url, obj, options)
            .map(res => res.json())
            .catch(e => Observable.throw(e.status));
    }

    editData(s, obj, id){
        var url;
        s == 0 ? url = "http://176.31.182.158:3001/packages/" + id : url = "http://176.31.182.158:3001/channels/" + id;
        var headers = new Headers({ 'Content-Type': 'application/json', Authorization: "Bearer " + Token.jwt });
        var options = new RequestOptions({ headers: headers, });
        return this._http.put(url, obj, options)
            .map(res => res.json())
            .catch(e => Observable.throw(e.status));
    }

    deleteData(s, obj, id){
        var url;
        s == 0 ? url = "http://176.31.182.158:3001/packages/"  + id : url = "http://176.31.182.158:3001/channels/" + id;
        var headers = new Headers({ 'Content-Type': 'application/json', Authorization: "Bearer " + Token.jwt });
        var options = new RequestOptions({ headers: headers, });
        return this._http.delete(url, options)
            .map(res => res.json())
            .catch(e => Observable.throw(e.status));
    }
} 