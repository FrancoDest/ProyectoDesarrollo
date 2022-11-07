import { IPartes} from './IPartes'

export interface Partes{
    Id: Number;
    Categoria : IPartes;
    Foto: String;
    Altura : Number;
    ResistenciaEolica : Number;
    Material : String;
}
