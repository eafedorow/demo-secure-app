import {Component, SecurityContext} from '@angular/core';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Component({
  selector: 'app-xss',
  templateUrl: './xss.component.html',
  styleUrls: ['./xss.component.scss']
})
export class XssComponent {
  message = '';

  sanitized = '';

  rendered: string | SafeHtml = '';

  safeMode = false;

  logs: string[] = [];

  constructor(private sanitizer: DomSanitizer) {}

  render(): void {

    // 1. RAW
    this.sanitized =
      this.sanitizer.sanitize(
        SecurityContext.HTML,
        this.message
      ) ?? '';

    if (!this.safeMode) {
      this.rendered =
        this.sanitizer.bypassSecurityTrustHtml(this.message);
    } else {
      this.rendered = this.message;
    }

    // log
    this.logs.unshift(
      `Rendered | mode=${!this.safeMode ? 'UNSAFE' : 'SAFE'}`
    );
  }

  loadAttack(): void {
    this.message = `<img src="x" onerror="alert('XSS demo triggered')" />`;
    this.render();
  }
}
