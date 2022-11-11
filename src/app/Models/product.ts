import { Brand } from './brand';
import { Category } from './category';

export class Product {
  constructor(
    public id: string,
    public name: string,
    public manufacture: string,
    public modelNumber: string,
    public details: string,
    //public brandId: number,
    //public categoryId: number,
    public count: number,
    public brandId: number,
    public categoryId: number,
    public price: number,
    public imgPath: string
  ) {}
}
