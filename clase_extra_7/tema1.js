
//Clase URL disponible por defecto
let MiURL = new URL('https://www.ejemplo.com:1234/cursos/programacion?ordenar=precio&nivel=1');

//objeto completo de URL
console.log(MiURL);
console.log(MiURL.host);
console.log(MiURL.href);
console.log(MiURL.pathname);
console.log(MiURL.searchParams);
console.log(typeof MiURL.searchParams);
console.log(MiURL.searchParams.keys());
console.log(MiURL.searchParams.values());
console.log(MiURL.searchParams.get('ordenar'));
console.log(MiURL.searchParams.get('nivel'));
