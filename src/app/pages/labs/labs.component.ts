import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.scss',
})
export class LabsComponent {
  welcome = 'Welcome to my first applcation';
  tasks = [
    'Install Angular CLI',
    'Create Project',
    'Create Component',
    'Create Service',
  ];
}
