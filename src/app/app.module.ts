import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { ShowListComponent } from './show-list/show-list.component';
import { ShowDetailComponent } from './show-detail/show-detail.component';
import { WriteContentComponent } from './write-content/write-content.component';
import { AppRoutingModule } from './app-routing.module';
import { WriteContentService } from './services/write-content.service';
import { ShowListService } from './services/show-list.service';
import { AuthService } from './services/auth.service';
import { ApiInterceptor } from './api.intercepter';

@NgModule({
  declarations: [
    AppComponent,
    ShowListComponent,
    ShowDetailComponent,
    WriteContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ShowListService,
    WriteContentService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
