import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashbordsComponent } from './dashbords/dashbords.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductionReportComponent } from './production-report/production-report.component';
import { TimeAnalysComponent } from './time-analys/time-analys.component';
import { ErrorsAnalysisComponent } from './errors-analysis/errors-analysis.component';
import { RemoteControlComponent } from './remote-control/remote-control.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeaderComponent } from './header/header.component';
import { SettingComponent } from './setting/setting.component';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { FilterDataPipe } from './filter-data.pipe';
import { AuthService } from './auth.service';


const appRoutes: Routes = [
  { path: 'dashbors', component: DashbordsComponent ,canActivate: [AuthService]},
  { path: 'ProductionReport', component: ProductionReportComponent,canActivate: [AuthService] },
  { path: 'TimeAnalysis', component: TimeAnalysComponent ,canActivate: [AuthService]},
  { path: 'ErrorsAnalysis', component: ErrorsAnalysisComponent,canActivate: [AuthService] },
  { path: 'RemoteControl', component: RemoteControlComponent ,canActivate: [AuthService]},
  { path: 'Setting', component: SettingComponent ,canActivate: [AuthService]},
  { path: 'login', component: LoginComponent },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [

    AppComponent,
    DashbordsComponent,
    ProductionReportComponent,
    TimeAnalysComponent,
    ErrorsAnalysisComponent,
    RemoteControlComponent,
    NavBarComponent,
    HeaderComponent,
    SettingComponent,
    LoginComponent,
    FilterDataPipe
  ],
  imports: [
  FormsModule,
  RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
  HttpClientModule,
  DataTablesModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
