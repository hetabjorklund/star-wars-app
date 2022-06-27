import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { MoominService } from './services/moomin.service';
import { LogService } from './services/log.service';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from './loading/loading.component';

const routes : Routes = [
  // tyhjä path on juuri eli etusivu, sillä halutaan näkyvän TabsComponent
  {
    path: 'characters',
    component: TabsComponent,
    children: [
    {
      path: '',
      redirectTo: 'all',
      pathMatch: 'full'
    },
    {
      path: ':side',
      component: ListComponent
    }
    ]
  },
  // /new-character on sivu jolla halutaan näkyvän CreateCharacterComponent
  {
    path: 'new-character',
    component: CreateCharacterComponent
  },
  // kaikki muut reitit uudelleenohjaavat juureen, joten jos käyttäjä kirjoittaa osoitteen jota ei ole olemassa, kaatumisen sijaan mennään etusivulle
  {
    path: '**',
    redirectTo: '/characters/all'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ListComponent,
    ItemComponent,
    CreateCharacterComponent,
    HeaderComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [MoominService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
