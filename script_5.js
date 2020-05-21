const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");
var i, choice=[], a=0, b=0;

for(i=0; i<books.length; i++){
  choice[i] = books[i].rented > 0;
  a = a+1;
  if(choice[i] === false){
    console.log(choice[i]);
  }
  else{
    b = b +1;
  }
}

if(a===b){
  console.log(true);
}

console.log("Quel est livre le plus emprunté ?");

var ranger = books.sort(function (a, b){
  return a.rented - b.rented;
});

console.log(ranger[books.length-1]);

console.log("Quel est le livre le moins emprunté ?");

console.log(ranger[0]);

console.log("Trouve le livre avec l'ID: 873495");

var choice =  books.filter(function(books) {
    return books.id == 873495;
});

console.log(choice);

console.log("Supprime le livre avec l'ID: 133712");

function lid(trouver){
  return trouver.id === 133712;
}
delete books.find(lid);

console.log(books);

console.log("Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé)");

var ranger = books.sort(function (a, b){
  return (a.title > b.title)?1:-1;
});

console.log(ranger);
