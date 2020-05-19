import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent {
  index1 = 0;
  isExpanded: boolean;
  isExpanded1: boolean;
  isExpanded2: boolean;
  isExpanded3: boolean;
  isCollapsed: false;
  AvailableModules = 'AvailableModules(5)';
  Modules = 'Modules(2)';
  Documents = 'Documents(3)';
  allModules = [
     {
      name: 'Module1',
      information: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.' +
        ' At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit' +
        ' amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo ' +
        'duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet'
    },
    {
      name: 'Module1',
      information: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.' +
        ' At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit' +
        ' amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo ' +
        'duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet'
    },
    {
      name: 'Module1',
      information: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.' +
        ' At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit' +
        ' amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo ' +
        'duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet'
    }
  ];
  availableModules = [
    {
      name: 'available Moudle',
      information: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.' +
        ' At vero eos et accusam et justo duo dolores et ea rebum.'
    },
    {
      name: 'available Moudle',
      information: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.'
    },
    {
      name: 'available Moudle',
      information: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.' +
        ' At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.'
    }
  ];

  toggle(){
    this.isExpanded = !this.isExpanded;
  }
  toggle1(){
    this.isExpanded1 = !this.isExpanded1;
  }
  toggle2(){
    this.isExpanded2 = !this.isExpanded2;
  }
  toggle3(){
    this.isExpanded3 = !this.isExpanded3;
  }
}
