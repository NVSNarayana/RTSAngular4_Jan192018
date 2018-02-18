import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-model-binding',
  templateUrl: './model-binding.component.html',
  styleUrls: ['./model-binding.component.css']
})
export class ModelBindingComponent implements OnInit {
  name: string = "RTS";
  qualification:string="";
  isManager:boolean=false;
  constructor() { }

  ngOnInit() {
  }

}
