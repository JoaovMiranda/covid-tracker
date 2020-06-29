import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-prevention',
  templateUrl: './prevention.component.html',
  styleUrls: ['./prevention.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PreventionComponent implements OnInit {

  auxHand = 'Além de usar bastante sabão e água corrente, é necessário esfrega-las por ao menos 20 segundos, diz a OMS. Usar gotas de álcool gel para eliminar qualquer traço do vírus das suas mãos. Preste atenção nos dedos e não deixe de incluir os punhos. Não se sabe quanto tempo o vírus é capaz de sobreviver em uma superfície. Portanto, leve essa dica muito a sério.';
  auxTosse = 'A pessoa infectada espalha o vírus por meio daquilo que ela expele. Então, cubra a boca e o nariz ao espirrar ou tossir. De acordo com a OMS, a melhor forma de fazer isso é com lenços descartáveis, que devem ser jogados no lixo assim que utilizados. Se isso não for possível, dobre o braço e espirre no seu cotovelo.';
  auxDistanc = 'Não ultrapassem o limite de um metro de distância umas das outras. Essa é a distância que os líquidos expelidos em um espirro podem atingir.';
  auxHouse = 'Mesmo com essas dicas, ainda é possível que uma pessoa se contamine. Portanto, ao notar qualquer sinal dos sintomas do novo coronavírus, que são os mesmos de um resfriado comum, é importante buscar assistência médica. Ligue antes de sair de casa!';
  auxFace = 'Nunca encoste nos olhos, nariz ou boca sem higienizar as mãos imediatamente antes. Elas podem conduzir o vírus de uma superfície infectada até as áreas mais sensíveis ao contágio. Use máscara';

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  openSnackBarHand() {
    this._snackBar.open(this.auxHand, 'X', {
      duration: 3000
    });
  }

  openSnackBarTosse() {
    this._snackBar.open(this.auxTosse, 'X', {
      duration: 3000
    });
  }

  openSnackBarDistanc() {
    this._snackBar.open(this.auxDistanc, 'X', {
      duration: 3000
    });
  }

  openSnackBarHouse() {
    this._snackBar.open(this.auxHouse, 'X', {
      duration: 3000
    });
  }

  openSnackBarFace() {
    this._snackBar.open(this.auxFace, 'X', {
      duration: 3000
    });
  }

}
