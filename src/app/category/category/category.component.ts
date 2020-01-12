import { Component, OnInit } from '@angular/core';
import { Location } from 'src/app/shared/header/locations';
import { Router, ActivatedRoute, ActivationStart, NavigationStart } from '@angular/router';
import { CommonHelperService } from 'src/app/services/common-helper.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  locations: Location[];
  categoryArray = [];
  constructor(private router: Router, private commonHelper: CommonHelperService) {

    this.commonHelper.currentLocation.subscribe(res => {
      this.categoryArray = res;
      if (!this.categoryArray.length) {
        this.commonHelper.currentBranch.subscribe(res => {
          this.categoryArray = res;
        })
      }
    })
  }

  ngOnInit() {
    if (!this.categoryArray.length) {
      this.router.navigate([''])
    }
  }


  getSubCategory(category) {
    this.commonHelper.addBreadCrumbList([this.commonHelper.breadCrumb.value[0], category.name])
    this.commonHelper.setSubCategory(category.subcategories)
    this.router.navigate(['category/subCategory'])
  }
}
