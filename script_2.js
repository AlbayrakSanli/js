function fact(nbr){
  var i, nbr, f = 1;

  for(i=1; i<=nbr; i++)
  {
    f = f*i;
  }
  return f;
}

let nbr = prompt("De quel nombre veux-tu calculer la factorielle ?");
let test = "Le résultat est : " + fact(nbr);
console.log(test);
