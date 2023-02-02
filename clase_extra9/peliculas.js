let peliculas = {
    'terror':[
        {
            codigo: 1,
            autor: 'Tarantino',
            year: 2000,
            titulo: 'El exorcista',
            calificacion: 4
        },
        {
            codigo: 2,
            autor: 'Tarantino',
            year: 2020,
            titulo: 'Scream',
            calificacion: 4
        },
        {
            codigo: 3,
            autor: 'Lucas',
            year: 1988,
            titulo: 'El abismo',
            calificacion: 2
        },
        {
            codigo: 7,
            autor: 'Espino',
            year: 2008,
            titulo: 'The thing',
            calificacion: 4
        }
    ],
    'accion' :[
        {
            codigo: 4,
            autor: 'Tarantino',
            year: 2005,
            titulo: 'Pulp Fiction',
            calificacion: 4
        },
        {
            codigo: 5,
            autor: 'Cameron',
            year: 2000,
            titulo: 'Titanic',
            calificacion: 2
        },
        {
            codigo: 6,
            autor: 'Cameron',
            year: 2008,
            titulo: 'Avatar',
            calificacion: 4
        }
    ]
}

let nombre = 'Raul Lopez';

//exportamos el objeto
module.exports.peliculas = peliculas;
module.exports.nombre = nombre;