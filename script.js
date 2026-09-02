/* =====================================
   ÓPTICA EYEON
   CONFIGURACIÓN
===================================== */

const numeroWhatsApp = "573204771054";

const productosPorPagina = 12;


/* =====================================
   BASE DE DATOS DE MONTURAS
===================================== */

const monturas = [

    {
        id: 1,

        marca: "Ray-Ban",

        nombre: "Ray-Ban Erika",

        referencia: "RB001",

        color: [
            "Cafe",
            "Negro",
            "Carey"
        ],

        categorias: [
            "rayban",
            "clasicas",
            "sol",
            "unisex"
        ],

        imagenes: [
            "imagenes/monturas/rayban/rb001.jpeg",
            "imagenes/monturas/rayban/rb002.jpeg",
            "imagenes/monturas/rayban/rb003.jpeg",
            "imagenes/monturas/rayban/rb004.jpeg",
            "imagenes/monturas/rayban/rb027.jpeg",
            "imagenes/monturas/rayban/rb028.jpeg",
        ],

        estado: "Disponible"
    },


    {
        id: 2,

        marca: "Ray-Ban",

        nombre: "Ray-Ban WAYFARER",

        referencia: "RB002",

        color: [
            "Negro",
            "Carey"
        ],

        categorias: [
            "rayban",
            "clasicas",
            "sol",
            "unisex"
        ],

        imagenes: [
            "imagenes/monturas/rayban/rb005.jpeg",
            "imagenes/monturas/rayban/rb006.jpeg",
            "imagenes/monturas/rayban/rb009.jpeg",
            "imagenes/monturas/rayban/rb010.jpeg",
            "imagenes/monturas/rayban/rb045.jpeg",
            "imagenes/monturas/rayban/rb046.jpeg"
        ],

        estado: "Últimas unidades"
    },


    {
        id: 3,

        marca: "Ray-Ban",

        nombre: "Ray-Ban JUSTIN",

        referencia: "RB003",

        color: [
            "Azul",
            "Negro",
            "Rojo"
        ],

        categorias: [
            "rayban",
            "deportivas",
            "unisex",
            "sol"
        ],

        imagenes: [
            "imagenes/monturas/rayban/rb007.jpeg",
            "imagenes/monturas/rayban/rb008.jpeg",
            "imagenes/monturas/rayban/rb011.jpeg",
            "imagenes/monturas/rayban/rb012.jpeg",
            "imagenes/monturas/rayban/rb041.jpeg",
            "imagenes/monturas/rayban/rb042.jpeg"
        ],

        estado: "Últimas unidades"
    },


    {
        id:4,

        marca: "Ray-Ban",

        nombre: "Ray-Ban CAT-EYE",

        referencia: "RB004",

        color: [
            "Carey",
        ],

        categorias: [
            "rayban",
            "deportivas",
            "mujer",
            "sol"
        ],

        imagenes: [
            "imagenes/monturas/rayban/rb013.jpeg",
            "imagenes/monturas/rayban/rb014.jpeg"
        ],

        estado: "Últimas unidades"
    },


    {
        id:5,

        marca: "Ray-Ban",

        nombre: "Ray-Ban ICONS",

        referencia: "RB005",

        color: [
            "Negro",
        ],

        categorias: [
            "rayban",
            "clasicas",
            "unisex",
            "sol"
        ],

        imagenes: [
            "imagenes/monturas/rayban/rb015.jpeg",
            "imagenes/monturas/rayban/rb016.jpeg"
        ],

        estado: "Últimas unidades"
    },


    {
        id:6,

        marca: "Ray-Ban",

        nombre: "Ray-Ban PILLOW",

        referencia: "RB006",

        color: [
            "Morado",
            "Negro"
        ],

        categorias: [
            "rayban",
            "deportivas",
            "sol",
            "unisex"
        ],

        imagenes: [
            "imagenes/monturas/rayban/rb017.jpeg",
            "imagenes/monturas/rayban/rb018.jpeg",
            "imagenes/monturas/rayban/rb039.jpeg",
            "imagenes/monturas/rayban/rb040.jpeg"
        ],

        estado: "Últimas unidades"
    },


    {
        id:7,

        marca: "Ray-Ban",

        nombre: "Ray-Ban JUSTIN",

        referencia: "RB007",

        color: [
            "Naranja",
            "Cafe"
        ],

        categorias: [
            "rayban",
            "deportivas",
            "unisex",
            "sol"
        ],

        imagenes: [
            "imagenes/monturas/rayban/rb019.jpeg",
            "imagenes/monturas/rayban/rb020.jpeg",
            "imagenes/monturas/rayban/rb023.jpeg",
            "imagenes/monturas/rayban/rb024.jpeg"
        ],

        estado: "Últimas unidades"
    },


    {
        id:8,

        marca: "Ray-Ban",

        nombre: "Ray-Ban ICONS",

        referencia: "RB008",

        color: [
            "Dorado",
        ],

        categorias: [
            "rayban",
            "deportivas",
            "unisex",
            "sol"
        ],

        imagenes: [
            "imagenes/monturas/rayban/rb021.jpeg",
            "imagenes/monturas/rayban/rb022.jpeg"
        ],

        estado: "Últimas unidades"
    },


    {
        id:9,

        marca: "Ray-Ban",

        nombre: "Ray-Ban ICONS",

        referencia: "RB009",

        color: [
            "Gris",
        ],

        categorias: [
            "rayban",
            "deportivas",
            "unisex",
            "sol"
        ],

        imagenes: [
            "imagenes/monturas/rayban/rb037.jpeg",
            "imagenes/monturas/rayban/rb038.jpeg"
        ],

        estado: "Últimas unidades"
    },


    {
        id:10,

        marca: "Ray-Ban",

        nombre: "Ray-Ban FERRARI",

        referencia: "RB010",

        color: [
            "Negro",
        ],

        categorias: [
            "rayban",
            "deportivas",
            "unisex",
            "sol"
        ],

        imagenes: [
            "imagenes/monturas/rayban/rb025.jpeg",
            "imagenes/monturas/rayban/rb026.jpeg"
        ],

        estado: "Últimas unidades"
    },


    {
        id:11,

        marca: "Ray-Ban",

        nombre: "Ray-Ban AVIATOR",

        referencia: "RB011",

        color: [
            "Negro",
        ],

        categorias: [
            "rayban",
            "deportivas",
            "unisex",
            "sol"
        ],

        imagenes: [
            "imagenes/monturas/rayban/rb029.jpeg",
            "imagenes/monturas/rayban/rb030.jpeg"
        ],

        estado: "Últimas unidades"
    },


    {
        id:12,

        marca: "Ray-Ban",

        nombre: "Ray-Ban CLASSIC",

        referencia: "RB012",

        color: [
            "Negro",
        ],

        categorias: [
            "rayban",
            "deportivas",
            "unisex",
            "sol"
        ],

        imagenes: [
            "imagenes/monturas/rayban/rb033.jpeg",
            "imagenes/monturas/rayban/rb034.jpeg"
        ],

        estado: "Últimas unidades"
    },


    {
        id:13,

        marca: "Ray-Ban",

        nombre: "Ray-Ban FERRARI",

        referencia: "RB013",

        color: [
            "Carey",
        ],

        categorias: [
            "rayban",
            "deportivas",
            "unisex",
            "sol"
        ],

        imagenes: [
            "imagenes/monturas/rayban/rb035.jpeg",
            "imagenes/monturas/rayban/rb036.jpeg"
        ],

        estado: "Últimas unidades"
    },


    {
        id:14,

        marca: "Ray-Ban",

        nombre: "Ray-Ban ICONS",

        referencia: "RB014",

        color: [
            "Dorado",
        ],

        categorias: [
            "rayban",
            "deportivas",
            "unisex",
            "sol"
        ],

        imagenes: [
            "imagenes/monturas/rayban/rb047.jpeg",
            "imagenes/monturas/rayban/rb048.jpeg"
        ],

        estado: "Últimas unidades"
    },


    {
        id:15,

        marca: "Oakley",

        nombre: "Oakley PRISMA",

        referencia: "OK001",

        color: [
            "Negro"
        ],

        categorias: [
            "oakley",
            "oftalmica",
            "hombre"
        ],

        imagenes: [
            "imagenes/monturas/oakley/ok001.jpeg",
            "imagenes/monturas/oakley/ok002.jpeg"
        ],

        estado: "Últimas unidades"
    },


    {
        id:16,

        marca: "Oakley",

        nombre: "Oakley PRISMA",

        referencia: "OK002",

        color: [
            "Gris"
        ],

        categorias: [
            "oakley",
            "oftalmica",
            "unisex"
        ],

        imagenes: [
            "imagenes/monturas/oakley/ok003.jpeg",
            "imagenes/monturas/oakley/ok004.jpeg"
        ],

        estado: "Últimas unidades"
    },


    {
        id:17,

        marca: "Oakley",

        nombre: "Oakley PRISMA",

        referencia: "OK003",

        color: [
            "Rojo"
        ],

        categorias: [
            "oakley",
            "3piezas",
            "oftalmica",
            "hombre"
        ],

        imagenes: [
            "imagenes/monturas/oakley/ok005.jpeg",
            "imagenes/monturas/oakley/ok006.jpeg"
        ],

        estado: "Últimas unidades"
    },


    {
        id:18,

        marca: "Oakley",

        nombre: "Oakley PRISMA",

        referencia: "OK004",

        color: [
            "Azul"
        ],

        categorias: [
            "oakley",
            "3piezas",
            "oftalmica",
            "hombre"
        ],

        imagenes: [
            "imagenes/monturas/oakley/ok007.jpeg",
            "imagenes/monturas/oakley/ok008.jpeg"
        ],

        estado: "Últimas unidades"
    },


    {
        id:19,

        marca: "Oakley",

        nombre: "Oakley PRISMA",

        referencia: "OK005",

        color: [
            "Verde"
        ],

        categorias: [
            "oakley",
            "deportivas",
            "oftalmica",
            "unisex"
        ],

        imagenes: [
            "imagenes/monturas/oakley/ok009.jpeg",
            "imagenes/monturas/oakley/ok010.jpeg"
        ],

        estado: "Últimas unidades"
    },


    {
        id:20,

        marca: "Oakley",

        nombre: "Oakley PRISMA",

        referencia: "OK006",

        color: [
            "Cafe"
        ],

        categorias: [
            "oakley",
            "oftalmica",
            "unisex"
        ],

        imagenes: [
            "imagenes/monturas/oakley/ok011.jpeg",
            "imagenes/monturas/oakley/ok012.jpeg"
        ],

        estado: "Últimas unidades"
    },


    {
        id:21,

        marca: "Oakley",

        nombre: "Oakley PRISMA",

        referencia: "OK007",

        color: [
            "Azul",
        ],

        categorias: [
            "oakley",
            "oftalmica",
            "hombre"
        ],

        imagenes: [
            "imagenes/monturas/oakley/ok013.jpeg",
            "imagenes/monturas/oakley/ok014.jpeg"
        ],

        estado: "Últimas unidades"
    },


    {
        id:22,

        marca: "Oakley",

        nombre: "Oakley PRISMA",

        referencia: "OK008",

        color: [
            "Gris"
        ],

        categorias: [
            "oakley",
            "3piezas",
            "oftalmica",
            "foto-cromatico",
            "hombre"
        ],

        imagenes: [
            "imagenes/monturas/oakley/ok015.jpeg",
            "imagenes/monturas/oakley/ok016.jpeg"
        ],

        estado: "Últimas unidades"
    },


    {
        id:23,

        marca: "Oakley",

        nombre: "Oakley PRISMA",

        referencia: "OK009",

        color: [
            "Azul",
        ],

        categorias: [
            "oakley",
            "3piezas",
            "oftalmica",
            "foto-cromatico",
            "hombre"
        ],

        imagenes: [
            "imagenes/monturas/oakley/ok017.jpeg",
            "imagenes/monturas/oakley/ok018.jpeg"
        ],

        estado: "Últimas unidades"
    },


    {
        id:24,

        marca: "Oakley",

        nombre: "Oakley PRISMA",

        referencia: "OK010",

        color: [
            "Rojo"
        ],

        categorias: [
            "oakley",
            "3piezas",
            "oftalmica",
            "foto-cromatico",
            "hombre"
        ],

        imagenes: [
            "imagenes/monturas/oakley/ok019.jpeg",
            "imagenes/monturas/oakley/ok020.jpeg"
        ],

        estado: "Últimas unidades"
    },


    {
        id:25,

        marca: "Oakley",

        nombre: "Oakley PRISMA",

        referencia: "OK011",

        color: [
            "Verde"
        ],

        categorias: [
            "oakley",
            "oftalmica",
            "moderna",
            "hombre"
        ],

        imagenes: [
            "imagenes/monturas/oakley/ok021.jpeg",
            "imagenes/monturas/oakley/ok022.jpeg"
        ],

        estado: "Últimas unidades"
    },


    {
        id:25,

        marca: "Oakley",

        nombre: "Oakley PRISMA",

        referencia: "OK012",

        color: [
            "Negro"
        ],

        categorias: [
            "oakley",
            "oftalmica",
            "moderna",
            "hombre"
        ],

        imagenes: [
            "imagenes/monturas/oakley/ok023.jpeg",
            "imagenes/monturas/oakley/ok024.jpeg"
        ],

        estado: "Últimas unidades"
    },


    {
        id:26,

        marca: "Oakley",

        nombre: "Oakley PRISMA",

        referencia: "OK013",

        color: [
            "Naranja"
        ],

        categorias: [
            "oakley",
            "sol",
            "hombre"
        ],

        imagenes: [
            "imagenes/monturas/oakley/ok025.jpeg",
            "imagenes/monturas/oakley/ok026.jpeg"
        ],

        estado: "Últimas unidades"
    },


    {
        id:27,

        marca: "Oakley",

        nombre: "Oakley PRISMA",

        referencia: "OK014",

        color: [
            "Verde"
        ],

        categorias: [
            "oakley",
            "moderna",
            "oftalmica",
            "hombre"
        ],

        imagenes: [
            "imagenes/monturas/oakley/ok027.jpeg",
            "imagenes/monturas/oakley/ok028.jpeg"
        ],

        estado: "Últimas unidades"
    },


    {
        id:28,

        marca: "Oakley",

        nombre: "Oakley PRISMA",

        referencia: "OK015",

        color: [
            "Azul",
        ],

        categorias: [
            "oakley",
            "oftalmica",
            "moderna",
            "hombre"
        ],

        imagenes: [
            "imagenes/monturas/oakley/ok029.jpeg",
            "imagenes/monturas/oakley/ok030.jpeg"
        ],

        estado: "Últimas unidades"
    },


    {
        id:29,

        marca: "Oakley",

        nombre: "Oakley PRISMA",

        referencia: "OK016",

        color: [
            "Traslucido",
        ],

        categorias: [
            "oakley",
            "deportivas",
            "sol",
            "hombre"
        ],

        imagenes: [
            "imagenes/monturas/oakley/ok031.jpeg",
            "imagenes/monturas/oakley/ok032.jpeg"
        ],

        estado: "Últimas unidades"
    },


    {
        id:30,

        marca: "Oakley",

        nombre: "Oakley PRISMA",

        referencia: "OK017",

        color: [
            "Blanco",
        ],

        categorias: [
            "oakley",
            "deportivas",
            "sol",
            "hombre"
        ],

        imagenes: [
            "imagenes/monturas/oakley/ok033.jpeg",
            "imagenes/monturas/oakley/ok034.jpeg"
        ],

        estado: "Últimas unidades"
    },


    {
        id:31,

        marca: "Oakley",

        nombre: "Oakley PRISMA",

        referencia: "OK018",

        color: [
            "Morado",
        ],

        categorias: [
            "oakley",
            "3piezas",
            "sol",
            "hombre"
        ],

        imagenes: [
            "imagenes/monturas/oakley/ok035.jpeg",
            "imagenes/monturas/oakley/ok036.jpeg"
        ],

        estado: "Últimas unidades"
    },


    {
        id:32,

        marca: "Oakley",

        nombre: "Oakley PRISMA",

        referencia: "OK019",

        color: [
            "Negro",
            "Rojo"
        ],

        categorias: [
            "oakley",
            "moderna",
            "oftalmica",
            "hombre"
        ],

        imagenes: [
            "imagenes/monturas/oakley/ok037.jpeg",
            "imagenes/monturas/oakley/ok038.jpeg"
        ],

        estado: "Últimas unidades"
    },


    {
        id:33,

        marca: "Oakley",

        nombre: "Oakley PRISMA",

        referencia: "OK020",

        color: [
            "Dorado"
        ],

        categorias: [
            "oakley",
            "3piezas",
            "foto-cromatico",
            "hombre"
        ],

        imagenes: [
            "imagenes/monturas/oakley/ok039.jpeg",
            "imagenes/monturas/oakley/ok040.jpeg"
        ],

        estado: "Últimas unidades"
    },


    {
        id:34,

        marca: "Oakley",

        nombre: "Oakley PRISMA",

        referencia: "OK021",

        color: [
            "Rojo",
        ],

        categorias: [
            "oakley",
            "oftalmica",
            "hombre"
        ],

        imagenes: [
            "imagenes/monturas/oakley/ok041.jpeg",
            "imagenes/monturas/oakley/ok042.jpeg"
        ],

        estado: "Últimas unidades"
    },


    {
        id:35,

        marca: "Oakley",

        nombre: "Oakley PRISMA",

        referencia: "OK022",

        color: [
            "Cafe"
        ],

        categorias: [
            "oakley",
            "oftalmica",
            "hombre"
        ],

        imagenes: [
            "imagenes/monturas/oakley/ok043.jpeg",
            "imagenes/monturas/oakley/ok044.jpeg"
        ],

        estado: "Últimas unidades"
    },


    {
        id:36,

        marca: "Oakley",

        nombre: "Oakley PRISMA",

        referencia: "OK023",

        color: [
            "Cafe",
        ],

        categorias: [
            "oakley",
            "oftalmica",
            "hombre"
        ],

        imagenes: [
            "imagenes/monturas/oakley/ok045.jpeg",
            "imagenes/monturas/oakley/ok046.jpeg"
        ],

        estado: "Últimas unidades"
    },


    {
        id:37,

        marca: "Oakley",

        nombre: "Oakley PRISMA",

        referencia: "OK024",

        color: [
            "Azul",
        ],

        categorias: [
            "oakley",
            "oftalmica",
            "hombre"
        ],

        imagenes: [
            "imagenes/monturas/oakley/ok047.jpeg",
            "imagenes/monturas/oakley/ok048.jpeg"
        ],

        estado: "Últimas unidades"
    },


    {
        id:38,

        marca: "Oakley",

        nombre: "Oakley PRISMA",

        referencia: "OK025",

        color: [
            "Gris",
        ],

        categorias: [
            "oakley",
            "oftalmica",
            "hombre"
        ],

        imagenes: [
            "imagenes/monturas/oakley/ok049.jpeg",
            "imagenes/monturas/oakley/ok050.jpeg"
        ],

        estado: "Últimas unidades"
    },


    {
        id:39,

        marca: "Oakley",

        nombre: "Oakley PRISMA",

        referencia: "OK026",

        color: [
            "Negro",
        ],

        categorias: [
            "oakley",
            "oftalmica",
            "hombre"
        ],

        imagenes: [
            "imagenes/monturas/oakley/ok051.jpeg",
            "imagenes/monturas/oakley/ok052.jpeg"
        ],

        estado: "Últimas unidades"
    },


    {
        id:40,

        marca: "Oakley",

        nombre: "Oakley PRISMA",

        referencia: "OK027",

        color: [
            "Gris",
        ],

        categorias: [
            "oakley",
            "oftalmica",
            "hombre"
        ],

        imagenes: [
            "imagenes/monturas/oakley/ok053.jpeg",
            "imagenes/monturas/oakley/ok054.jpeg"
        ],

        estado: "Últimas unidades"
    },


    {
        id:41,

        marca: "Oakley",

        nombre: "Oakley PRISMA",

        referencia: "OK028",

        color: [
            "Cafe",
        ],

        categorias: [
            "oakley",
            "oftalmica",
            "hombre"
        ],

        imagenes: [
            "imagenes/monturas/oakley/ok055.jpeg",
            "imagenes/monturas/oakley/ok056.jpeg"
        ],

        estado: "Últimas unidades"
    }
    

];


