import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Package } from '../Models/package.model';

@Injectable({
  providedIn: 'root'
})
export class PackagesService {
  
  baseApiUrl : string = environment.baseApiUrl;
  
  constructor(private http:HttpClient){ }

  GetAllPackages() :Observable<Package[]>
  {
    return this.http.get<Package[]>(this.baseApiUrl + '/api/Package/GetAllPackages');
  }
  
  AddPackage(AddPackageRequest: Package) : Observable<any> 
  {
    AddPackageRequest.packageId=0;
    return this.http.post(this.baseApiUrl + '/api/Package/Add_Package',AddPackageRequest,{responseType:'text'});
  }

  ViewPackage(id : number) : Observable<Package>
  {
    return this.http.get<Package>(this.baseApiUrl + '/api/Package/View_Package/'+ id);
  }

  EditPackage(id : number , EditPackageRequest : Package) : Observable<any>
  {
    return this.http.put(this.baseApiUrl + '/api/Package/Edit_Package/'+ id,EditPackageRequest,{responseType:'text'});
  }

  DeletePackage(id : number) : Observable<any>
  {
    return this.http.delete(this.baseApiUrl + '/api/Package/Delete_Package/'+ id,{responseType:'text'});
  }
}
