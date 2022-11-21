import { Partes} from './Partes'

export interface Molino{
    _id? : Number;
    Aspa : Partes;
    Cuerpo : Partes;
    Base : Partes;
    Nombre: String;
    Descripcion: String;
    estado : boolean; //si fue ya fue aprobado
}
export class Molino implements Molino{
    constructor(aspa : Partes, cuerpo: Partes, base: Partes, nombre: string, desc: string)
    {
        this.Aspa = aspa;
        this.Cuerpo = cuerpo;
        this.Base = base;
        this.Nombre = nombre;
        this.Descripcion = desc;
        this.estado = false; 
    }
}