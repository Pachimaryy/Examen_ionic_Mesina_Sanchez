import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FileService } from 'src/app/file.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  item !: FormGroup;

  constructor(
    private fileService : FileService,
    private formBuilder : FormBuilder,
    private router : Router,
  ) { }

  get name () {return this.item.get('name');}
  get detail() {return this.item.get('detail');}
  get imageURL(){return this.item.get('imageURL');}

  ngOnInit() {
    this.item = this.formBuilder.group({
      name:['',[Validators.required,Validators.minLength(3)]],
      detail:['',[Validators.required,Validators.maxLength(100)]],
      imageURL:['',[Validators.required,]]

    });
  }

  addItem(){
    console.log("Subiendo el Archivo...");
    this.fileService.addDocuemnt(
      'items',
      this.item.value
    );
    this.router.navigateByUrl('items',{replaceUrl:true});
  }

}