/* =====================================
   ELEMENTOS HTML
===================================== */

const productosContenedor =
    document.getElementById("productos");

const buscar =
    document.getElementById("buscar");

const filtrosContenedor =
    document.getElementById("filtros");

const contadorProductos =
    document.getElementById("contadorProductos");

const cargarMas =
    document.getElementById("cargarMas");

const modalProducto =
    document.getElementById("modalProducto");

const contenidoModal =
    document.getElementById("contenidoModal");

const cerrarModal =
    document.getElementById("cerrarModal");

const abrirFavoritos =
    document.getElementById("abrirFavoritos");

const modalFavoritos =
    document.getElementById("modalFavoritos");

const cerrarFavoritos =
    document.getElementById("cerrarFavoritos");

const listaFavoritos =
    document.getElementById("listaFavoritos");

const contadorFavoritos =
    document.getElementById("contadorFavoritos");

const enviarFavoritos =
    document.getElementById("enviarFavoritos");

const menuMovil =
    document.getElementById("menuMovil");

const menu =
    document.getElementById("menu");


/* =====================================
   ESTADO
===================================== */

let categoriaActual = "todos";

let textoBusqueda = "";

let productosMostrados =
    productosPorPagina;


/* =====================================
   FAVORITOS
===================================== */

let favoritos =
    JSON.parse(
        localStorage.getItem("favoritosEyeon")
    ) || [];


