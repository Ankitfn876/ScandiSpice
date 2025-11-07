import { Component } from '@angular/core';
import { MaterialModule } from '../../share/material.module';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-blends',
  imports: [MaterialModule,NgFor],
  templateUrl: './blends.component.html',
  styleUrl: './blends.component.css'
})
export class BlendsComponent {
blends = [
    {
      name: 'Garam Masala',
      description: 'A classic Indian spice mix with aromatic flavors of cumin, cardamom, cinnamon, and cloves. Perfect for curries and gravies.',
      image: 'assets/blends/garam-masala.jpg'
    },
    {
      name: 'Curry Powder',
      description: 'A balanced blend of spices like coriander, turmeric, chili, and fenugreek for a rich curry flavor.',
      image: 'assets/blends/curry-powder.jpg'
    },
    {
      name: 'Tandoori Masala',
      description: 'Specially crafted for smoky grilled dishes, this mix adds depth and spice to tandoori recipes.',
      image: 'assets/blends/tandoori.jpg'
    },
    {
      name: 'Chaat Masala',
      description: 'Tangy, spicy, and flavorful — this blend enhances fruit salads, snacks, and street food favorites.',
      image: 'assets/blends/chaat-masala.jpg'
    },
    {
      name: 'Pav Bhaji Masala',
      description: 'A perfect mix of spices that brings out the authentic Mumbai street food flavor.',
      image: 'assets/blends/pav-bhaji.jpg'
    },
    {
      name: 'Biryani Masala',
      description: 'A fragrant mix that adds rich aroma and deep flavor to all types of biryanis.',
      image: 'assets/blends/biryani.jpg'
    }
  ];
}
