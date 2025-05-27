let registros =
[
    ['Juan', 'juan@sindato.com', 19, 36.234],
    ['luis', 'luis@sindato.com', 18, 23.234],
    ['Andrea', 'andrea@sindato.com', 22, 0],
    ['Pedro', 'pedro@sindato.com', 12, 65.234],
    ['Maria', 'maria@sindato.com', 16, 123]
];

var total = 0;

for(let i = 0; 1 < registros.length; i++){
    console.log('Registro # ' + (i+1) );
      for(let j = 0; j < registros[i].length; j++){
        console.log( '     ' + registros[i][j] );
      }
}