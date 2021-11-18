import { Component, Input, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Produto } from '../produto.model';

@Component({
  selector: 'app-atualizar',
  templateUrl: './atualizar.component.html',
  styleUrls: ['./atualizar.component.css'],
})
export class AtualizarComponent implements OnInit {
  @Input() produtoParaAtualizar: Produto;

  constructor(private database: DatabaseService) {}

  ngOnInit(): void {}

  atualizar() {
    this.database
      .atualizarProduto(this.produtoParaAtualizar)
      .subscribe((res) => {
        if (res.ok == true) {
          alert('O produto foi atualizado com sucesso!');
        } else {
          alert('O produto não foi atualizado!');
        }
      });
  }
}
