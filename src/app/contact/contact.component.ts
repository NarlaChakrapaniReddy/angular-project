import { Component, OnInit } from '@angular/core';
declare function show(): void;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  ngOnInit(): void {
    const script=document.createElement('script');
    script.src='assets/myscript.js';
    script.async=true;
    document.body.appendChild(script);
  }
  callShowFunction() {
    show();
  }

}
