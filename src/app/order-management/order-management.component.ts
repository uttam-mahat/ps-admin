import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
declare var $;

@Component({
    selector: 'app-order-management',
    templateUrl: './order-management.component.html',
    styleUrls: ['./order-management.component.scss']
})
export class OrderManagement implements OnInit {

    @ViewChild('dataTable') table: ElementRef;
    dataTable: any;

    constructor() { }

    ngOnInit() {

        this.dataTable = $(this.table.nativeElement);
        this.dataTable.dataTable();

        /*
          this.companyService.getCompanies()
           .subscribe((company: Company[]) => {
              this.companies = company;
    
              // You'll have to wait that changeDetection occurs and projects data into
              // the HTML template, you can ask Angular to that for you ;-)
              this.chRef.detectChanges();
    
              // Now you can use jQuery DataTables :
              const table: any = $('datatables');
              this.dataTable = table.DataTable();
           });
        */

        /* image upload file name display in label */
        // $(".custom-file-input.homepageSlider").on("change", function () {
        //   var fileName = $(this).val().split("\\").pop();
        //   $(this).siblings(".custom-file-label.homepageSlider").addClass("selected").html(fileName);
        // });
    }
}
