import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MasterService } from '../../services/master-service'; 
import { EnquiryModel } from '../../model/class/Enquiry.Model';
import { ICategory, IStatus } from '../../model/interface/Master.model';
import { Observable, Subscription } from 'rxjs';
import { CommonImports } from '../../Global.constant';

@Component({
  selector: 'app-submit-enquiry',
  imports: [CommonImports],
  templateUrl: './submit-enquiry.html',
  styleUrl: './submit-enquiry.css'
})
export class SubmitEnquiry implements OnInit, OnDestroy {

  masterService = inject(MasterService);
  //statusList: IStatus[] = [];
  //categoryList: ICategory[] = [];

  $statsuList: Observable<IStatus[]> = new Observable<IStatus[]>;
  $categoryList: Observable<ICategory[]> = new Observable<ICategory[]>;

  newEnquieyObj: EnquiryModel =  new EnquiryModel();

  subscription!: Subscription;

  constructor() {
    this.$categoryList = this.masterService.getAllCategory();
    this.$statsuList = this.masterService.getAllStatus();
  }

  ngOnInit(): void {
   // this.getStatus();
    //this.getCategiry()
  }

  // getStatus() {
  //   this.masterService.getAllStatus().subscribe({
  //     next: (result: any) => {
  //       this.statusList = result.data;
  //     }
  //   })
  // }

  // getCategiry() {
  //   this.masterService.getAllCategory().subscribe({
  //     next: (result: any) => {
  //       this.categoryList = result.data;
  //     }
  //   })
  // }

  onSaveEnquiry() {
    this.newEnquieyObj.statusId = '1';
    this.subscription = this.masterService.saveNewEnquiry(this.newEnquieyObj).subscribe({
      next:(result:any)=>{
        alert("Enquiry Submited Success")
      },
      error:(error:any)=>{
        alert("Errro From API")
      }
    })

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
