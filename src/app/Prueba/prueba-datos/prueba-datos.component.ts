import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { PokemonListadDTO } from '../../DTO/pokemon-lista';
import { PokemonService } from '../../service/pokemon.service';

@Component({
  selector: 'app-prueba-datos',
  templateUrl: './prueba-datos.component.html',
  styleUrls: ['./prueba-datos.component.css'],
})
export class PruebaDatosComponent implements OnInit {
  PokemonLista: PokemonListadDTO[] = [];

  NombrePokemonBuscar: string = '';
  dataFormGroup: FormGroup;

  constructor(
    private pokemonservice: PokemonService,
    private http: HttpClient
  ) {
    this.dataFormGroup = new FormGroup({
      inputNombrePokemon: new FormControl(),
      inputTextoInicial: new FormControl(),
    });
  }
  ngOnInit(): void {
    this.AsignarValoresAControles();
  }

  listas() {
    let lista = new PokemonListadDTO();
    lista.name = this.dataFormGroup.controls['inputNombrePokemon'].value;
    console.log('nombre PK', lista);
  }

  NombrePokemonBuscador() {
    this.NombrePokemonBuscar =
      this.dataFormGroup.controls['inputNombrePokemon'].value;
    this.ObtenerConfiguracion();
    this.listas();
  }
  ObtenerConfiguracion() {
    forkJoin([
      this.pokemonservice.ObtenerPokemon(this.NombrePokemonBuscar),
    ]).subscribe((data) => {
      this.PokemonLista = data;
    });
  }
  limpiarBuscador() {
    this.dataFormGroup.controls['inputNombrePokemon'].reset();
    this.PokemonLista = [];
  }

  AsignarValoresAControles() {
    this.dataFormGroup.controls['inputTextoInicial'].setValue('Poder');
  }

  // simulate 3 requests with different delays

  /* sumar() {
    this.respuesta = this.numero1 + this.numero2;
    if (this.respuesta % 2 === 0) {
      this.parinpar = 'par';
    } else {
      this.parinpar = 'inpar';
    }
  }*/
  /*sumar() {
    this.respuesta = +this.numero1 + +this.numero2;

    suma de dos numeros a partir de <input type="text">
  }*/

  /* sumar() {
    this.respuesta = Number(this.numero1) + Number(this.numero2);
  }*/
}
