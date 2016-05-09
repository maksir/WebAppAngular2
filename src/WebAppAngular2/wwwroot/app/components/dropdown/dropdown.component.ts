import {Component, Input, Output, EventEmitter, OnChanges, SimpleChange, AfterViewInit, AfterViewChecked, ViewChild, ElementRef} from 'angular2/core';
import {CORE_DIRECTIVES} from "angular2/common";
//import {DropdownValueAccessor} from './dropdown.directive';

export class Item {
	constructor(public value:any, public text:string) {
	}
}


@Component({
	selector: 'dropdown',
	moduleId: 'app/components/dropdown/dropdown',
	templateUrl: './dropdown.html',
	styleUrls:['./dropdown.css'],
	directives: [CORE_DIRECTIVES]

})
export class DropDownComponent implements OnChanges, AfterViewInit, AfterViewChecked {

	selectedItem: Item;
	placeholder = 'Значение не выбрано...';
	showDropDown = false;
	searchValue = '';
	doEmit = false;

	items: Item[] = [];

	@ViewChild('input') input: ElementRef;
	@Input() value: any;
	@Output() valueChange: EventEmitter<any> = new EventEmitter<any>();

	constructor() {

		this.items.push(new Item(1, 'Первый нах'));
		this.items.push(new Item(2, 'Второй'));
		this.items.push(new Item(3, 'Третий'));
		this.items.push(new Item(4, 'Четвертый'));
		this.items.push(new Item(5, 'Пятый'));
		this.items.push(new Item(6, 'Шестой'));
	}

	ngAfterContentInit() {
	}
	ngAfterViewInit() {
	}
	ngAfterViewChecked() {
		//if (this.showDropDown && this.input) {
		//	this.input.nativeElement.focus(true);
		//}		
	}
    ngOnChanges(changes: {[key: string]: SimpleChange;}): any {

		if (changes['value']) {
			if (this.doEmit) {
				this.doEmit = false;
			}
			else if (!this.selectedItem || this.selectedItem.value != this.value) {
				this.selectValue(this.value);
			}
		}
	}

	writeValue(val: any) {
		this.selectValue(val);
	}

	private selectValue(val: any) {
		let f = this.items.filter(m => m.value === val);
		if (f[0]) {
			this.selectedItem = f[0];
			this.value = val;
		}
	}

	private showHide() {
		this.showDropDown = !this.showDropDown;
	}
	private hideForm() {
		this.showDropDown = false;
	}

	private onSelectItem(i: Item) {
		this.selectedItem = i;
		this.hideForm();
		this.doEmit = true;
		this.valueChange.emit(i.value);
	}

	private clearSelect() {
		this.selectedItem = null;
		this.hideForm();
		this.doEmit = true;
		this.valueChange.emit(null);
	}

	private onKeyDown(event: KeyboardEvent) {

		if (event.keyCode == 27) {
			this.hideForm();
		}
	}
}