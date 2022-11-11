import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/Models/category';
import { CetegoryService } from 'src/app/services/cetegory.service';

@Component({
  selector: 'app-categories-update',
  templateUrl: './categories-update.component.html',
  styleUrls: ['./categories-update.component.css'],
})
export class CategoriesUpdateComponent implements OnInit {
  cat: Category = new Category(0, '', '');
  id: number = 0;
  constructor(
    public catser: CetegoryService,
    public router: Router,
    public ar: ActivatedRoute
  ) {}

  save() {
    this.catser.updategategory(this.cat).subscribe((a) => {
      console.log(a), this.router.navigateByUrl('/categories');
    });
  }

  back() {
    this.router.navigateByUrl('/categories');
  }

  ngOnInit() {
    this.ar.params.subscribe((a) => {
      let id = a['id'];
      this.catser.GetCaetgoryId(id).subscribe((c) => {
        this.cat = c;
      });
    });
  }
}
