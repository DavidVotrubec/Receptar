angular.module("RecipesApp").controller("RecipesListCtrl", ["$http", function ($http) {

    //TODO: Move to some config
    var baseUrl = 'http://davidvotrubec.apiary-mock.com/';

    var that = this;
    this.isLoadingIngredients = false;
    this.isLoadingRecipes = false;
    this.ingredients = [];
    this.recipes = [];
    this.filter = { ingredientIds: [] };

    //#region Ingredients
    function loadIngedients() {
        that.isLoadingIngredients = true;
        $http.get(baseUrl + 'ingedients')
            .success(ingredientsLoaded)
            .error(function () {
                that.isLoadingIngredients = false;
            });
    }

    function ingredientsLoaded(data) {
        that.isLoadingIngredients = false;
        that.ingredients = data.items;
    }
    //#endregion

    //#region Recipes
    function loadRecipes() {
        that.isLoadingRecipes = true;
        $http.get(baseUrl + 'recipes')
            .success(recipesLoaded)
            .error(function () {
                that.isLoadingRecipes = false;
            });
    }

    function recipesLoaded(data) {
        that.isLoadingRecipes = false;
        that.recipes = data.items;
    }

    this.filterRecipes = function (recipe) {
        return _.any(that.filter.ingredientIds) == false || _.any(recipe.Ingredients, function (i) { return _.contains(that.filter.ingredientIds, parseInt(i, 10)); });
    };
    //#endregion Recipes

    this.filterBy = function(item) {
        var id = parseInt(item.Id);
        var isItemUsed = _.indexOf(that.filter.ingredientIds, id) > -1;

        if (isItemUsed) {
            that.filter.ingredientIds = _.without(that.filter.ingredientIds, id);
            item.isUsed = false;
        } else {
            that.filter.ingredientIds.push(id);
            item.isUsed = true;
        }
    };

    loadIngedients();
    loadRecipes();
} ])