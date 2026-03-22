import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-additem',
  imports: [FormsModule],
  templateUrl: './additem.html',
  styleUrl: './additem.css',
})
export class Additem {
    title = signal<string>("");
    onSubmit() {

    }
}
