const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});

function fetchData(){
  fetch('https://randomuser.me/api/')
    .then( res => res.json() )
    .then( data => populate(data.results[0]) );
}

fetchData()

function populate(person){
  let fullname = document.querySelector("#fullname")
  let email = document.querySelector("#email")
  let street = document.querySelector("#street")
  let city = document.querySelector("#city")
  let state = document.querySelector("#state")
  let postcode = document.querySelector("#postcode")
  let phone = document.querySelector("#phone")
  let cell = document.querySelector("#cell")
  let date_of_birth = document.querySelector("#date_of_birth")
  let profile_picture = document.querySelector("#profile_picture")

  fullname.innerText = `${person.name.title} ${person.name.first} ${person.name.last}`
  email.innerText = person.email
  street.innerText = person.location.street
  city.innerText = person.location.city
  state.innerText = person.location.state
  postcode.innerText = person.location.postcode
  phone.innerText = person.phone
  cell.innerText = person.cell
  date_of_birth.innerText = person.dob.date
  profile_picture.src = person.picture.thumbnail
};