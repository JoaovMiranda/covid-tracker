import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogInfoComponent } from 'src/app/shared/components/dialog-info/dialog-info.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  sideBarOpen = true;

  constructor(
    public dialog: MatDialog,
    private router: Router) { }

  ngOnInit(): void {
    if (/msie\s|trident\/|Edge\//i.test(window.navigator.userAgent)) { this.router.navigate(['/not-use']); }
  }

  sideBarToggler = () => this.sideBarOpen = !this.sideBarOpen;
  openDialog = () => this.dialog.open(DialogInfoComponent, { width: '900px', height: '400px' });
  github = () => window.open('https://github.com/JoaovMiranda', '_blank');
  linkedin = () => window.open('https://www.linkedin.com/in/joao-miranda-dev/', '_blank');
  instagram = () => window.open('https://www.instagram.com/j.mirandaz/', '_blank');

}
