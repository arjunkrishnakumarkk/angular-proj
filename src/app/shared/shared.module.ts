import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieListService } from '../services/movie-list.service';
import { GlobalService } from '../services/global.service';
@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CustomMaterialModule,
    FlexLayoutModule,
    InfiniteScrollModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CustomMaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    InfiniteScrollModule,
    ModalModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MovieListService, GlobalService],
  declarations: []
})
export class SharedModule { }
