import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { dispatchThisEvent } from '../../helpers/unusual.helper';
import { DialogInfoComponent } from '../dialog-info/dialog-info.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<boolean> = new EventEmitter();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  toggleSideBar(): void {
    this.toggleSideBarForMe.emit();
    dispatchThisEvent();
  }

  openDialog = () => this.dialog.open(DialogInfoComponent, { width: '900px', height: '400px' });
  github = () => window.open('https://github.com/JoaovMiranda', '_blank');
  linkedin = () => window.open('https://www.linkedin.com/in/joao-miranda-dev/', '_blank');
  instagram = () => window.open('https://www.instagram.com/j.mirandaz/', '_blank');


  sunny = () => console.log('sunny');
  cloud = () => console.log('cloud');


}

