import {Directive, Provider, forwardRef} from 'angular2/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from 'angular2/common';
import {DropDownComponent} from './dropdown.component';

const CUSTOM_VALUE_ACCESSOR = new Provider(
    NG_VALUE_ACCESSOR, { useExisting: forwardRef(() => DropdownValueAccessor), multi: true });


@Directive({
	selector: 'dropdown',
	host: { '(valueChange)': 'onChange($event)' },
	providers: [CUSTOM_VALUE_ACCESSOR]
})
export class DropdownValueAccessor implements ControlValueAccessor {

	onChange = (_) => { };
	onTouched = () => { };

	constructor(private host: DropDownComponent) {

	}

	writeValue(value: any): void {
		this.host.writeValue(value);
	}

	registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
	registerOnTouched(fn: () => void): void { this.onTouched = fn; }
}