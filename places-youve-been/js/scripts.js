function PlacesToSee() {
  this.places = {};
}

PlacesToSee.prototype.addPlace = function (place) {
  this.places[place] = place;
};


function Place(name, landmarks, timeOfYear, foods) {
  this.name = name;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.foods = foods;
}

let france = new Place("France", ["Eiffle Tower", "Seine", "Louvre"], ["Summer", "Fall"], ["Baguettes", "Cheese", "Wine"]);
let germany = new Place("Germany", ["Brandenburg Gate", "Oktoberfest", "Disney Looking Castles", "Horsey Farms"], ["Winter", "Summer"], ["Brats", "Beers", "Schnitzel"]);

let placelist = new PlacesToSee();

function AddressBook() {
  this.contacts = {};
}

AddressBook.prototype.addContact = function (contact) {
  this.contacts[contact.firstName] = contact;
};