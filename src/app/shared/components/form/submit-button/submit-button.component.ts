import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'submit-button',
  templateUrl: './submit-button.component.html',
  styleUrls: ['./submit-button.component.css']
})
export class SubmitButtonComponent implements OnInit {

	@Input() label = "Button Label";

  constructor() { }

  ngOnInit() {
  }

}
