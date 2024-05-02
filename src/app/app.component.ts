import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  darkMode = false;

  ngOnInit() {
    // Set the default theme based on local storage or default to dark
    this.darkMode = localStorage.getItem('bsTheme') === 'light' ? false : true;
    this.updateTheme();
  }

  toggleTheme() {
    this.darkMode = !this.darkMode;
    localStorage.setItem('bsTheme', this.darkMode ? 'dark' : 'light');
    this.updateTheme();
  }

  private updateTheme() {
    document.documentElement.setAttribute('data-bs-theme', this.darkMode ? 'dark' : 'light');
  }
}
