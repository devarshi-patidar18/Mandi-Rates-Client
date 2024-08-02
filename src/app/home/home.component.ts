import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ResearchStudiesComponent } from "../research-studies/research-studies.component";
import { MandiRatesComponent } from "../mandi-rates/mandi-rates.component";
import { AboutComponent } from '../about/about.component';
import { MyAreaMarketsComponent } from "../my-area-markets/my-area-markets.component";
import { GraphComponent } from "../graph/graph.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ResearchStudiesComponent, MandiRatesComponent, AboutComponent, MyAreaMarketsComponent, GraphComponent],
  providers:[],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  componentClicked:string = "";

  

}
