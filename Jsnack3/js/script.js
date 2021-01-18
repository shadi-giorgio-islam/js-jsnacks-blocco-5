// Jsnack3 - Creare  un array che contiene 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine.

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
    lunghezza : 24
  },
  {
    varieta : 'varietà 4',
    peso : 12,
    lunghezza : 2
  },
  {
    varieta : 'varietà 5',
    peso : 15,
    lunghezza : 16
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
    lunghezza : 22
  },
  {
    varieta : 'varietà 10',
    peso : 6,
    lunghezza : 9
  }
];

var sommaMinore = 0;
var sommaMaggiore = 0;
var arrayMinore = [];
var arrayMaggiore = [];

for (var i = 0; i < zucchine.length; i++) {
  if (zucchine[i].lunghezza < 15) {
    sommaMinore += zucchine[i].peso;
    arrayMinore.push(zucchine[i]);
  }
  else {
    sommaMaggiore += zucchine[i].peso;
    arrayMaggiore.push(zucchine[i]);
  }
}

console.log('zucchine maggiori di 15 cm : ', sommaMaggiore, 'zucchine minori di 15 cm : ', sommaMinore);
console.log('le zucchine < 15cm ', arrayMinore,'le zucchine < 15cm ', arrayMaggiore);
