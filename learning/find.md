
# lookup data in js
## given a certain datastructure in js
```JS 
const movies = [{
  id: 2,
  title: "The Wire",
  yearstart: 2002,
  yearend: 2008,
  description: "lorem ipsum",
  videolink: "http://idk.xyz",
  main_actor: {
    name: "Leo",
    latest_movie: "Inception",
  },
  other_actors: [
    {
      name: "Samuel",
      latest_movie: "Unthinkable"
    },
    {
      name: "Mark",
      latest_movie: "Shooter"
    }
  ]
},
{
  id: 3,
  title: "The Sopranos",
  yearstart: 1999,
  yearend: 2007,
  description: "lorem ipsum2",
  videolink: "http://idx.xyz",
  main_actor: {
    name: "James",
    latest_movie: "Perdita Durango",
  },
  other_actors: [
    {
      name: "Tony",
      latest_movie: "Nop"
    },
    {
      name: "Edie",
      latest_movie: "Yep"
    }
  ]
}]
```
## 1. get the id of the first show
```JS
movies[0].id 
```
## 2. find a show that has the title "The Sopranos"
```JS
movies.find(el => el.title === "The Sopranos")
```
## 3. find all shows that released 1999 or later
```JS
movies.filter(el => el.yearstart >= 1999)
```
## 4. find a show that ended 2007 and get its mainactors name
```JS
movies.find(el => el.yearend === 2007).main_actor.name
```
## 5. find all movies that have other actors that acted lately in the movie "Shooter"
```JS
movies.filter(m => m.other_actors.find(a => a.latest_movie === "Shooter"))
```

## reference
### types
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
### array
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
### object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object