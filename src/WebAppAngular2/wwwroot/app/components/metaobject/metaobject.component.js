System.register(['angular2/core', 'angular2/common', "../../services/metaobject.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, metaobject_service_1;
    var MetaObject;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (metaobject_service_1_1) {
                metaobject_service_1 = metaobject_service_1_1;
            }],
        execute: function() {
            MetaObject = (function () {
                function MetaObject(_moService) {
                    this._moService = _moService;
                    this.rootList = [];
                    this.childList = [];
                    this.selectedId = -1;
                    this.selectedTreeId = -1;
                }
                MetaObject.prototype.ngOnInit = function () {
                    var _this = this;
                    this._moService.getMetaObjects(0)
                        .subscribe(function (mos) { return _this.rootList = mos; }, function (error) { return console.log(error); });
                };
                MetaObject.prototype.onTreeSelect = function (Id) {
                    var _this = this;
                    this.selectedTreeId = Id;
                    this._moService.getMetaObjects(Id)
                        .subscribe(function (mos) { return _this.childList = mos; }, function (error) { return console.log(error); });
                };
                MetaObject.prototype.onSelect = function (Id) {
                    this.selectedId = Id;
                };
                MetaObject = __decorate([
                    core_1.Component({
                        templateUrl: "./app/components/metaobject/default.html",
                        directives: [common_1.NgClass],
                        providers: [metaobject_service_1.MetaObjectService],
                        styleUrls: ["./css/tree.css"]
                    }), 
                    __metadata('design:paramtypes', [metaobject_service_1.MetaObjectService])
                ], MetaObject);
                return MetaObject;
            })();
            exports_1("MetaObject", MetaObject);
        }
    }
});
//# sourceMappingURL=metaobject.component.js.map