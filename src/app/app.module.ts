import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslationComponent } from './modules/translation/translation.component';
import { TranslationListComponent } from './modules/translation/components/translation-list/translation-list.component';
import { TranslatorComponent } from './modules/translation/components/translator/translator.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LandingComponent } from './modules/pages/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    TranslationComponent,
    TranslationListComponent,
    TranslatorComponent,
    HeaderComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
