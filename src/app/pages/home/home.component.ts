import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, OnDestroy {
  ngOnInit(): void {
    console.log('home');
  }

  ngOnDestroy(): void {
    console.log('home');
  }
}
