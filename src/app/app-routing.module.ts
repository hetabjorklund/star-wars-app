import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { ListComponent } from './list/list.component';
import { TabsComponent } from './tabs/tabs.component';

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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
