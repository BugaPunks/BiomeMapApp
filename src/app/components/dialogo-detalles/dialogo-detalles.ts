import { Component, inject } from "@angular/core";
import {
	MAT_DIALOG_DATA,
	MatDialogModule,
	MatDialogRef,
} from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { type Feature } from "geojson";

@Component({
	selector: "app-dialogo-detalles",
	imports: [MatDialogModule, MatButtonModule],
	templateUrl: "./dialogo-detalles.html",
	styleUrl: "./dialogo-detalles.css",
})
export class DialogoDetalles {
	// Inyectamos MAT_DIALOG_DATA para recibir los datos que se pasan al abrir el diálogo.
	public readonly data: Feature = inject(MAT_DIALOG_DATA);
	private readonly dialogRef = inject(MatDialogRef<DialogoDetalles>);

	public cerrar(): void {
		this.dialogRef.close();
	}
}
