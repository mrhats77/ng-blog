import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as PagesComponents from './pages/components';

const routes: Routes = [
  { path: '', component: PagesComponents.HomeComponent },
  { path: 'category', component: PagesComponents.SingleCategoryComponent },
  { path: 'post', component: PagesComponents.SinglePostComponent },

  { path: 'about', component: PagesComponents.AboutUsComponent },
  { path: 'terms-conditions', component: PagesComponents.TermsAndConditionComponent },
  { path: 'contact', component: PagesComponents.ContactUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
