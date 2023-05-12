import { Component, OnInit } from '@angular/core';
import { SBOOK } from '../models/SBOOKAnswer';
import { SBOOKService } from '../services/sbook.service';
@Component({
  selector: 'app-sbook',
  templateUrl: './sbook.component.html',
  styleUrls: ['./sbook.component.scss']
})
export class SBOOKComponent implements OnInit {

  constructor(private sbookService: SBOOKService) { }

  ngOnInit(): void {
    this.getDirectors();
  }

  sBook: SBOOK[]
  switchButton: boolean = true;
  storeloc: string
  email: string
  fioDir: string
  idDir

  getDirectors() {
    this.sbookService.GetDirectors().subscribe({
      next: response => {
        if (response)
          this.sBook = response
        console.log(this.sBook)
      },
      error: error => {
        console.log(error)
      }
    })
  }

  createAutoMailUsers() {
    this.sbookService.CreateDirectors(new SBOOK(0, this.storeloc, this.email, this.fioDir)).subscribe({
      next: response => {
        this.getDirectors();
        this.storeloc = ''
        this.email = ''
        this.fioDir = ''
        if (response)
          console.log(response)
      },
      error: error => {
        console.log(error)
      }
    })
  }

  updateAutoMailUsers() {
    this.sbookService.UpdateDirectors(new SBOOK(this.idDir, this.storeloc, this.email, this.fioDir)).subscribe({
      next: response => {
        if (response)
          this.getDirectors();
        console.log(response)
        this.storeloc = ''
        this.email = ''
        this.fioDir = ''
        this.switchButton = !this.switchButton
      },
      error: error => {
        console.log(error)
      }
    })
  }
  switchUpdate(element: SBOOK) {
    this.switchButton = !this.switchButton
    this.storeloc = element.storeloc
    this.email = element.email
    this.fioDir = element.fio
    this.idDir = element.id
  }

  deleteAutoMailUsers(element) {
    this.sbookService.DeleteDirectors(element).subscribe({
      next: response => {
        if (response)
          console.log(response)
        this.getDirectors();
      },
      error: error => {
        console.log(error)
      }
    })
  }

}
