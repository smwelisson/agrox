
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { reject } from 'q';
import { NovoProdutoService } from 'src/app/services/novo-produto.service';



@Component({
  selector: 'app-novo-produto',
  templateUrl: './novo-produto.page.html',
  styleUrls: ['./novo-produto.page.scss'],
})
export class NovoProdutoPage  {

  formProduto : FormGroup;
  descricao: string;
  preco:any;
  categoria:any;
  user:any;

  

  constructor(
    private fb: FormBuilder,
    // public provider: LoginProvider,
    private novoProdutoService: NovoProdutoService,
    private navCtrl: NavController
  ) { 
     this.produtoForm(); 
    }

    ionViewWillEnter() {
      this.produtoForm();
    }
  
    private produtoForm() {
      this.formProduto = this.fb.group({
        descricao: ['', [Validators.required]],
        preco: ['', [Validators.required]],
        categoria: ['', [Validators.required]],
        user: ['', [Validators.required]]

      });
    }

    novoproduto() {
      console.log(this.formProduto.value)
      this.novoProdutoService.post(this.formProduto.value).subscribe((response: any) => {
        console.log('Response', response);
        this.listagem();
    },
      (error) => {
        console.log(error.json);
        reject(error.json);
      });
  }
  listagem(){
    this.navCtrl.navigateForward('tabs/vender');
  }
}