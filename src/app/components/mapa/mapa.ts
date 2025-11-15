import { Component, inject, type OnInit } from "@angular/core";
import { LeafletModule } from "@bluehalo/ngx-leaflet";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatDialog } from "@angular/material/dialog";
import { CommonModule } from "@angular/common";
import {
	geoJSON,
	latLng,
	tileLayer,
	type Map,
	type MapOptions,
	type GeoJSON as LeafletGeoJSON,
	type Layer,
} from "leaflet";
import { DatosMapa } from "../../services/datos-mapa";
import { DialogoDetalles } from "../dialogo-detalles/dialogo-detalles";
import { type Feature, type FeatureCollection } from "geojson";

@Component({
	selector: "app-mapa",
	imports: [LeafletModule, MatProgressSpinnerModule, CommonModule],
	templateUrl: "./mapa.html",
	styleUrl: "./mapa.css",
})
export class Mapa implements OnInit {
	private readonly datosMapaService = inject(DatosMapa);
	private readonly dialog = inject(MatDialog);

	public estaCargando = true;
	public geoJSONLayer?: LeafletGeoJSON;

	public opcionesMapa: MapOptions = {
		layers: [
			tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
				maxZoom: 18,
				attribution: "© OpenStreetMap contributors",
			}),
		],
		zoom: 5,
		center: latLng(-17.393, -64.825),
	};

	public ngOnInit(): void {
		this.datosMapaService.obtenerDatos().subscribe((datos) => {
			this.crearCapaGeoJSON(datos);
			this.estaCargando = false;
		});
	}

	public onMapaListo(mapa: Map): void {
		if (this.geoJSONLayer) {
			this.geoJSONLayer.addTo(mapa);
		}
	}

	private crearCapaGeoJSON(datos: FeatureCollection): void {
		this.geoJSONLayer = geoJSON(datos, {
			onEachFeature: (feature, layer) => {
				layer.on({
					click: () => this.abrirDialogo(feature),
				});
			},
		});
	}

	private abrirDialogo(feature: Feature): void {
		this.dialog.open(DialogoDetalles, {
			data: feature,
			width: "400px",
		});
	}
}
