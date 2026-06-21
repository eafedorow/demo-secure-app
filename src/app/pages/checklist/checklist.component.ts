import { Component } from '@angular/core';

interface CheckItem {
  label: string;
  done: boolean;
}

@Component({
  selector: 'app-checklist',
  standalone: false,
  templateUrl: './checklist.component.html',
  styleUrl: './checklist.component.scss'
})
export class ChecklistComponent {
  checklist: Record<string, CheckItem[]> = {
    xss: [
      { label: 'No innerHTML without sanitization', done: false },
      { label: 'Angular sanitizer not bypassed in prod', done: false },
      { label: 'User input is escaped', done: false }
    ],
    auth: [
      { label: 'JWT stored in httpOnly cookies', done: false },
      { label: 'No token in localStorage', done: false },
      { label: 'Refresh token rotation enabled', done: false }
    ],
    storage: [
      { label: 'No sensitive data in localStorage', done: false },
      { label: 'No secrets in frontend bundle', done: false }
    ],
    routing: [
      { label: 'Route guards enabled', done: false },
      { label: 'No open admin routes', done: false }
    ],
    csp: [
      { label: 'CSP headers enabled', done: false },
      { label: 'No unsafe-inline scripts allowed', done: false }
    ]
  };

  get allItems(): CheckItem[] {
    return Object.values(this.checklist).flat();
  }

  get score(): number {
    const done = this.allItems.filter(i => i.done).length;
    return Math.round((done / this.allItems.length) * 100);
  }
}
