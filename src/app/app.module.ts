import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireStorageModule } from 'angularfire2/storage';

// Firebase setup instructions

// 1. delete this line, then...
import { firebaseConfig } from '../env';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { SeoService } from './seo.service'; 

// 2. Add your own firebase config to environment.ts
// 3. Use the environment to initialize angularfire2 below, like so AngularFireModule.initializeApp(environment.firebaseConfig),

@NgModule({
  declarations: [
    AppComponent,
    AnimalDetailComponent,
    AnimalListComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    BrowserTransferStateModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [SeoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
