import { Component, OnInit } from '@angular/core';
import { CommonHelperService } from 'src/app/services/common-helper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.scss']
})
export class BreadCrumbComponent implements OnInit {
  breadCrumbItems = [];
  constructor(private commonHelper: CommonHelperService,
    private router: Router) {
    this.commonHelper.breadCrumbList.subscribe(res => {
      this.breadCrumbItems = res;
    })
  }

  ngOnInit() {
  }

  goBack(i) {
    if (this.breadCrumbItems.length - 1 > i) {
      this.commonHelper.addBreadCrumbList(this.breadCrumbItems.splice(0, i + 1))
      this.router.navigate(['category/catalog'])
    }
  }
}
