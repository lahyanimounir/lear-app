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

import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';

import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'dashbors', component: DashbordsComponent },
  { path: 'ProductionReport', component: ProductionReportComponent },
  { path: 'TimeAnalysis', component: TimeAnalysComponent },
  { path: 'ErrorsAnalysis', component: ErrorsAnalysisComponent },
  { path: 'RemoteControl', component: RemoteControlComponent },
  { path: 'Setting', component: SettingComponent },
  { path: 'Login', component: LoginComponent },
  { path: '',
    redirectTo: '/Login',
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
    LoginComponent
  ],
  imports: [
  RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
  HttpClientModule,
  DataTablesModule,
    BrowserModule,
  FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
