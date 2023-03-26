import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ComboDTO } from '../../DTO/combo';
import { InformacionService } from '../../service/informacion.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css'],
})
export class ListasComponent implements OnInit {
  listaCombo: ComboDTO[] = [];
  dataFormGroup: FormGroup;
  idCombo: number = 0;
  constructor(private informacion: InformacionService) {
    this.dataFormGroup = new FormGroup({
      selectlista: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.ObtenerLista();
  }

  ObtenerLista() {
    this.listaCombo = this.informacion.Obtenerlistas();

    console.log(this.listaCombo);
  }
}
