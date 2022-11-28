import { Component, OnInit } from '@angular/core';
import { Molino } from '../Molino';
import { Partes } from '../Partes';
import { WindmillsService } from '../Servicios/windmills.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-molino-listas',
  templateUrl: './molino-listas.component.html',
  styleUrls: ['./molino-listas.component.css']
})
export class MolinoListasComponent implements OnInit {

  penndingList: Molino[] = [];
  approbedList: Molino[] = [];
  disapprobedList: Molino[] = [];

  molinoARechazar: any;

  constructor(private Service: WindmillsService, public modal: NgbModal) { }

  ngOnInit(): void {
    this.getMolinos();
  }

  getMolinos() {
    this.Service.getWindmill().subscribe(windmillList => (this.penndingList = windmillList.filter(m => m.estado == "Pendiente")))
    this.Service.getWindmill().subscribe(windmillList => (this.approbedList = windmillList.filter(m => m.estado == "Aprobado")))
    this.Service.getWindmill().subscribe(windmillList => (this.disapprobedList = windmillList.filter(m => m.estado == "Rechazado")))
  }

  aprobar(molino: Molino): void {
    if (molino.estado == "Pendiente") {
      let aprobado = this.penndingList.filter(m => m == molino);
      this.penndingList = this.penndingList.filter(m => m != aprobado[0]);
      aprobado[0].estado = "Aprobado";
      this.approbedList.concat(aprobado[0]);
      this.Service.approveWindmill(molino).subscribe();
    }
  }
  rechazar(): void {
    if (this.molinoARechazar.estado == "Pendiente") {
      let rechazado = this.penndingList.filter(m => m == this.molinoARechazar);
      this.penndingList = this.penndingList.filter(m => m != rechazado[0]);
      rechazado[0].estado = "Rechazado";
      this.disapprobedList.concat(rechazado[0]);
      console.log(this.disapprobedList.length)
      this.Service.disapproveWindmill(this.molinoARechazar).subscribe();

    }
  }
  temporal(molino: Molino) {
    this.molinoARechazar = molino;
  }

}
