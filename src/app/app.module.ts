import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { PackageListComponent } from './Components/packages/package-list/package-list.component';
import { AddPackageComponent } from './Components/adminHome/add-package/add-package.component';
import { AdminHomePageComponent } from './Components/adminHome/admin-home-page/admin-home-page.component';
import { EditPackageComponent } from './Components/adminHome/edit-package/edit-package.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PackageListComponent,
    AddPackageComponent,
    AdminHomePageComponent,
    EditPackageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
