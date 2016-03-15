import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/Rx';

@Injectable()
export class TreeService {
	constructor(public http: Http) {

	}

	GetNodes(parentId: number) {

		return this.http.get("/api/tree/" + parentId.toString())
			.map(res=> res.json());
	}
}