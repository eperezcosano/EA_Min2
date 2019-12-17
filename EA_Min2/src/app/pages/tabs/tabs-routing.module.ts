import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'studentList',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../studentList/studentList.module').then(m => m.StudentListPageModule)
          }
        ]
      },
      {
        path: 'subjectList',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../subjectList/subjectList.module').then(m => m.SubjectListPageModule)
          }
        ]
      },
      /*{
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../tab3/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },*/
      {
        path: '',
        redirectTo: '/tabs/studentList',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/studentList',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
