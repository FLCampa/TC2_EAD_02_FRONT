import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css'],
})
export class CadastrarComponent implements OnInit {
  formCadastro: FormGroup;

  constructor(private database: DatabaseService, private router: Router) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.formCadastro = new FormGroup({
      titulo: new FormControl(null, [Validators.required]),
      descricao: new FormControl(null, [Validators.required]),
      preco: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit(): void {
    if (this.formCadastro.valid) {
      this.database
        .cadastrarProduto(this.formCadastro.value)
        .subscribe((res) => {
          if (res.ok == true) {
            this.router.navigate(['/home']);
            alert('O cadastro foi realizado com sucesso!');
          } else {
            this.router.navigate(['/home']);
            alert('O cadastro não foi realizado!');
          }
        });
    }
  }
}
