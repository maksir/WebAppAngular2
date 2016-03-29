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
/// <reference path="../../../lib/typings/select2/select2.d.ts" />
/// <reference path="../../../lib/typings/jquery/jquery.d.ts" />
var core_1 = require('angular2/core');
var common_1 = require('angular2/common');
var Select2Component = (function () {
    function Select2Component() {
        this.valueChange = new core_1.EventEmitter();
    }
    Select2Component.prototype.ngAfterViewInit = function () {
        this.jqueryElement = $(this.select.nativeElement);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], Select2Component.prototype, "options", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Select2Component.prototype, "value", void 0);
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
            template: "\n\t<select #select>\n\t\t\n\t</select>\n\t",
            directives: [common_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], Select2Component);
    return Select2Component;
}());
exports.Select2Component = Select2Component;
//# sourceMappingURL=select2.component.js.map