import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-onac-home',
  imports: [HeaderComponent],
  templateUrl: './onac-home.component.html',
  styleUrl: './onac-home.component.css',
  encapsulation: ViewEncapsulation.None
})
export class OnacHomeComponent {
  constructor(private router: Router) { }

  prosseguir(): void {
    this.router.navigate(['/onac/form']);
  }
}
