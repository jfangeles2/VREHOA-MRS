import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire/compat';
import { LoginComponent } from './login/login.component';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main/main-routing.module';
import { SignupComponent } from './signup/signup.component';
import { MainModule } from './main/main.module';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ViewComplaintModalComponent } from './complaints/view-complaint-modal/view-complaint-modal.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { TileComponent } from './_shared/components/tile/tile.component';
import { AddComplaintModalComponent } from './complaints/add-complaint-modal/add-complaint-modal.component';
import { EditComplaintModalComponent } from './complaints/edit-complaint-modal/edit-complaint-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ComplaintsComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent,
    ViewComplaintModalComponent,
    ExpensesComponent,
    TileComponent,
    AddComplaintModalComponent,
    EditComplaintModalComponent
  ],
  imports: [
    FormsModule,
    MainModule,
    MainRoutingModule,
    BrowserModule,
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    providePerformance(() => getPerformance()),
    provideStorage(() => getStorage()),
    provideAnalytics(() => getAnalytics()),
    NgbModule,
    FontAwesomeModule,
  ],
  providers: [
    ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
