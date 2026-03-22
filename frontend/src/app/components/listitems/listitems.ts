import { Component, inject, signal } from '@angular/core';
import { Itemsapi } from '../../services/itemsapi/itemsapi';
import { Movie } from '../../models/movie.interface';

@Component({
  selector: 'app-listitems',
  imports: [],
  templateUrl: './listitems.html',
  styleUrl: './listitems.css',
})
export class Listitems {
    movieService = inject(Itemsapi);
    
    constructor() {
        this.movieService.getItems();
    }
}
