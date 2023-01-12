import { Component } from '@angular/core';

@Component({
  selector: 'app-list-navbar',
  templateUrl: './list-navbar.component.html',
  styleUrls: ['./list-navbar.component.scss'],
})
export class ListNavbarComponent {
  constructor() {}
  genders: string[] = [
    'Inicio',
    'Animes',
    'Dramas',
    'Cine independiente',
    'De intriga',
    'Peliculas de terror',
    'Películas latinoamericanas',
    'Deportes y salud física',
    'Películas patra ver en familia',
    'Series',
    'Cine romántico',
    'Comedias',
    'Música y musicales',
    'Sci-fi y fantasía',
    'Acción y aventura',
    'Películas premiadas',
    'Documentales',
    'Disponibles para descargar',
    'Peliculas Internacionales',
  ];
  selected?: string = this.genders[0];
  fnSelected(value: string): void {
    if(this.selected != value) this.selected = this.genders.find(gender => gender === value);
    console.log(this.selected);
  }
}
