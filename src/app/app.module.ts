import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

/*order matters
* static
* empty
* wilcard
* */
const appRoutes: Routes = [
  {path: 'home', component: HomeComponent, data: {title: 'Hello World'}},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent, HomeComponent]
})
export class AppModule {
}
