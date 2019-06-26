
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  const byId = str => document.getElementById(str);
  const fullName = document.getElementById("fullname");
  const getPerson = () => {
    fetch("https://randomuser.me/api/").then(resp => resp.json())
    .then(({results: [{email, dob, cell, phone, location, name}]}) => {
      const {first, last} = name;
      const {city, postcode, state, street} = location;
      byId("fullname").innerText = name.first + " " + name.last;
      byId("email").innerText = email;
      byId("city").innerText = city;
      byId("street").innerText = street;
      byId("state").innerText = state;
      byId("postcode").innerText = postcode;
      byId("phone").innerText = phone;
      byId("cell").innerText = cell;
      byId("date_of_birth").innerText = dob.date;
    })
  }
  getPerson();

  document.querySelector(".btn-primary").addEventListener("click", getPerson)


});
