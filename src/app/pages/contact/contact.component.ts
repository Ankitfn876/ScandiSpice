import { Component } from '@angular/core';
import { MaterialModule } from '../../share/material.module';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-contact',
  imports: [MaterialModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
 email:string='pankaj@gmail.com';
}
