import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us-add-edit',
  templateUrl: './about-us-add-edit.component.html',
  styleUrls: ['./about-us-add-edit.component.scss']
})
export class AboutUsAddEditComponent implements OnInit {

  ckEditorText: any;

  public editorValue: string = '';

  constructor() { }

  ngOnInit() {
  }

}
