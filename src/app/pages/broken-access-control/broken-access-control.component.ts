import { Component } from '@angular/core';

type Role = 'user' | 'admin';

@Component({
  selector: 'broken-access-control',
  templateUrl: './broken-access-control.component.html',
  styleUrls: ['./broken-access-control.component.scss']
})
export class BrokenAccessControlComponent {
  role: 'user' | 'admin' = 'user';

  logs: string[] = [];

  users = [
    { id: 1, name: 'Alice', salary: 1000 },
    { id: 2, name: 'Bob', salary: 2000 },
  ];

  setRole(role: 'user' | 'admin') {
    this.role = role;

    this.logs.unshift(`Role changed to: ${role}`);
  }

  simulateAttack() {
    // 🔥 ключевой момент демо
    this.role = 'admin';

    this.logs.unshift(
      '💥 ATTACK: role changed via DevTools / client manipulation'
    );

    this.logs.unshift(
      '⚠️ Admin data now accessible without backend check'
    );
  }

  deleteUser(id: number) {
    this.users = this.users.filter(u => u.id !== id);

    this.logs.unshift(`User ${id} deleted`);
  }
}
