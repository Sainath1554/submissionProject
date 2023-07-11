import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Submssion } from 'src/app/model/submission';
import { SubsmissionService } from 'src/app/services/subsmission.service';

@Component({
  selector: 'app-submission-edit',
  templateUrl: './submission-edit.component.html',
  styleUrls: ['./submission-edit.component.scss'],
})
export class SubmissionEditComponent implements OnInit {
  submissionData: any;
  keys: any;
  constructor(
    private submissionService: SubsmissionService,
    private currentRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log(this.currentRoute.snapshot.params['id']);
    this.submissionData = this.submissionService
      .getSubmissions()
      .find(
        (submission) =>
          submission.id === +this.currentRoute.snapshot.params['id']
      );
    this.keys = Object.keys(this.submissionData);
  }

  submitForm() {
    console.log(this.submissionData);
    this.submissionService.updateSubmission(this.submissionData);
    this.router.navigate(['../../submission'], {
      relativeTo: this.currentRoute,
    });
  }
}
