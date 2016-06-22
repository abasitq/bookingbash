import { Component, ElementRef, OnInit } from '@angular/core';
import {HeaderComponent} from './header-component.component';
import { WikipediaService } from './wikisearch.service';
import { MapToIterable } from './mapToIterable.pipe';

@Component({
    selector: 'autocomplete',
    host: {
        '(document:click)': 'handleClick($event)',
    },
    template: `
              <input id="country" class="form-control" type="text" [(ngModel)]=query (keyup)=filter()>
            <div class="search-result" *ngIf="filteredList.length > 0">
                <ul *ngFor="let item of filteredList" >
                    <li >
                        <a href = "">{{item}}</a>
                    </li>
                </ul>
            </div>	
        `,
        pipes: [MapToIterable],
        providers: [WikipediaService]
})

export class AutocompleteComponent implements OnInit{
    public query = '';
    public countries = [];
    public in_countries = [];
    public filteredList = [];
    public elementRef;
    gigsearchs: any;
 
    constructor(myElement: ElementRef, private wikipediaService: WikipediaService) {
        this.elementRef = myElement;
    }
    getGigsearch(){
    this.wikipediaService.getGigsearch().subscribe(
      gigsearchs => {
        //console.log('Custom: ' + JSON.stringify(gigsearchs));
        this.gigsearchs =JSON.stringify(gigsearchs);
        this.in_countries = JSON.parse(this.gigsearchs);
        for (var j = 0; j < 100; j++) {
        var element = this.in_countries[j].title;
        if (element == undefined){
            break;
        }
        this.countries.push(element);
      }
    console.log("this " + this.in_countries[0].length);
      });
  }
ngOnInit(){
    this.getGigsearch();
  }
    filter() {
    if (this.query !== ""){
        this.filteredList = this.countries.filter(function(el){
            return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
        }.bind(this));
    }else{
        this.filteredList = [];
    }
}
 
select(item){
    this.query = item;
    this.filteredList = [];
}

handleClick(event){
   var clickedComponent = event.target;
   var inside = false;
   do {
       if (clickedComponent === this.elementRef.nativeElement) {
           inside = true;
       }
      clickedComponent = clickedComponent.parentNode;
   } while (clickedComponent);
    if(!inside){
        this.filteredList = [];
    }
}
}