System.register(['angular2/core', 'angular2/common', 'angular2/src/facade/lang', './itemtemplate.component'], function(exports_1, context_1) {
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
    var core_1, common_1, lang_1, itemtemplate_component_1, core_2;
    var ItemTemp, ListViewComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (itemtemplate_component_1_1) {
                itemtemplate_component_1 = itemtemplate_component_1_1;
            }],
        execute: function() {
            ItemTemp = (function () {
                function ItemTemp(_viewContainer, _templateRef /*, @Host() private listView: ListViewComponent*/) {
                    this._viewContainer = _viewContainer;
                    this._templateRef = _templateRef;
                    this.exist = null;
                }
                Object.defineProperty(ItemTemp.prototype, "listItem", {
                    set: function (value) {
                        this.value = value;
                        if (lang_1.isBlank(this.exist)) {
                            this._viewContainer.createEmbeddedView(this._templateRef);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                ItemTemp = __decorate([
                    core_2.Directive({
                        selector: "[listItem]",
                        inputs: ['listItem']
                    }), 
                    __metadata('design:paramtypes', [core_2.ViewContainerRef, core_2.TemplateRef])
                ], ItemTemp);
                return ItemTemp;
            }());
            exports_1("ItemTemp", ItemTemp);
            ListViewComponent = (function () {
                function ListViewComponent(_viewContainer) {
                    this._viewContainer = _viewContainer;
                }
                ListViewComponent.prototype.ngAfterViewInit = function () {
                    // viewChild is set
                    var t = 0;
                };
                ListViewComponent.prototype.ngOnInit = function () {
                    var t = 9;
                };
                ListViewComponent.prototype.ngAfterContentInit = function () {
                    var t = 8;
                };
                ListViewComponent.prototype.onClick = function () {
                    var r = 0;
                };
                __decorate([
                    core_1.ContentChild(itemtemplate_component_1.ItemTemplateComponent), 
                    __metadata('design:type', itemtemplate_component_1.ItemTemplateComponent)
                ], ListViewComponent.prototype, "template", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], ListViewComponent.prototype, "Items", void 0);
                ListViewComponent = __decorate([
                    core_1.Component({
                        selector: "list-view",
                        template: "<div *ngFor='#item of Items; #i = index' (click)='onClick()'></div>",
                        directives: [common_1.NgFor, itemtemplate_component_1.ItemTemplateComponent, ItemTemp],
                    }), 
                    __metadata('design:paramtypes', [core_2.ViewContainerRef])
                ], ListViewComponent);
                return ListViewComponent;
            }());
            exports_1("ListViewComponent", ListViewComponent);
        }
    }
});
//# sourceMappingURL=listview.component.js.map