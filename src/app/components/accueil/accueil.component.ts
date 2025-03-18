import { Component,OnInit, ViewChild } from '@angular/core';
import {MatFormField} from '@angular/material/form-field';
import {map, Observable, startWith} from 'rxjs';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {
  MatAutocomplete,
  MatAutocompleteOrigin,
  MatAutocompleteTrigger, MatOptgroup,
  MatOption
} from '@angular/material/autocomplete';
import {AsyncPipe, DatePipe, NgIf} from '@angular/common';
import {MatAnchor, MatButton} from '@angular/material/button';
import {RouterLink} from '@angular/router';
import {MatInput} from '@angular/material/input';
import {CoursService} from '../../services/cours.service';
import {User} from '../../models/user.model';
import {UserService} from '../../services/user.service';
import {Cours} from '../../models/cours.model';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow,
  MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from '@angular/material/table';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-accueil',
  imports: [
    MatFormField,
    ReactiveFormsModule,
    MatAutocompleteTrigger,
    MatAutocomplete,
    MatOption,
    AsyncPipe,
    MatButton,
    MatAnchor,
    RouterLink,
    MatInput,
    MatAutocompleteOrigin,
    MatOptgroup,
    DatePipe,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatCellDef,
    MatHeaderCellDef,
    NgIf,
    MatHeaderRowDef,
    MatRowDef,
    MatHeaderRow,
    MatRow
  ],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent implements OnInit{
  myControl = new FormControl('');
  options: string[] = ['cours par âge ', 'par date ', 'Option 3', 'Option 4'];
  filteredOptions: Observable<string[]>;
  cours: Cours[] = [];
  displayedColumns: string[] = ['nom', 'description', 'action'];


  constructor(private coursService: CoursService,private auth: AuthService) {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || ''))
    );

  }

  authenticated() { return this.auth.authenticated; }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  ngOnInit():void{
    this.coursService.getCours().subscribe((data:Cours[])=> {
      this.cours = data;
    });
  }



}
