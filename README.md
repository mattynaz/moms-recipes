# Mom's Recipes
A place for mom to keep and share all her recipes 🥘. To use the site, you just need to know how to do three things:
1. ✍️ create a new recipe, 
2. 📲 publish a recipe, 
3. 🖋 and edit or delete a recipe. 

 Below is how to do each of those in 5 steps (and a markdown cheatsheet for mom 😗).

## Create a new recipe
1. Go to the [recipes](recipes) folder. All recipes are stored here.
2. At the top right, click on `Add file > Create new file`.
3. At the top, enter the name of the dish then `.md` to say you're making a markdown file. (For example, `shepards-pie.md`. Make sure there are no spaces).
4. As you're writing the recipe, check the `Preview` tab to see roughly how the recipe will look.
5. Click `Commit new file` at the bottom. (Don't fill out the two text boxes above this button because they are optional).

## Publish a recipe
1. Go to the [recipes](recipes) folder.
2. Click on the [published recipes](recipes/published_recipes.md) file `published_recipes.md`
3. Click on the pencil ✏️ at the top right to edit.
4. When adding a new recipe, follow this template (**The ID must be the same as the recipe's file name.** If the file is named `shepards-pie.md`, the ID must be `shepards-pie`. If you don't want tags, don't include the entire third line):
```md
# Shepard's Pie
- id: shepards-pie
- tags: veggie, vegan, pie, gluten free
```
5. Click `Commit changes` to save.


## Edit or delete recipe
1. Go to the [recipes](recipes) folder.
2. Click on a recipe.
3. Click on the pencil ✏️ at the top right to edit or click on the trash can 🗑 to delete.
4. Hit `Commit changes` at the bottom to confirm the changes.
5. If you deleted a recipe, go back to the [published recipes](recipes/published_recipes.md) file and delete the recipe.

## Markdown cheat sheet

 Element         | Markdown Syntax 
---------------- | ----------------
 Recipe name     | `# Burgers` 
 Cover image     | `![cover image](https://www.food.com/burgers.png)` <br> *text in the square brackets  must say "cover image"*
 Section title   | `## Ingredients`
 Smaller titles  | `### Small title` <br> `#### Smaller title` <br> `##### Even smaller title`
 Bold            | `**bold text**`
 Italics         | `*italicized text*`
 Strikethrough   | `~~crossed out text~~`
 Ordered list    | `1. First item` <br> `2. Second item` <br> `3. Third item`
 Unodrdered list | `- First item` <br> `- Second item` <br> `- Third item`
 Link            | `[shown text](https://www.example.com)`
 Measurement     | ``` `100deg` ```

---

##### Thank you for feeding me. Love, Matthew ❤️ 
