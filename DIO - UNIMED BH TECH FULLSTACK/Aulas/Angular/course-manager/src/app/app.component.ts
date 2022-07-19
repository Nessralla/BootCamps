import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // Criar uma tag html (diretiva)
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'course-manager'; //atributo componente
  name:string = 'Jhon';
}
