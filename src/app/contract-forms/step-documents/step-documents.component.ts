import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'step-documents',
  templateUrl: './step-documents.component.html',
  styleUrls: ['./step-documents.component.less']
})
export class StepDocumentsComponent implements OnInit {

  tosCheck: boolean;
  securityCheck: boolean;
  tomsCheck: boolean;
  telehouseCheck: boolean;

  constructor() { 
    this.tosCheck = false;
    this.securityCheck = false;
    this.tomsCheck = false;
    this.telehouseCheck = false;
  }

  ngOnInit(): void {

  }

}
