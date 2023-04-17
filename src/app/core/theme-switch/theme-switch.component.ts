import { Component } from '@angular/core';
import { ThemeService } from '../../theme.service';

@Component({
  selector: 'app-theme-switch',
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.css'],
})
export class ThemeSwitchComponent {
  constructor(public themeService: ThemeService) {}

  toggleTheme(): void {
    const currentTheme = this.themeService.getTheme();
    this.themeService.setTheme(currentTheme === 'light' ? 'dark' : 'light');
  }
}
