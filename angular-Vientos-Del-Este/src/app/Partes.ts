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
    constructor(nuevaCategoria: string, nuevaAltura: Number, nuevaRE: Number, nuevaMat: string, nuevafoto: string)
    {
        this.Categoria= nuevaCategoria;
        this.Altura= nuevaAltura;
        this.ResistenciaEolica= nuevaRE;
        this.Foto= nuevafoto;
        this.Material= nuevaMat;
    }

}