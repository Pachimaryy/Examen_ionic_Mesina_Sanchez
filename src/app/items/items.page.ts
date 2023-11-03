import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { FileService } from '../file.service';
import { FormBuilder, FormGroup, Validators, FormControl  } from '@angular/forms';


@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {

  objeto !: FormGroup;

  constructor(
    private router : Router,
    private fileService: FileService,
    private formBuilder : FormBuilder,
    
  ) { }

  get nombre (){ return this.objeto.get('nombre');}
  get descripcion (){ return this.objeto.get('descripcion');}
  get precio (){ return this.objeto.get('precio');}

  ngOnInit() {
    this.objeto = this.formBuilder.group({
      nombre : ['',[Validators.required, Validators.minLength(3)]],
      descripcion : ['',[Validators.required, Validators.minLength(1)]],
      precio : ['', [Validators.required, Validators.minLength(3)]]
    })
  }

  goTohome (){
    this.router.navigateByUrl('home');
  }

  subirArchivo (){
    const path = 'objetos/' + this.objeto.value.categoria + '/' + this.objeto.value.subCategoria;

    try {
      this.fileService.addCosa(
        this.objeto.value,
        path
      )
    } catch (e) {
      console.log("Error mi rey");
      console.log(e);
    }
  }



}
