export class Livro {
  codigo: number;
  CodEditora: number;
  titulo: string;
  resumo: string;
  autores: string[];

  constructor(codigo: number, CodEditora: number, titulo: string, resumo: string, autores: string[]) {
    this.codigo = codigo;
    this.CodEditora = CodEditora;
    this.titulo = titulo;
    this.resumo = resumo;
    this.autores = autores;
   }

}
