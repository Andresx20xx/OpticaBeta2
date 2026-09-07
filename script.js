/* =====================================
   ÓPTICA EYEON — CONFIGURACIÓN
===================================== */

const numeroWhatsApp = "573204771054";
const productosPorPagina = 12;

let categoriaActual = "todos";
let textoBusqueda = "";
let productosMostrados = productosPorPagina;

/* mapa de nombres de color (en español) a un valor CSS real,
   para pintar el circulito de color en cada tarjeta */
const mapaColores = {
  azul: "#2f6fdb",
  beige: "#d9c7a3",
  "blanca-azul": "linear-gradient(135deg, #ffffff 50%, #2f8fff 50%)",
  blanco: "#f4f6f8",
  cafe: "#6b4226",
  carey: "linear-gradient(135deg, #8a5a2b, #3a2210)",
  cristal: "rgba(255,255,255,0.18)",
  dorado: "linear-gradient(135deg, #f3d27a, #a97c1f)",
  gris: "#98a2ad",
  "gris humo": "#5b6570",
  metalica: "linear-gradient(135deg, #d7dee6, #8894a1)",
  metalico: "linear-gradient(135deg, #d7dee6, #8894a1)",
  morado: "#7c4dff",
  naranja: "#ff8a3d",
  negra: "#15171c",
  negro: "#15171c",
  rojo: "#e6453c",
  rosa: "#ff8fb3",
  traslucido: "rgba(255,255,255,0.16)",
  "traslucido rojo": "rgba(230,69,60,0.4)",
  verde: "#2fa86b",
};

function obtenerColorCss(nombreColor) {
  const clave = nombreColor
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  return mapaColores[clave] || "#4a5568";
}

let favoritos = JSON.parse(localStorage.getItem("favoritosEyeon")) || [];

/* =====================================
   ELEMENTOS DEL DOM
===================================== */

const filtrosContenedor = document.getElementById("filtros");
const productosContenedor = document.getElementById("productos");
const contadorProductos = document.getElementById("contadorProductos");
const buscar = document.getElementById("buscar");
const cargarMas = document.getElementById("cargarMas");

const modalProducto = document.getElementById("modalProducto");
const contenidoModal = document.getElementById("contenidoModal");
const cerrarModal = document.getElementById("cerrarModal");

const modalFavoritos = document.getElementById("modalFavoritos");
const abrirFavoritos = document.getElementById("abrirFavoritos");
const cerrarFavoritos = document.getElementById("cerrarFavoritos");
const listaFavoritos = document.getElementById("listaFavoritos");
const enviarFavoritos = document.getElementById("enviarFavoritos");
const contadorFavoritos = document.getElementById("contadorFavoritos");

const menuMovil = document.getElementById("menuMovil");
const menu = document.getElementById("menu");
const header = document.getElementById("header");

const loader = document.getElementById("loader");
const cursorGlow = document.getElementById("cursorGlow");
const marqueePista = document.getElementById("marqueePista");

/* =====================================
   LOADER DE ENTRADA
===================================== */

function ocultarLoader() {
  loader.classList.add("oculto");
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(ocultarLoader, 350);
});

// respaldo: si algo bloquea DOMContentLoaded, igual se oculta
setTimeout(ocultarLoader, 2500);

/* =====================================
   GLOW QUE SIGUE EL CURSOR (SOLO DESKTOP)
===================================== */

if (window.matchMedia("(pointer: fine)").matches) {
  document.addEventListener("mousemove", (event) => {
    cursorGlow.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
  });
}

/* =====================================
   NAV: ENCOGER AL HACER SCROLL
===================================== */

window.addEventListener("scroll", () => {
  header.classList.toggle("encogido", window.scrollY > 40);
});

/* =====================================
   MENÚ MÓVIL
===================================== */

menuMovil.addEventListener("click", () => {
  menu.classList.toggle("activo");
  menuMovil.classList.toggle("activo");
});

document.querySelectorAll(".menu a").forEach((enlace) => {
  enlace.addEventListener("click", () => {
    menu.classList.remove("activo");
    menuMovil.classList.remove("activo");
  });
});

