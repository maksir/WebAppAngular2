import {Component, Host, Query, Inject, ElementRef, Input, Output, EventEmitter, ComponentMetadata, ContentChild, ViewChildren, QueryList, AfterContentInit, AfterViewInit, OnInit } from 'angular2/core';
import {NgFor, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/common';
import {isBlank} from 'angular2/src/facade/lang';
import {ItemTemplateComponent} from './itemtemplate.component'

import {DoCheck, Directive, TemplateRef, ViewContainerRef} from 'angular2/core';
@Directive({
	selector: "[listItem]",
	inputs: ['listItem']
})
export class ItemTemp {

	private exist: boolean = null;
	private value: any;

	constructor(private _viewContainer: ViewContainerRef, private _templateRef: TemplateRef/*, @Host() private listView: ListViewComponent*/) {
	}

	set listItem(value: any) {
		this.value = value;

		if (isBlank(this.exist)) {
			this._viewContainer.createEmbeddedView(this._templateRef);
		}
	}
}


@Component({
	selector: "list-view",
	template: "<div *ngFor='#item of Items; #i = index' (click)='onClick()'></div>",
	directives: [NgFor, ItemTemplateComponent, ItemTemp],
	//providers: [] //ItemTemplateComponent

})
export class ListViewComponent<> implements AfterContentInit, AfterViewInit, OnInit {

	@ContentChild(ItemTemplateComponent) template: ItemTemplateComponent;

	
	//@ViewChildren(ItemTemplateComponent) viewChild: QueryList<ItemTemplateComponent>;
	@Input() Items: Array<any>;

	_viewContainer: ViewContainerRef;

	constructor(_viewContainer: ViewContainerRef) {
		this._viewContainer = _viewContainer;
	}

	ngAfterViewInit() {
		// viewChild is set
		var t = 0;
	}

	ngOnInit() {
		var t = 9;
	}

	ngAfterContentInit() {
		var t = 8;
	}

	onClick() {
		var r = 0;
	}
}