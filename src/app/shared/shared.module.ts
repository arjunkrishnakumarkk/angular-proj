import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CustomMaterialModule } from '../custom-material/custom-material.module';

import { MovieListService } from '../services/movie-list.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CustomMaterialModule,
    FlexLayoutModule
  ],
  exports: [
    CustomMaterialModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [MovieListService],
  declarations: []
})
export class SharedModule { }
