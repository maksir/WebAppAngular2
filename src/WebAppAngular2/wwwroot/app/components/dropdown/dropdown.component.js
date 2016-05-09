System.register(['angular2/core', "angular2/common"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1;
    var Item, DropDownComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            Item = (function () {
                function Item(value, text) {
                    this.value = value;
                    this.text = text;
                }
                return Item;
            }());
            exports_1("Item", Item);
            DropDownComponent = (function () {
                function DropDownComponent() {
                    this.placeholder = 'Значение не выбрано...';
                    this.showDropDown = false;
                    this.searchValue = '';
                    this.doEmit = false;
                    this.items = [];
                    this.valueChange = new core_1.EventEmitter();
                    this.items.push(new Item(1, 'Первый нах'));
                    this.items.push(new Item(2, 'Второй'));
                    this.items.push(new Item(3, 'Третий'));
                    this.items.push(new Item(4, 'Четвертый'));
                    this.items.push(new Item(5, 'Пятый'));
                    this.items.push(new Item(6, 'Шестой'));
                }
                DropDownComponent.prototype.ngAfterContentInit = function () {
                };
                DropDownComponent.prototype.ngAfterViewInit = function () {
                };
                DropDownComponent.prototype.ngAfterViewChecked = function () {
                    //if (this.showDropDown && this.input) {
                    //	this.input.nativeElement.focus(true);
                    //}		
                };
                DropDownComponent.prototype.ngOnChanges = function (changes) {
                    if (changes['value']) {
                        if (this.doEmit) {
                            this.doEmit = false;
                        }
                        else if (!this.selectedItem || this.selectedItem.value != this.value) {
                            this.selectValue(this.value);
                        }
                    }
                };
                DropDownComponent.prototype.writeValue = function (val) {
                    this.selectValue(val);
                };
                DropDownComponent.prototype.selectValue = function (val) {
                    var f = this.items.filter(function (m) { return m.value === val; });
                    if (f[0]) {
                        this.selectedItem = f[0];
                        this.value = val;
                    }
                };
                DropDownComponent.prototype.showHide = function () {
                    this.showDropDown = !this.showDropDown;
                };
                DropDownComponent.prototype.hideForm = function () {
                    this.showDropDown = false;
                };
                DropDownComponent.prototype.onSelectItem = function (i) {
                    this.selectedItem = i;
                    this.hideForm();
                    this.doEmit = true;
                    this.valueChange.emit(i.value);
                };
                DropDownComponent.prototype.clearSelect = function () {
                    this.selectedItem = null;
                    this.hideForm();
                    this.doEmit = true;
                    this.valueChange.emit(null);
                };
                DropDownComponent.prototype.onKeyDown = function (event) {
                    if (event.keyCode == 27) {
                        this.hideForm();
                    }
                };
                __decorate([
                    core_1.ViewChild('input'), 
                    __metadata('design:type', core_1.ElementRef)
                ], DropDownComponent.prototype, "input", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], DropDownComponent.prototype, "value", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], DropDownComponent.prototype, "valueChange", void 0);
                DropDownComponent = __decorate([
                    core_1.Component({
                        selector: 'dropdown',
                        moduleId: 'app/components/dropdown/dropdown',
                        templateUrl: './dropdown.html',
                        styleUrls: ['./dropdown.css'],
                        directives: [common_1.CORE_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], DropDownComponent);
                return DropDownComponent;
            }());
            exports_1("DropDownComponent", DropDownComponent);
        }
    }
});
//# sourceMappingURL=dropdown.component.js.map