import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { type Observable } from "rxjs";
import { type FeatureCollection } from "geojson";

@Injectable({
	providedIn: "root",
})
export class DatosMapa {
	private readonly http = inject(HttpClient);

	// Este método devuelve un Observable que emitirá la colección de "features" del archivo GeoJSON.
	// Esto permite que los componentes se suscriban para recibir los datos de forma asíncrona.
	public obtenerDatos(): Observable<FeatureCollection> {
		return this.http.get<FeatureCollection>(
			"assets/areas_protegidas.geojson",
		);
	}
}
