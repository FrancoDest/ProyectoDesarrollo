import { IPartes } from '../IPartes';
import { Partes } from '../Partes';
import { PARTES } from './ListaDePartes';
import { Molino } from '../Molino';
import { cuerpo1, cuerpo2,cuerpo3,cuerpo4,cuerpo5 } from './cuerposElegidos';
import { aspa1,aspa2,aspa3,aspa4,aspa5 } from './aspasElegidas';
import { base1, base2, base3, base4, base5 } from './basesElegidas';




export const MOLINOS: Molino[] =[

    {Cuerpo: cuerpo1,Aspa: aspa1,Base: base1,Nombre: "Molino1",Descripcion:"descrimpcion de este molino",Precio:2000,Codigo:"sj23m3",ResistenciaHeolica:900,estado:false },
    {Cuerpo: cuerpo2,Aspa: aspa2,Base: base2,Nombre: "Molino2",Descripcion:"Otra descrimcion",Precio:7777,Codigo:"l2k4",ResistenciaHeolica:82828, estado:false },
    {Cuerpo: cuerpo3,Aspa: aspa3,Base: base3,Nombre: "Molino3",Descripcion:"description the third",Precio:24824000,Codigo:"sds9uf89s",ResistenciaHeolica:937842, estado:false },
    {Cuerpo: cuerpo4,Aspa: aspa4,Base: base4,Nombre: "Molino4",Descripcion:"cuadrilatera",Precio:24214,Codigo:"3j3j4",ResistenciaHeolica:93939, estado:false },
    {Cuerpo: cuerpo5,Aspa: aspa5,Base: base5,Nombre: "Molino5",Descripcion:"pentadescripcion",Precio:47474,Codigo:"9fnfi",ResistenciaHeolica:33333, estado:false },

];