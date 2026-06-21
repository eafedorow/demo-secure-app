import { Component } from '@angular/core';
import {ThemesService} from "../../services/themes.service";

@Component({
  selector: 'sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  constructor(
    public themesService: ThemesService,
  ) {
  }
}
