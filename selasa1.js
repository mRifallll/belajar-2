var nama = 'rifal' ;
var peran = 'penyihir' ;

if (nama === '') {
    console.log('nama harus diisi!');
}
else if (peran === '') {
    console.log('Halo ' + nama + ', Pilih peranmu untuk memulai game!');
}
else if (peran === 'kesatria') {
    console.log('Selamat datang di Dunia Proxytia, '+ nama +' ');
    console.log('Halo '+ peran +' '+ nama +', kamu dapat menyerang dengan senjatamu');
}
else if (peran === 'tabib') {
    console.log('Selamat datang di Dunia Proxytia, '+ nama +' ');
    console.log('Halo '+ peran +' '+ nama +', kamu akan membantu temanmu yang terluka.');
}
else if (peran === 'penyihir') {
    console.log('Selamat datang di Dunia Proxytia, '+ nama +' ');
    console.log('Halo '+ peran +' '+ nama +', ciptakan keajaiban yang membantu kemenanganmu!');
}
