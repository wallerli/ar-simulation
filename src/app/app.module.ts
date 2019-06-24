import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { RoundService } from './round/round.service'

import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore';

import {
  MdcButtonModule,
  MdcFabModule,
  MdcIconModule,
  MdcMenuModule,
  MdcTopAppBarModule
} from '@angular-mdc/web';
import { RoundComponent } from './round/round.component';
import { fromEventPattern } from 'rxjs';

const MDC_MODULES: any[] = [
  MdcButtonModule,
  MdcFabModule,
  MdcIconModule,
  MdcMenuModule,
  MdcTopAppBarModule
];

@NgModule({
  declarations: [
    AppComponent,
    RoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    MDC_MODULES,
    AngularFireModule.initializeApp(environment.firebase, 'BeeAR'),
    AngularFirestoreModule
  ],
  providers: [RoundService],
  bootstrap: [AppComponent]
})
export class AppModule { }
