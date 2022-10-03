import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'urna-eletronica';

  valueInput1 = 0
  valueInput2 = 0

  testeValue1(){
    // verificar se o input 1 já tem valor, se tiver, preencher o valor no input2, senáo, preencher o valor no input1
    this.valueInput1 = 1
  }

  testeValue2(){
    console.log()
  }
}


