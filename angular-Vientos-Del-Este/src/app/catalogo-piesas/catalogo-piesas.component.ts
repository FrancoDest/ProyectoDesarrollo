import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Partes } from '../Partes';
import { PartsService } from '../Servicios/parts.service';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ImagenesService } from '../Servicios/imagenes.service';

@Component({
  selector: 'app-catalogo-piesas',
  templateUrl: './catalogo-piesas.component.html',
  styleUrls: ['./catalogo-piesas.component.css']
})
export class CatalogoPiesasComponent implements OnInit {

  partList: Partes[] = [];

  closeResult = '';
  nuevaCategoria = "";
  nuevaAltura = 0;
  nuevaRE = 0;
  nuevaMat = "";
  nombreDeArchivo = "";

  constructor(private imagenesService : ImagenesService,
    public modal: NgbModal, private Service: PartsService, private http: HttpClient
  ) {
  }

  ngOnInit(): void {
    this.getPartes();
  }
  getPartes(): void {
    this.Service.getPart().subscribe(partList => this.partList = partList);
  }
  crearParte() {
    if (this.nuevaMat != "") {//Me fijo que tenga un material asignado
      let nuevafoto = "";
      if (this.nombreDeArchivo == ""){//Me fijo si el archivo tiene nombre para que en caso de que no, significa que no se subio archivo y se le meten unos predeterminados
      switch (this.nuevaCategoria) {
        case "Aspa": {
          nuevafoto = "assets/aspaAluminio.png";
          break;
        }
        case "Cuerpo": {
          nuevafoto = "assets/cuerpoPlata.png";
          break;
        }
        case "Base": {
          nuevafoto = "assets/BasePlata.png";
          break;
        }
      }}else{
        this.saveBase64File()
        nuevafoto = "assets/" + this.nombreDeArchivo;
      }
      
      let nuevaParte = new Partes(this.nuevaCategoria, this.nuevaAltura, this.nuevaRE, this.nuevaMat, nuevafoto);
      this.Service.addPart(nuevaParte).subscribe(pieza => {
        this.partList.push(nuevaParte);
      })
      this.vaciar();
      nuevafoto = "";
    }
    
  }
  vaciar() {
    this.nuevaCategoria = "";
    this.nuevaAltura = 0;
    this.nuevaRE = 0;
    this.nuevaMat = "";
  }
  deleteParte(parte: Partes) {
    this.Service.deletePart(parte).subscribe();
    this.partList = this.partList.filter(p => p != parte);
  }
  base64 = "";
  fileSelected?: any;
  //Imagenes
  handleUpload(event: any) {
    this.fileSelected = event.target.files[0];//Por si al usuario se le ocurre agregar varias fotos
    this.nombreDeArchivo =this.fileSelected.name;
    console.log(this.nombreDeArchivo);
    
    const reader = new FileReader();
    reader.readAsDataURL(this.fileSelected as Blob);
    reader.onload = () => {
      this.base64 = reader.result as string;
    };
  }

  saveBase64File(): void {
    let body = {
      name: this.nombreDeArchivo,
      base64: this.base64
    }
    this.imagenesService.postImage(body);
  }



}
