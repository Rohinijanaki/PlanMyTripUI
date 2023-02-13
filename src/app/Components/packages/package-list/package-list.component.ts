import { Component, OnInit } from '@angular/core';
import { Package } from 'src/app/Models/package.model';
import { PackagesService } from 'src/app/Services/packages.service';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.css']
})
export class PackageListComponent implements OnInit {

  packages : Package [] =[];

  constructor(private packageServices : PackagesService){}

  ngOnInit() : void
  {
    this.packageServices.GetAllPackages()
    .subscribe({
      next:(packages)=>{
        this.packages=packages;
      },
      error:(reponse)=>{
        console.log(reponse);
      }
    })
  }

}
