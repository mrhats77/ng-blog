import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import * as LayoutComponents from './layouts/components';
import * as CommentsComponents from './comments/components';
import * as PagesComponents from './pages/components';
import { PostCardComponent } from './layouts/components/post-card/post-card.component';
import { SubscriptionFormComponent } from './subscription-form/subscription-form.component';
@NgModule({
  declarations: [
    AppComponent,
    ...LayoutComponents.Components,
    ...PagesComponents.Components,
    ...CommentsComponents.Components,
    SubscriptionFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
