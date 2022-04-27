import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  state = false;
  count = 0;
  appear = false;
  constructor(private router: Router, private elementRef: ElementRef) {}

  ngOnInit(): void {}
  onclick(): void {
    const ball = this.elementRef.nativeElement.querySelector('.state-ball');
    if (!this.state) {
      this.state = true;
      this.appear = false;
      if (this.count === 101) {
        this.count = 0;
      }
      const ballInter = setInterval(() => {
        if (this.count <= 100) {
          ball.style.setProperty('--offset', this.count);
          this.count++;
        } else {
          this.state = false;
          this.appear = true;
          clearInterval(ballInter);
        }
      }, 10);
    }
  }
}
