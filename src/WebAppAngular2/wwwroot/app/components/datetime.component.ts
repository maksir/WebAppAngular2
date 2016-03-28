/// <reference path="../../../lib/typings/jquery/jquery.d.ts" />
/// <reference path="../../../lib/typings/bootstrap.v3.datetimepicker/bootstrap.v3.datetimepicker-3.0.0.d.ts" />
import {Component, Input, Output, AfterViewInit, ViewChild, ElementRef, OnChanges, EventEmitter} from 'angular2/core';
import {SimpleChange} from 'angular2/src/core/change_detection/change_detection_util';

@Component({
	selector: 'date-time',
	template: `
		<div #group class='input-group date'>
			<input #input type='text' class="form-control" />
			<span class="input-group-addon">
				<span class="fa fa-calendar"></span>
			</span>
		</div>`
})
export class DateTimeComponent implements AfterViewInit {

	@ViewChild('group') group: ElementRef;
	@ViewChild('input') input: ElementRef;
	@Input() value: string;
	@Input() options: any;
	@Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

	private _group: JQuery;
	private _input: JQuery;

	ngAfterViewInit() {

		this._input = $(this.input.nativeElement);
		this._group = $(this.group.nativeElement);
		this._group.datetimepicker(this.options);

		if (this.value) {
			this._group.data('DateTimePicker').setDate(this.value);
		}
		this._group.on('change', this.onValueChange.bind(this));
	}

	ngOnChanges(changes: { [key: string]: SimpleChange; }) {

		if (changes['value']) {
			var val = changes['value'].currentValue;
			if (this._group) {
				this._group.data('DateTimePicker').setDate(val);
			}
		}
	}

	onValueChange($event) {
		this.valueChange.emit(this._input.val());
	}
}