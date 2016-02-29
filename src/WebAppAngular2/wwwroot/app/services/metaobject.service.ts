import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import 'rxjs/Rx';

@Injectable()
export class MetaObjectService {

	constructor(private _http: Http) { }

	getMetaObjects(parent: number) {

		let ret = this._http.get("/api/MetaObject/" + parent.toString()).map(res=> res.json());
			
		return ret;
	}
}