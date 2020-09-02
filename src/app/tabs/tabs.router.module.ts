import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'produtos',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../produtos/produtos.module').then(m => m.ProdutosPageModule)
          }
        ]
      },
      {
        path: 'vender',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../vender/vender.module').then(m => m.VenderPageModule)
          }
        ]
      },
      
      {
        path: '',
        redirectTo: '/tabs/produtos',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/produtos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
