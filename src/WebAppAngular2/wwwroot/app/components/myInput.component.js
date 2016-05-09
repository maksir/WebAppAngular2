System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var Item, MyInputComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            //const CUSTOM_VALUE_ACCESSOR = new Provider(
            //	NG_VALUE_ACCESSOR, { useExisting: forwardRef(() => MyInputComponent), multi: true });
            Item = (function () {
                function Item() {
                }
                return Item;
            }());
            exports_1("Item", Item);
            MyInputComponent = (function () {
                function MyInputComponent() {
                    this.placeholder = 'Значение не выбрано';
                }
                MyInputComponent = __decorate([
                    core_1.Component({
                        selector: 'my-input',
                        template: "<span class=\"form-control\">\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E...\n</span>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyInputComponent);
                return MyInputComponent;
            }());
            exports_1("MyInputComponent", MyInputComponent);
        }
    }
});
//# sourceMappingURL=MyInput.component.js.map