import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router : Router, public modal : NgbModal) { }

  ngOnInit(): void {
  }
  login(){//Lo cree para que haya un metodo para cerrar sesión
    localStorage.clear();
    this.router.navigateByUrl('');
  }
}
