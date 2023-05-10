import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesPage } from './pages.page';

const routes: Routes = [
  {
    path: '',
    component: PagesPage
  },
  {
    path: 'video-diary',
    loadChildren: () => import('./video-diary/video-diary.module').then( m => m.VideoDiaryPageModule)
  },
  {
    path: 'images-diary',
    loadChildren: () => import('./images-diary/images-diary.module').then( m => m.ImagesDiaryPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesPageRoutingModule {}
