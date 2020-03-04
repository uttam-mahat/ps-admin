import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';

@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.scss']
})
export class ProductsAddComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    /* image upload file name display in label */
    // $(".custom-file-input.homepageSlider").on("change", function () {
    //   var fileName = $(this).val().split("\\").pop();
    //   $(this).siblings(".custom-file-label.homepageSlider").addClass("selected").html(fileName);
    // });
  }

}
