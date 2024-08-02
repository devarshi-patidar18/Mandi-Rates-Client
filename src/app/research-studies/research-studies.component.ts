import { Component } from '@angular/core';
import { MandiService } from '../Services/mandi.service';
import { DataStoreService } from '../Services/data-store.service';

@Component({
  selector: 'app-research-studies',
  standalone: true,
  imports: [],
  templateUrl: './research-studies.component.html',
  styleUrl: './research-studies.component.css'
})
export class ResearchStudiesComponent {

  researchStudiesList:any = [];

  constructor(private mandiServices:MandiService,private dataStore:DataStoreService){}

  ngOnInit(){

    if(this.dataStore.researchStudiesList.length==0){
      this.mandiServices.fetchResearchStudiesList().subscribe(((data:any)=>{
        // console.log(data);
        this.researchStudiesList = data;
        this.dataStore.researchStudiesList = this.researchStudiesList;
      }));
    }
    else{
      this.researchStudiesList = this.dataStore.researchStudiesList;
    }

  }

}
