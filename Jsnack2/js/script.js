// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti

var squadre = [
  {
    nome: 'Inter',
    punti: 0,
    falli: 0
  },
  {
    nome: 'Juventus',
    punti: 0,
    falli: 0
  },
  {
    nome: 'Milan',
    punti: 0,
    falli: 0
  }
];

for (var i = 0; i < squadre.length; i++) {
  squadre[i].punti = generaRandom(0, 99);
  squadre[i].falli = generaRandom(0, 99);
  for(var k in squadre[i]){
    console.log(k,': ',squadre[i][k]);
  }
}

// console.log(squadre);

// ****FUNZIONI****
function generaRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
