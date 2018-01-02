export class ApiService {

  getRecipes(http) {
    return http.get('http://localhost:3000/recipes');
  }
  postRecipes(http, formData) {
    return http.post('http://localhost:3000/recipes', formData);
  }

}
