import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiImgService } from '../api-img.service';

@Component({
  selector: 'app-cs-listar-img',
  templateUrl: './cs-listar-img.component.html',
  styleUrls: ['./cs-listar-img.component.css']
})
export class CsListarImgComponent implements OnInit {

  img: any[] = [];

  

  constructor(
    private apiImg: ApiImgService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.apiImg.getAll()
      .subscribe((img: any) => {
        console.log('img', img);
        this.img = img._embedded.img;
      })
  }

 

}
