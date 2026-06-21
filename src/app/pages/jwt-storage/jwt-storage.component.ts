import { Component } from '@angular/core';

@Component({
  selector: 'jwt-storage',
  templateUrl: './jwt-storage.component.html',
  styleUrls: ['./jwt-storage.component.scss']
})
export class JwtStorageComponent {
  storageMode: 'localStorage' | 'sessionStorage' | 'memory' = 'memory';

  token = '';

  stolenToken = '';

  logs: string[] = [];

  setStorage(mode: any) {
    this.storageMode = mode;
    this.logs.unshift(`Storage mode set to ${mode}`);
  }

  login() {
    this.token = 'jwt_' + Math.random().toString(36).substring(2);

    this.saveToken(this.token);

    this.logs.unshift('User logged in, token generated');
  }

  saveToken(token: string) {
    if (this.storageMode === 'localStorage') {
      sessionStorage.removeItem('token');
      localStorage.setItem('token', token);
    }

    if (this.storageMode === 'sessionStorage') {
      localStorage.removeItem('token');
      sessionStorage.setItem('token', token);
    }

    if (this.storageMode === 'memory') {
      localStorage.removeItem('token');
      sessionStorage.removeItem('token');
      this.token = token;
    }
  }

  simulateXSS() {
    // 🔥 simulation only
    const leaked =
      localStorage.getItem('token') ||
      sessionStorage.getItem('token');

    this.stolenToken = leaked || 'no token found';

    this.logs.unshift('💥 XSS simulated: token extracted from storage');
  }
}
