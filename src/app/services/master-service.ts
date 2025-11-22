import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { IApiResposneModel } from '../model/interface/Master.model';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }


  // getAllCategory() {
  //   return this.http.get("https://api.freeprojectapi.com/api/Enquiry/get-categories")
  // }
  getAllCategory() {
    return this.http.get<IApiResposneModel>("https://api.freeprojectapi.com/api/Enquiry/get-categories").pipe(
      map((response:IApiResposneModel) => response.data)
    )
  }
  getAllStatus() {
    return this.http.get<IApiResposneModel>("https://api.freeprojectapi.com/api/Enquiry/get-statuses").pipe(
      map((response:IApiResposneModel) => response.data)
    )
  }

  // getAllStatus() {
  //    return this.http.get("https://api.freeprojectapi.com/api/Enquiry/get-statuses")
  // }

  saveNewEnquiry(obj: any) {
    return this.http.post("https://api.freeprojectapi.com/api/Enquiry/create-enquiry", obj)
  }

  getAllEnquiry() {
    return this.http.get("https://api.freeprojectapi.com/api/Enquiry/get-enquiries")
  }
}
