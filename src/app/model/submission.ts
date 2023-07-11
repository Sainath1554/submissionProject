export class Submssion {
  id: number;
  consultantName: string;
  submissionDate: string;
  leadName: string;
  vendorName: string;
  rate: string;
  salesPersonName: string;
  technology: string;
  constructor(
    id: number = 0,
    consultantName: string = '',
    submissionDate: string = '',
    leadName: string = '',
    vendorName: string = '',
    rate: string = '',
    salesPersonName: string = '',
    technology: string = ''
  ) {
    this.id = id;
    this.consultantName = consultantName;
    this.submissionDate = submissionDate;
    this.leadName = leadName;
    this.vendorName = vendorName;
    this.rate = rate;
    this.salesPersonName = salesPersonName;
    this.technology = technology;
  }
}
