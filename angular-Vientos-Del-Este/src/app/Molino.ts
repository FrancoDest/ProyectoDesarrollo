import { Partes} from './Partes'

export interface Molino{
    Base : Partes;
    Cuerpo : Partes;
    Aspa : Partes;
    Nombre: String;
    Descripcion:String;
    Precio : Number;
    Codigo: String;
    ResistenciaHeolica : Number;
    estado : boolean; //si fue ya fue aprobado
}
