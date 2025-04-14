import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProject } from '../../interfaces/project.interface';
import { ProjectStoreService } from '../../services/project-store.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-project',
  imports: [CommonModule],
  templateUrl: './view-project.component.html',
  styleUrl: './view-project.component.scss'
})
export class ViewProjectComponent implements OnInit {
  project : IProject | any = null;
  constructor(private route: ActivatedRoute, private projectStoreService : ProjectStoreService) {}

  ngOnInit() {  
    const projectId = this.route.snapshot.paramMap.get('id');
    if (!projectId) {
      console.error('Project ID is not provided');
      return;
    }
    this.project = this.projectStoreService.getProject(Number(projectId));
    console.log('Project ID:', projectId);
  }

}
