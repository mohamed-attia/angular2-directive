import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
    disabled: boolean;
    constructor() { }
    onView(){
        this.disabled = true;
    }
    onEdit(){
        this.disabled = false;
    }
}