import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.scss',
})
export class LabsComponent {
  welcome = 'Welcome to my first applcation';
  tasks = signal([
    'Install Angular CLI',
    'Create Project',
    'Create Component',
    'Create Service',
  ]);
  name = signal('Brayan');
  age = '24';
  disabled = true;
  img = 'https://w3schools.com/howto/img_avatar.png';
  //Private variables can not be called in the html

  person = {
    name: 'brayan',
    age: 23,
    img: 'https://w3schools.com/howto/img_avatar.png',
  };

  clickHandler() {
    alert('Hola');
  }

  changeHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue);
  }

  keydownHandler(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }
}
