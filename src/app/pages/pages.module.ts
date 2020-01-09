import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
    declarations: [
        DashboardComponent,
        HeaderComponent

    ],
    imports: [
        BrowserModule,
    ],
    providers: [],
    exports: [HeaderComponent]
})
export class PagesModule { }
