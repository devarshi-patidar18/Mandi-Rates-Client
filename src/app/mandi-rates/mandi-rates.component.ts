import { Component } from '@angular/core';
import { MandiService } from '../Services/mandi.service';
import { DataStoreService } from '../Services/data-store.service';
import { CalendarModule } from 'primeng/calendar';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-mandi-rates',
  standalone: true,
  imports: [CalendarModule,AutoCompleteModule,FormsModule,CommonModule],
  templateUrl: './mandi-rates.component.html',
  providers:[DatePipe,BrowserModule],
  styleUrl: './mandi-rates.component.css'
})
export class MandiRatesComponent {

  MandiBhaavObject: any = {};

  commoditiesMasterList: any = [];
  statesMasterList: any = [];
  districtMasterList: any = []; // no use
  marketsMasterList: any = [];

  commoditiesSuggetions: any = [];
  stateSuggestions: any = [];
  districtsSuggestions: any = [];
  marketsSuggestions: any = [];

  showSearchLoader: boolean = false;
  showSearchResultText: boolean = false;
  suggestions: any = [];

  search(d: any) {

  }

  constructor(private mandiService: MandiService, public dataStore: DataStoreService, private datePipe: DatePipe) { }

  mandiList: any = [
    
  ];

  ngOnInit() {

  //   // this.dataStore.activeFooterIconNumber = 1;
    
    this.mandiService.fetchAllStates().subscribe(data => {
      let temp: any = [];
      temp = data;
      this.statesMasterList = temp;
    });

    this.mandiService.fetchAllCommodities().subscribe(data => {
      let temp: any = [];
      temp = [...data];
      this.commoditiesMasterList = temp;
    });

    
  }

  navigator:any = {};


  /**
   * Method to filter commodities
   * @param event 
   */
  filterCommodity(event: any) {
    this.commoditiesSuggetions = this.dataStore.filterSuggestions(event, this.commoditiesMasterList);
  }


  /**
   * Method to filter States
   * @param event 
   */
  filterStates(event: any) {
    this.stateSuggestions = this.dataStore.filterSuggestions(event, this.statesMasterList);
  }


  /**
   * Methods to Filter District and get data only for selected state
   * @param event 
   * @param selectedState 
   */
  filterDistricts(event: any, selectedState: any) {
    this.districtsSuggestions = this.dataStore.filterSuggestions(event, (selectedState != null && selectedState != undefined ? selectedState.districts : []));
  }

  filterMarkets(event: any) {
    this.marketsSuggestions = this.dataStore.filterSuggestions(event, this.marketsMasterList);
  }

  /**
   * Method to fetch Market list on selecting district
   */
  onSelectDistrict() {
    this.marketsMasterList = [];
    let mandiBhaavDto: any = {};

    mandiBhaavDto = {
      stateCode: this.MandiBhaavObject.selectedState.code,
      stateName: this.MandiBhaavObject.selectedState.name,

      districtId: this.MandiBhaavObject.selectedDistrict.id,
      districtName: this.MandiBhaavObject.selectedDistrict.name,
      commodityId: this.MandiBhaavObject.selectedCommodity.id,
      commodityName: this.MandiBhaavObject.selectedCommodity.name
    }


    this.mandiService.fetchMarketListForDistrict(mandiBhaavDto).subscribe(data => {
      let temp: any = [];
      temp = data;

      temp.forEach((element: any) => {
        if (element.marketId != 0) {
          this.marketsMasterList.push(
            {
              name: element.marketName,
              id: element.marketId
            }
          )
        }
      });
    })
  }

  /**
   * Customized Mandis search API
   */
  searchMandiBhaavList() {

    this.showSearchLoader = true;

    let mandiBhaavDto = {};
    mandiBhaavDto = {
      stateCode: this.MandiBhaavObject.selectedState.code,
      stateName: this.MandiBhaavObject.selectedState.name,
      priceStartDate: this.datePipe.transform(this.MandiBhaavObject.selectedFromDate,"dd-MMM-yyyy"),
      priceEndDate: this.datePipe.transform(this.MandiBhaavObject.selectedToDate,"dd-MMM-yyyy"),
      districtId: this.MandiBhaavObject.selectedDistrict.id,
      districtName: this.MandiBhaavObject.selectedDistrict.name,
      commodityId: this.MandiBhaavObject.selectedCommodity.id,
      commodityName: this.MandiBhaavObject.selectedCommodity.name,
      marketId: this.MandiBhaavObject.selectedMarket.id,
      marketName:this.MandiBhaavObject.selectedMarket.name
    }
   

    this.mandiService.allMandiPriceList(mandiBhaavDto).subscribe(data => {

      this.mandiList = data;
     
      if (this.mandiList.length != 0 || this.mandiList != undefined || this.mandiList != null) {
       
        this.showSearchLoader = false;
        window.scroll(0, 250);
        this.showSearchResultText = true;
    
      }

    });


  }


}
