import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Tool } from 'src/app/Tool';

@Component({
  selector: 'app-add-tools',
  templateUrl: './add-tools.component.html',
  styleUrls: ['./add-tools.component.css']
})
export class AddToolsComponent implements OnInit{
  title: string;
  des: string;
  @Output() toolAdd : EventEmitter<Tool> = new EventEmitter();

  ngOnInit(): void {

  }
  Onsubmit(){
    const tool = {
      sno: 8,
      title: this.title,
      des: this.des,
      active: true
    }
    this.toolAdd.emit(tool);
  }
}