/* =====================================
   CREAR FILTROS AUTOMÁTICAMENTE
===================================== */

function crearFiltros() {

    filtrosContenedor.innerHTML = "";


    const botonTodos =
        document.createElement("button");

    botonTodos.className =
        "filtro activo";

    botonTodos.dataset.categoria =
        "todos";

    botonTodos.textContent =
        "Todos";

    filtrosContenedor.appendChild(
        botonTodos
    );


    const categorias = new Set();


    monturas.forEach(montura => {

        montura.categorias.forEach(categoria => {

            categorias.add(categoria);

        });

    });


    [...categorias]
        .sort()
        .forEach(categoria => {


            const boton =
                document.createElement("button");


            boton.className =
                "filtro";


            boton.dataset.categoria =
                categoria;


            boton.textContent =
                categoria
                    .charAt(0)
                    .toUpperCase()
                +
                categoria.slice(1);


            filtrosContenedor.appendChild(
                boton
            );

        });


    document
        .querySelectorAll(".filtro")
        .forEach(filtro => {


            filtro.addEventListener(
                "click",
                () => {


                    document
                        .querySelectorAll(".filtro")
                        .forEach(boton => {

                            boton.classList.remove(
                                "activo"
                            );

                        });


                    filtro.classList.add(
                        "activo"
                    );


                    categoriaActual =
                        filtro.dataset.categoria;


                    productosMostrados =
                        productosPorPagina;


                    mostrarProductos();

                }
            );

        });

}


