import { Component } from '@angular/core';

@Component({
  selector: 'insecure-file-upload',
  templateUrl: './insecure-file-upload.component.html',
  styleUrls: ['./insecure-file-upload.component.scss']
})
export class InsecureFileUploadComponent {
  file: File | null = null;

  previewHtml = '';

  logs: string[] = [];

  onFileSelected(event: any): void {
    this.file = event.target.files[0];

    this.logs.unshift(`File selected: ${this.file?.name}`);
  }

  upload(): void {
    if (!this.file) return;

    this.logs.unshift(`Uploading file: ${this.file.name}`);

    // 💥 simulation of unsafe rendering
    const reader = new FileReader();

    reader.onload = () => {
      this.previewHtml = reader.result as string;

      this.logs.unshift('File rendered in DOM (unsafe simulation)');
    };

    reader.readAsText(this.file);
  }
}