/* =====================================
   MARQUEE DE MARCAS
===================================== */

function iniciarMarquee() {
  const marcas = [...new Set(monturas.map((m) => m.marca))].filter(
    (marca) => marca !== "Otras marcas",
  );

  const logos = {
    "Ray-Ban": "imagenes/logos/rayban.png",
    "Oakley": "imagenes/logos/oakley.png",
    "Cartier": "imagenes/logos/cartier.png",
    "Wanderth": "imagenes/logos/wanderth.png",
    "Lacoste": "imagenes/logos/lacoste.png",
    "Celine Dion": "imagenes/logos/celine-dion.png",
    "Gucci": "imagenes/logos/gucci.png",
    "Prada": "imagenes/logos/prada.png",
    "Eyeon": "imagenes/logos/eyeon.png",
    "Diesel": "imagenes/logos/diesel.png",
    "Nike": "imagenes/logos/nike.png",
    "Tommy Hilfiger": "imagenes/logos/tommy.png"
  };

  const grupo = marcas
    .map(
      (marca) => `
        <span class="marquee-item">
          ${
            logos[marca]
              ? `<img src="${logos[marca]}" alt="${marca}" class="marquee-logo">`
              : `<span class="marquee-monograma">${marca.charAt(0)}</span>`
          }
          <span>${marca}</span>
        </span>
      `,
    )
    .join("");

  // Se repite 3 veces para asegurar el loop continuo
  marqueePista.innerHTML = grupo + grupo + grupo;
}

/* =====================================
   CONTADORES ANIMADOS DE ESTADÍSTICAS
===================================== */

function animarContador(elemento) {
  const hasta = Number(elemento.dataset.hasta);
  const duracion = 1400;
  const inicio = performance.now();

  function tick(ahora) {
    const progreso = Math.min((ahora - inicio) / duracion, 1);
    const valor = Math.floor(progreso * hasta);

    elemento.textContent = valor;

    if (progreso < 1) {
      requestAnimationFrame(tick);
    } else {
      elemento.textContent = hasta;
    }
  }

  requestAnimationFrame(tick);
}

/* =====================================
   SCROLL REVEAL + DISPARO DE CONTADORES
===================================== */

const observador =
  "IntersectionObserver" in window
    ? new IntersectionObserver(
        (entradas) => {
          entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
              entrada.target.classList.add("visible");

              const contadores =
                entrada.target.querySelectorAll("[data-contador]");

              contadores.forEach((contador) => {
                if (!contador.dataset.animado) {
                  contador.dataset.animado = "true";
                  animarContador(contador);
                }
              });

              observador.unobserve(entrada.target);
            }
          });
        },
        { threshold: 0.2 },
      )
    : null;

if (observador) {
  // solo ocultamos con CSS si JS confirma que puede revelarlos después
  document.documentElement.classList.add("js-reveal");

  document.querySelectorAll("[data-reveal]").forEach((elemento) => {
    observador.observe(elemento);
  });
} else {
  // sin soporte: animamos los contadores igual, de una sola vez
  document.querySelectorAll("[data-contador]").forEach(animarContador);
}

/* =====================================
   FILTROS DE CATEGORÍA
===================================== */

function crearFiltros() {
  filtrosContenedor.innerHTML = "";

  const botonTodos = document.createElement("button");

  botonTodos.className = "filtro activo";
  botonTodos.dataset.categoria = "todos";
  botonTodos.textContent = "Todos";

  filtrosContenedor.appendChild(botonTodos);

  const categorias = new Set();

  monturas.forEach((montura) => {
    montura.categorias.forEach((categoria) => categorias.add(categoria));
  });

  [...categorias].sort().forEach((categoria) => {
    const boton = document.createElement("button");

    boton.className = "filtro";
    boton.dataset.categoria = categoria;
    boton.textContent = categoria.charAt(0).toUpperCase() + categoria.slice(1);

    filtrosContenedor.appendChild(boton);
  });

  document.querySelectorAll(".filtro").forEach((filtro) => {
    filtro.addEventListener("click", () => {
      categoriaActual = filtro.dataset.categoria;
      productosMostrados = productosPorPagina;

      document.querySelectorAll(".filtro").forEach((boton) => {
        boton.classList.remove("activo");
      });

      filtro.classList.add("activo");

      mostrarProductos();
    });
  });
}