/* =====================================
   MOSTRAR PRODUCTOS
===================================== */

function mostrarProductos() {


    const productosFiltrados =
        monturas.filter(montura => {


            const perteneceCategoria =

                categoriaActual === "todos"

                ||

                montura.categorias.includes(
                    categoriaActual
                );


            const texto = `
                ${montura.marca}
                ${montura.nombre}
                ${montura.referencia}
                ${montura.color}
                ${montura.categorias.join(" ")}
            `.toLowerCase();


            const coincideBusqueda =
                texto.includes(
                    textoBusqueda.toLowerCase()
                );


            return (
                perteneceCategoria &&
                coincideBusqueda
            );

        });


    contadorProductos.textContent =
        `${productosFiltrados.length} montura${

            productosFiltrados.length !== 1
                ? "s"
                : ""

        } encontrada${

            productosFiltrados.length !== 1
                ? "s"
                : ""

        }`;


    const productosParaMostrar =
        productosFiltrados.slice(
            0,
            productosMostrados
        );


    productosContenedor.innerHTML = "";


    if (
        productosParaMostrar.length === 0
    ) {

        productosContenedor.innerHTML = `

            <div class="sin-resultados">

                <i class="fa-solid fa-glasses"></i>

                <h3>
                    No encontramos monturas
                </h3>

                <p>
                    Intenta buscar otra referencia,
                    marca o categoría.
                </p>

            </div>

        `;

        cargarMas.style.display = "none";

        return;

    }


    productosParaMostrar.forEach(montura => {


        const esFavorito =
            favoritos.includes(montura.id);


        let claseEstado =
            "disponible";


        if (
            montura.estado ===
            "Últimas unidades"
        ) {

            claseEstado =
                "ultimas-unidades";

        }


        if (
            montura.estado ===
            "Agotada"
        ) {

            claseEstado =
                "agotada";

        }


        const tarjeta =
            document.createElement("article");


        tarjeta.className =
            "producto";


        tarjeta.innerHTML = `

            <button
                class="boton-favorito ${
                    esFavorito
                        ? "activo"
                        : ""
                }"

                data-id="${montura.id}"
            >

                <i class="${
                    esFavorito
                        ? "fa-solid"
                        : "fa-regular"
                } fa-heart"></i>

            </button>


            <div
                class="producto-imagen"
                data-id="${montura.id}"
            >

                <img
                    src="${montura.imagenes[0]}"
                    alt="${montura.marca} ${montura.nombre}"
                    loading="lazy"
                >

            </div>


            <div class="producto-info">


                <p class="producto-marca">

                    ${montura.marca}

                </p>


                <h3>

                    ${montura.nombre}

                </h3>


                <p class="producto-referencia">

                    Ref: ${montura.referencia}

                </p>


                <p class="producto-color">

                    Color: ${montura.color}

                </p>


                <span
                    class="estado-disponibilidad ${claseEstado}"
                >

                    ${montura.estado}

                </span>


                <button
                    class="boton-detalles"
                    data-id="${montura.id}"
                >

                    <i class="fa-solid fa-images"></i>

                    Ver fotos

                </button>


                <a
                    class="boton-consultar"

                    href="https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
                        `Hola, estoy interesado en la montura ${montura.marca} ${montura.nombre}, referencia ${montura.referencia}.`
                    )}"

                    target="_blank"
                >

                    <i class="fa-brands fa-whatsapp"></i>

                    Consultar disponibilidad

                </a>


            </div>

        `;


        productosContenedor.appendChild(
            tarjeta
        );

    });


    /* ABRIR PRODUCTOS */

    document
        .querySelectorAll(
            ".boton-detalles, .producto-imagen"
        )
        .forEach(elemento => {


            elemento.addEventListener(
                "click",
                () => {


                    abrirProducto(
                        Number(
                            elemento.dataset.id
                        )
                    );

                }
            );

        });


    /* FAVORITOS */

    document
        .querySelectorAll(".boton-favorito")
        .forEach(boton => {


            boton.addEventListener(
                "click",
                event => {


                    event.stopPropagation();


                    cambiarFavorito(
                        Number(
                            boton.dataset.id
                        )
                    );

                }
            );

        });


    /* CARGAR MÁS */

    if (
        productosMostrados >=
        productosFiltrados.length
    ) {

        cargarMas.style.display =
            "none";

    }

    else {

        cargarMas.style.display =
            "inline-flex";

    }

}


