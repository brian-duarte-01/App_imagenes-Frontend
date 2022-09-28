import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiImgService } from '../api-img.service';

@Component({
  selector: 'app-cs-visualizar-img',
  templateUrl: './cs-visualizar-img.component.html',
  styleUrls: ['./cs-visualizar-img.component.css']
})
export class CsVisualizarImgComponent implements OnInit {

  img: any[] = [];

  formulario: FormGroup = this.fb.group({
    imagenes: new FormControl('', [Validators.required])
  });

  imgActualizar: any;

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

  update() {
    const values = this.formulario.value;
    console.log('values', values);
    this.apiImg.update(this.imgActualizar._links.self.href, values)
      .subscribe(() => {
        this.getAll();
        this.imgActualizar = null
        this.formulario.setValue({
          imagenes: ''
        })

      })
  }

  edit(img: any) {
    this.imgActualizar = img;
    this.formulario.setValue({
      imagenes: img.imagenes
    })
  }


  delete(img: any) {
    const ok = confirm('Desea eliminar esta Imagen !!');
    if (ok) {
      this.apiImg.delete(img._links.self.href)
        .subscribe(() => {
          this.getAll();
        })
    }
  }

}
