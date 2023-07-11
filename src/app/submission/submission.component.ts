import { Component, OnInit } from '@angular/core';
import { SubsmissionService } from '../services/subsmission.service';
import { Submssion } from '../model/submission';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.css'],
})
export class SubmissionComponent implements OnInit {
  submissions: Submssion[] = [];
  leadNames: string[] = [];
  leadFilter: string = '';
  consultantFilter: string = '';
  consultantNames:string[]=[]
  filterSubmissionsArray: Submssion[] = [];

  constructor(
    private submissionService: SubsmissionService,
    private router: Router,
    private currentRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.submissions = this.submissionService.getSubmissions();
    this.filterSubmissionsArray = [...this.submissions];
    this.leadNames = Array.from(
      new Set(this.submissions.map((submission) => submission.leadName))
    );
    this.
  }

  editItem(id: number) {
    this.router.navigate(['../edit', id], { relativeTo: this.currentRoute });
  }

  deleteItem(id: number) {
    this.submissionService.deleteSubmission(id);
  }

  onLeadFilterChange() {
    this.filterSubmissions();
  }

  filterSubmissions() {
    this.filterSubmissionsArray = this.submissions.filter((submission) => {
      const leadMatch =
        !this.leadFilter ||
        submission.leadName.toLowerCase() === this.leadFilter.toLowerCase();
      return leadMatch;
    });
  }
}
