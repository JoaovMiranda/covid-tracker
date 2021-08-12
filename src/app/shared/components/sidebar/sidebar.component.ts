import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent {

  constructor() { }

  copyMessage(val: string): void {
    const selBox = document.createElement('textarea') as HTMLTextAreaElement;

    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';

    selBox.value = val;

    document.body.appendChild(selBox);

    selBox.focus();
    selBox.select();

    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

  github = () => window.open('https://github.com/JoaovMiranda', '_blank');

}
