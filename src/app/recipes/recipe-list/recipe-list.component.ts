import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.models';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[] = [
    new Recipe("A test recipe","this is a simple test","https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe.jpg"),
    new Recipe("B test recipe","this is a simple test","https://images.immediate.co.uk/production/volatile/sites/30/2020/08/prawn_fried_rice-2481925.jpg?quality=90&resize=440,400"),
    new Recipe("C test recipe","this is a simple test","https://assets.epicurious.com/photos/631f465a3c260b23af8cd2f3/4:3/w_4618,h_3463,c_limit/HerbButterTurkey_RECIPE_090822_2318.jpg")
];

  constructor(){

  }
  ngOnInit(): void {
    
  }

}
