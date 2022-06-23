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

const routes : Routes = [
  {path: '', component: TabsComponent}, // tyhjä path on juuri eli etusivu, sillä halutaan näkyvän TabsComponent
  {path: 'new-character', component: CreateCharacterComponent} // /new-character on sivu jolla halutaan näkyvän CreateCharacterComponent
];

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ListComponent,
    ItemComponent,
    CreateCharacterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [MoominService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
