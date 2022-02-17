const restaurantesES = [
  {
    title: "Kathmandu Tandoori House",
    address: "Calle Acuario, 11, 28042 Madrid España",
    phone: "+34 911 26 97 19",
    cols2: [
      "10€ - 60€",
      "India, Asiática, Saludable, Nepalí",
      "Opciones vegetarianas, Opciones veganas, Opciones sin gluten",
    ],
    img: [
      "https://media-cdn.tripadvisor.com/media/photo-s/17/71/b1/a0/20190506-214714-largejpg.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-w/15/81/2d/00/plato-de-dopiaza.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-l/15/81/2b/5d/momo-tipico-plato-nepali.jpg",
    ],
  },
  {
    title: "Pizzart Villa Canalejas",
    address: "Calle Arlabán 1, 28014 Madrid España",
    phone: "+34 911 08 89 92",
    cols2: [
      "6€ - 15€",
      "Italiana, Pizza, Mediterránea, Saludable, Toscana, Romana, Del Lacio, Siciliana, Del centro de Italia, Del sur de Italia",
      "Opciones vegetarianas, Opciones veganas",
    ],
    img: [
      "https://media-cdn.tripadvisor.com/media/photo-s/1c/85/e5/bc/di-parma.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-f/1c/85/e6/93/salumeria-quesos-italianos.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-f/1c/85/e4/e9/parmigiana-di-melanzane.jpg",
    ],
  },
  {
    title: "Curry Masala",
    address: "Calle Silva 16, 28004 Madrid España",
    phone: "+34 915 23 45 70",
    cols2: [
      "10€ - 25€",
      "Asiática, India",
      "Opciones vegetarianas, Opciones veganas, Opciones sin gluten",
    ],
    img: [
      "https://media-cdn.tripadvisor.com/media/photo-s/21/63/d7/ab/new-curry-masala.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-f/1c/22/33/c2/comida-curry-masala.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-f/1c/22/34/25/arroz-con-pollo-al-curry.jpg",
    ],
  },
  {
    title: "Eiffel",
    address: "Calle SESEÑA, 18 BAJO, 28024 Madrid España",
    phone: "+34 915 18 37 14",
    cols2: [
      "25€ - 40€",
      "Española, Mediterránea, Europea",
      "Opciones vegetarianas, Opciones veganas, Opciones sin gluten",
    ],
    img: [
      "https://media-cdn.tripadvisor.com/media/photo-s/16/63/99/aa/eiffel.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/1c/03/23/10/solomillo-al-oporto.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-f/0c/71/ed/7b/tartare-de-aguacate-y.jpg",
    ],
  },
  {
    title: "Curry y Canela",
    address: "Calle Espartinas 7, 28001 Madrid España",
    phone: "+34 914 35 62 32",
    cols2: [
      "14€ - 40€",
      "India, Asiática, Nepalí, Saludable",
      "Opciones vegetarianas, Opciones veganas, Opciones sin gluten",
    ],
    img: [
      "https://media-cdn.tripadvisor.com/media/photo-p/17/d1/9b/87/descubre-india-y-nepal.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-f/1c/91/e2/84/curry-canela.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-f/1c/91/e2/65/curry-canela.jpg",
    ],
  },
  {
    title: "Arpit",
    address: "Calle María Tubau 19, 28050 Madrid España",
    phone: "+34 918 19 50 90",
    cols2: [
      "9€ - 26€",
      "India",
      "Opciones vegetarianas, Opciones veganas, Opciones sin gluten",
    ],
    img: [
      "https://media-cdn.tripadvisor.com/media/photo-s/1c/21/d7/e9/comedor-arpit.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-f/1c/21/d9/a8/comida-hindu.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-f/1c/21/dd/b2/comida-hindu-arpit.jpg",
    ],
  },
  {
    title: "Real Talent Café",
    address: "Calle de la Union 1, 28013 Madrid España",
    phone: "+34 911 80 70 63",
    cols2: [
      "12€ - 20€",
      "Mediterránea, Española, Saludable",
      "Opciones vegetarianas, Opciones veganas, Opciones sin gluten",
    ],
    img: [
      "https://media-cdn.tripadvisor.com/media/photo-s/19/6a/99/81/arroz-negro.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/19/6a/96/dc/paella-valenciana.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-f/19/6a/96/9f/talent-bomba-no-se-puede.jpg",
    ],
  },
  {
    title: "Lumbini Tandoori",
    address:
      "Calle Aviador Zorita Near by Santiago Bernabéu, 28020 Madrid España",
    phone: "+34 915 71 21 50",
    cols2: [
      "5€ - 54€",
      "India, Asiática, Nepalí",
      "Opciones vegetarianas, Opciones veganas, Opciones sin gluten",
    ],
    img: [
      "https://media-cdn.tripadvisor.com/media/photo-s/15/ac/e2/0e/lumbini-4.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-l/15/5f/11/ac/lum3.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-f/15/25/7e/60/foto-9.jpg",
    ],
  },
  {
    title: "Kai Thai",
    address: "Calle de la Princesa 13 Local 3, 28008 Madrid España",
    phone: "+34 915 40 04 47",
    cols2: [
      "10€ - 30€",
      "Asiática, Tailandesa, Saludable",
      "Opciones vegetarianas, Opciones veganas",
    ],
    img: [
      "https://media-cdn.tripadvisor.com/media/photo-s/19/68/e2/69/kai-yang-contramuslo.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/19/68/e2/9e/tom-yam-kung-sopa-tradicional.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-f/19/68/e2/11/karee-pab-empanadillas.jpg",
    ],
  },
  {
    title: "Cherry Pecas",
    address: "Paseo de San Francisco de Sales 17, 28003 Madrid España",
    phone: "+34 645 76 22 00",
    cols2: [
      "4€ - 11€",
      "Mexicana, Latina, Comida rápida, Centroamericana",
      "Opciones vegetarianas, Opciones veganas, Opciones sin gluten",
    ],
    img: [
      "https://media-cdn.tripadvisor.com/media/photo-p/16/59/ae/da/logo-cherry-pecas.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-p/0e/8c/fd/9b/tacos.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-l/0e/8c/fd/7c/tacos-y-quesadilla.jpg",
    ],
  },
  {
    title: "Restaurante Vietnam Express",
    address: "Calle Bretón de los Herreros, 45 Local 2, 28003 Madrid España",
    phone: "+34 911 10 73 77",
    cols2: [
      "10€ - 15€",
      "Asiática, Vietnamita, Sopas, Fusión",
      "Opciones vegetarianas, Opciones veganas, Opciones sin gluten",
    ],
    img: [
      "https://media-cdn.tripadvisor.com/media/photo-s/18/23/75/c0/caption.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/15/64/07/39/bienvenidos-a-vietnam.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-f/18/1b/1e/d9/caption.jpg",
    ],
  },
  {
    title: "Oliveto",
    address: "Calle Santa Isabel 45, 28012 Madrid España",
    phone: "+34 911 99 82 69",
    cols2: [
      "12€ - 30€",
      "Italiana, Mediterránea, Europea",
      "Opciones vegetarianas, Opciones veganas, Opciones sin gluten",
    ],
    img: [
      "https://media-cdn.tripadvisor.com/media/photo-s/10/40/99/6b/photo0jpg.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-f/0d/d4/9b/e9/photo3jpg.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-f/06/b2/7f/5c/oliveto.jpg",
    ],
  },
  {
    title: "Vega",
    address: "Calle Luna 9, 28004 Madrid España",
    phone: "+34 910 70 49 69",
    cols2: [
      "8€ - 25€",
      "Saludable, Fusión",
      "Opciones vegetarianas, Opciones veganas, Opciones sin gluten",
    ],
    img: [
      "https://media-cdn.tripadvisor.com/media/photo-s/13/7b/a8/3e/20180625-142540-largejpg.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/0a/ba/a5/c7/local.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-f/0a/ba/8e/2c/vega.jpg",
    ],
  },
  {
    title: "La Hummuseria",
    address: "Calle Hernan Cortes 8, 28004 Madrid España",
    phone: "+34 910 22 62 40",
    cols2: [
      "8€ - 15€",
      "Mediterránea, Saludable, De Oriente Medio, Israelí",
      "Opciones vegetarianas, Opciones veganas, Opciones sin gluten",
    ],
    img: [
      "https://media-cdn.tripadvisor.com/media/photo-s/11/36/e8/2f/isalud.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/09/f9/26/17/la-hummuseria.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-f/11/36/e8/b5/tapa-del-dia.jpg",
    ],
  },
  {
    title: "Bambubox Madrid",
    address: "Calle Clavel 7, 28004 Madrid España",
    phone: "+34 910 14 61 03",
    cols2: [
      "12€ - 32€",
      "Tailandesa, Saludable",
      "Opciones veganas, Opciones sin gluten",
    ],
    img: [
      "https://media-cdn.tripadvisor.com/media/photo-s/14/ee/e0/3c/bambubox.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-o/09/4c/59/5c/bambubox.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/14/ee/d6/48/tom-ka-gai.jpg",
    ],
  },
  {
    title: "Lune Creperie",
    address: "Paseo la Chopera 33 Local 1, 28045 Madrid España",
    phone: "+34 919 21 70 05",
    cols2: ["6€ - 11€", "Francesa", "Opciones vegetarianas, Opciones veganas"],
    img: [
      "https://media-cdn.tripadvisor.com/media/photo-p/1a/df/e8/26/deco.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/1a/df/e7/d2/galette-queso-de-cabra.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/1a/df/e7/c0/crepe-belle-helene.jpg",
    ],
  },
  {
    title: "Brunch Club Cafe",
    address: "Calle Barco 15, 28004 Madrid España",
    phone: "+34 910 46 19 34",
    cols2: [
      "12€ - 25€",
      "Británica, Café, Internacional, Europea, Saludable",
      "Opciones vegetarianas, Opciones veganas, Opciones sin gluten",
    ],
    img: [
      "https://media-cdn.tripadvisor.com/media/photo-s/11/59/0b/b9/brunch-club.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-p/18/27/7d/2d/brunch.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/11/59/0b/bf/brunch.jpg",
    ],
  },
  {
    title: "Indian Aroma",
    address: "Calle Ventura de La Vega 6, 28014 Madrid España",
    phone: "+34 913 69 23 33",
    cols2: [
      "20€ - 40€",
      "India, Asiática, Saludable, Balti",
      "Opciones vegetarianas, Opciones veganas, Opciones sin gluten",
    ],
    img: [
      "https://media-cdn.tripadvisor.com/media/photo-s/17/db/4d/da/photo0jpg.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-f/16/ae/9f/91/great-atmosphere.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-f/1b/9d/f9/89/typical-hyderabad-dum.jpg",
    ],
  },
  {
    title: "Oven Mozzarella Bar Atocha",
    address: "Atocha 114, 28012 Madrid España",
    phone: "+34 910 53 12 46",
    cols2: [
      "15€ - 20€",
      "Italiana, Toscana, Del centro de Italia",
      "Opciones vegetarianas, Opciones veganas",
    ],
    img: [
      "https://media-cdn.tripadvisor.com/media/photo-s/16/aa/d2/d8/solomillo-de-la-finca.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/1c/22/03/f7/tu-tambien-eres-un-amante.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/1c/22/03/ed/las-pizzas-son-unas-de.jpg",
    ],
  },
  {
    title: "Gustazio Gastrobar",
    address: "Calle Embajadores 197, 28045 Madrid España",
    phone: "+34 912 30 22 98",
    cols2: [
      "15€ - 35€",
      "Italiana, Mediterránea, Saludable, Toscana, Romana, Del Lacio, Del centro de Italia",
      "Opciones veganas, Opciones sin gluten",
    ],
    img: [
      "https://media-cdn.tripadvisor.com/media/photo-p/16/1c/10/34/pinsa-acciuga.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/1c/3b/6b/f6/inueva-pinsa-acquolina.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/16/1c/0f/95/bagnacauda.jpg",
    ],
  },
  {
    title: "Bombardino Café",
    address: "Calle Salitre, 2, 28012 Madrid España",
    phone: "+34 915 02 24 03",
    cols2: [
      "5€ - 20€",
      "Italiana, Mediterránea, Europea, Española, Fusión",
      "Opciones vegetarianas, Opciones veganas, Opciones sin gluten",
    ],
    img: [
      "https://media-cdn.tripadvisor.com/media/photo-s/0c/11/f2/f9/img-20160719-004815-largejpg.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/0b/9c/e7/13/bombardino-cafe-fachada.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-l/1b/b5/21/88/emanuele-y-jorge-socios.jpg",
    ],
  },
  {
    title: "Pastamore",
    address: "Calle Alcalá, 191, 28009 Madrid España",
    phone: "+34 919 91 54 74",
    cols2: [
      "15€ - 23€",
      "Italiana, Pizza, Mediterránea, Saludable, Toscana, Siciliana, Del centro de Italia, Del sur de Italia",
      "Opciones vegetarianas, Opciones sin gluten, Opciones veganas",
    ],
    img: [
      "https://media-cdn.tripadvisor.com/media/photo-s/19/e2/0c/4a/caption.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-f/19/5f/95/4d/maccheroni-cuatro-quesos.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-l/19/e2/09/53/calzone.jpg",
    ],
  },
  {
    title: "Restaurante Sagar",
    address: "Calle Alonso Heredia, 22, 28028 Madrid España",
    phone: "+34 917 13 11 55",
    cols2: [
      "20€ - 50€",
      "India",
      "Opciones vegetarianas, Opciones veganas, Opciones sin gluten",
    ],
    img: [
      "https://media-cdn.tripadvisor.com/media/photo-s/03/35/1c/09/restaurante-sagar.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-f/15/4c/6e/16/un-pequeno-trocito-de.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-f/03/35/1b/ad/restaurante-sagar.jpg",
    ],
  },
  {
    title: "Jack Percoca",
    address: "Calle Conde Duque 14, 28015 Madrid España",
    phone: "+34 915 13 50 44",
    cols2: [
      "10€ - 20€",
      "Italiana, Pizza",
      "Opciones vegetarianas, Opciones veganas, Opciones sin gluten",
    ],
    img: [
      "https://media-cdn.tripadvisor.com/media/photo-s/0d/c3/db/c8/jack-percoca.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/0a/f6/7f/1c/jack-percoca-bar-kitchen.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/0a/f6/98/5c/el-nuestro-spaghetti.jpg",
    ],
  },
  {
    title: "La Bistroteca",
    address:
      "Calle Espartinas 7, local izquierda Barrio Salamanca, 28001 Madrid España",
    phone: "+34 914 25 86 01",
    cols2: [
      "20€ - 25€",
      "Fusión",
      "Opciones vegetarianas, Opciones sin gluten",
    ],
    img: [
      "https://media-cdn.tripadvisor.com/media/photo-s/0a/97/0a/30/la-bistroteca.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-p/10/db/9d/90/la-nipona-atun-a-la-parilla.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/10/db/9d/9f/nuestra-bacon.jpg",
    ],
  },
  {
    title: "Ástor",
    address: "Calle del Almendro 9, 28005 Madrid España",
    phone: "+34 910 39 80 00",
    cols2: [
      "15€ - 50€",
      "Internacional, Mediterránea, Europea, Fusión, Saludable",
      "Opciones vegetarianas, Opciones veganas, Opciones sin gluten",
    ],
    img: [
      "https://media-cdn.tripadvisor.com/media/photo-p/1b/80/99/3a/photo8jpg.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/0d/fb/81/4b/astor-gastro-place.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-f/1a/e2/4e/99/caption.jpg",
    ],
  },
  {
    title: "Periplo Café",
    address: "Calle de Modesto Lafuente, 4,, 28010 Madrid España",
    phone: "+34 622 63 89 74",
    cols2: [
      "5€ - 10€",
      "Bar, Mediterránea, Griega, Pub restaurante, Europea",
      "Opciones vegetarianas, Opciones veganas, Opciones sin gluten",
    ],
    img: [
      "https://media-cdn.tripadvisor.com/media/photo-p/0b/d2/f5/06/periplo-cafe.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/0d/40/39/b3/periplo-cafe.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-l/0b/d2/f5/02/periplo-cafe.jpg",
    ],
  },
  {
    title: "La Piramide",
    address: "Calle Xaudaro 2, 28034 Madrid España",
    phone: "+34 917 29 42 95",
    cols2: [
      "16€ - 60€",
      "Mediterránea, Europea, Internacional, Española, Fusión, Saludable, Sopas",
      "Opciones vegetarianas, Opciones veganas, Opciones sin gluten",
    ],
    img: [
      "https://media-cdn.tripadvisor.com/media/photo-s/21/d8/2d/71/mousse-de-castanas-conmarron.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/1a/e2/28/5b/corvina-con-acelgas-y.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-f/1c/cf/7d/f4/lomo-de-caballa-curado.jpg",
    ],
  },
  {
    title: "Pizzart Fuencarral",
    address: "Fuencarral 58, 28004 Madrid España",
    phone: "+34 911 08 89 91",
    cols2: [
      "9€ - 18€",
      "Italiana, Pizza, Romana, Del Lacio, Del centro de Italia, Del sur de Italia, Mediterránea, Napolitana, De Campania, Siciliana",
      "Opciones vegetarianas, Opciones veganas",
    ],
    img: [
      "https://media-cdn.tripadvisor.com/media/photo-s/1c/c0/a4/76/inuova.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-f/1c/c0/a7/18/burrata-e-gamberi-speziata.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-f/1c/c0/a7/3e/speziata.jpg",
    ],
  },
  {
    title: "BLoved",
    address:
      "Gran Via 9 Acceso a través del Hotel Catalonia Gran Vía, 28013 Madrid España",
    phone: "+34 915 32 55 68",
    cols2: [
      "25€ - 45€",
      "Internacional, Fusión, Mediterránea, Europea, Española",
      "Opciones vegetarianas, Opciones veganas, Opciones sin gluten",
    ],
    img: [
      "https://media-cdn.tripadvisor.com/media/photo-s/11/d0/21/2c/vista-invernadero-bloved.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/19/bb/8c/44/pate-de-centolla.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-f/19/51/6d/c4/postre-choco-bone-jornadas.jpg",
    ],
  },
  {
    title: "Cacao Restobar",
    address: "Calle de Moratin 19 Esquina Calle San Jose, 28014 Madrid España",
    phone: "+34 911 74 63 68",
    cols2: [
      "3€ - 25€",
      "Latina, Mediterránea, Española, Venezolana",
      "Opciones vegetarianas, Opciones veganas, Opciones sin gluten",
    ],
    img: [
      "https://media-cdn.tripadvisor.com/media/photo-s/0e/c5/db/b3/20170321-151636-largejpg.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-f/0d/53/34/8c/solomillo-de-ternera.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-f/0d/53/34/54/pan-cook.jpg",
    ],
  },
  {
    title: "Beytna Restaurante",
    address: "Calle Moscatelar 18, 28043 Madrid España",
    phone: "+34 916 14 48 47",
    cols2: [
      "8€ - 24€",
      "Mediterránea, De Oriente Medio, Árabe",
      "Opciones vegetarianas, Opciones veganas",
    ],
    img: [
      "https://media-cdn.tripadvisor.com/media/photo-s/19/50/3e/df/te-invitamos-a-disfrutar.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-f/19/b9/d0/b9/beytna-que-significa.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-f/1b/f8/40/a4/beytna-es-el-sitio-perfecto.jpg",
    ],
  },
  {
    title: "Gato Gato",
    address: "Calle De Marquéz De Toca 6 Lavapiés, 28012 Madrid España",
    phone: "+34 912 08 68 70",
    cols2: [
      "9€ - 26€",
      "Española, Mediterránea, Europea, Saludable, Contemporánea",
      "Opciones vegetarianas, Opciones veganas, Opciones sin gluten",
    ],
    img: [
      "https://media-cdn.tripadvisor.com/media/photo-s/12/d8/9d/fe/gato-gato.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/1a/be/8f/c4/taco-de-oreja-con-salsa.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/1a/be/8f/b0/timbal-de-berenjena-tomate.jpg",
    ],
  },
  {
    title: "La Encomienda",
    address: "Calle de la Encomienda 19, 28012 Madrid España",
    phone: "+34 910 29 13 00",
    cols2: [
      "6€ - 20€",
      "Contemporánea, Mediterránea, Saludable",
      "Opciones vegetarianas, Opciones veganas, Opciones sin gluten",
    ],
    img: [
      "https://media-cdn.tripadvisor.com/media/photo-s/12/4f/82/db/lasana-crudivegana.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/12/22/df/d3/menu-del-dia.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-f/13/0b/d7/14/hamburguesa.jpg",
    ],
  },
  {
    title: "Vega Alamo",
    address: "Calle del Alamo 3, 28015 Madrid España",
    phone: "+34 910 70 37 19",
    cols2: [
      "10€ - 30€",
      "Saludable, Internacional, Contemporánea, Fusión",
      "Opciones vegetarianas, Opciones veganas, Opciones sin gluten",
    ],
    img: [
      "https://media-cdn.tripadvisor.com/media/photo-s/1a/4e/c5/dc/risotto-negro-mar-y-montana.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-f/1a/4e/c6/38/choco-loko.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-f/1a/4e/c9/51/steak-tartar-de-beyond.jpg",
    ],
  },
  {
    title: "Trattoria Pulcinella",
    address: "C/ de Regueros, 7, 28004 Madrid España",
    phone: "+34 913 19 73 63",
    cols2: [
      "11€ - 29€",
      "Italiana, Saludable, Napolitana, De Campania, Romana, Del Lacio, Siciliana, Del centro de Italia, Del sur de Italia",
      "Opciones vegetarianas, Opciones veganas, Opciones sin gluten",
    ],
    img: [
      "https://media-cdn.tripadvisor.com/media/photo-s/04/a3/56/13/pulcinella.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/1c/5a/f0/c0/scaloppine-al-marsala.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-f/1c/5a/f0/b0/rigatoni-all-indiavolata.jpg",
    ],
  },
  {
    title: "Arbonaida Bar",
    address: "Santiago 11, 28013 Madrid España",
    phone: "+34 639 50 00 68",
    cols2: [
      "8€ - 15€",
      "Mediterránea, Europea, Española",
      "Opciones vegetarianas, Opciones veganas, Opciones sin gluten",
    ],
    img: [
      "https://media-cdn.tripadvisor.com/media/photo-p/0a/55/4b/44/salon.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/0a/55/4b/42/calles-del-albaicin.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/0a/55/4b/43/logo.jpg",
    ],
  },
  {
    title: "Maruzzella",
    address: "Raimundo Fernandez Villaverde, 28, 28003 Madrid España",
    phone: "+34 915 34 77 32",
    cols2: [
      "15€ - 30€",
      "Italiana, Pizza, Napolitana, De Campania, Toscana, Romana, Del Lacio, Siciliana, Del centro de Italia, Del sur de Italia",
      "Opciones vegetarianas, Opciones veganas, Opciones sin gluten",
    ],
    img: [
      "https://media-cdn.tripadvisor.com/media/photo-s/1c/5a/f2/df/spaghetti-alle-vongole.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/1a/7a/73/4a/nuestra-especial-pizza.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-f/1c/5a/f2/de/tagliatelle-bolognese.jpg",
    ],
  },
  {
    title: "Purnima Indian Restaurant",
    address: "Calle Goya 110, 28009 Madrid España",
    phone: "+34 910 70 96 10",
    cols2: [
      "13€ - 30€",
      "India",
      "Opciones vegetarianas, Opciones veganas, Opciones sin gluten",
    ],
    img: [
      "https://media-cdn.tripadvisor.com/media/photo-s/16/62/42/b9/purnima-inside.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-f/17/f7/99/54/comida.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-f/17/f7/98/27/comida.jpg",
    ],
  },
  {
    title: "Deleïte",
    address:
      "Av. de Logroño Esquina con Calle de Algemesi, 28042 Madrid España",
    phone: "+34 910 25 29 83",
    cols2: [
      "15€ - 35€",
      "Española, Mediterránea, Fusión",
      "Opciones vegetarianas, Opciones veganas, Opciones sin gluten",
    ],
    img: [
      "https://media-cdn.tripadvisor.com/media/photo-s/15/98/d7/f3/ven-a-conocernos.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/15/98/e9/41/oreja-fina-crujiente.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-l/15/98/e9/0f/pimientos-de-cristal.jpg",
    ],
  },
  {
    title: "Alcaravea Gaztambide",
    address: "Calle Gaztambide 56 Gaztambide 56, 28015 Madrid España",
    phone: "+34 912 83 80 05",
    cols2: [
      "18€ - 35€",
      "Mediterránea, Europea, Española",
      "Opciones vegetarianas, Opciones veganas, Opciones sin gluten",
    ],
    img: [
      "https://media-cdn.tripadvisor.com/media/photo-s/1d/91/2a/4d/ensalada-de-tomate-y.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/1d/91/2a/65/calamar-fresco-de-potera.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-f/1d/91/2a/74/quien-se-resiste-a-una.jpg",
    ],
  },
  {
    title: "Bangalore Modern Indian Cuisine",
    address: "63 Calle Diego de Leon, 28006 Madrid España",
    phone: "+34 910 57 17 73",
    cols2: [
      "14€ - 35€",
      "India, Balti",
      "Opciones vegetarianas, Opciones veganas, Opciones sin gluten",
    ],
    img: [
      "https://media-cdn.tripadvisor.com/media/photo-s/16/82/fc/92/planta-calle.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-f/17/f7/a2/bc/pollo.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-f/16/83/00/0c/entrantes.jpg",
    ],
  },
  {
    title: "Amicis",
    address: "Plaza del Conde de Miranda 4, 28005 Madrid España",
    phone: "+34 910 58 78 80",
    cols2: [
      "3€ - 36€",
      "Española",
      "Opciones vegetarianas, Opciones veganas, Opciones sin gluten",
    ],
    img: [
      "https://media-cdn.tripadvisor.com/media/photo-s/10/b1/26/79/nuestro-equipo-a-grandes.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-f/1b/a6/75/6f/delicious-grilled-salmon.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-f/19/de/d1/2d/mouthwatering-creamy.jpg",
    ],
  },
  {
    title: "EatMyTrip",
    address: "Calle Moreria 11 Almudena cathedral nearby, 28005 Madrid España",
    phone: "+34 611 15 10 30",
    cols2: [
      "2€ - 16€",
      "Americana, Café, Internacional, Española, Fusión, Saludable",
      "Opciones veganas, Opciones sin gluten",
    ],
    img: [
      "https://media-cdn.tripadvisor.com/media/photo-s/1c/9d/f8/c4/bienvenidos-a-eatmytrip.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/1c/9d/f7/9a/brunch-de-los-alpes.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/1c/9d/f8/49/macho-iberico.jpg",
    ],
  },
  {
    title: "Sakale",
    address: "Calle del Molino de Viento 4, 28004 Madrid España",
    phone: "+34 918 65 63 22",
    cols2: [
      "7€ - 18€",
      "Mexicana, Japonesa, Caribeña, Latina, Sushi, Asiática, Saludable, Fusión",
      "Opciones vegetarianas, Opciones veganas, Opciones sin gluten",
    ],
    img: [
      "https://media-cdn.tripadvisor.com/media/photo-s/1c/3c/b8/4f/rolls-favoritos.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-f/16/76/cb/27/sushi-lovers.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-f/1a/87/ad/80/ensalada-neptuno.jpg",
    ],
  },
  {
    title: "Periplo Café",
    address: "Calle de Modesto Lafuente, 4,, 28010 Madrid España",
    phone: "+34 622 63 89 74",
    cols2: [
      "5€ - 10€",
      "Bar, Mediterránea, Griega, Pub restaurante, Europea",
      "Opciones vegetarianas, Opciones veganas, Opciones sin gluten",
    ],
    img: [
      "https://media-cdn.tripadvisor.com/media/photo-p/0b/d2/f5/06/periplo-cafe.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/0d/40/39/b3/periplo-cafe.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-l/0b/d2/f5/02/periplo-cafe.jpg",
    ],
  },
];

module.exports = { restaurantesES };
