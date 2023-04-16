import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ThemeSwitchComponent } from './theme-switch/theme-switch.component';

import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';

import { ChartModule } from 'primeng/chart';
import { CardHomeComponent } from './card-home/card-home.component';
import { Page2Component } from './home/page2/page2.component';
import { Page3Component } from './home/page3/page3.component';

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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
