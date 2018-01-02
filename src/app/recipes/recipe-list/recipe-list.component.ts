import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';

import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  @Input() recipes: Recipe[];

  constructor() {
  }

  ngOnInit() {

  }


  onRecipeSelected(recipe : Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}