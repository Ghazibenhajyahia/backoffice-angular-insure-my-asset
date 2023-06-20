import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { RequestDetailsComponent } from '../request-details/request-details.component';
import { AuthGuard } from 'src/app/utils/auth.guard';
import { RequestsComponent } from '../requests/requests.component';
import { UsersComponent } from '../users/users.component';

const routes: Routes = [

    {
        path: '', component: DashboardComponent, canActivate: [AuthGuard], children: [
            { path: 'requests', component: RequestsComponent },
            { path: 'users', component: UsersComponent },
            // { path: 'request-details/:id', component: RequestDetailsComponent },
            // { path: 'request-details/:id/edit', component: RequestDetailsComponent },
            // { path: 'users/:id', component: UsersComponent },
            // { path: 'users/:id/edit', component: UsersComponent },
            // { path: 'users/:id/delete', component: UsersComponent },
            // { path: 'users/new', component: UsersComponent },
            // { path: 'users/:id/requests', component: RequestsComponent },
            // { path: 'users/:id/requests/:id', component: RequestsComponent },
            // { path: 'users/:id/requests/:id/edit', component: RequestsComponent },
            // { path: 'users/:id/requests/:id/delete', component: RequestsComponent },
            // { path: 'users/:id/requests/new', component: RequestsComponent },
            { path: '', redirectTo: 'requests', pathMatch: 'full' }
        ]
    },


    { path: '**', redirectTo: '' }

];



@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
