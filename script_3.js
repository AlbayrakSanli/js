function sum(nbr){
  var i, p, t="", nbr, num, f="", pyra;

  for(i=1; i<=nbr; i++)
  {
    num = nbr - i;
    t = "";
    for(p=0; p<=num; p++)
    {
      t = t + " ";
    }

    f = "";
    for(p=1; p<=i; p++)
    {
      f = f + "#";
    }

    pyra = t + f;

    console.log(pyra);
  }
}

let nbr = prompt("Combien de ligne pour ta pyramide ?");
sum(nbr);