/* =====================================
   ABRIR PRODUCTO
===================================== */

function abrirProducto(id) {


    const montura =
        monturas.find(
            producto =>
                producto.id === id
        );


    if (!montura) return;


    contenidoModal.innerHTML = `

        <div class="modal-producto">


            <div class="modal-imagenes">


                <div class="imagen-principal-modal">

                    <img
                        id="imagenPrincipalModal"
                        src="${montura.imagenes[0]}"
                        alt="${montura.nombre}"
                    >

                </div>


                <div class="miniaturas">


                    ${montura.imagenes.map(
                        (imagen, indice) => `

                            <button
                                class="miniatura ${
                                    indice === 0
                                        ? "activa"
                                        : ""
                                }"

                                data-imagen="${imagen}"
                            >

                                <img
                                    src="${imagen}"
                                    alt="Foto ${indice + 1}"
                                >

                            </button>

                        `
                    ).join("")}


                </div>


            </div>



            <div class="modal-info">


                <p class="producto-marca">

                    ${montura.marca}

                </p>


                <h2>

                    ${montura.nombre}

                </h2>


                <p>

                    <strong>Referencia:</strong>

                    ${montura.referencia}

                </p>


                <p>

                    <strong>Color:</strong>

                    ${montura.color}

                </p>


                <p>

                    <strong>Categorías:</strong>

                    ${montura.categorias.join(", ")}

                </p>


                <a
                    class="boton-consultar"

                    href="https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
                        `Hola, estoy interesado en la montura ${montura.marca} ${montura.nombre}, referencia ${montura.referencia}.`
                    )}"

                    target="_blank"
                >

                    <i class="fa-brands fa-whatsapp"></i>

                    Consultar esta montura

                </a>


            </div>


        </div>

    `;


    modalProducto.classList.add(
        "activo"
    );


    document
        .querySelectorAll(".miniatura")
        .forEach(miniatura => {


            miniatura.addEventListener(
                "click",
                () => {


                    document.getElementById(
                        "imagenPrincipalModal"
                    ).src =
                        miniatura.dataset.imagen;


                    document
                        .querySelectorAll(".miniatura")
                        .forEach(elemento => {

                            elemento.classList.remove(
                                "activa"
                            );

                        });


                    miniatura.classList.add(
                        "activa"
                    );

                }
            );

        });

}


