import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
    private router: Router
  ) { }

  ngOnInit(): void {
    const edgeRgx = /msie\s|trident\/|Edge\//i;
    const comparableNavigator = window.navigator.userAgent;
    const isEdge = edgeRgx.test(comparableNavigator);
    this.navigateNotUse(isEdge)
  }

  private navigateNotUse(isEdge: boolean): void {
    if (isEdge) {
      this.router.navigate(['/not-use']);
    }
  }

  goToSocial() {
    window.open('https://github.com/JoaovMiranda', '_blank');
  }

  sideBarToggler = (): boolean => this.sideBarOpen = !this.sideBarOpen;

  openDialog = (): MatDialogRef<DialogInfoComponent, any> => {
    const config: MatDialogConfig = { width: '900px', height: '400px' }
    return this.dialog.open(DialogInfoComponent, config);
  } 

  github = (): Window => window.open('https://github.com/JoaovMiranda', '_blank');
  linkedin = (): Window => window.open('https://www.linkedin.com/in/joao-miranda-dev/', '_blank');
  instagram = (): Window => window.open('https://www.instagram.com/j.mirandaz/', '_blank');

}
