import { Component, OnInit } from '@angular/core';
import { Package } from 'src/app/Models/package.model';
import { PackagesService } from 'src/app/Services/packages.service';

@Component({
  selector: 'app-admin-home-page',
  templateUrl: './admin-home-page.component.html',
  styleUrls: ['./admin-home-page.component.css']
})
export class AdminHomePageComponent implements OnInit {
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
