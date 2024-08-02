import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MandiService {

  constructor(private httpClient: HttpClient) { }

  url: string = "http://localhost:8081/"; 

  ngOnInit(){
    // this.allMandiPriceList()
    // this.test().subscribe((data:any)=>{
    //   console.log(data);
    // })
  }

  public test(){
    return this.httpClient.get(this.url + "market/test");
  }

  /**
   * Fetch Filtered Price List of mandi
   * @param data 
   * @returns 
   */
  public allMandiPriceList(data: any) {
    return this.httpClient.post(this.url + "market/fetchMarketPriceList", data);
  }

  /**
   * Fetch all states
   * @returns  
   */
  fetchAllStates() {
    return this.httpClient.get<any[]>("assets/states.json");
  }

  /**
   * Fetch All commodities
   * @returns 
   */
  fetchAllCommodities() {
    return this.httpClient.get<any[]>("assets/commodities.json");
  }

  /**
   * Fetch Market List
   * @param obj 
   * @returns 
   */
  fetchMarketListForDistrict(obj: any) {
    return this.httpClient.post(this.url + "market/fetchMarketListForDistrict", obj);
  }

  /**
   * Research Studies List
   */
  fetchResearchStudiesList(){
    return this.httpClient.get<any[]>(this.url + "research-studies/list");
  }

}
