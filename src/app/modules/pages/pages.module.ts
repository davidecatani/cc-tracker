import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { SettingsComponent } from './settings/settings.component';
import { SingleColumnComponent } from './basic-pages/single-column/single-column.component';

const components = [
  SettingsComponent,
  HomePageComponent,
  SingleColumnComponent
];

const pages: Routes = [
  {
    path: '',
    component: SingleColumnComponent,
    children: [
      {
        path: '',
        component: HomePageComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(pages)
  ]
})
export class PagesModule { }
