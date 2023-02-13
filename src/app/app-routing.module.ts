import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPackageComponent } from './Components/adminHome/add-package/add-package.component';
import { AdminHomePageComponent } from './Components/adminHome/admin-home-page/admin-home-page.component';
import { EditPackageComponent } from './Components/adminHome/edit-package/edit-package.component';
import { PackageListComponent } from './Components/packages/package-list/package-list.component';

const routes: Routes = [
  {
    path:' ',
    component:PackageListComponent
  },
  {
    path:'Package',
    component:PackageListComponent
  },
  {
    path:'Admin',
    component:AdminHomePageComponent
  },
  {
    path:'Admin/Add_Package',
    component:AddPackageComponent
  },
  {
    path:'Admin/Edit_Package/:id',
    component:EditPackageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
