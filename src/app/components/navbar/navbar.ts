import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  // signal to hold theme state (true = dark)
  darkMode = signal<boolean>(false);

  constructor() {
    // initialise from localStorage (runs in browser)
    try {
      const saved = localStorage.getItem('theme');
      const isDark = saved === 'dark' || (!saved && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
      this.setTheme(isDark);
    } catch (e) {
      // ignore storage errors
      this.setTheme(false);
    }
  }

  toggleTheme() {
    this.setTheme(!this.darkMode());
  }

  private setTheme(enableDark: boolean) {
    this.darkMode.set(enableDark);
    if (enableDark) {
      document.body.classList.add('dark');
      try { localStorage.setItem('theme', 'dark'); } catch {}
    } else {
      document.body.classList.remove('dark');
      try { localStorage.setItem('theme', 'light'); } catch {}
    }
  }
}
