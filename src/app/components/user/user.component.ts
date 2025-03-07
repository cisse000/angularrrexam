import {Component, OnInit, ViewChild} from '@angular/core';
import {TatoueurService} from '../../services/tatoueur.service';
import {Tatoueur} from '../../models/tatoueur.model';
import {AuthService} from '../../services/auth.service';
import {RouterLink, RouterOutlet} from '@angular/router';
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from '@angular/material/table';
import {MatAnchor, MatButton} from '@angular/material/button';
import {MatPaginator} from '@angular/material/paginator';
import {NgIf} from '@angular/common';
@Component({
  selector: 'app-tatoueur',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MatTable, MatColumnDef, MatHeaderCell, MatCell, MatAnchor,
    MatButton, MatHeaderRow, MatRow, MatRowDef, MatHeaderRowDef, MatCellDef, MatHeaderCellDef,
    NgIf],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
//Variable de classe qui contiendra notre tableau de tatoueurs
  tatoueurs: Tatoueur[] = [];
  displayedColumns: string[] = ['nom', 'style'];

  constructor(private auth: AuthService, private tatoueurService: TatoueurService) {
  }

  authenticated() {
    return this.auth.authenticated;
  }

//Fonction exécutée à l'initiation du component
  ngOnInit(): void {
//Récupère les données du tatoueurService.
    this.tatoueurService.getTatoueurs().subscribe((data: Tatoueur[]) => {
//Mets les données dans notre variable de classe tatoueurs
      this.tatoueurs = data;
    });
  }

  deleteTatoueur(id: number) {
    this.tatoueurService.delete(id).subscribe(res => {
      this.tatoueurs = this.tatoueurs.filter(item => item.id !== id);
    })
  }
}
