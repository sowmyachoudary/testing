import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    eggqty:number=7;
	eggprice:number=5;
	bookqty:number=4;
	bookprice:number=10;
	penqty:number=3;
	penprice:number=2;
	pencilqty:number=9;
	pencilprice:number=1;
	eggqtydisabled:boolean=true;
	bookqtydisabled:boolean=true;
	penqtydisabled:boolean=true;
	pencilqtydisabled:boolean=true;
	
	totalamount=0;
	
	constructor(){
		this.computeprice();
		
	}
	
	computeprice(){
	this.totalamount=	this.eggqty*this.eggprice+
		this.bookqty*this.bookprice+
		this.penprice*this.penqty+
		this.pencilqty*this.pencilprice
	}
	
	
}
