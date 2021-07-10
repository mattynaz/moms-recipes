window.ZeroMdConfig = {cssUrls: ['css/markdown.css']}

const RECIPES = []

class Recipe {
  constructor(recipe) {
    this.name = recipe[0].trim()
    this.id = recipe[1]
    this.tags = recipe[2] ? recipe[2].split(',') : []
    this.main_elem = document.createElement('zero-md')
    this.main_elem.src = `recipes/${this.id}.md`
    this.main_elem.id = this.id
    this.aside_elem = document.createElement('a')
    this.aside_elem.href = `#${this.main_elem.id}`
    this.aside_elem.innerText = this.name
    document.querySelector('main').append(this.main_elem)
    document.querySelector('aside').append(this.aside_elem)
    RECIPES.push(this)
  }

  relates_to = search => {
    search = search.toLowerCase()
    return search === '' || this.name.toLowerCase().includes(search) || this.tags.some(tag => tag.toLowerCase().includes(search))
  }

  hide = _ =>this.aside_elem.style.display = 'none'
  show = _ => this.aside_elem.style.display = 'block'
}

filter_recipes = _ => {
  search = document.querySelector('aside > input').value
  RECIPES.filter(recipe => recipe.relates_to(search)).forEach(recipe => recipe.show())
  RECIPES.filter(recipe => !recipe.relates_to(search)).forEach(recipe => recipe.hide())
}

fetch('recipes/published recipes.md')
  .then(response => response.text())
  .then(text => [...text.matchAll(/# +([^\n]+)(?:\s*- +id: *([a-z]*))?(?:\s*- +tags: *([a-z, ]*))?/gi)])
  .then(matches => matches.map(match => match.slice(1)))
  .then(recipes => recipes.forEach(recipe => new Recipe(recipe)))
