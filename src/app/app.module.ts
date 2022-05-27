import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HorosocopoComponent } from './components/horosocopo/horosocopo.component';
import { HttpClientModule } from '@angular/common/http';
import { HorosocopoService } from './services/horosocopo.service';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent, HorosocopoComponent],
  providers: [HorosocopoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
