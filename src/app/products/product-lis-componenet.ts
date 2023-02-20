import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscribable, Subscription } from "rxjs";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    selector:'pm-products',
    templateUrl: "./product-list-component.html",
    styleUrls:['./product-list.component.css']
})
export class ProductListComponent implements OnInit , OnDestroy{
  ngOnInit(): void {
    this._listFilter = "card"
    this.sub =this.serviceProduct.getProducts().subscribe(
      {
        next: product =>{

         this.products = product;
         this.filterProducts=this.products;
        },
        error : err => this.ErrorMessage = err

      }
    )
    this.filterProducts=this.products;
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
    constructor(private serviceProduct: ProductService){}
    pageTitle :string ="Products List";
    showImage = false;
    imageWidth = 50;
    imageMargin = 2;
    sub!: Subscription
    filterProducts : IProduct[]=[];
    ErrorMessage = ""
    private _listFilter = '';
    get listFilter() : string {
      return this._listFilter;
    }
    set listFilter(value : string ){
      this._listFilter = value
      this.filterProducts = this.FilterProducts(value)
    }
    onRatingClicked(message: string): void {
      console.log("world")
      this.pageTitle = 'Product List: ' + message;
    }
                
    products : IProduct[] =[]
      toggoleImage():void{
        this.showImage = ! this.showImage;
      }
      FilterProducts(FilterBy : string ):IProduct[]{
        FilterBy = FilterBy.toLocaleLowerCase();
        return this.products.filter((product : IProduct)=>
        product.productName.toLocaleLowerCase().includes(FilterBy))
      }
}