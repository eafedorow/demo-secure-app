import { Component } from '@angular/core';

@Component({
  selector: 'app-security-misconfiguration',
  standalone: false,
  templateUrl: './security-misconfiguration.component.html',
  styleUrl: './security-misconfiguration.component.scss'
})
export class SecurityMisconfigurationComponent {
  debugMode = false;
  verboseErrors = false;
  exposeHeaders = false;

  logs: string[] = [];

  apiResponse: any = null;

  simulateRequest(): void {

    try {

      if (this.debugMode) {
        throw new Error('DB connection string: root:1234@localhost');
      }

      this.apiResponse = {
        status: 'ok',
        data: ['user1', 'user2']
      };

      this.logs.unshift('Request succeeded');

    } catch (e: any) {

      if (this.verboseErrors) {
        this.apiResponse = {
          error: e.message,
          stack: e.stack
        };
      } else {
        this.apiResponse = {
          error: 'Internal Server Error'
        };
      }

      this.logs.unshift('Request failed');
    }
  }

  getHeaders(): any {

    if (this.exposeHeaders) {
      return {
        'X-Powered-By': 'Express',
        'Server': 'nginx/1.18',
        'X-Debug-Mode': 'true'
      };
    }

    return {
      'X-Powered-By': 'hidden'
    };
  }

  toggleAll(): void {
    this.debugMode = !this.debugMode;
    this.verboseErrors = this.debugMode;
    this.exposeHeaders = this.debugMode;
  }
}
