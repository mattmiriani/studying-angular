import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

interface NavLink {
  text: string;
  route: string;
}

@Component({
  selector: 'app-links',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './links.component.html',
  styleUrl: './links.component.css',
})
export class LinksComponent {
  @Input() links: NavLink[] = [];
}
