import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master-service';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-submit-enquiry',
  imports: [FormsModule,NgFor],
  templateUrl: './submit-enquiry.html',
  styleUrl: './submit-enquiry.css'
})
export class SubmitEnquiry implements OnInit {

  masterService = inject(MasterService);
  statusList: any[] = [];
  categoryList: any[] = [];

  newEnquieyObj: any = {
    "enquiryId": 0,
    "customerName": "",
    "customerEmail": "",
    "customerPhone": "",
    "message": "",
    "categoryId": 0,
    "statusId": 0,
    "enquiryType": "",
    "isConverted": false,
    "enquiryDate": "",
    "followUpDate": new Date(),
    "feedback": ""
  }

  ngOnInit(): void {
    this.getStatus();
    this.getCategiry()
  }

  getStatus() {
    this.masterService.getAllStatus().subscribe({
      next: (result: any) => {
        this.statusList = result.data;

      }
    })
  }
  getCategiry() {
    this.masterService.getAllCategory().subscribe({
      next: (result: any) => {
        this.categoryList = result.data;
      }
    })
  }

  onSaveEnquiry() {
    this.masterService.saveNewEnquiry(this.newEnquieyObj).subscribe({
      next:(result:any)=>{
        alert("Enquiry Submited Success")
      },
      error:(error:any)=>{
        alert("Errro From API")
      }
    })
  }
}
