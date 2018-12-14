import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatSidenavModule, MatListModule, MatSelectModule,
  MatButtonModule, MatIconModule, MatMenuModule, MatExpansionModule } from '@angular/material';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSelectModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatExpansionModule,
    MatButtonModule
  ],
  exports: [
    BrowserModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSelectModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatExpansionModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
