import { Component, OnInit } from '@angular/core';
import { AutoMailAnswer } from '../models/autoMailAnswer';
import { AutomailServiceService } from '../services/automail-service.service';
@Component({
  selector: 'app-automail',
  templateUrl: './automail.component.html',
  styleUrls: ['./automail.component.scss']
})
export class AutomailComponent implements OnInit {


  autoMailUsers: AutoMailAnswer[];
  nameOrg: string
  emailOrg: string
  mailStatus: boolean;
  switchButton: boolean = true;

  constructor(private autoMailservice: AutomailServiceService) { }

  ngOnInit(): void {
    this.getAutoMailUsers()
  }




  getAutoMailUsers() {
    this.autoMailservice.GetMail().subscribe({
      next: response => {
        if (response)
          this.autoMailUsers = response
        console.log(this.autoMailUsers)
      },
      error: error => {
        console.log(error)
      }
    })
  }

  createAutoMailUsers() {
    this.autoMailservice.CreateMail(new AutoMailAnswer(0, this.nameOrg, this.emailOrg, String(this.mailStatus))).subscribe({
      next: response => {
        this.getAutoMailUsers();
        if (response)
          console.log(response)
      },
      error: error => {
        console.log(error)
      }
    })
  }

  updateAutoMailUsers(element) {
    this.autoMailservice.UpdateMail(new AutoMailAnswer(element, this.nameOrg, this.emailOrg, String(this.mailStatus))).subscribe({
      next: response => {
        if (response)
          this.getAutoMailUsers();
        console.log(response)
        this.nameOrg = ''
        this.emailOrg = ''
        this.mailStatus = false
        this.switchButton = !this.switchButton
      },
      error: error => {
        console.log(error)
      }
    })
  }
  switchUpdate(element: AutoMailAnswer) {
    this.switchButton = !this.switchButton
    this.nameOrg = element.name
    this.emailOrg = element.email
    this.mailStatus = Boolean(element.status)
  }

  deleteAutoMailUsers(element) {
    this.autoMailservice.DeleteMail(element).subscribe({
      next: response => {
        if (response)
          console.log(response)
        this.getAutoMailUsers();
      },
      error: error => {
        console.log(error)
      }
    })
  }
  activateUser(element: AutoMailAnswer) {
    this.autoMailservice.UpdateMail(new AutoMailAnswer(element.id, element.name, element.email, 'true')).subscribe({
      next: response => {
        if (response)
          this.getAutoMailUsers();
        console.log(response)
      },
      error: error => {
        console.log(error)
      }
    })
  }
  deactivateUser(element: AutoMailAnswer) {
    this.autoMailservice.UpdateMail(new AutoMailAnswer(element.id, element.name, element.email, 'false')).subscribe({
      next: response => {
        if (response)
          this.getAutoMailUsers();
        console.log(response)
      },
      error: error => {
        console.log(error)
      }
    })
  }
}
