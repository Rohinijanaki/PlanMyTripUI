import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Package } from 'src/app/Models/package.model';
import { PackagesService } from 'src/app/Services/packages.service';
import { idText } from 'typescript';

@Component({
  selector: 'app-edit-package',
  templateUrl: './edit-package.component.html',
  styleUrls: ['./edit-package.component.css']
})
export class EditPackageComponent implements OnInit {

  EditPackageRequest : Package ={
    packageId: 0,
    packageName: '',
    packagePrice: 0,
    packageDisPrice: 0,
    destination: '',
    duration: '',
    personCount: 0,
    packageDetails: '',
  }

  constructor (private route : ActivatedRoute,private packageService : PackagesService,private router : Router){ }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
        const id = Number(params.get('id'));
        if(id)
        {
          this.packageService.ViewPackage(id)
          .subscribe({
            next:(response)=>{
              this.EditPackageRequest = response;
            }
          });
        }
      }
    })
  }

  EditPackages()
  {
    this.packageService.EditPackage(this.EditPackageRequest.packageId,this.EditPackageRequest)
    .subscribe({
      next:()=>{
        this.router.navigate(['Admin']);
      }
    });
  }

  DeletePackages(id : number)
  {
    this.packageService.DeletePackage(id)
    .subscribe({
      next:() =>{
        this.router.navigate(['Admin']);
      }
    });
  }
  
}
