import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBooksComponent } from './add-books/add-books.component';
import { SearchBooksComponent } from './search-books/search-books.component';
import { ViewbooksComponent } from './viewbooks/viewbooks.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';

@NgModule({
  declarations: [
    AppComponent,
    AddBooksComponent,
    SearchBooksComponent,
    ViewbooksComponent,
    DeleteBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
