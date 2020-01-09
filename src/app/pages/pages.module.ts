import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import {MatSliderModule} from '@angular/material/slider';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select"


@NgModule({
    declarations: [
        DashboardComponent,
        HeaderComponent

    ],
    imports: [
        BrowserModule,
        MatSliderModule,
        MatFormFieldModule,
        MatSelectModule
    ],
    providers: [],
    exports: [HeaderComponent]
})
export class PagesModule { }
