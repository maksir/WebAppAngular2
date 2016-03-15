import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/Rx';

@Injectable()
export class MetaObjectService {

	constructor(public http: Http) {

	}

	GetList(parent: number) {
		return this.http.get("/api/metaobject/" + parent.toString())
			.map(res=> res.json());
	}

}