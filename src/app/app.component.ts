import { Component } from '@angular/core';
import { LayoutComponent } from './core/layout/layout.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
  constructor(private router: Router) {
  if (location.pathname === '/' || location.pathname === '') {
    this.router.navigate(['/home']);
  }
}
}
