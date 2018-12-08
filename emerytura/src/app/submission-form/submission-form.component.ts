import { Component, OnInit } from '@angular/core';
import { Submission } from '../submission';

@Component({
  selector: 'app-submission-form',
  templateUrl: './submission-form.component.html',
  styleUrls: ['./submission-form.component.css']
})
export class SubmissionFormComponent implements OnInit {

  constructor() { }

  model = new Submission(36, 5, 5311);

  ngOnInit() {
  }
}
