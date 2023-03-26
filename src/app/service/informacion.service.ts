import { Injectable } from '@angular/core';
import { ComboDTO } from '../DTO/combo';
@Injectable({
  providedIn: 'root',
})
export class InformacionService {
  ComboPrueba: ComboDTO[] = [
    { id: 1, nombre: 'lista1' },
    { id: 2, nombre: 'lista2' },
  ];

  Obtenerlistas(): ComboDTO[] {
    return this.ComboPrueba;
  }
}
