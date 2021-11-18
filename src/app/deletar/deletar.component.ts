import { Component, Input, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Produto } from '../produto.model';

@Component({
  selector: 'app-deletar',
  templateUrl: './deletar.component.html',
  styleUrls: ['./deletar.component.css'],
})
export class DeletarComponent implements OnInit {
  @Input() produtoParaDeletar: Produto;

  constructor(private database: DatabaseService) {}

  ngOnInit(): void {
    this.deletar();
  }

  deletar() {
    this.database.deletarProduto(this.produtoParaDeletar).subscribe((res) => {
      if (res.ok == true) {
        alert('O produto foi deletado com sucesso');
        window.location.reload();
      } else {
        alert('O produto não foi deletado!');
      }
    });
  }
}
