import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-je-suis',
  templateUrl: './je-suis.component.html',
  styleUrls: ['je-suis.component.scss']
})
export class JeSuisComponent implements OnInit {
  message: string;

  constructor() {
    this.message = 'JeSuisComponent message';
  }

  ngOnInit(): void {}
}
