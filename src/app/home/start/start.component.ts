import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.less']
})
export class StartComponent implements OnInit {

  payload;
  token;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private readonly authService: AuthService
  ) { }

  ngOnInit(): void {
    this.payload = this.authService.getPayload();
    this.token = this.authService.getToken();
  }

  login(): void {
    // window.open('http://localhost:3000?token=' + this.token, '_blank');
    window.open('https://gps-flottenportal.de?token=' + this.token, '_blank');
  }

}
