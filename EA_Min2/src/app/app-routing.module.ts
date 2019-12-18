import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'subject-info/:subject',
    loadChildren: () => import('./pages/subject-info/subject-info.module').then( m => m.SubjectInfoPageModule)
  },
  {
    path: 'student-info/:name',
    loadChildren: () => import('./pages/student-info/student-info.module').then( m => m.StudentInfoPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
