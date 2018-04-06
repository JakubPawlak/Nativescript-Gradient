import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Home',
  moduleId: module.id,
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  visible = 'collapsed';
  colors: string = 'rgba(0,255,255,1), rgba(255,255,0,1)';

  constructor() {}

  ngOnInit(): void {}

  show() {
    if (this.visible == 'visible') {
        this.visible = 'collapsed';
    } else {
        this.visible = 'visible';
    }
  }
}
