import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Package } from 'src/app/Models/package.model';
import { PackagesService } from 'src/app/Services/packages.service';

@Component({
  selector: 'app-add-package',
  templateUrl: './add-package.component.html',
  styleUrls: ['./add-package.component.css']
})
export class AddPackageComponent implements OnInit {

  AddPackageRequest : Package ={
    packageId: 0,
    packageName: '',
    packagePrice: 0,
    packageDisPrice: 0,
    destination: '',
    duration: '',
    personCount: 0,
    packageDetails: '',
  }

  constructor (private packageService : PackagesService,private router : Router){ }

  ngOnInit(): void {
  }

  AddPackage()
  {
    this.packageService.AddPackage(this.AddPackageRequest)
    .subscribe({
      next:()=>{
        this.router.navigate(['Admin'])
      }
    });
  }
}
