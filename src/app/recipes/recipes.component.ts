import { Component, OnInit } from '@angular/core';
import {Recipe} from "./recipe.model";
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../services/api-service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  selectedRecipe : Recipe;
  newResipes : Recipe[];
  date: Date = new Date();

  constructor( private http:HttpClient ) { }

  ngOnInit() {

    let myApiService = new ApiService();


    //this.http.get('http://localhots/repc/').subs
    myApiService.getRecipes(this.http).subscribe((data) => {
      //
      // for (let item of data){
      //   this.recipes.push(new Recipe(item.title, item.description, item.image));
      // }
      //
      this.newResipes = data.map((item) => {
        return new Recipe(item.title, item.description, item.image);
      })

    });
  }


}
