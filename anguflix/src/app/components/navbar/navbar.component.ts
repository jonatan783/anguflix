import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  state: boolean = false;
  scrollPosition: boolean = false;

  onClick(): void {
    this.state = !this.state;
  }
  ngOnInit(): void {}
  doSomethingOnWindowScroll(event: any): void {
    if (event.srcElement.children[0].scrollTop) this.scrollPosition = true;
    else this.scrollPosition = false;
    console.log(this.scrollPosition)
  }
}
