import { Component } from '@angular/core';
import {UserService} from '../../../services/user.service';
import {ActivatedRoute, Router, RouterLink, RouterOutlet} from '@angular/router';
import {User} from '../../../models/user.model';
import {UserComponent} from '../user.component';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatError, MatFormField, MatLabel} from '@angular/material/form-field';
import {MatButton} from '@angular/material/button';
import {MatInput} from '@angular/material/input';
@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, MatError, MatButton, MatFormField, MatInput,
    MatLabel],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css'
})
export class UserEditComponent {
  id!:number;
  user!:User;
  form!: FormGroup;
  constructor(private userService: UserService, private route: ActivatedRoute, private router:
  Router ) { }
  ngOnInit():void {
    this.id = this.route.snapshot.params['userId'];
    this.userService.findById(this.id).subscribe((data: User)=>{
      this.user = data;
      this.form = new FormGroup({
        nom: new FormControl(this.user.nom, [Validators.required]),
        style: new FormControl(this.user.style, Validators.required)
      });
    });
  }
  submit(){
    this.userService.update(this.id, this.form.value).subscribe((res:any) => {
      this.router.navigate(['/user']);
    })
  }
}
