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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, common_1;
    var noop, SELECT2_CONTROL_VALUE_ACCESSOR, Select2Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            noop = function () { };
            SELECT2_CONTROL_VALUE_ACCESSOR = new core_1.Provider(common_1.NG_VALUE_ACCESSOR, {
                useExisting: core_1.forwardRef(function () { return Select2Component; }),
                multi: true
            });
            Select2Component = (function () {
                function Select2Component(ngControl) {
                    this.ngControl = ngControl;
                    //@Input() public value: any;
                    this.valueChange = new core_1.EventEmitter();
                    this._value = '';
                    this._onTouchedCallback = noop;
                    this._onChangeCallback = noop;
                    this.ngControl.valueAccessor = this;
                }
                Object.defineProperty(Select2Component.prototype, "value", {
                    //get accessor
                    get: function () { return this._value; },
                    //set accessor including call the onchange callback
                    set: function (v) {
                        if (v !== this._value) {
                            this._value = v;
                            this._onChangeCallback(v);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                ;
                Select2Component.prototype.onTouched = function () {
                    this._onTouchedCallback();
                };
                //From ControlValueAccessor interface
                Select2Component.prototype.writeValue = function (value) {
                    this._value = value;
                };
                //From ControlValueAccessor interface
                Select2Component.prototype.registerOnChange = function (fn) {
                    this._onChangeCallback = fn;
                };
                //From ControlValueAccessor interface
                Select2Component.prototype.registerOnTouched = function (fn) {
                    this._onTouchedCallback = fn;
                };
                Select2Component.prototype.ngAfterViewInit = function () {
                    this.jqueryElement = $(this.select.nativeElement);
                };
                Select2Component.prototype.ngAfterViewChecked = function () {
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
                };
                Select2Component.prototype.onSelectChange = function ($event) {
                    if (this.jqueryElement) {
                        this.valueChange.emit(this.jqueryElement.val());
                    }
                };
                Select2Component.prototype.ngOnChanges = function (changes) {
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], Select2Component.prototype, "options", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], Select2Component.prototype, "valueChange", void 0);
                __decorate([
                    core_1.ViewChild('select'), 
                    __metadata('design:type', core_1.ElementRef)
                ], Select2Component.prototype, "select", void 0);
                Select2Component = __decorate([
                    core_1.Component({
                        selector: 'select2',
                        template: "\n\t<select #select class=\"form-control\">\n\t\t<option value='-1'>\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E...</option>\n\t\t<option *ngFor=\"#op of options\" [value]=\"op.id\">{{op.name}}</option>\n\t</select>\n\t",
                        directives: [common_1.CORE_DIRECTIVES],
                        providers: [SELECT2_CONTROL_VALUE_ACCESSOR]
                    }),
                    __param(0, core_1.Optional()), 
                    __metadata('design:paramtypes', [common_1.NgControl])
                ], Select2Component);
                return Select2Component;
            }());
            exports_1("Select2Component", Select2Component);
        }
    }
});
//# sourceMappingURL=select2.component.js.map