import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-fine-collection',
  templateUrl: './fine-collection.component.html',
  styleUrls: ['./fine-collection.component.scss']
})
export class FineCollectionComponent implements OnInit {
  tabval = true;
  constructor() { }

  ngOnInit(): void {
  }

tab1(value){
  // this.tabval = value;
  console.log(this.tabval);
  // console.log(value);
}

}
