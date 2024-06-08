import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { FaqComponent } from './components/faq/faq.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { InhertitedHouseComponent } from './components/inhertited-house/inhertited-house.component';
import { HouseInDisrepairComponent } from './components/house-in-disrepair/house-in-disrepair.component';
import { FinancialDistressComponent } from './components/financial-distress/financial-distress.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    HowItWorksComponent,
    FaqComponent,
    AboutUsComponent,
    ResourcesComponent,
    ReviewsComponent,
    InhertitedHouseComponent,
    HouseInDisrepairComponent,
    FinancialDistressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
