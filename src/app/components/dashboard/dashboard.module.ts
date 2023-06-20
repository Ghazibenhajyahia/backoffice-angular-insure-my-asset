import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AppComponent } from 'src/app/app.component';
import { RequestsComponent } from '../requests/requests.component';
import { UsersComponent } from '../users/users.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@NgModule({
    declarations: [
        RequestsComponent,
        UsersComponent,
        // RequestDetailsComponent,
        DashboardComponent,
        SidebarComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        DashboardRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class DashboardModule { }
