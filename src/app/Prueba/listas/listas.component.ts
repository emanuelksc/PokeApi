import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ComboDTO } from '../../DTO/combo';
import { ComboGuardado } from '../../DTO/comboGuardado';
import { GuardarDTO } from '../../DTO/guardado';
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
  ObtenerValores() {
    let listaguardado = new GuardarDTO();
    let combo = new ComboGuardado();
    combo.ID = this.dataFormGroup.controls['selectlista'].value;
    combo.Nombre = 'Nombre';
    listaguardado.Combo = combo;

    return listaguardado;
  }

  Guardar() {
    let guardado = new GuardarDTO();
    guardado = this.ObtenerValores();
    console.log('Guardado', guardado);
  }
}
