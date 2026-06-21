import { Component } from '@angular/core';

@Component({
  selector: 'app-open-redirect',
  templateUrl: './open-redirect.component.html',
  styleUrls: ['./open-redirect.component.scss']
})
export class OpenRedirectComponent {
  redirectUrl = '';

  mode: 'safe' | 'unsafe' = 'unsafe';

  logs: string[] = [];

  redirectUnsafe(): void {
    this.mode = 'unsafe';

    this.logs.unshift(`🚨 Unsafe redirect to: ${this.redirectUrl}`);

    // 💥 simulation
    window.location.href = this.redirectUrl;
  }

  redirectSafe(): void {
    this.mode = 'safe';

    const allowed = ['/dashboard', '/main', '/home'];

    const isSafe = allowed.some(path =>
      this.redirectUrl.startsWith(path)
    );

    if (!isSafe) {
      this.logs.unshift(`🛑 Blocked unsafe redirect: ${this.redirectUrl}`);
      return;
    }

    this.logs.unshift(`🟢 Safe redirect to: ${this.redirectUrl}`);

    window.location.href = this.redirectUrl;
  }
}
