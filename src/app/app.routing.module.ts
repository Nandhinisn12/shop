import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './productdetails/productdetails.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path:'product',
    component: ProductComponent,
  },
  {
    path:'details',
    component: DetailsComponent,
  },
  {
    path:'product/:id',
    component: DetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponent=[ProductComponent,DetailsComponent];
