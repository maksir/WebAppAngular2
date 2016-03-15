import {Component, Input, ElementRef} from 'angular2/core';

@Component({
	selector: 'item-template',
	template: "<ng-content></ng-content>"
})
export class ItemTemplateComponent {
	constructor(public elRef: ElementRef) { }
}