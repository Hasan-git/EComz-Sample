import { MatDialogModule } from '@angular/material/dialog';
import { SharedMaterialModule } from 'src/app/blocks/common/shared-material.module';
import { PrimeQuestionComponent } from './theme/prime-question/prime-question.component';
import { PaginationModule } from './blocks/reusable-components/pagination/pagination.module';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StarRatingModule } from 'angular-star-rating';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NgxUiLoaderModule } from 'ngx-ui-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './blocks/reusable-components/header/header.module';
import { CoreModule } from './blocks/core/core.module';
import { AlbumBoxComponent } from './theme/album/album-box/album-box.component';
import { AlbumComponent } from './theme/album/album.component';
import { ArtistBoxComponent } from './theme/search/artist-box/artist-box.component';
import { SearchComponent } from './theme/search/search.component';
import { AnswerDialogComponent } from './theme/prime-question/answer-dialog/answer-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AlbumComponent,
    ArtistBoxComponent,
    AlbumBoxComponent,
    PrimeQuestionComponent,
    AnswerDialogComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,

    NgxUiLoaderModule,
    FlexLayoutModule,
    StarRatingModule.forRoot(),
    LazyLoadImageModule,

    AppRoutingModule,
    CoreModule.forRoot(),
    HeaderModule,
    PaginationModule,
    SharedMaterialModule,
    // MatDialogModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
