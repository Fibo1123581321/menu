import { Component } from '@angular/core';
import { MenuItem } from './interfaces/menu-item';
import { Categories } from './enums/categories';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Chirpus Pizza!';
  my_menu: MenuItem [] = [{item:'Chicken Fingers', category: Categories.dinner, price: 11.08},
  {item:'chicken fingers', category: Categories.dinner, price: 11.08},
  {item:'pizza', category: Categories.lunch, price: 16.68},
  {item:'bacon and eggs', category: Categories.breakfast, price: 5.48},
  {item:'Ceasar Salad', category: Categories.side, price: 6.45},
  {item:'flan', category: Categories.dessert, price: 6.99},
  {item:'chocolate', category: Categories.dessert, price: 3.98}
]
}

