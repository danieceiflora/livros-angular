import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  livros: Array<Livro> = [
    { codigo: 1, CodEditora: 1, titulo: 'O Senhor dos Anéis', resumo: 'Romance de fantasia', autores: ['J.R.R. Tolkien', 'Charles T Russel'] },
    { codigo: 2, CodEditora: 2, titulo: 'O Hobbit', resumo: 'Romance de fantasia', autores: ['J.R.R. Tolkien', 'Rutherford']},
    { codigo: 3, CodEditora: 3, titulo: 'O Nome do Vento', resumo: 'Romance de fantasia', autores: ['Patrick Rothfuss', 'George RR Martin'] },
  ];

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const codigo = this.livros.length + 1;
    livro.codigo = codigo;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const indice = this.livros.findIndex(livro => livro.codigo === codigo);
    if (indice !== -1) {
      this.livros.splice(indice, 1);
    }
  }

  constructor() { }
}
