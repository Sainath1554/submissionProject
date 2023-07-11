import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Submssion } from 'src/app/model/submission';
import { SubsmissionService } from 'src/app/services/subsmission.service';

@Component({
  selector: 'app-new-submission',
  templateUrl: './new-submission.component.html',
  styleUrls: ['./new-submission.component.scss'],
})
export class NewSubmissionComponent {
  submittedData: Submssion = new Submssion();

  constructor(
    private submissionService: SubsmissionService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  onSubmit() {
    console.log(this.submittedData);
    let len = this.submissionService.getSubmissions().length;
    this.submittedData.id = len + 1;
    console.log(this.submittedData.id);
    this.submissionService.addSubmission(this.submittedData);
    this.router.navigate(['../submission'], {
      relativeTo: this.activatedRoute,
    });
  }
}
