import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  @ViewChild('typedText', { static: true }) typedText!: ElementRef;
  ngOnInit(): void {
    setTimeout(() => {
      const options = {
        strings: ['Full Stack Developer', 'Java Developer', 'AWS Engineer'],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
      };
      new Typed(this.typedText.nativeElement, options);
    },0);
   
}
}
