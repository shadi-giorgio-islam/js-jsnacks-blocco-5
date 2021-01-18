// Jsnack2 - Creare un array che contiene 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine.

var zucchine = [
  {
    varieta : 'varietà 1',
    peso : 5,
    lunghezza : 5
  },
  {
    varieta : 'varietà 2',
    peso : 7,
    lunghezza : 8
  },
  {
    varieta : 'varietà 3',
    peso : 3,
    lunghezza : 4
  },
  {
    varieta : 'varietà 4',
    peso : 12,
    lunghezza : 2
  },
  {
    varieta : 'varietà 5',
    peso : 15,
    lunghezza : 6
  },
  {
    varieta : 'varietà 6',
    peso : 3,
    lunghezza : 9
  },
  {
    varieta : 'varietà 7',
    peso : 8,
    lunghezza : 11
  },
  {
    varieta : 'varietà 8',
    peso : 17,
    lunghezza : 14
  },
  {
    varieta : 'varietà 9',
    peso : 2,
    lunghezza : 12
  },
  {
    varieta : 'varietà 10',
    peso : 6,
    lunghezza : 9
  }
];

var somma = 0;
for (var i = 0; i < zucchine.length; i++) {
  somma += zucchine[i].peso;
}
console.log(somma);
