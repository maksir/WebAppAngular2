import {Component, Provider, provide, forwardRef} from 'angular2/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, CORE_DIRECTIVES, NgControl} from "angular2/common";

//const CUSTOM_VALUE_ACCESSOR = new Provider(
//	NG_VALUE_ACCESSOR, { useExisting: forwardRef(() => MyInputComponent), multi: true });

export class Item {
	value: any;
	Text: string;
}


@Component({
	selector: 'my-input',
	template: `<span class="form-control">Значение не выбрано...
</span>`
})
export class MyInputComponent {

	private placeholder = 'Значение не выбрано';
	private selectedItem: Item;















	//constructor(private cd: NgControl) {
	//	cd.valueAccessor = this;

	//}

	// ControlValueAccessor
	//onChange = (_) => { };
	//onTouched = () => { };

	//writeValue(value: any): void {
	//	console.log('writeValue');
	//	this._MyValue = value;
	//	this._ttt = 'Изменилось';
	//}

	//registerOnChange(fn: () => any): void {
	//	console.log('registerOnChange');
 //       this.onChange = fn;
 //   }

 //   registerOnTouched(fn: () => any): void {
 //       this.onTouched = fn;
 //   }
}