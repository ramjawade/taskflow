import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { IProject } from '../../../common/interfaces/project.interface';
import { ProjectStoreService } from '../../../common/services/project-store.service';

@Component({
  selector: 'app-view-project',
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.scss']
})
export class ViewProjectComponent implements OnInit {
  project: IProject | any = null;

  constructor(private route: ActivatedRoute, private projectStoreService: ProjectStoreService) {}

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
