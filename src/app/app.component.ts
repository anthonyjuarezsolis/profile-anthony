import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;

  lugares: any = [
    {
      nombre: "item 1",
      active: true,
      edad: 18,
      cercania: 1,
      distancia: 10
    },
    {
      nombre: "item 2",
      active: false,
      edad: 15,
      cercania: 2,
      distancia: 20
    },
    {
      nombre: "item 3",
      active: true,
      edad: 18,
      cercania: 3,
      distancia: 5
    }
  ];
  constructor() {}
}