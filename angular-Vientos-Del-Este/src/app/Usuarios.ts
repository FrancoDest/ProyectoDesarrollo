export interface Usuarios {
    _id?: number;
    Nombre: String;
    Clase: string;
    Contrasena: String;
    Estado?: boolean
}
export class Usuarios implements Usuarios {
    constructor(nombre: string, clase: string, contrasena: String) {
        this.Nombre = nombre;
        this.Clase = clase;
        this.Contrasena = contrasena;
    }
}
