import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var documentReady: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
    documentReady();
  }

  ngAfterViewInit() {
    
  }

}
