import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  themes = [
    {
      id: 1,
      title: 'XSS',
      description: '',
      icon: 'bug_report',
      route: '/xss',
      severity: 'high'
    },
    {
      id: 2,
      title: 'DOM XSS',
      description: '',
      icon: 'warning',
      route: '/dom-xss',
      severity: 'high'
    },
    {
      id: 3,
      title: 'JWT Storage',
      description: '',
      icon: 'key',
      route: '/jwt-storage',
      severity: 'medium'
    }
  ]
}
