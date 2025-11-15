import { Component } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { Mapa } from "./components/mapa/mapa";

@Component({
	selector: "app-root",
	imports: [MatToolbarModule, Mapa],
	templateUrl: "./app.html",
	styleUrl: "./app.css",
})
export class App {
	protected readonly title = "Visor de Áreas Protegidas";
}
