import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificationNavbarComponent } from './Child-components/notification-navbar/notification-navbar.component';
import { StandingNavBarComponent } from './Child-components/standing-nav-bar/standing-nav-bar.component';
import { BackgroundCardComponent } from './Child-components/background-card/background-card.component';
import { UserDetailsTableComponent } from './Child-components/user-details-table/user-details-table.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { GamingHomePageComponent } from './gaming-home-page/gaming-home-page.component';
import { SuperiorCardsComponent } from './Child-components/superior-cards/superior-cards.component'

@NgModule({
  declarations: [
    AppComponent,
    NotificationNavbarComponent,
    StandingNavBarComponent,
    BackgroundCardComponent,
    UserDetailsTableComponent,
    GamingHomePageComponent,
    SuperiorCardsComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    Ng2SearchPipeModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
