import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  isMouseOver: boolean = false;

  constructor(private router: Router) {}

  navigateTo(route: string) {
    switch (route) {
      case 'template':
        this.router.navigateByUrl('/template');
        break;
      case 'template-history':
        this.router.navigateByUrl('/template-history');
        break;
      case 'share-template':
        this.router.navigateByUrl('/share-template');
        break;
      case 'about':
        this.router.navigateByUrl('/about');
        break;
      case 'how-to-use':
        this.router.navigateByUrl('/how-to-use');
        break;
      default:
        break;
    }
  }
}
