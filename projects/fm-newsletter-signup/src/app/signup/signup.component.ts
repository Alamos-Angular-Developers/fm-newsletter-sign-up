import { Component } from '@angular/core';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'signup-main',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

list: string[] = [
  'Product discovery and building what matters',
  'Measuring to ensure updates are a success',
  'And much more!'
];

}

