import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogInfoComponent } from '../dialog-info/dialog-info.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

  openDialog = () => this.dialog.open(DialogInfoComponent, { width: '900px' });
  github = () => window.open('https://github.com/JoaovMiranda', '_blank');
  linkedin = () => window.open('https://www.linkedin.com/in/joao-miranda-dev/', '_blank');
  instagram = () => window.open('https://www.instagram.com/j.mirandaz/', '_blank');


  sunny = () => console.log('sunny');
  cloud = () => console.log('cloud');


}

