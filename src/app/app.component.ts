import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = '1.Introducation';
  counter: number = 1;
  inputText: string = 'My text';

  // attr binding
  isDisabled: boolean = false;
  imgSrc: string = '../assets/ngImg.jpg';

  // style binding
  titleHeader: string = 'Angular Introduction';
  bg_color: string = "green";
  fnt_color: string = "red";
  description: string = "This is my new description";

  // class binding
  redText: string = 'yes';

  // ngClass
  message: string = "This is warning message";
  classes: string = "danger text-size"

  incrimentCounter(){
    this.counter ++;
  }

  // ng Style
  selectorColor: string = "blue";

  // Structure Directives ngIf ngFor ngSwitch
  isLogedIn: boolean= true;
  username: string = "Nacer";

  names: string[] = ["Ali", "Omar","Jhon"];

  grade: string = 'M';
}
