import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('content', { static: false }) content!: ElementRef;
  private pages!: NodeListOf<Element>;
  private currentPageIndex = 0;

  constructor(private themeService: ThemeService) {
    this.themeService.setTheme('light'); // Définir 'dark' pour un thème sombre par défaut
  }

  ngAfterViewInit() {
    this.pages = this.content.nativeElement.querySelectorAll('.page');
  }

  onWheel(event: WheelEvent) {
    event.preventDefault();

    if (event.deltaY > 0) {
      this.currentPageIndex++;
    } else {
      this.currentPageIndex--;
    }

    // Limiter l'index de la page entre 0 et le nombre de pages - 1
    this.currentPageIndex = Math.max(
      0,
      Math.min(this.currentPageIndex, this.pages.length - 1)
    );

    const targetScrollPosition =
      this.pages[this.currentPageIndex].getBoundingClientRect().left +
      this.content.nativeElement.scrollLeft;

    this.content.nativeElement.scrollTo({
      left: targetScrollPosition,
      behavior: 'smooth',
    });
  }
}
