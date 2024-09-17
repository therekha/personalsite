import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { fromEvent, } from 'rxjs';

@Component({
  selector: 'app-portrait',
  templateUrl: './portrait.component.html',
  styleUrls: ['./portrait.component.scss']
})
export class PortraitComponent implements OnInit{
  rect = new DOMRect();
  image = "assets/portraits/ups.svg";
  loaded = 0; //see getBox() - so we only need to get box once

  constructor(private el: ElementRef, private render: Renderer2){}
  ngOnInit(){
    // this.render.listen('window', 'load', () => {
    //   this.rect = this.el.nativeElement.getBoundingClientRect();
    //   console.log(this.rect);
    // })
  }

  getBox(){
    if(!this.loaded){ //so we only need to get box once
      this.rect = this.el.nativeElement.getBoundingClientRect();
    }
  }

  @HostListener('document:mousemove', ['$event']) onMouseMove(event: MouseEvent) {
    const base = "assets/portraits/"
    if(event.clientY > this.rect.top &&
      event.clientY < this.rect.bottom &&
      event.clientX > this.rect.left &&
      event.clientX < this.rect.right
    )
    {
      this.image = base + "straight.jpg";
    }
    else if(event.clientY < this.rect.top){
      if(event.clientX < this.rect.left){
        this.image = base + "upleft.jpg"; //NOTE: Users will rarely be in corners - just move the eyess
      }
      else if(event.clientX > this.rect.right){
        this.image = base + "upright.jpg";
      }
      else{
        this.image = base + "up.jpg";
      }
    }
    else if(event.clientY > this.rect.bottom){
      if(event.clientX < this.rect.left){
        this.image = base + "downleft.jpg";
      }
      else if(event.clientX > this.rect.right){
        this.image = base + "downright.jpg";
      }
      else{
        this.image = base + "down.jpg";
      }
    }
    else{
      if(event.clientX < this.rect.left){
        this.image = base + "left.jpg";
      }
      else if(event.clientX > this.rect.left){
        this.image = base + "right.jpg";
      }
    }
  }
}
