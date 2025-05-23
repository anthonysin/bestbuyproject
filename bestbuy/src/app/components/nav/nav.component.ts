import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: false,
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  constructor(private router: Router) {}

  navigateToCategory(event: any) {
    const category = event.target.value;
    if (category) {
      this.router.navigate(['/categories', category]);
    }
  }
}
