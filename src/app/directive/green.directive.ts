import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appGreen]'
})
export class GreenDirective implements OnInit {
  @Input () color:any;

  constructor(
    private elementref:ElementRef,
    private render:Renderer2

  ) { 
   // this.elementref.nativeElement.color="red"
    //this.render.setStyle(this.elementref.nativeElement,'color',"red")
    console.log(this.color)

    this.render.setStyle(this.elementref.nativeElement,this.color,'red')


  }
  ngOnInit()  {
    //this.render.setStyle(this.elementref.nativeElement,"color","red")

    
  }

}
