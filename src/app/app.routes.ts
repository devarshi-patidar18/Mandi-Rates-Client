import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MandiRatesComponent } from './mandi-rates/mandi-rates.component';

export const routes: Routes = [
    {path:"",component:HomeComponent,pathMatch:'full'},
    {path:"mandi-rates",component:MandiRatesComponent}
];