/* =====================================
   CERRAR MODAL PRODUCTO
===================================== */

cerrarModal.addEventListener(
    "click",
    () => {

        modalProducto.classList.remove(
            "activo"
        );

    }
);


modalProducto.addEventListener(
    "click",
    event => {


        if (
            event.target === modalProducto
        ) {

            modalProducto.classList.remove(
                "activo"
            );

        }

    }
);


/* =====================================
   FAVORITOS
===================================== */

function cambiarFavorito(id) {


    if (
        favoritos.includes(id)
    ) {

        favoritos =
            favoritos.filter(
                favorito =>
                    favorito !== id
            );

    }

    else {

        favoritos.push(id);

    }


    localStorage.setItem(

        "favoritosEyeon",

        JSON.stringify(favoritos)

    );


    actualizarFavoritos();

    mostrarProductos();

}


function actualizarFavoritos() {

    contadorFavoritos.textContent =
        favoritos.length;

}


/* =====================================
   ABRIR FAVORITOS
===================================== */

abrirFavoritos.addEventListener(
    "click",
    event => {


        event.preventDefault();

        mostrarFavoritos();

        modalFavoritos.classList.add(
            "activo"
        );

    }
);


/* =====================================
   MOSTRAR FAVORITOS
===================================== */

function mostrarFavoritos() {


    listaFavoritos.innerHTML = "";


    if (
        favoritos.length === 0
    ) {

        listaFavoritos.innerHTML = `

            <div class="sin-resultados">

                <i class="fa-regular fa-heart"></i>

                <h3>
                    Aún no tienes favoritos
                </h3>

                <p>
                    Guarda las monturas que más te gusten.
                </p>

            </div>

        `;


        enviarFavoritos.style.display =
            "none";

        return;

    }


    enviarFavoritos.style.display =
        "inline-flex";


    favoritos.forEach(id => {


        const montura =
            monturas.find(
                producto =>
                    producto.id === id
            );


        if (!montura) return;


        const item =
            document.createElement("div");


        item.className =
            "favorito-item";


        item.innerHTML = `

            <img
                src="${montura.imagenes[0]}"
                alt="${montura.nombre}"
            >


            <div class="favorito-info">

                <strong>

                    ${montura.marca}
                    ${montura.nombre}

                </strong>


                <p>

                    Ref:
                    ${montura.referencia}

                </p>

            </div>


            <button
                class="eliminar-favorito"
                data-id="${montura.id}"
            >

                <i class="fa-solid fa-trash"></i>

            </button>

        `;


        listaFavoritos.appendChild(item);

    });


    document
        .querySelectorAll(".eliminar-favorito")
        .forEach(boton => {


            boton.addEventListener(
                "click",
                () => {


                    cambiarFavorito(
                        Number(
                            boton.dataset.id
                        )
                    );


                    mostrarFavoritos();

                }
            );

        });

}


