"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="../../../lib/typings/jquery/jquery.d.ts" />
/// <reference path="../../../lib/typings/bootstrap.v3.datetimepicker/bootstrap.v3.datetimepicker-3.0.0.d.ts" />
var core_1 = require('angular2/core');
var DateTimeComponent = (function () {
    function DateTimeComponent() {
        this.valueChange = new core_1.EventEmitter();
    }
    DateTimeComponent.prototype.ngAfterViewInit = function () {
        this._input = $(this.input.nativeElement);
        this._group = $(this.group.nativeElement);
        this._group.datetimepicker(this.options);
        if (this.value) {
            this._group.data('DateTimePicker').setDate(this.value);
        }
        this._group.on('change', this.onValueChange.bind(this));
    };
    DateTimeComponent.prototype.ngOnChanges = function (changes) {
        if (changes['value']) {
            var val = changes['value'].currentValue;
            if (this._group) {
                this._group.data('DateTimePicker').setDate(val);
            }
        }
    };
    DateTimeComponent.prototype.onValueChange = function ($event) {
        this.valueChange.emit(this._input.val());
    };
    __decorate([
        core_1.ViewChild('group'), 
        __metadata('design:type', core_1.ElementRef)
    ], DateTimeComponent.prototype, "group", void 0);
    __decorate([
        core_1.ViewChild('input'), 
        __metadata('design:type', core_1.ElementRef)
    ], DateTimeComponent.prototype, "input", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DateTimeComponent.prototype, "value", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DateTimeComponent.prototype, "options", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DateTimeComponent.prototype, "valueChange", void 0);
    DateTimeComponent = __decorate([
        core_1.Component({
            selector: 'date-time',
            template: "\n\t\t<div #group class='input-group date'>\n\t\t\t<input #input type='text' class=\"form-control\" />\n\t\t\t<span class=\"input-group-addon\">\n\t\t\t\t<span class=\"fa fa-calendar\"></span>\n\t\t\t</span>\n\t\t</div>"
        }), 
        __metadata('design:paramtypes', [])
    ], DateTimeComponent);
    return DateTimeComponent;
}());
exports.DateTimeComponent = DateTimeComponent;
//# sourceMappingURL=datetime.component.js.map