import {Component, Provider, provide, forwardRef} from 'angular2/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, CORE_DIRECTIVES, NgControl} from "angular2/common";

//const CUSTOM_VALUE_ACCESSOR = new Provider(
//	NG_VALUE_ACCESSOR, { useExisting: forwardRef(() => MyInputComponent), multi: true });


@Component({
	selector: 'my-input',
	template: '<strong>{{_value}}</strong>',
	host: { '(input)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
	providers: [provide(NG_VALUE_ACCESSOR, { useClass: MyInputComponent, multi: true })]
})
export class MyInputComponent implements ControlValueAccessor {

	private _value: any;

	//constructor(private cd: NgControl) {
	//	cd.valueAccessor = this;

	//}

	// ControlValueAccessor
	onChange = (_) => { };
	onTouched = () => { };

	writeValue(value: any): void {
		console.log('writeValue');
		this._value = value;
	}

	registerOnChange(fn: () => any): void {
		console.log('registerOnChange');
        this.onChange = fn;
    }

    registerOnTouched(fn: () => any): void {
        this.onTouched = fn;
    }
}