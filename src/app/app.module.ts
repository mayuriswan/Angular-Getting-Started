import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { ConvertToSpace } from './shared/convert-to-space.pipe';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-lis-componenet';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpace
  ],
  imports: [
    BrowserModule,
    FormsModule  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
