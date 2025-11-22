import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MasterService } from '../../services/master-service';
import { DatePipe } from '@angular/common';
import { Subscription } from 'rxjs';
import { IEnquiry } from '../../model/interface/Master.model';

@Component({
  selector: 'app-enquiry-list',
  imports: [DatePipe],
  templateUrl: './enquiry-list.html',
  styleUrl: './enquiry-list.css'
})
export class EnquiryList implements OnInit, OnDestroy {

  masterSr = inject(MasterService)
  enquiryList: IEnquiry[] = [];
  subscitipn!: Subscription;

  ngOnInit(): void {
    this.getAllEnqueires();
  }

  getAllEnqueires() {
   this.subscitipn = this.masterSr.getAllEnquiry().subscribe({
      next: (result: any) => {
        this.enquiryList = result.data;
      }
    })
  }
  ngOnDestroy(): void {
    this.subscitipn.unsubscribe();
  }
}
