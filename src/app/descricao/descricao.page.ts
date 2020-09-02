import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../services/produto.service';


@Component({
  selector: 'app-descricao',
  templateUrl: './descricao.page.html',
  styleUrls: ['./descricao.page.scss'],
})
export class DescricaoPage implements OnInit {

  produto = null;

  constructor(private activatedRoute: ActivatedRoute, private produtoService: ProdutoService) { }

  ngOnInit() {
    // Get the ID that was passed with the URL
    let id = this.activatedRoute.snapshot.paramMap.get('id');
 
    // Get the information from the API
    this.produtoService.getProdutosdetalhes(id).subscribe(result => {
      this.produto = result;
    });
  }
  openWebsite() {
    window.open(this.produto.Website, '_blank');
  }

}
