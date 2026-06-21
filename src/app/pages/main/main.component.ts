import { Component } from '@angular/core';
import {ThemesService} from "../../services/themes.service";

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  constructor(
    public themesService: ThemesService,
  ) {
  }

  get filteredThemes() {
    return this.themesService.themes
      .filter(t => t.id !== 0)
      .sort((a, b) => this.getPriority(b.severity) - this.getPriority(a.severity));
  }

  private getPriority(severity: string): number {
    switch (severity) {
      case 'high': return 3;
      case 'medium': return 2;
      case 'low': return 1;
      default: return 0;
    }
  }
}
