import { Component } from '@angular/core';
import {TatoueurService} from '../../../services/tatoueur.service';
import {ActivatedRoute, Router, RouterLink, RouterOutlet} from '@angular/router';
import {Tatoueur} from '../../../models/tatoueur.model';
import {UserComponent} from '../user.component';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatError, MatFormField, MatLabel} from '@angular/material/form-field';
import {MatButton} from '@angular/material/button';
import {MatInput} from '@angular/material/input';
@Component({
  selector: 'app-tatoueur-edit',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, MatError, MatButton, MatFormField, MatInput,
    MatLabel],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css'
})
export class UserEditComponent {
  id!:number;
  tatoueur!:Tatoueur;
  form!: FormGroup;
  constructor(private tatoueurService: TatoueurService, private route: ActivatedRoute, private router:
  Router ) { }
  ngOnInit():void {
    this.id = this.route.snapshot.params['tatoueurId'];
    this.tatoueurService.findById(this.id).subscribe((data: Tatoueur)=>{
      this.tatoueur = data;
      this.form = new FormGroup({
        nom: new FormControl(this.tatoueur.nom, [Validators.required]),
        style: new FormControl(this.tatoueur.style, Validators.required)
      });
    });
  }
  submit(){
    this.tatoueurService.update(this.id, this.form.value).subscribe((res:any) => {
      this.router.navigate(['/tatoueur']);
    })
  }
}

