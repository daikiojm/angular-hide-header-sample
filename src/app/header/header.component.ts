import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private ofset: number = 60;
  private startPos: number = 0;
  private headerPos: number = 0;


  constructor(@Inject(DOCUMENT) private document: Document) { }
  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    let currentPos = this.document.body.scrollTop;
    if(currentPos > this.startPos) {
      if(this.document.body.scrollTop >= this.ofset) {
        this.headerPos = -this.ofset;
      }
    } else {
      this.headerPos = 0;
    }
    this.startPos = currentPos;
  }

}