/* =====================================
   RENDERIZAR PRODUCTOS
===================================== */

function mostrarProductos() {
  const productosFiltrados = monturas.filter((montura) => {
    const perteneceCategoria =
      categoriaActual === "todos" ||
      montura.categorias.includes(categoriaActual);

    const texto = `
            ${montura.marca}
            ${montura.nombre}
            ${montura.referencia}
            ${montura.color}
            ${montura.categorias.join(" ")}
        `.toLowerCase();

    const coincideBusqueda = texto.includes(textoBusqueda.toLowerCase());

    return perteneceCategoria && coincideBusqueda;
  });

  contadorProductos.textContent = `${productosFiltrados.length} montura${productosFiltrados.length !== 1 ? "s" : ""} encontrada${productosFiltrados.length !== 1 ? "s" : ""}`;

  const productosParaMostrar = productosFiltrados.slice(0, productosMostrados);

  productosContenedor.innerHTML = "";

  if (productosParaMostrar.length === 0) {
    productosContenedor.innerHTML = `
            <div class="sin-resultados">
                <i class="fa-solid fa-glasses"></i>
                <h3>No encontramos monturas</h3>
                <p>Intenta buscar otra referencia, marca o categoría.</p>
            </div>
        `;

    cargarMas.style.display = "none";
    return;
  }

  cargarMas.style.display =
    productosFiltrados.length > productosMostrados ? "inline-flex" : "none";

  productosParaMostrar.forEach((montura, indice) => {
    const esFavorito = favoritos.includes(montura.id);

    let claseEstado = "disponible";

    if (montura.estado === "Últimas unidades") claseEstado = "ultimas-unidades";
    if (montura.estado === "Agotada") claseEstado = "agotada";

    const tarjeta = document.createElement("article");

    tarjeta.className = "producto";
    tarjeta.style.setProperty(
      "--retraso",
      `${(indice % productosPorPagina) * 0.05}s`,
    );

    tarjeta.innerHTML = `

            <div class="producto-imagen" data-id="${montura.id}">

                <img src="${montura.imagenes[0]}" alt="${montura.marca} ${montura.nombre}" loading="lazy">

                <span class="producto-estado ${claseEstado}">${montura.estado}</span>

                <button class="boton-favorito ${esFavorito ? "activo" : ""}" data-id="${montura.id}">
                    <i class="${esFavorito ? "fa-solid" : "fa-regular"} fa-heart"></i>
                </button>

                <div class="producto-overlay">
                    <p class="producto-marca">${montura.marca}</p>
                    <h3>${montura.nombre}</h3>
                </div>

            </div>

            <div class="producto-info">

                <div class="producto-meta">
                    <span><i class="fa-solid fa-hashtag"></i> ${montura.referencia}</span>

                    <span class="producto-colores">
                        ${montura.color
                          .map(
                            (color) => `
                            <span class="color-punto" style="background:${obtenerColorCss(color)}" title="${color}"></span>
                        `,
                          )
                          .join("")}
                    </span>
                </div>

                <div class="producto-tags">
                    ${montura.categorias
                      .slice(0, 3)
                      .map(
                        (categoria) => `
                        <span class="producto-tag">${categoria}</span>
                    `,
                      )
                      .join("")}
                </div>

                <div class="producto-pie">

                    <button class="boton-detalles" data-id="${montura.id}">
                        <i class="fa-solid fa-images"></i>
                        Fotos
                    </button>

                    <a class="boton-consultar" href="https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(`Hola, estoy interesado en la montura ${montura.marca} ${montura.nombre}, referencia ${montura.referencia}.`)}" target="_blank">
                        <i class="fa-brands fa-whatsapp"></i>
                        Consultar
                    </a>

                </div>

            </div>

        `;

    productosContenedor.appendChild(tarjeta);
  });

  /* tilt 3D suave en desktop */
  if (window.matchMedia("(pointer: fine)").matches) {
    document.querySelectorAll(".producto").forEach((tarjeta) => {
      tarjeta.addEventListener("mousemove", (event) => {
        const rect = tarjeta.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;

        tarjeta.style.transform = `perspective(700px) rotateX(${y * -6}deg) rotateY(${x * 6}deg) translateY(-4px)`;
      });

      tarjeta.addEventListener("mouseleave", () => {
        tarjeta.style.transform = "";
      });
    });
  }

  /* abrir modal de detalles */
  document
    .querySelectorAll(".boton-detalles, .producto-imagen")
    .forEach((elemento) => {
      elemento.addEventListener("click", () => {
        abrirProducto(Number(elemento.dataset.id));
      });
    });

  /* favoritos */
  document.querySelectorAll(".boton-favorito").forEach((boton) => {
    boton.addEventListener("click", (event) => {
      event.stopPropagation();
      cambiarFavorito(Number(boton.dataset.id));
    });
  });
}

