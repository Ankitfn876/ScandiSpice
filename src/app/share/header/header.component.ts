import { Component, HostListener } from '@angular/core';
import { MaterialModule } from '../material.module';
import { MatIcon } from "@angular/material/icon";
import { MatNavList } from "@angular/material/list";
import { MatToolbar } from "@angular/material/toolbar";
import { NgIf } from '@angular/common';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-header',
  imports: [MatIcon, MatNavList, MatToolbar, NgIf, MaterialModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMobileMenuOpen = false;
  isScrolled = false;
  currentRoute: string = '';
  activeSection: string = 'home';
  constructor(private route: Router) {
    this.currentRoute = this.route.url.replace('/', '');
  }
  toggleMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
  // Detect scroll position
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50; // add shadow after 50px scroll
  }
ngOnInit() {
  window.addEventListener('scroll', () => {
    this.highlightSectionOnScroll();
  });
}

scrollToSection(sectionId: string) {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  this.activeSection = sectionId; // set active immediately on click
}
highlightSectionOnScroll() {
  const sections = ['home', 'about', 'divkit', 'tea', 'spices', 'learn', 'contact'];

  for (let sec of sections) {
    const element = document.getElementById(sec);
    if (element) {
      const rect = element.getBoundingClientRect();

      // 👇 If section is visible in viewport
      if (rect.top <= 150 && rect.bottom >= 150) {
        this.activeSection = sec;
        break;
      }
    }
  }
}

  // scrollToSection(sectionId: string) {
  //   const element = document.getElementById(sectionId);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //   }
  // }
  // ✅ Simple route navigation & active page tracking
  navigateTo(page: string): void {
    this.currentRoute = page;
    this.route.navigate([`/${page}`]);
    this.isMobileMenuOpen = false; // close mobile menu after click
  }
  isActive(page: string): boolean {
    return this.currentRoute === page;
  }
  gohome(): void {
    this.route.navigate(['/home']);
  }
  gospices(): void {
    this.route.navigate(['/spices']);
  }
  goblends(): void {
    this.route.navigate(['/blends']);
  }
  gocontact(): void {
    this.route.navigate(['/contact']);
  }

  logo:string="assets/lg.jpeg";


}
