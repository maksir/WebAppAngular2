/// <reference path="../../../lib/typings/select2/select2.d.ts" />
/// <reference path="../../../lib/typings/jquery/jquery.d.ts" />
import {Component, Input, Output, AfterViewInit, AfterViewChecked, OnChanges, SimpleChange, EventEmitter, ViewChild, ElementRef} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
@Component({
	selector: 'select2',
	template: `
	<select #select class="form-control">
		<option value=''>Значение не выбрано...</option>
		<option *ngFor="#op of options" [value]="op.id">{{op.name}}</option>
	</select>
	`,
	directives: [CORE_DIRECTIVES]
})
export class Select2Component implements AfterViewInit, AfterViewChecked, OnChanges {

	@Input() public options: Array<any>;
	@Input() public value: any;
	@Output() public valueChange: EventEmitter<any> = new EventEmitter<any>();

	@ViewChild('select') private select: ElementRef;
	private jqueryElement: JQuery;
	private inited: boolean;

	ngAfterViewInit() {

		this.jqueryElement = $(this.select.nativeElement);

	}

	ngAfterViewChecked() {
		if (!this.inited && this.select && this.options) {

			this.inited = true;

			this.jqueryElement.select2({
				placeholder: "Значение не выбрано...",
				allowClear: true,
				width: '100%',
				theme: 'classic'
			});

			if (this.value) {
				this.jqueryElement.select2('val', this.value);
			}

			this.jqueryElement.on('change', this.onSelectChange.bind(this));
		}
	}

	onSelectChange($event) {
		if (this.jqueryElement) {
			this.valueChange.emit(this.jqueryElement.val());
		}
	}

	ngOnChanges(changes: { [key: string]: SimpleChange }) {
	}
	
}