import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private theme: 'light' | 'dark' = 'light';

  constructor() {}

  setTheme(theme: 'light' | 'dark'): void {
    this.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
  }

  getTheme(): 'light' | 'dark' {
    return this.theme;
  }
}
