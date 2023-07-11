import { Injectable, OnInit } from '@angular/core';
import { Submssion } from '../model/submission';

@Injectable({
  providedIn: 'root',
})
export class SubsmissionService implements OnInit {
  private submissions: Submssion[] = [];
  constructor() {
    this.submissions.push(
      new Submssion(
        1,
        'Sai Nath',
        '06-29-2023',
        'Spandana',
        'Tanisha',
        '70',
        'Vyshali',
        'Java'
      ),
      new Submssion(
        2,
        'Sai Nath',
        '06-29-2023',
        'Spandana',
        'Deloitte',
        '70',
        'Vyshali',
        'Java'
      )
    );
  }
  ngOnInit(): void {}

  getSubmissions() {
    return this.submissions;
  }

  updateSubmission(submission: Submssion) {
    this.getSubmissions().splice(submission.id - 1, 1, submission);
  }

  deleteSubmission(id: number) {
    let submissionId = this.submissions.findIndex((sub) => sub.id === id);
    this.submissions.splice(submissionId, 1);
    console.log(this.submissions);
  }

  addSubmission(submission: Submssion) {
    this.submissions.push(submission);
  }
}
