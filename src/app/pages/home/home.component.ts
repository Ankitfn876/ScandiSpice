import { Component } from '@angular/core';
import { MaterialModule } from '../../share/material.module'; 
import { Meta,Title  } from '@angular/platform-browser';
import { NgFor, NgIf } from '@angular/common';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home',
  imports: [MaterialModule,CarouselModule,NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 constructor(private titleService: Title, private metaService: Meta) {}
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['‹', '›'],
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      1000: { items: 1 }   // ✅ show only one image at a time
    },
    nav: true
  };
email:string='pankaj@gmail.com';
  slides = [
    { id: 1, src: 'assets/blends/Blend.jpeg', alt: 'Blend spices' },
    { id: 2, src: 'assets/blends/tea.jpeg', alt: 'Tea' }
  ];
  ngOnInit(): void {
       this.metaService.addTags([
      { name: 'description', content: 'Discover authentic Indian spice blends adapted for Scandinavian cuisine.' },
      { name: 'keywords', content: 'Indian spices, Scandinavian food, masala, garam masala, Indian recipes' },
      { name: 'author', content: 'ScandiSpice Team' }
    ]);
  }
}
