import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchContainerComponent } from './shared/search/search-container.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchFilterTypeComponent } from './shared/search-filter-type/search-filter-type.component';
import { SearchFilterComponent } from './shared/search-filter/search-filter.component';
import { LaunchResultsComponent } from './shared/launch-results/launch-results.component';
import { LaunchResultsCountComponent } from './shared/launch-results-count/launch-results-count.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchContainerComponent,
    SearchFilterTypeComponent,
    SearchFilterComponent,
    LaunchResultsComponent,
    LaunchResultsCountComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
