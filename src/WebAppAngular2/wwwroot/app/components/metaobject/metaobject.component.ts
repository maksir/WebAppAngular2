import { Component, OnInit } from 'angular2/core';
import {NgClass} from 'angular2/common';
import {MetaObjectService} from "../../services/metaobject.service";

@Component({
	templateUrl: "./app/components/metaobject/default.html",
	directives: [NgClass],
	providers: [MetaObjectService],
	styleUrls: ["./css/tree.css"]
})
export class MetaObject implements OnInit {

	rootList: Array<any> = [];
	childList: Array<any> = [];
	selectedId: number = -1;
	selectedTreeId: number = -1;


	constructor(private _moService: MetaObjectService) {

    }

	ngOnInit() {
		this._moService.getMetaObjects(0)
			.subscribe(
			mos => this.rootList = mos,
			error => console.log(error)
			);
	}

	onTreeSelect(Id: number) {
		this.selectedTreeId = Id;

		this._moService.getMetaObjects(Id)
			.subscribe(
			mos => this.childList = mos,
			error => console.log(error)
			);
	}

	onSelect(Id: number) {
		this.selectedId = Id;
	}

}