import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { FileService } from '../file.service';
import { FormBuilder, FormGroup, Validators, FormControl  } from '@angular/forms';
import { ItemService } from './item.service';


@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {

  items !:any[];

  constructor(
    private fileService: FileService,
    private itemService: ItemService,
    private router : Router
    
    
  ) { }

  ngOnInit() {
    this.itemService.getAllItems().then( res => {
      this.items = res;
      console.log(this.items);
    });


    
  }

  ionRefresh() {
    // Actualiza la lista
    this.items.push('Item nuevo');
  }
  
  goTo(path:string){
    this.router.navigateByUrl('items/'+path);

  }

  goHome(){
    this.router.navigateByUrl('home');
  }

  goToAdd(){
    this.router.navigateByUrl('items/add');
  }

 
 

  



}
