import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MandiRatesComponent } from './mandi-rates/mandi-rates.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ResearchStudiesComponent } from './research-studies/research-studies.component';

export const routes: Routes = [
    {path:"",component:AuthenticationComponent,pathMatch:'full'},
    {path:"home",component:HomeComponent},
    {path:"mandi-rates",component:MandiRatesComponent},
    {path:"research-studies",component:ResearchStudiesComponent}
];
