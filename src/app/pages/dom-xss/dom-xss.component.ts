import { Component } from '@angular/core';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Component({
  selector: 'app-dom-xss',
  templateUrl: './dom-xss.component.html',
  styleUrls: ['./dom-xss.component.scss']
})
export class DomXssComponent {
  input = '';

  unsafeOutput: string = '';
  safeOutput: string | SafeHtml = '';

  mode: 'safe' | 'unsafe' = 'safe';

  logs: string[] = [];

  constructor(private sanitizer: DomSanitizer) {}

  render(): void {

    // ❌ unsafe DOM XSS
    this.unsafeOutput = this.input;

    // ✅ safe rendering
    this.safeOutput = this.sanitizer.sanitize(1 as any, this.input) ?? '';

    this.logs.unshift(
      `Rendered in ${this.mode.toUpperCase()} mode`
    );
  }

  setAttackExample(): void {
    this.input = `
      <img src="x" onerror="alert('DOM XSS triggered!')">
    `;
    this.render();
  }

  toggleMode(): void {
    this.mode = this.mode === 'safe' ? 'unsafe' : 'safe';
  }
}
