import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Produto } from '../produto.model';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
})
export class ListarComponent implements OnInit {
  listaProdutos: Produto[];
  produtoSelecionadoParaAtualizar: Produto;
  produtoSelecionadoParaDeletar: Produto;

  constructor(private database: DatabaseService) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.database.getProdutos().subscribe((res) => {
      this.listaProdutos = res;
    });
  }

  atualizarProduto(produto: Produto): void {
    this.produtoSelecionadoParaAtualizar = produto;
  }

  deletarProduto(produto: Produto): void {
    this.produtoSelecionadoParaDeletar = produto;
  }
}
