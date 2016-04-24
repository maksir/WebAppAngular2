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
    var MyInputComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            //const CUSTOM_VALUE_ACCESSOR = new Provider(
            //	NG_VALUE_ACCESSOR, { useExisting: forwardRef(() => MyInputComponent), multi: true });
            MyInputComponent = (function () {
                function MyInputComponent() {
                    this._value = ' ';
                    //constructor(private cd: NgControl) {
                    //	cd.valueAccessor = this;
                    //}
                    // ControlValueAccessor
                    this.onChange = function (_) { };
                    this.onTouched = function () { };
                }
                MyInputComponent.prototype.writeValue = function (value) {
                    console.log('writeValue');
                    this._value = value;
                };
                MyInputComponent.prototype.registerOnChange = function (fn) {
                    console.log('registerOnChange');
                    this.onChange = fn;
                };
                MyInputComponent.prototype.registerOnTouched = function (fn) {
                    this.onTouched = fn;
                };
                MyInputComponent = __decorate([
                    core_1.Component({
                        selector: 'my-input',
                        template: '<strong>{{_value}}</strong>',
                        host: { '(input)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
                        providers: [core_1.provide(common_1.NG_VALUE_ACCESSOR, { useClass: MyInputComponent, multi: true })]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyInputComponent);
                return MyInputComponent;
            }());
            exports_1("MyInputComponent", MyInputComponent);
        }
    }
});
//# sourceMappingURL=myInput.component.js.map