/* =====================================
   CERRAR FAVORITOS
===================================== */

cerrarFavoritos.addEventListener(
    "click",
    () => {

        modalFavoritos.classList.remove(
            "activo"
        );

    }
);


modalFavoritos.addEventListener(
    "click",
    event => {


        if (
            event.target === modalFavoritos
        ) {

            modalFavoritos.classList.remove(
                "activo"
            );

        }

    }
);


/* =====================================
   ENVIAR FAVORITOS A WHATSAPP
===================================== */

enviarFavoritos.addEventListener(
    "click",
    () => {


        if (
            favoritos.length === 0
        ) return;


        let mensaje =
            "Hola, estoy interesado en las siguientes monturas:\n\n";


        favoritos.forEach(id => {


            const montura =
                monturas.find(
                    producto =>
                        producto.id === id
                );


            if (montura) {

                mensaje +=
                    `• ${montura.marca} ${montura.nombre} - Ref: ${montura.referencia}\n`;

            }

        });


        window.open(

            `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`,

            "_blank"

        );

    }
);


/* =====================================
   BUSCADOR
===================================== */

buscar.addEventListener(
    "input",
    () => {


        textoBusqueda =
            buscar.value.trim();


        productosMostrados =
            productosPorPagina;


        mostrarProductos();

    }
);


/* =====================================
   CARGAR MÁS
===================================== */

cargarMas.addEventListener(
    "click",
    () => {


        productosMostrados +=
            productosPorPagina;


        mostrarProductos();

    }
);


/* =====================================
   MENÚ MÓVIL
===================================== */

menuMovil.addEventListener(
    "click",
    () => {

        menu.classList.toggle(
            "activo"
        );

    }
);


document
    .querySelectorAll(".menu a")
    .forEach(enlace => {


        enlace.addEventListener(
            "click",
            () => {

                menu.classList.remove(
                    "activo"
                );

            }
        );

    });


/* =====================================
   AÑO
===================================== */

document.getElementById(
    "anio"
).textContent =
    new Date().getFullYear();


/* =====================================
   TECLA ESC
===================================== */

document.addEventListener(
    "keydown",
    event => {


        if (
            event.key === "Escape"
        ) {

            modalProducto.classList.remove(
                "activo"
            );

            modalFavoritos.classList.remove(
                "activo"
            );

        }

    }
);


/* =====================================
   INICIAR PÁGINA
===================================== */

crearFiltros();

actualizarFavoritos();

mostrarProductos();