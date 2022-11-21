//ionic tutorial orientado a la app

export interface Partes{
    _id?: Number;
    Categoria : String;
    Foto: String;
    Altura : Number;
    ResistenciaEolica : Number;
    Material : String;
}
export class Partes implements Partes{
    constructor(nuevaCategoria: string, nuevaAltura: Number, nuevaRE: Number, nuevaMat: string)
    {
        this.Categoria= nuevaCategoria;
        this.Altura= nuevaAltura;
        this.ResistenciaEolica= nuevaRE;
        this.Foto="assets/aspaAluminio.png"
        this.Material= nuevaMat;
    }

}