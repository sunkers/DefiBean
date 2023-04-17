import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { ThemeSwitchComponent } from './core/theme-switch/theme-switch.component';

import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { FaqComponent } from './features/faq/faq.component';
import { BlogComponent } from './features/blog/blog.component';
import { ContactComponent } from './features/contact/contact.component';

import { ChartModule } from 'primeng/chart';
import { CardHomeComponent } from './features/home/card-home/card-home.component';
import { Page2Component } from './features/home/page2/page2.component';
import { Page3Component } from './features/home/page3/page3.component';
import { AboutModule } from './features/about/about.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ThemeSwitchComponent,
    HomeComponent,
    AboutComponent,
    FaqComponent,
    BlogComponent,
    ContactComponent,
    CardHomeComponent,
    Page2Component,
    Page3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule,
    RouterModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    MatIconModule,
    // AboutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
