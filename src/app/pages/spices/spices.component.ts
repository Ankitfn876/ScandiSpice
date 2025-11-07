import { Component } from '@angular/core';
import { MaterialModule } from '../../share/material.module';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-spices',
  imports: [MaterialModule,NgFor],
  templateUrl: './spices.component.html',
  styleUrl: './spices.component.css'
})
export class SpicesComponent {
 spices = [
    {
      name: 'Turmeric Powder',
      description: 'Bright yellow spice used for flavor and color, known for its anti-inflammatory properties.',
      image: 'assets/spices/turmeric.png'
    },
    {
      name: 'Red Chilli Powder',
      description: 'Adds heat and color to any dish, made from sun-dried red chilies.',
      image: '/assets/spices/red-chilli.jpg'
    },
    {
      name: 'Coriander Powder',
      description: 'Mildly sweet and aromatic, used in curries and gravies.',
      image: 'assets/spices/coriander.jpg'
    },
    {
      name: 'Cumin Seeds',
      description: 'Earthy and nutty flavor spice, essential in Indian cooking.',
      image: 'assets/spices/cumin.jpg'
    },
    {
      name: 'Black Pepper',
      description: 'Sharp and pungent, the king of spices used worldwide.',
      image: 'assets/spices/black-pepper.jpg'
    }
  ];
}
