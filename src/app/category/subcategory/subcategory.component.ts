import { Component, OnInit } from '@angular/core';
import { CommonHelperService } from 'src/app/services/common-helper.service';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.scss']
})
export class SubcategoryComponent implements OnInit {
  subCategoryArray=[];
  constructor(private commonHelper:CommonHelperService) {
    this.commonHelper.currentSubCategory.subscribe(res=>{
      console.log(res)
      this.subCategoryArray=res;
    })
   }

  ngOnInit() {
  }

}