/* =====================================
   MODAL DE PRODUCTO
===================================== */

function abrirProducto(id) {
  const montura = monturas.find((producto) => producto.id === id);

  if (!montura) return;

  const esFavorito = favoritos.includes(montura.id);

  contenidoModal.innerHTML = `

        <div class="modal-producto">

            <div>

                <div class="imagen-principal-modal">
                    <img src="${montura.imagenes[0]}" alt="${montura.nombre}" id="imagenPrincipalModal">
                </div>

                <div class="miniaturas">
                    ${montura.imagenes
                      .map(
                        (imagen, indice) => `
                        <button class="miniatura ${indice === 0 ? "activa" : ""}" data-src="${imagen}">
                            <img src="${imagen}" alt="Vista ${indice + 1}">
                        </button>
                    `,
                      )
                      .join("")}
                </div>

            </div>

            <div class="modal-info">

                <p class="producto-marca">${montura.marca}</p>
                <h2>${montura.nombre}</h2>
                <p>Referencia: <strong>${montura.referencia}</strong></p>
                <p class="modal-colores-linea">
                    Color:
                    <span class="producto-colores">
                        ${montura.color
                          .map(
                            (color) => `
                            <span class="color-punto" style="background:${obtenerColorCss(color)}" title="${color}"></span>
                        `,
                          )
                          .join("")}
                    </span>
                    <strong>${montura.color.join(", ")}</strong>
                </p>

                <div class="producto-tags">
                    ${montura.categorias.map((categoria) => `<span class="producto-tag">${categoria}</span>`).join("")}
                </div>

                <span class="estado-disponibilidad ${montura.estado === "Disponible" ? "disponible" : montura.estado === "Agotada" ? "agotada" : "ultimas-unidades"}">
                    ${montura.estado}
                </span>

                <div class="hero-botones" style="margin-top:20px;">

                    <button class="boton boton-secundario boton-favorito-modal" data-id="${montura.id}">
                        <i class="${esFavorito ? "fa-solid" : "fa-regular"} fa-heart"></i>
                        ${esFavorito ? "En favoritos" : "Guardar"}
                    </button>

                    <a class="boton boton-primario" target="_blank" href="https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(`Hola, estoy interesado en la montura ${montura.marca} ${montura.nombre}, referencia ${montura.referencia}.`)}">
                        <i class="fa-brands fa-whatsapp"></i>
                        Consultar disponibilidad
                    </a>

                </div>

            </div>

        </div>

    `;

  contenidoModal.querySelectorAll(".miniatura").forEach((miniatura) => {
    miniatura.addEventListener("click", () => {
      document.getElementById("imagenPrincipalModal").src =
        miniatura.dataset.src;

      contenidoModal
        .querySelectorAll(".miniatura")
        .forEach((m) => m.classList.remove("activa"));
      miniatura.classList.add("activa");
    });
  });

  contenidoModal
    .querySelector(".boton-favorito-modal")
    .addEventListener("click", () => {
      cambiarFavorito(montura.id);
      abrirProducto(montura.id);
    });

  modalProducto.classList.add("activo");
}

