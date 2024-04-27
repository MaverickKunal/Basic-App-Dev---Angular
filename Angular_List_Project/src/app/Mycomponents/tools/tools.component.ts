import { Component, OnInit } from '@angular/core';
import {Tool} from "../../Tool";

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit{
  localstg: string;
  tools:Tool[];
  constructor(){
    this.localstg = localStorage.getItem("tools");
    if(this.localstg == null){
      this.tools = [
      //{
      //   sno:1,
      //   title : "Title 1",
      //   des : "Description",
      //   active : true
      // },
      // {
      //   sno:2,
      //   title : "Title 2",
      //   des : "Description",
      //   active : true
      // },
      // {
      //   sno:3,
      //   title : "Title 3",
      //   des : "Description",
      //   active : true
      // }
      ];
    } 
    else{
      this.tools = JSON.parse(this.localstg);
    }
  }
  ngOnInit(): void {

  }

  deletetool(tool:Tool){
    console.log(tool);
    const index = this.tools.indexOf(tool);
    this.tools.splice(index,1);
    localStorage.setItem("tools",JSON.stringify(this.tools));
  }

  addtool(tool:Tool){
    console.log(tool);
    this.tools.push(tool);
    localStorage.setItem("tools",JSON.stringify(this.tools));
  }

  toggletool(tool:Tool){
    console.log(tool);
    const index = this.tools.indexOf(tool);
    this.tools[index].active = !    this.tools[index].active;
    localStorage.setItem("tools",JSON.stringify(this.tools));
  }
}
