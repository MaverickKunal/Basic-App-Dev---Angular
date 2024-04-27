import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tool } from 'src/app/Tool';

@Component({
  selector: 'app-tools-item',
  templateUrl: './tools-item.component.html',
  styleUrls: ['./tools-item.component.css']
})
export class ToolsItemComponent implements OnInit{

  @Input() tool:Tool;
  @Output() toolDelete : EventEmitter<Tool> = new EventEmitter();
  @Output() toolchecked : EventEmitter<Tool> = new EventEmitter();
  constructor() { }

ngOnInit(): void {
}

//Event Emitter in Angular
onclick(tool:Tool)
{
  this.toolDelete.emit(tool);
  console.log("onclick has been triggerred");
}

onCheckboxclick(tool:Tool)
{
  this.toolchecked.emit(tool);
  console.log("Marked as done has been triggerred");
}
}