cerrarModal.addEventListener("click", () =>
  modalProducto.classList.remove("activo"),
);

modalProducto.addEventListener("click", (event) => {
  if (event.target === modalProducto) modalProducto.classList.remove("activo");
});

/* =====================================
   FAVORITOS
===================================== */

function cambiarFavorito(id) {
  if (favoritos.includes(id)) {
    favoritos = favoritos.filter((favorito) => favorito !== id);
  } else {
    favoritos.push(id);
  }

  localStorage.setItem("favoritosEyeon", JSON.stringify(favoritos));

  actualizarFavoritos();
  mostrarProductos();
}

function actualizarFavoritos() {
  contadorFavoritos.textContent = favoritos.length;
}

abrirFavoritos.addEventListener("click", (event) => {
  event.preventDefault();
  mostrarFavoritos();
  modalFavoritos.classList.add("activo");
});

function mostrarFavoritos() {
  listaFavoritos.innerHTML = "";

  if (favoritos.length === 0) {
    listaFavoritos.innerHTML = `
            <div class="sin-resultados">
                <i class="fa-regular fa-heart"></i>
                <h3>Aún no tienes favoritos</h3>
                <p>Guarda las monturas que más te gusten.</p>
            </div>
        `;

    enviarFavoritos.style.display = "none";
    return;
  }

  enviarFavoritos.style.display = "inline-flex";

  favoritos.forEach((id) => {
    const montura = monturas.find((producto) => producto.id === id);

    if (!montura) return;

    const item = document.createElement("div");

    item.className = "favorito-item";

    item.innerHTML = `
            <img src="${montura.imagenes[0]}" alt="${montura.nombre}">
            <div class="favorito-info">
                <strong>${montura.marca} ${montura.nombre}</strong>
                <p>Ref: ${montura.referencia}</p>
            </div>
            <button class="eliminar-favorito" data-id="${montura.id}">
                <i class="fa-solid fa-trash"></i>
            </button>
        `;

    listaFavoritos.appendChild(item);
  });

  document.querySelectorAll(".eliminar-favorito").forEach((boton) => {
    boton.addEventListener("click", () => {
      cambiarFavorito(Number(boton.dataset.id));
      mostrarFavoritos();
    });
  });
}

cerrarFavoritos.addEventListener("click", () =>
  modalFavoritos.classList.remove("activo"),
);

modalFavoritos.addEventListener("click", (event) => {
  if (event.target === modalFavoritos)
    modalFavoritos.classList.remove("activo");
});

enviarFavoritos.addEventListener("click", () => {
  if (favoritos.length === 0) return;

  let mensaje = "Hola, estoy interesado en las siguientes monturas:\n\n";

  favoritos.forEach((id) => {
    const montura = monturas.find((producto) => producto.id === id);

    if (montura) {
      mensaje += `• ${montura.marca} ${montura.nombre} - Ref: ${montura.referencia}\n`;
    }
  });

  window.open(
    `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`,
    "_blank",
  );
});

/* =====================================
   BUSCADOR Y CARGAR MÁS
===================================== */

buscar.addEventListener("input", () => {
  textoBusqueda = buscar.value.trim();
  productosMostrados = productosPorPagina;

  mostrarProductos();
});

cargarMas.addEventListener("click", () => {
  productosMostrados += productosPorPagina;
  mostrarProductos();
});

/* =====================================
   TECLA ESC Y AÑO
===================================== */

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    modalProducto.classList.remove("activo");
    modalFavoritos.classList.remove("activo");
  }
});

document.getElementById("anio").textContent = new Date().getFullYear();

/* =====================================
   INICIAR PÁGINA
===================================== */

iniciarMarquee();
crearFiltros();
actualizarFavoritos();
mostrarProductos();
