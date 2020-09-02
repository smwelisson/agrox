import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExcluirContaPage } from './excluir-conta.page';

const routes: Routes = [
  {
    path: '',
    component: ExcluirContaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ExcluirContaPage]
})
export class ExcluirContaPageModule {}
