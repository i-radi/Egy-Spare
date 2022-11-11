import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/Models/category';
import { CetegoryService } from 'src/app/services/cetegory.service';

@Component({
  selector: 'app-categories-create',
  templateUrl: './categories-create.component.html',
  styleUrls: ['./categories-create.component.css'],
})
export class CategoriesCreateComponent implements OnInit {
  ncat: Category = new Category(0, '', '');

  constructor(public catser: CetegoryService, public router: Router) {}

  save() {
    this.catser.addcategory(this.ncat).subscribe((a) => {
      console.log(a);
      this.router.navigateByUrl('/categories');
    });
  }
  back() {
    this.router.navigateByUrl('/categories');
  }

  onselectFile(e: any) {
    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.ncat.imgPath = event.target.result;
      };
    }
  }

  ngOnInit(): void {}
}
