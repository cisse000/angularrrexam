import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user.model';
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
  selector: 'app-user',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MatTable, MatColumnDef, MatHeaderCell, MatCell, MatAnchor,
    MatButton, MatHeaderRow, MatRow, MatRowDef, MatHeaderRowDef, MatCellDef, MatHeaderCellDef,
    NgIf],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
//Variable de classe qui contiendra notre tableau de user
  user: User[] = [];
  displayedColumns: string[] = ['username', 'email','password','quotientfamilial','salaire'];

  constructor(private auth: AuthService, private userService: UserService) {
  }

  authenticated() {
    return this.auth.authenticated;
  }

//Fonction exécutée à l'initiation du component
  ngOnInit(): void {
//Récupère les données du userService.
    this.userService.getUser().subscribe((data: User[]) => {
//Mets les données dans notre variable de classe user
      this.user = data;
    });
  }

  deleteUser(id: number) {
    this.userService.delete(id).subscribe(res => {
      this.user = this.user.filter(item => item.id !== id);
    })
  }
}
