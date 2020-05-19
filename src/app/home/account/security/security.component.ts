import { Component, OnInit } from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.less']
})
export class SecurityComponent implements OnInit {
  constructor(public msg: NzMessageService) {
  }
  data = [
    {
      title: 'Account Password',
      description: 'Current password strength：：Strong',
      edit: 'Modify'
    },
    {
      title: 'Security Question',
      description: 'The security question is not set, and the security policy can effectively protect the account security',
      edit: 'Modify'
    },
    {
      title: 'Backup Email',
      description: 'Bound Email：：ant***sign.com',
      edit: 'Bind'
    },
    {
      title: 'MFA Device',
      description: 'Unbound MFA device, after binding, can be confirmed twice',
      edit: 'Bind'
    }];

  ngOnInit(): void {

  }

}
