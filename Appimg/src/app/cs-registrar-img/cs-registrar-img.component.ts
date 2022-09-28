import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiImgService } from '../api-img.service';

@Component({
  selector: 'app-cs-registrar-img',
  templateUrl: './cs-registrar-img.component.html',
  styleUrls: ['./cs-registrar-img.component.css']
})
export class CsRegistrarImgComponent implements OnInit {

  img: any[] = [];

  formulario: FormGroup = this.fb.group({
    imagenes: new FormControl('', [Validators.required])
  });

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

  save() {
    if (this.formulario.valid) {
      const values = this.formulario.value;
      this.apiImg.create(values)
        .subscribe(() => {
          this.getAll();
          this.formulario.setValue({
            imagenes: ''
          })
        })
      confirm('Se envio correctamente !!');
    }
    else {
      confirm('No se envio correctamente !!');
    }
  }

  getImagenes() {
    return this.formulario.get('imagenes');
  }

}
