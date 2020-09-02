import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  
  },
  { path: 'minhas-vendas', loadChildren: './minhas-vendas/minhas-vendas.module#MinhasVendasPageModule' },
  { path: 'minhas-compras', loadChildren: './minhas-compras/minhas-compras.module#MinhasComprasPageModule' },
  { path: 'alterar-dados', loadChildren: './alterar-dados/alterar-dados.module#AlterarDadosPageModule' },
  { path: 'excluir-conta', loadChildren: './excluir-conta/excluir-conta.module#ExcluirContaPageModule' },
  { path: 'criar-conta', loadChildren: './criar-conta/criar-conta.module#CriarContaPageModule' },
  { path: 'produtos', loadChildren: './produtos/produtos.module#ProdutosPageModule' },
  { path: 'vender', loadChildren: './vender/vender.module#VenderPageModule' },
  { path: 'novo-produto', loadChildren: './novo-produto/novo-produto.module#NovoProdutoPageModule' },
  { path: 'sobre', loadChildren: './sobre/sobre.module#SobrePageModule' },
  { path: 'alterar-produtos', loadChildren: './alterar-produtos/alterar-produtos.module#AlterarProdutosPageModule' },
  { path: 'descricao/:id', loadChildren: './descricao/descricao.module#DescricaoPageModule' },
  { path: 'confirma-compra', loadChildren: './confirma-compra/confirma-compra.module#ConfirmaCompraPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'sair', loadChildren: './sair/sair.module#SairPageModule' },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
