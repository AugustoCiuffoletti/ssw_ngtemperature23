import { Component, OnInit, VERSION } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TempCity } from './temp-city';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css'],
  imports: [CommonModule],
  standalone: true,
})
export class RootComponent implements OnInit {
  title: string = 'Temperature in Angular ' + VERSION.major;
  cities: Array<TempCity> = [
    new TempCity('Torino', '14'),
    new TempCity('Milano', '15'),
    new TempCity('Genova', '18'),
  ];
  seleziona(name: string) {
    var trovato: Array<TempCity> = this.cities.filter(
      el => ( el.nome === name )
    );
    this.selezione = trovato[0];
  }
  selezione: TempCity;
  clean() {
    this.selezione = undefined;
  }

  constructor() {}
  ngOnInit() {}
}
