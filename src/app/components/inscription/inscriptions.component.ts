import {Component, OnInit} from '@angular/core';
import {MatAnchor} from '@angular/material/button';
import {RouterLink} from '@angular/router';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef, MatTable
} from '@angular/material/table';
import {NgIf} from '@angular/common';
import {FormControl} from '@angular/forms';
import {map, Observable, startWith} from 'rxjs';
import {Cours} from '../../models/cours.model';
import {CoursService} from '../../services/cours.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-mes-inscriptions',
  imports: [
    MatAnchor,
    RouterLink,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatTable,
    NgIf
  ],
  templateUrl: './inscriptions.component.html',
  styleUrl: './inscriptions.component.css'
})
export class InscriptionsComponent implements OnInit{
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
