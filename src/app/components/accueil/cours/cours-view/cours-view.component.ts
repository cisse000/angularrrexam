import { Component } from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {CoursService} from '../../../../services/cours.service';
import {Cours} from '../../../../models/cours.model';
import {
  MatCell,
  MatCellDef, MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable
} from '@angular/material/table';
import {MatAnchor, MatButton} from '@angular/material/button';
import {NgIf} from '@angular/common';
@Component({
  selector: 'app-cours-view',
  standalone: true,
  imports: [RouterLink, MatHeaderCell, MatCell, MatAnchor, MatHeaderRowDef, MatHeaderRow, MatRow, MatCellDef, MatTable, MatColumnDef, MatHeaderCellDef, MatButton, NgIf, MatRowDef],
  templateUrl: './cours-view.component.html',
  styleUrl: './cours-view.component.css'
})
export class CoursViewComponent {
  cours!:Cours;
  constructor(private coursService: CoursService, private route: ActivatedRoute ) { }
  ngOnInit():void{
    let id = this.route.snapshot.params['coursId'];
    this.coursService.findById(id).subscribe((data: Cours)=>{
      this.cours = data;
    });
  }
}
