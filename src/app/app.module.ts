import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { ConvertToSpace } from './shared/convert-to-space.pipe';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-lis-componenet';
import { StarComponent } from './shared/star.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpace,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
