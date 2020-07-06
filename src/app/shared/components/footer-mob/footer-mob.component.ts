import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogInfoComponent } from '../dialog-info/dialog-info.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer-mob',
  templateUrl: './footer-mob.component.html',
  styleUrls: ['./footer-mob.component.scss']
})
export class FooterMobComponent implements OnInit {

  href = '';
  
  constructor(
    public dialog: MatDialog,
    private router: Router) { }

  ngOnInit(): void {}

  openDialog = () => this.dialog.open(DialogInfoComponent, { width: '900px', height: '400px' });
  github = () => window.open('https://github.com/JoaovMiranda', '_blank');
  linkedin = () => window.open('https://www.linkedin.com/in/joao-miranda-dev/', '_blank');
  instagram = () => window.open('https://www.instagram.com/j.mirandaz/', '_blank');


  toggleTop() {
    const auxRouter = this.router.url;
    if (auxRouter === '/' || auxRouter === '/#world-href') {
      this.href = '#world-href';
    } else if (auxRouter === '/brazil' || auxRouter === '/brazil#brazil-href') {
      this.href = '/brazil#brazil-href';
    } else if (auxRouter === '/symptoms' || auxRouter === '/symptoms#sym-href') {
      this.href = '/symptoms#sym-href';
    } else if (auxRouter === '/prevention' || auxRouter === '/prevention#prev-href') {
      this.href = '/prevention#prev-href';
    } else if (auxRouter === '/more-information' || auxRouter === '/more-information#more-href') {
      this.href = '/more-information#more-href';
    } else {
      this.href = '/';
    }
  }


}
