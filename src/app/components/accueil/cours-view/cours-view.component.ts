import { Component } from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {CoursService} from '../../../services/cours.service';
import {Cours} from '../../../models/cours.model';
@Component({
  selector: 'app-cours-view',
  standalone: true,
  imports: [ RouterLink],
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
