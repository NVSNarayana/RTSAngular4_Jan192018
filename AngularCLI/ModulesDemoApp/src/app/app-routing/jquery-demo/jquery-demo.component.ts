import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-jquery-demo',
  templateUrl: './jquery-demo.component.html',
  styleUrls: ['./jquery-demo.component.css']
})
export class JqueryDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $("#btn1").click(function () {
      $("#tbx1").val("From button1");
    });
    $("#btn2").click(function () {
      console.log($("#tbx1").val());
    });

  }

}
