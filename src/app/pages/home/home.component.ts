import { Component } from '@angular/core';
import { MaterialModule } from '../../share/material.module'; 
import { Meta,Title  } from '@angular/platform-browser';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [MaterialModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle('🌶️ ScandiSpice | Indian Flavors for Nordic Kitchens');
    this.metaService.addTags([
      { name: 'description', content: 'Discover authentic Indian spice blends adapted for Scandinavian cuisine.' },
      { name: 'keywords', content: 'Indian spices, Scandinavian food, masala, garam masala, Indian recipes' },
      { name: 'author', content: 'ScandiSpice Team' }
    ]);
  }
}
