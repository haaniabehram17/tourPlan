import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

export interface Data {
  id: number;
  name: string;
  status: string;
  streetNo: string;
  postalCode: string;
  city: string;
  address: string;
  disabled: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  isCollapsed = false;
  payload;

  constructor(
    private readonly authService: AuthService
  ) { }

  ngOnInit() {
    const payload = this.authService.getPayload();
    this.payload = payload;
  }

  displayLocationLink(): boolean {
    const allow = this.payload.permissions.filter(e => e.includes('location')).length > 0;
    return allow;
  }

  displayEmployeeLink(): boolean {
    const allow = true; //this.payload.permissions.filter(e => e.includes('employee')).length > 0;
    return allow;
  }

  logout() {
    this.authService.logout();
  }

  closeSidebar() {
    this.isCollapsed = true;
  }
}
