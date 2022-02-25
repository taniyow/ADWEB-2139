import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  product:boolean=true;
  notproduct:boolean=false;

  Products = [
    {
      id: "SHL0001",
      name: "Male Wear",
      description: "Invest in top men's fashion clothing for quality items with comfortable and stylish designs.",
      source: "../../assets/images/malewear.jpg"
    },
    {
      id: "SHL0002",
      name: "Female Wear",
      description: "Safety, comfort and color are this season’s go-to trends. Cop our female wears ’new normal’ must-haves.​",
      source: "../../assets/images/femalewear.jpg"
    },
    {
      id: "SHL0003",
      name: "Tshirt",
      description: "Our comfortable, casual, and loose-fitting t-shirts comes with various designs and color. It will quickly become one of your favorites.",
      source: "../../assets/images/tshirt.jpg"
    },
    {
      id: "SHL0004",
      name: "Jacket",
      description: "Shop online for Jacket at eShop where you can choose from classic black, printed and zip-up styles of hoodies, sweaters, and coat.",
      source: "../../assets/images/jacket.jpg"
    },
    {
      id: "SHL0005",
      name: "Shoes",
      description: "There's a surprise in our store! Discover amazing deals on the different shoes for the whole family.",
      source: "../../assets/images/shoes.jpg"
    },
    {
      id: "SHL0006",
      name: "Watch",
      description: "Discover watches you've never seen before, we offer the most unique and cool watches. Shop for both men's watches and women's watches.",
      source: "../../assets/images/watch.jpg"
    },
    {
      id: "SHL0007",
      name: "Bags",
      description: "Carry around your belongings with quality bags from eShop. We have a wide range of different bags from crossbody  to leather bags.",
      source: "../../assets/images/bag.jpg"
    },
    {
      id: "SHL0008",
      name: "Belts",
      description: "Shop genuine belts with wide selection of unique styles for jeans, casual or formal outfits.",
      source: "../../assets/images/belt.jpg"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
