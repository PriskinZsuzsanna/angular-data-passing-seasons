import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() season: string = ""
  @Output() choosen: EventEmitter<void> = new EventEmitter<void> ()

  choose (){
    //console.log(e.target.value)
    this.choosen.emit()
  }
}
