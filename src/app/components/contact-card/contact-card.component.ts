import { Component, Input } from '@angular/core';
import { myContact } from 'src/app/models/contact.model';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss'],
})
export class ContactCardComponent {
  @Input() item: myContact;

}
