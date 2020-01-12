import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MockServiceService } from './mock-service.service';
import { Location } from '../shared/header/locations';

@Injectable({
  providedIn: 'root'
})
export class CommonHelperService {
  locations: Location[];
  constructor(private mockService: MockServiceService) {
    this.mockService.getLocations().subscribe(resp => {
      this.locations = resp;
    });
  }

  breadCrumb = new BehaviorSubject([]);
  breadCrumbList = this.breadCrumb.asObservable();

  location = new BehaviorSubject([]);
  currentLocation = this.location.asObservable();

  branch = new BehaviorSubject([]);
  currentBranch = this.branch.asObservable();

  subCategory = new BehaviorSubject([]);
  currentSubCategory = this.subCategory.asObservable();
  addBreadCrumbList(data) {
    this.breadCrumb.next(data);
  }

  setCurrentLocation(data) {
    this.location.next(data);
  }

  setCurrentBranch(data) {
    this.branch.next(data);
  }

  setSubCategory(data) {
    this.subCategory.next(data);
  }


  setLocationAndBranch(action, location, branch) {
    let locationData = this.locations.filter(locationsData => locationsData.name === location)
    let categoryArray = [];
    if (action == 'location') {
      locationData[0].branches.forEach(branch => {
        categoryArray.push(...branch.categories.map(x => { return { ...x, image: "../../../assets/images/category/" + x.image } }))
      })
      this.setCurrentLocation(categoryArray);
    } else {
      let branchData = locationData[0].branches.filter(branchesData => branchesData.name == branch)
      branchData && categoryArray.push(...branchData[0].categories.map(x => { return { ...x, image: "../../../assets/images/category/" + x.image } }))
      this.setCurrentLocation([]);
      this.setCurrentBranch(categoryArray);
    }
  }
}
