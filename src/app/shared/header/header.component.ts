import { Component, OnInit } from '@angular/core';
import { Location } from './locations';
import { CommonHelperService } from 'src/app/services/common-helper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 
  locations:Location[]=this.commonHelper.locations;

  constructor( private commonHelper: CommonHelperService, private router: Router) { }

  ngOnInit() {
  }

  addMenuInList(action, location, branch) {
    this.commonHelper.setLocationAndBranch(action,location,branch);
    this.commonHelper.addBreadCrumbList(['Equipment Catalog'])
    this.router.navigate(['category/catalog'])   
  }

  redirectHome(){
    this.commonHelper.addBreadCrumbList([])
    this.router.navigate([''])   
  }
}


