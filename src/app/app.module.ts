import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxNouiSliderModule } from "ngx-noui-slider";
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxNouiSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
