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
        ],

        categorias: [
            "rayban",
            "clasicas",
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
            "modernas"
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
            "unisex"
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

        nombre: "Ray-Ban JUSTIN",

        referencia: "RB004",

        color: [
            "Azul",
            "Negro"
        ],

        categorias: [
            "rayban",
            "deportivas",
            "unisex"
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

        nombre: "Ray-Ban JUSTIN",

        referencia: "RB005",

        color: [
            "Azul",
            "Negro"
        ],

        categorias: [
            "rayban",
            "deportivas",
            "unisex"
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

        nombre: "Ray-Ban JUSTIN",

        referencia: "RB006",

        color: [
            "Azul",
            "Negro"
        ],

        categorias: [
            "rayban",
            "deportivas",
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
            "Azul",
            "Negro"
        ],

        categorias: [
            "rayban",
            "deportivas",
            "unisex"
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

        nombre: "Ray-Ban JUSTIN",

        referencia: "RB008",

        color: [
            "Azul",
            "Negro"
        ],

        categorias: [
            "rayban",
            "deportivas",
            "unisex"
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

        nombre: "Ray-Ban AVIATOR",

        referencia: "RB009",

        color: [
            "Azul",
            "Negro"
        ],

        categorias: [
            "rayban",
            "deportivas",
            "unisex"
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
            "Azul",
            "Negro"
        ],

        categorias: [
            "rayban",
            "deportivas",
            "unisex"
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
            "Azul",
            "Negro"
        ],

        categorias: [
            "rayban",
            "deportivas",
            "unisex"
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

        nombre: "Ray-Ban 3 PIEZAS",

        referencia: "RB012",

        color: [
            "Azul",
            "Negro"
        ],

        categorias: [
            "rayban",
            "deportivas",
            "unisex"
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

        nombre: "Ray-Ban JUSTIN",

        referencia: "RB013",

        color: [
            "Azul",
            "Negro"
        ],

        categorias: [
            "rayban",
            "deportivas",
            "unisex"
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

        nombre: "Ray-Ban JUSTIN",

        referencia: "RB014",

        color: [
            "Azul",
            "Negro"
        ],

        categorias: [
            "rayban",
            "deportivas",
            "unisex"
        ],

        imagenes: [
            "imagenes/monturas/rayban/rb0.jpeg",
            "imagenes/monturas/rayban/rb0.jpeg"
        ],

        estado: "Últimas unidades"
    },


    {
        id:15,

        marca: "Ray-Ban",

        nombre: "Ray-Ban JUSTIN",

        referencia: "RB015",

        color: [
            "Azul",
            "Negro"
        ],

        categorias: [
            "rayban",
            "deportivas",
            "unisex"
        ],

        imagenes: [
            "imagenes/monturas/rayban/rb0.jpeg",
            "imagenes/monturas/rayban/rb0.jpeg"
        ],

        estado: "Últimas unidades"
    },


    {
        id:16,

        marca: "Ray-Ban",

        nombre: "Ray-Ban JUSTIN",

        referencia: "RB016",

        color: [
            "Azul",
            "Negro"
        ],

        categorias: [
            "rayban",
            "deportivas",
            "unisex"
        ],

        imagenes: [
            "imagenes/monturas/rayban/rb0.jpeg",
            "imagenes/monturas/rayban/rb0.jpeg"
        ],

        estado: "Últimas unidades"
    },


    {
        id:17,

        marca: "Ray-Ban",

        nombre: "Ray-Ban JUSTIN",

        referencia: "RB017",

        color: [
            "Azul",
            "Negro"
        ],

        categorias: [
            "rayban",
            "deportivas",
            "unisex"
        ],

        imagenes: [
            "imagenes/monturas/rayban/rb0.jpeg",
            "imagenes/monturas/rayban/rb0.jpeg"
        ],

        estado: "Últimas unidades"
    },


    {
        id:18,

        marca: "Ray-Ban",

        nombre: "Ray-Ban JUSTIN",

        referencia: "RB018",

        color: [
            "Azul",
            "Negro"
        ],

        categorias: [
            "rayban",
            "deportivas",
            "unisex"
        ],

        imagenes: [
            "imagenes/monturas/rayban/rb0.jpeg",
            "imagenes/monturas/rayban/rb0.jpeg"
        ],

        estado: "Últimas unidades"
    },


    {
        id:19,

        marca: "Ray-Ban",

        nombre: "Ray-Ban JUSTIN",

        referencia: "RB019",

        color: [
            "Azul",
            "Negro"
        ],

        categorias: [
            "rayban",
            "deportivas",
            "unisex"
        ],

        imagenes: [
            "imagenes/monturas/rayban/rb0.jpeg",
            "imagenes/monturas/rayban/rb0.jpeg"
        ],

        estado: "Últimas unidades"
    },


    {
        id:20,

        marca: "Ray-Ban",

        nombre: "Ray-Ban JUSTIN",

        referencia: "RB020",

        color: [
            "Azul",
            "Negro"
        ],

        categorias: [
            "rayban",
            "deportivas",
            "unisex"
        ],

        imagenes: [
            "imagenes/monturas/rayban/rb0.jpeg",
            "imagenes/monturas/rayban/rb0.jpeg"
        ],

        estado: "Últimas unidades"
    },


    {
        id:21,

        marca: "Ray-Ban",

        nombre: "Ray-Ban JUSTIN",

        referencia: "RB004",

        color: [
            "Azul",
            "Negro"
        ],

        categorias: [
            "rayban",
            "deportivas",
            "unisex"
        ],

        imagenes: [
            "imagenes/monturas/rayban/rb0.jpeg",
            "imagenes/monturas/rayban/rb0.jpeg"
        ],

        estado: "Últimas unidades"
    },


    {
        id:22,

        marca: "Ray-Ban",

        nombre: "Ray-Ban JUSTIN",

        referencia: "RB004",

        color: [
            "Azul",
            "Negro"
        ],

        categorias: [
            "rayban",
            "deportivas",
            "unisex"
        ],

        imagenes: [
            "imagenes/monturas/rayban/rb0.jpeg",
            "imagenes/monturas/rayban/rb0.jpeg"
        ],

        estado: "Últimas unidades"
    },


    {
        id:23,

        marca: "Ray-Ban",

        nombre: "Ray-Ban JUSTIN",

        referencia: "RB004",

        color: [
            "Azul",
            "Negro"
        ],

        categorias: [
            "rayban",
            "deportivas",
            "unisex"
        ],

        imagenes: [
            "imagenes/monturas/rayban/rb0.jpeg",
            "imagenes/monturas/rayban/rb0.jpeg"
        ],

        estado: "Últimas unidades"
    },


    {
        id:24,

        marca: "Ray-Ban",

        nombre: "Ray-Ban JUSTIN",

        referencia: "RB004",

        color: [
            "Azul",
            "Negro"
        ],

        categorias: [
            "rayban",
            "deportivas",
            "unisex"
        ],

        imagenes: [
            "imagenes/monturas/rayban/rb0.jpeg",
            "imagenes/monturas/rayban/rb0.jpeg"
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