let peliculas = [
    {
        id: 1,
        nombre: 'Blade runner',
        year: 1983,
        director: 'Ridley Scott',
        guionista: 'Philip K. Dick',
        genero: ['Acción','Ciencia ficciòn','Drama'],
        imagen: 'https://images.justwatch.com/poster/53055384/s166/blade-runner.webp'
    },
    {
        id: 2,
        nombre: 'Fight Club',
        year: 1999,
        director: 'David Fincher',
        guionista: 'Jim Uhls',
        genero: ['Thriller psicològico','Comedia negra','Acción'],
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4I6FAlfWVwjpV6kkM2vzPL_CfAgqdHQD2rw&s'
    },
    /* {
        id: 3,
        nombre: 'The Big Lebowski',
        year: 1998,
        director: ['Ethan Coen','Joel Coen'],
        guionista: ['Ethan Coen','Joel Coen'],
        genero: ['Acción','Comedia','Crimen','Deportes'],
        imagen: 'https://i.ebayimg.com/images/g/8x8AAOSw2StghuRs/s-l640.jpg'
    }, */
    {
        id: 4,
        nombre: 'Lost in Translation',
        year: 2003,
        director: 'Sofia Coppola',
        guionista: 'Sofia Coppola',
        genero: ['Drama','Romantico'],
        imagen: 'https://images.justwatch.com/poster/63710195/s166/lost-in-translation.webp'
    },
    {
        id: 5,
        nombre: 'Donnie Darko',
        year: 2001,
        director: 'Richard Kelly',
        guionista: 'Richard Kelly',
        genero: ['Drama','Ciencia ficciòn','Thriller'],
        imagen: 'https://images.justwatch.com/poster/306662820/s166/donnie-darko.webp'
    },
    {
        id: 6,
        nombre: 'The Warriors',
        year: 1979,
        director: 'Walter Hill',
        guionista: 'David Shaber',
        genero: ['Acción', 'Crimen'],
        imagen: 'https://images.justwatch.com/poster/283330540/s166/the-warriors-los-amos-de-la-noche.webp'
    },
    {
        id: 7,
        nombre: 'Dune',
        year: 2021,
        director: 'Denis Villeneuve',
        guionista: ['Denis Villeneuve', 'Jon Spaihts', 'Eric Roth'],
        genero: ['Ciencia ficciòn', 'Aventura'],
        imagen: 'https://images.justwatch.com/poster/285570933/s166/dune-2021.webp'
    },
    {
        id: 8,
        nombre: 'Joker',
        year: 2019,
        director: 'Todd Phillips',
        guionista: ['Todd Phillips', 'Scott Silver'],
        genero: ['Drama', 'Crimen', 'Thriller'],
        imagen: 'https://images.justwatch.com/poster/144144679/s166/joker.webp'
    },
    {
        id: 9,
        nombre: 'El hombre del norte',
        year: 2022,
        director: 'Robert Eggers',
        guionista: ['Robert Eggers', 'Sjón'],
        genero: ['Acción', 'Aventura', 'Drama'],
        imagen: 'https://images.justwatch.com/poster/277249852/s166/the-northman.webp'
    },
    {
        id: 10,
        nombre: 'The Batman',
        year: 2022,
        director: 'Matt Reeves',
        guionista: ['Matt Reeves', 'Peter Craig'],
        genero: ['Acción', 'Crimen', 'Drama'],
        imagen: 'https://images.justwatch.com/poster/264501574/s166/the-batman.webp'
    },
    {
        id: 11,
        nombre: 'Avatar',
        year: 2009,
        director: 'James Cameron',
        guionista: 'James Cameron',
        genero: ['Ciencia ficciòn', 'Aventura'],
        imagen: 'https://images.justwatch.com/poster/126330821/s166/avatar.webp'
    },
    {
        id: 12,
        nombre: 'Léon: The Professional',
        year: 1994,
        director: 'Luc Besson',
        guionista: 'Luc Besson',
        genero: ['Acción', 'Drama', 'Thriller'],
        imagen: 'https://images.justwatch.com/poster/178643849/s166/el-profesional-leon.webp'
    },
    {
        id: 13,
        nombre: 'Pulp Fiction',
        year: 1994,
        director: 'Quentin Tarantino',
        guionista: ['Quentin Tarantino', 'Roger Avary'],
        genero: ['Crimen','Drama'],
        imagen: 'https://images.justwatch.com/poster/206713994/s166/pulp-fiction.webp'
    },
    {
        id: 14,
        nombre: 'Sexto sentido',
        year: 1999,
        director: 'M. Night Shyamalan',
        guionista: 'M. Night Shyamalan',
        genero: ['Suspenso', 'Drama', 'Sobrenatural'],
        imagen: 'https://images.justwatch.com/poster/241827010/s166/el-sexto-sentido.webp'
    },
    {
        id: 15,
        nombre: "Matrix",
        year: 1999,
        director: ['Lana Wachowski', 'Lilly Wachowski'],
        guionista: ['Lana Wachowski', 'Lilly Wachowski'],
        genero: ['Acción', 'Ciencia ficciòn'],
        imagen: 'https://images.justwatch.com/poster/105083948/s166/matrix.webp'
    },
    {
        id: 16,
        nombre: 'The Godfather',
        year: 1972,
        director: 'Francis Ford Coppola',
        guionista: ['Mario Puzo', 'Francis Ford Coppola'],
        genero: ['Crimen', 'Drama', 'Acción'],
        imagen: 'https://images.justwatch.com/poster/123122757/s166/el-padrino.webp'
    },
    {
        id: 17,
        nombre: 'Cadena Perpetua',
        year: 1994,
        director: 'Frank Darabont',
        guionista: 'Frank Darabont',
        genero: ['Drama', 'Policial'],
        imagen: 'https://images.justwatch.com/poster/263278112/s166/cadena-perpetua.webp'
    },
    {
        id: 18,
        nombre: 'El Renacido',
        year: 2015,
        director: 'Alejandro González Iñárritu',
        guionista: ['Alejandro González Iñárritu', 'Mark L. Smith'],
        genero: ['Acción', 'Drama'],
        imagen: 'https://images.justwatch.com/poster/77832793/s166/el-renacido.webp'
    },
    {
        id: 19,
        nombre: "El Silencio de los Corderos",
        year: 1991,
        director: "Jonathan Demme",
        guionista: "Ted Tally",
        genero: ['Drama', 'Thriller', 'Crimen'],
        imagen: 'https://images.justwatch.com/poster/65513666/s166/el-silencio-de-los-corderos.webp'
    },
    {
        id: 20,
        nombre: 'Blade Runner 2049',
        year: 2017,
        director: 'Denis Villeneuve',
        guionista: ['David Peoples', 'Hampton Fancher'],
        genero: ['Ciencia ficciòn', 'Acción', 'Drama'],
        imagen: 'https://images.justwatch.com/poster/129662494/s166/blade-runner-2049.webp'
    },
    {
        id: 21,
        nombre: 'Perfect Blue',
        year: 1998,
        director: 'Satoshi Kon',
        guionista: ['Yoshikazu Takeuchi','Lia Sargent'],
        genero: ['Animación','Suspenso', 'Drama'],
        imagen: 'https://images.justwatch.com/poster/11044803/s166/perfect-blue-1998.webp'
    },
    {
        id: 22,
        nombre: 'Ciudadano Kane',
        year: 1941,
        director: 'Orson Welles',
        guionista: ['Orson Welles','Herman J. Mankiewicz','John Houseman','Mollie Kent','Roger Q. Denny'],
        genero: ['Drama', 'Acción', 'Suspenso'],
        imagen: 'https://images.justwatch.com/poster/308672978/s166/ciudadano-kane.webp'
    },
    {
        id: 23,
        nombre: 'Harakiri',
        year: 1962,
        director: 'Masaki Kobayashi',
        guionista: 'Shinobu Hashimoto',
        genero: ['Acción', 'Drama'],
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGm4w4G2TJ2WLrBdFvWalBNtBPxHoJWL8chQ&s'
    },
    {
        id: 24,
        nombre: 'Reservoir Dogs',
        year: 1992,
        director: 'Quentin Tarantino',
        guionista: 'Quentin Tarantino',
        genero: ['Crimen', 'Acción', 'Policial'],
        imagen: 'https://images.justwatch.com/poster/17147903/s166/reservoir-dogs.webp'
    },
    {
        id: 25,
        nombre: 'Ghost in the shell',
        year: 1995,
        director: 'Mamoru Oshii',
        guionista: 'Masamune Shirow',
        genero: ['Ciencia ficciòn','Animación','Drama','Acción'],
        imagen: 'https://images.justwatch.com/poster/305932791/s166/ghost-in-the-shell.webp'
    },
    {
        id: 26,
        nombre: 'Taxi Driver',
        year: 1976,
        director: 'Martin Scorsese',
        guionista: "Paul Schrader",
        genero: ['Drama','Acción','Policial'],
        imagen: 'https://images.justwatch.com/poster/306613941/s166/mobeomtaegsi.webp'
    },
    {
        id: 27,
        nombre: "Akira",
        year: 1988,
        director: 'Katsuhiro Otomo',
        guionista: ['Katsuhiro Otomo', 'Izo Hashimoto'],
        genero: ['Animación', 'Ciencia ficciòn'],
        imagen: 'https://images.justwatch.com/poster/307272495/s166/akira.webp'
    },
    {
        id: 28,
        nombre: 'Drive',
        year: 2011,
        director: 'Nicolas Winding Refn',
        guionista: 'Hossein Amini',
        genero: ['Acción','Neo-noir','Drama'],
        imagen: 'https://images.justwatch.com/poster/305874346/s166/drive.webp'
    },
    {
        id: 29,
        nombre: 'Dead Poets Society',
        year: 1990,
        director: 'Peter Weir',
        guionista: 'Tom Schulman',
        genero: ['Tragicomedia','Drama'],
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqdLb3DtOUpWFqTKu-lxQWVDncI3hMSgP9yQ&s'
    },
    {
        id: 30,
        nombre: 'El pianista',
        year: 2002,
        director: 'Roman Polanski',
        guionista: 'Ronald Harwood',
        genero: ['Drama', 'Guerra'],
        imagen: 'https://images.justwatch.com/poster/74766078/s166/el-pianista.webp'
    },
    
]
