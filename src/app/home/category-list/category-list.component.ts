import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Models/category';
import { CetegoryService } from 'src/app/services/cetegory.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent implements OnInit {
  constructor(public cateogrySevices: CetegoryService) {}

  Cetegories: Category[] = [];
  ngOnInit(): void {
    this.cateogrySevices.GetAll().subscribe((a) => {
      this.Cetegories = a;
      console.log(this.Cetegories);
    });
  }
}
