import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Product } from '../details/product';
import { appConstant } from '../app.constant';
import { environment } from '../environment/environment';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css'],
})
export class DetailsComponent implements OnInit {
  product: Product | any = '';
  id: number | String = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.getProduct((data as any).id);
    });
  }
  getProduct(id: number) {
    this.http
      .get(`${environment.apiEndpoint}${appConstant.apiRoute.products}/${id}`)
      .subscribe((data) => {
        this.product = data;
        console.log(data);
      });
  }
}
