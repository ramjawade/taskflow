import { Component, OnInit } from '@angular/core';
import { IUser } from '../../core/interfaces/user.interface';
import { UserService } from '../../core/services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toolbar',
  imports: [CommonModule],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  user: IUser | null = null;
  userInitials: string = '';
  userAvatarColor: string = '#007bff'; // Default color

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.user = this.userService.getUser();
    if (this.user?.name) {
      this.userInitials = this.getInitials(this.user.name);
      this.userAvatarColor = this.generateAvatarColor(this.user.name);
    }
  }

  private getInitials(name: string): string {
    const nameParts = name.split(' ');
    const initials = nameParts
      .map((part) => part.charAt(0).toUpperCase())
      .join('');
    return initials.slice(0, 2); // Limit to 2 characters
  }

  private generateAvatarColor(name: string): string {
    // Generate a color based on the user's name
    const hash = name
      .split('')
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const colors = ['#007bff', '#28a745', '#dc3545', '#ffc107', '#17a2b8'];
    return colors[hash % colors.length];
  }
}
