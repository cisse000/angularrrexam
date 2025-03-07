import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-compte',
  imports: [
    ReactiveFormsModule,
    MatButton
  ],
  templateUrl: './compte.component.html',
  styleUrl: './compte.component.css'
})
export class CompteComponent {
  compteForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.compteForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }



  submit() {
    if (this.compteForm.valid) {
      this.http.post('http://localhost:8080/user', this.compteForm.value)
        .subscribe({
          next: (response) => console.log('Compte créé avec succès!', response),
          error: (error) => console.error('Erreur lors de la création du compte', error)
        });
    }
  }
}
