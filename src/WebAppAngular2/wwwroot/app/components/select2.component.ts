/// <reference path="../../../lib/typings/select2/select2.d.ts" />
/// <reference path="../../../lib/typings/jquery/jquery.d.ts" />
import {Component, Provider, forwardRef, Input, Output, Optional, AfterViewInit, AfterViewChecked, OnChanges, SimpleChange, EventEmitter, ViewChild, ElementRef} from 'angular2/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, CORE_DIRECTIVES, NgControl} from "angular2/common";

const noop = () => { };

const SELECT2_CONTROL_VALUE_ACCESSOR = new Provider(
	NG_VALUE_ACCESSOR, {
		useExisting: forwardRef(() => Select2Component),
		multi: true
	});

@Component({
	selector: 'select2',
	template: `
	<select #select class="form-control">
		<option value='-1'>Значение не выбрано...</option>
		<option *ngFor="#op of options" [value]="op.id">{{op.name}}</option>
	</select>
	`,
	directives: [CORE_DIRECTIVES],
	providers: [SELECT2_CONTROL_VALUE_ACCESSOR]
})
export class Select2Component implements AfterViewInit, AfterViewChecked, OnChanges {

	@Input() public options: Array<any>;
	@Input() public value: any;
	@Output() public valueChange: EventEmitter<any> = new EventEmitter<any>();

	@ViewChild('select') private select: ElementRef;
	private jqueryElement: JQuery;
	private inited: boolean;

	private _value: any = '';
	private _onTouchedCallback: () => void = noop;
	private _onChangeCallback: (_: any) => void = noop;

	//get accessor
  //  get value(): any { return this._value; };

  //  //set accessor including call the onchange callback
  //  set value(v: any) {
		//if (v !== this._value) {
		//	this._value = v;
		//	this._onChangeCallback(v);
		//}
  //  }

	constructor( @Optional() private ngControl: NgControl) {

		//this.ngControl.valueAccessor = this;
		
	}

	onTouched() {
		this._onTouchedCallback();
    }

    //From ControlValueAccessor interface
    writeValue(value: any) {
		this._value = value;
    }

    //From ControlValueAccessor interface
    registerOnChange(fn: any) {
		this._onChangeCallback = fn;
    }

    //From ControlValueAccessor interface
    registerOnTouched(fn: any) {
		this._onTouchedCallback = fn;
    }

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