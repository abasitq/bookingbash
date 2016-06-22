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
var core_1 = require('@angular/core');
var wikisearch_service_1 = require('./wikisearch.service');
var mapToIterable_pipe_1 = require('./mapToIterable.pipe');
var AutocompleteComponent = (function () {
    function AutocompleteComponent(myElement, wikipediaService) {
        this.wikipediaService = wikipediaService;
        this.query = '';
        this.countries = [];
        this.in_countries = [];
        this.filteredList = [];
        this.elementRef = myElement;
    }
    AutocompleteComponent.prototype.getGigsearch = function () {
        var _this = this;
        this.wikipediaService.getGigsearch().subscribe(function (gigsearchs) {
            //console.log('Custom: ' + JSON.stringify(gigsearchs));
            _this.gigsearchs = JSON.stringify(gigsearchs);
            _this.in_countries = JSON.parse(_this.gigsearchs);
            for (var j = 0; j < 100; j++) {
                var element = _this.in_countries[j].title;
                if (element == undefined) {
                    break;
                }
                _this.countries.push(element);
            }
            console.log("this " + _this.in_countries[0].length);
        });
    };
    AutocompleteComponent.prototype.ngOnInit = function () {
        this.getGigsearch();
    };
    AutocompleteComponent.prototype.filter = function () {
        if (this.query !== "") {
            this.filteredList = this.countries.filter(function (el) {
                return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
            }.bind(this));
        }
        else {
            this.filteredList = [];
        }
    };
    AutocompleteComponent.prototype.select = function (item) {
        this.query = item;
        this.filteredList = [];
    };
    AutocompleteComponent.prototype.handleClick = function (event) {
        var clickedComponent = event.target;
        var inside = false;
        do {
            if (clickedComponent === this.elementRef.nativeElement) {
                inside = true;
            }
            clickedComponent = clickedComponent.parentNode;
        } while (clickedComponent);
        if (!inside) {
            this.filteredList = [];
        }
    };
    AutocompleteComponent = __decorate([
        core_1.Component({
            selector: 'autocomplete',
            host: {
                '(document:click)': 'handleClick($event)',
            },
            template: "\n              <input id=\"country\" class=\"form-control\" type=\"text\" [(ngModel)]=query (keyup)=filter()>\n            <div class=\"search-result\" *ngIf=\"filteredList.length > 0\">\n                <ul *ngFor=\"let item of filteredList\" >\n                    <li >\n                        <a href = \"\">{{item}}</a>\n                    </li>\n                </ul>\n            </div>\t\n        ",
            pipes: [mapToIterable_pipe_1.MapToIterable],
            providers: [wikisearch_service_1.WikipediaService]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, wikisearch_service_1.WikipediaService])
    ], AutocompleteComponent);
    return AutocompleteComponent;
}());
exports.AutocompleteComponent = AutocompleteComponent;
//# sourceMappingURL=autocomplete.component.js.map