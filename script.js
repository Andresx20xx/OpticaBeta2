/* =====================================
   ÓPTICA EYEON — CONFIGURACIÓN
===================================== */

const numeroWhatsApp = "573204771054";
const productosPorPagina = 12;

let categoriaActual = "todos";
let marcaActual = "todas";
let textoBusqueda = "";
let productosMostrados = productosPorPagina;

/* mapa de nombres de color (en español) a un valor CSS real,
   para pintar el circulito de color en cada tarjeta */
const mapaColores = {
  azul: "#2f6fdb",
  amarillo: "#e7d50b",
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
  miel: "#f1b766",
  morado: "#783dcf",
  naranja: "#ff8a3d",
  negra: "#15171c",
  vinotinto: "#641e1a",
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

let favoritos = [];
try {
  favoritos = JSON.parse(localStorage.getItem("favoritosEyeon")) || [];
} catch (e) {
  favoritos = [];
}

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
const modalArmador = document.getElementById("modalArmador");
const abrirArmador = document.getElementById("abrirArmador");
const cerrarArmador = document.getElementById("cerrarArmador");
const armadorContenido = document.getElementById("armadorContenido");
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
  const encogido = window.scrollY > 40;
  header.classList.toggle("encogido", encogido);
  document.getElementById("topbar")?.classList.toggle("oculta", encogido);
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

  const logos = {
    "Ray-Ban": "imagenes/logos/rayban.png",
    "kodak": "imagenes/logos/kodak.png",
    "Puma": "imagenes/logos/puma.png",
    "Cartier": "imagenes/logos/cartier.png",
    "Zeiss": "imagenes/logos/zeiss.png",
    "Lacoste": "imagenes/logos/lacoste.png",
    "Gucci": "imagenes/logos/gucci.png",
    "Prada": "imagenes/logos/prada.png",
    "Eyeon": "imagenes/logos/eyeon.png",
    "Diesel": "imagenes/logos/diesel.png",
    "Nike": "imagenes/logos/nike.png",
    "Tommy Hilfiger": "imagenes/logos/tommy.png",

    // MÁS MARCAS
    "Versace": "imagenes/logos/versace.png",
    "Wanderth": "imagenes/logos/wanderth.png",
    "Hugo Boss": "imagenes/logos/hugo-boss.png",
    "Oakley": "imagenes/logos/oakley.png",
    "Carrera": "imagenes/logos/carrera.png",
    "Hoya": "imagenes/logos/hoya.png"
    
  };

  const grupo = Object.entries(logos)
    .map(
      ([marca, logo]) => `
        <span class="marquee-item">
          <img 
            src="${logo}" 
            alt="${marca}" 
            class="marquee-logo"
          >
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
   ACTUALIZAR CONTADOR DE MONTURAS
===================================== */

function actualizarContadorMonturas() {
  const contador = document.querySelector(".stat-numero[data-contador]");

  if (!contador) return;

  contador.dataset.hasta = monturas.length;
}

/* =====================================
   ACTUALIZAR CONTADOR DE MARCAS
===================================== */

function actualizarContadorMarcas() {
  const contadores = document.querySelectorAll(".stat-numero[data-contador]");

  if (contadores.length < 2) return;

  const marcasUnicas = [
    ...new Set(
      monturas
        .map((m) => m.marca)
        .filter((marca) => marca && marca !== "Otras marcas"),
    ),
  ];

  contadores[1].dataset.hasta = marcasUnicas.length;
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

function normalizarFiltro(valor) {
  return String(valor || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function capitalizarTexto(valor) {
  return String(valor || "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, letra => letra.toUpperCase());
}

/* =====================================
   FILTROS COMPACTOS Y AUTOMÁTICOS
===================================== */

function crearFiltros() {
  filtrosContenedor.innerHTML = `
    <div class="filtros-cabecera">
      <span class="filtros-titulo"><i class="fa-solid fa-sliders"></i> Filtrar monturas</span>
      <button type="button" class="filtros-limpiar" id="limpiarFiltros">Limpiar filtros</button>
    </div>

    <div class="filtros-controles">
      <label class="filtro-control">
        <span><i class="fa-solid fa-layer-group"></i> Categoría</span>
        <select id="filtroCategoria" aria-label="Filtrar por categoría">
          <option value="todos">Todas las categorías</option>
        </select>
      </label>

      <label class="filtro-control">
        <span><i class="fa-solid fa-tag"></i> Marca</span>
        <select id="filtroMarca" aria-label="Filtrar por marca">
          <option value="todas">Todas las marcas</option>
        </select>
      </label>
    </div>
  `;

  const selectCategoria = document.getElementById("filtroCategoria");
  const selectMarca = document.getElementById("filtroMarca");

  // Las marcas se generan automáticamente desde el campo 'marca' de cada montura.
  // Si mañana agregas una marca nueva en datos.js, aparecerá aquí sin tocar este código.
  const marcas = [...new Set(
    monturas.map(montura => montura.marca).filter(Boolean)
  )].sort((a, b) => a.localeCompare(b, "es"));

  marcas.forEach(marca => {
    const option = document.createElement("option");
    option.value = normalizarFiltro(marca);
    option.textContent = marca;
    selectMarca.appendChild(option);
  });

  // Conservamos todas las categorías que ya existen en el catálogo.
  // Las categorías que coinciden con una marca se controlan desde el selector Marca,
  // evitando duplicarlas visualmente como etiquetas interminables.
  const marcasNormalizadas = new Set(marcas.map(normalizarFiltro));
  const categorias = new Map();

  monturas.forEach(montura => {
    (montura.categorias || []).forEach(categoria => {
      const clave = normalizarFiltro(categoria);
      if (!clave || marcasNormalizadas.has(clave)) return;
      if (!categorias.has(clave)) categorias.set(clave, categoria);
    });
  });

  [...categorias.entries()]
    .sort((a, b) => String(a[1]).localeCompare(String(b[1]), "es"))
    .forEach(([clave, categoria]) => {
      const option = document.createElement("option");
      option.value = clave;
      option.textContent = capitalizarTexto(categoria);
      selectCategoria.appendChild(option);
    });

  selectCategoria.value = categoriaActual === "todos" ? "todos" : normalizarFiltro(categoriaActual);
  selectMarca.value = marcaActual === "todas" ? "todas" : normalizarFiltro(marcaActual);

  selectCategoria.addEventListener("change", () => {
    categoriaActual = selectCategoria.value;
    productosMostrados = productosPorPagina;
    mostrarProductos();
  });

  selectMarca.addEventListener("change", () => {
    marcaActual = selectMarca.value;
    productosMostrados = productosPorPagina;
    mostrarProductos();
  });

  document.getElementById("limpiarFiltros").addEventListener("click", () => {
    categoriaActual = "todos";
    marcaActual = "todas";
    productosMostrados = productosPorPagina;
    selectCategoria.value = "todos";
    selectMarca.value = "todas";
    mostrarProductos();
  });
}

/* =====================================
   RENDERIZAR PRODUCTOS
===================================== */

function mostrarProductos() {
  const productosFiltrados = monturas.filter((montura) => {
    const perteneceCategoria =
      categoriaActual === "todos" ||
      (montura.categorias || []).some(categoria => normalizarFiltro(categoria) === normalizarFiltro(categoriaActual));

    const perteneceMarca =
      marcaActual === "todas" ||
      normalizarFiltro(montura.marca) === normalizarFiltro(marcaActual);

    const texto = `
            ${montura.marca}
            ${montura.nombre}
            ${montura.referencia}
            ${montura.color}
            ${montura.categorias.join(" ")}
        `.toLowerCase();

    const coincideBusqueda = texto.includes(textoBusqueda.toLowerCase());

    return perteneceCategoria && perteneceMarca && coincideBusqueda;
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

                    ${montura.estado === "Agotada" ? "" : `
                    <button class="boton boton-primario boton-armar-desde-producto" data-id="${montura.id}">
                        <i class="fa-solid fa-wand-magic-sparkles"></i>
                        Armar mis gafas
                    </button>`}

                    <a class="boton boton-secundario" target="_blank" href="https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(`Hola, estoy interesado en la montura ${montura.marca} ${montura.nombre}, referencia ${montura.referencia}.`)}">
                        <i class="fa-brands fa-whatsapp"></i>
                        Consultar
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

  const botonFavoritoModal = contenidoModal.querySelector(".boton-favorito-modal");
  if (botonFavoritoModal) {
    botonFavoritoModal.addEventListener("click", () => {
      cambiarFavorito(montura.id);
      abrirProducto(montura.id);
    });
  }

  const botonArmar = contenidoModal.querySelector(".boton-armar-desde-producto");
  if (botonArmar) {
    botonArmar.addEventListener("click", () => {
      modalProducto.classList.remove("activo");
      abrirArmadorGafas(montura.id);
    });
  }

  modalProducto.classList.add("activo");
}

cerrarModal.addEventListener("click", () =>
  modalProducto.classList.remove("activo"),
);

modalProducto.addEventListener("click", (event) => {
  if (event.target === modalProducto) modalProducto.classList.remove("activo");
});

/* =====================================
   ARMADOR DE GAFAS
===================================== */

const armador = {
  paso: 1,
  monturaId: null,
  colorSeleccionado: null,
  lenteId: null,
  formulaTipo: "WhatsApp",
  formula: {
    odEsfera: "", odCilindro: "", odEje: "", odAdd: "",
    oiEsfera: "", oiCilindro: "", oiEje: "", oiAdd: "",
    dp: ""
  }
};

function renderMediaInicioArmador() {
  const contenedor = document.getElementById("armadorMediaContenido");
  if (!contenedor || typeof armadorMedia === "undefined") return;

  const tipo = armadorMedia.tipo === "video" ? "video" : "imagen";
  if (tipo === "video") {
    contenedor.innerHTML = `
      <video class="armador-media-visual" controls playsinline preload="metadata" ${armadorMedia.poster ? `poster="${armadorMedia.poster}"` : ""}>
        <source src="${armadorMedia.src}" type="video/mp4">
        Tu navegador no puede reproducir este video.
      </video>`;
  } else {
    contenedor.innerHTML = `
      <img class="armador-media-visual" src="${armadorMedia.src}" alt="${armadorMedia.alt || "Arma tus gafas"}">`;
  }
}

renderMediaInicioArmador();

function abrirArmadorGafas(monturaId = null) {
  armador.paso = 1;
  const monturaInicial = monturas.find((m) => m.id === monturaId);
  // Las agotadas no aparecen en el armador: no se preseleccionan.
  armador.monturaId = monturaInicial && monturaInicial.estado !== "Agotada" ? monturaId : null;
  armador.colorSeleccionado = monturaInicial && armador.monturaId ? monturaInicial.color?.[0] || null : null;
  armador.lenteId = null;
  armador.formulaTipo = "WhatsApp";
  renderArmador();
  modalArmador.classList.add("activo");
}

if (abrirArmador) {
  abrirArmador.addEventListener("click", () => abrirArmadorGafas());
}

if (cerrarArmador) {
  cerrarArmador.addEventListener("click", () => modalArmador.classList.remove("activo"));
  modalArmador.addEventListener("click", (event) => {
    if (event.target === modalArmador) modalArmador.classList.remove("activo");
  });
}

function actualizarProgresoArmador() {
  document.querySelectorAll(".armador-paso").forEach((el) => {
    const n = Number(el.dataset.step);
    el.classList.toggle("activo", n === armador.paso);
    el.classList.toggle("completado", n < armador.paso);
  });
}

function renderArmador() {
  actualizarProgresoArmador();

  if (armador.paso === 1) renderPasoMontura();
  if (armador.paso === 2) renderPasoLentes();
  if (armador.paso === 3) renderPasoFormula();
  if (armador.paso === 4) renderPasoResumen();
}

document.querySelectorAll(".armador-paso").forEach((boton) => {
  boton.addEventListener("click", () => {
    const paso = Number(boton.dataset.step);
    if (paso <= armador.paso || (paso === 2 && armador.monturaId) || (paso === 3 && armador.monturaId && armador.lenteId)) {
      armador.paso = paso;
      renderArmador();
    }
  });
});

function obtenerImagenColor(montura, color) {
  if (!montura) return "";
  if (montura.imagenesPorColor && color && montura.imagenesPorColor[color]) {
    return montura.imagenesPorColor[color];
  }
  return montura.imagenes?.[0] || "";
}

function renderPasoMontura() {
  const termino = armador._busqueda || "";
  // Solo monturas con existencias: se ocultan las agotadas.
  const lista = monturas.filter((m) => {
    if (m.estado === "Agotada") return false;
    const t = `${m.marca} ${m.nombre} ${m.referencia}`.toLowerCase();
    return t.includes(termino.toLowerCase());
  }).slice(0, 30);

  armadorContenido.innerHTML = `
    <div class="armador-titulo">
      <span>PASO 01</span>
      <h3>Elige tu montura</h3>
      <p>Selecciona cualquier montura disponible de nuestro catálogo.</p>
    </div>
    <div class="armador-buscador">
      <i class="fa-solid fa-magnifying-glass"></i>
      <input id="buscarArmador" value="${termino}" placeholder="Buscar marca, nombre o referencia...">
    </div>
    <div class="armador-grid-monturas">
      ${lista.map((m) => `
        <button class="armador-montura ${armador.monturaId === m.id ? "seleccionada" : ""}" data-id="${m.id}">
          <div class="armador-montura-imagen"><img src="${obtenerImagenColor(m, armador.colorSeleccionado)}" alt="${m.nombre} - ${armador.colorSeleccionado || "color seleccionado"}"></div>
          <strong>${m.marca}</strong>
          <span>${m.nombre}</span>
          <small>${m.referencia}</small>
          ${m.estado && m.estado !== "Disponible" ? `<span class="estado-disponibilidad ${m.estado === "Agotada" ? "agotada" : "ultimas-unidades"} armador-estado">${m.estado}</span>` : ""}
          ${armador.monturaId === m.id ? '<i class="fa-solid fa-circle-check"></i>' : ''}
        </button>
      `).join("")}
    </div>
    ${(() => {
      const seleccionada = monturas.find((m) => m.id === armador.monturaId);
      if (!seleccionada || !seleccionada.color?.length) return "";
      return `
        <div class="armador-colores">
          <div class="armador-colores-titulo">
            <div><span>COLOR</span><strong>Elige el color disponible</strong></div>
            <small>${armador.colorSeleccionado || "Selecciona uno"}</small>
          </div>
          <div class="armador-color-preview">
            <div class="armador-color-preview-imagen">
              <img src="${obtenerImagenColor(seleccionada, armador.colorSeleccionado)}" alt="${seleccionada.nombre} - ${armador.colorSeleccionado || "color seleccionado"}">
            </div>
            <div>
              <span>Vista del color seleccionado</span>
              <strong>${armador.colorSeleccionado || "Selecciona un color"}</strong>
              <small>La fotografía cambia según el color que elijas.</small>
            </div>
          </div>
          <div class="armador-colores-lista">
            ${seleccionada.color.map((color) => `
              <button type="button" class="armador-color-opcion ${armador.colorSeleccionado === color ? "seleccionado" : ""}" data-color="${color}" title="${color}">
                <span class="color-punto grande" style="background:${obtenerColorCss(color)}"></span>
                <span>${color}</span>
                ${armador.colorSeleccionado === color ? '<i class="fa-solid fa-check"></i>' : ""}
              </button>`).join("")}
          </div>
        </div>`;
    })()}
    <div class="armador-footer">
      <button class="boton boton-primario" id="siguienteMontura" ${armador.monturaId && armador.colorSeleccionado ? "" : "disabled"}>
        Continuar con los lentes <i class="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  `;

  document.getElementById("buscarArmador").addEventListener("input", (e) => {
    armador._busqueda = e.target.value;
    renderPasoMontura();
    const input = document.getElementById("buscarArmador");
    input.focus();
    input.setSelectionRange(input.value.length, input.value.length);
  });

  document.querySelectorAll(".armador-montura").forEach((btn) => {
    btn.addEventListener("click", () => {
      armador.monturaId = Number(btn.dataset.id);
      const seleccionada = monturas.find((m) => m.id === armador.monturaId);
      armador.colorSeleccionado = seleccionada?.color?.[0] || null;
      renderPasoMontura();
    });
  });

  document.querySelectorAll(".armador-color-opcion").forEach((btn) => {
    btn.addEventListener("click", () => {
      armador.colorSeleccionado = btn.dataset.color;
      renderPasoMontura();
    });
  });

  document.getElementById("siguienteMontura").addEventListener("click", () => {
    if (!armador.monturaId) return;
    armador.paso = 2;
    renderArmador();
  });
}

function renderPasoLentes() {
  armadorContenido.innerHTML = `
    <div class="armador-titulo">
      <span>PASO 02</span>
      <h3>Selecciona tus lentes</h3>
      <p>Compara las opciones y elige la que mejor se adapte a lo que necesitas.</p>
    </div>
    <div class="lentes-grid">
      ${lentesDisponibles.map((l) => `
        <button class="lente-card ${armador.lenteId === l.id ? "seleccionado" : ""}" data-id="${l.id}">
          <div class="lente-imagen">
            <img src="${l.imagen}" alt="${l.nombre}">
            ${l.etiqueta ? `<span class="lente-etiqueta">${l.etiqueta}</span>` : ""}
          </div>
          <div class="lente-card-info">
            <h4>${l.nombre}</h4>
            <p>${l.descripcion}</p>
            <div class="lente-card-pie">
              <span>Seleccionar</span>
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
          ${armador.lenteId === l.id ? '<span class="lente-check"><i class="fa-solid fa-check"></i></span>' : ''}
        </button>
      `).join("")}
    </div>
    <div class="armador-footer armador-footer-doble">
      <button class="boton boton-secundario" id="volverMontura"><i class="fa-solid fa-arrow-left"></i> Atrás</button>
      <button class="boton boton-primario" id="siguienteLente" ${armador.lenteId ? "" : "disabled"}>Continuar con la fórmula <i class="fa-solid fa-arrow-right"></i></button>
    </div>
  `;

  document.querySelectorAll(".lente-card").forEach((btn) => {
    btn.addEventListener("click", () => {
      armador.lenteId = btn.dataset.id;
      renderPasoLentes();
    });
  });

  document.getElementById("volverMontura").addEventListener("click", () => {
    armador.paso = 1; renderArmador();
  });
  document.getElementById("siguienteLente").addEventListener("click", () => {
    if (!armador.lenteId) return;
    armador.paso = 3; renderArmador();
  });
}

function campoFormula(id, label, placeholder = "") {
  return `<label class="campo-formula"><span>${label}</span><input id="${id}" value="${armador.formula[id] || ""}" placeholder="${placeholder}" inputmode="decimal"></label>`;
}

function renderPasoFormula() {
  const l = lentesDisponibles.find(x => x.id === armador.lenteId);
  armadorContenido.innerHTML = `
    <div class="armador-titulo">
      <span>PASO 03</span>
      <h3>Comparte tu fórmula</h3>
      <p>Ingresa tu fórmula manualmente o elige enviarla directamente por WhatsApp.</p>
    </div>

    <div class="formula-opciones">
      <button class="formula-tipo ${armador.formulaTipo === "Manual" ? "activo" : ""}" data-tipo="Manual">Ingresar manualmente</button>
      <button class="formula-tipo ${armador.formulaTipo === "WhatsApp" ? "activo" : ""}" data-tipo="WhatsApp">Enviarla por WhatsApp</button>
    </div>

    ${armador.formulaTipo === "Manual" ? `
      <div class="formula-panel">
        <div class="formula-tabla">
          <div class="formula-col-head"></div><div class="formula-col-head">Esfera</div><div class="formula-col-head">Cilindro</div><div class="formula-col-head">Eje</div><div class="formula-col-head">ADD</div>
          <div class="formula-col-head">OD</div>${campoFormula("odEsfera","")}${campoFormula("odCilindro","")}${campoFormula("odEje","")}${campoFormula("odAdd","")}
          <div class="formula-col-head">OI</div>${campoFormula("oiEsfera","")}${campoFormula("oiCilindro","")}${campoFormula("oiEje","")}${campoFormula("oiAdd","")}
        </div>
        <label class="campo-formula campo-dp"><span>Distancia pupilar (DP)</span><input id="dp" value="${armador.formula.dp || ""}" placeholder="Ej. 62"></label>
      </div>
    ` : `
      <div class="aviso-archivo">
        <i class="fa-brands fa-whatsapp"></i>
        <div><strong>¿Tienes tu fórmula?</strong><br>Al finalizar se abrirá WhatsApp con tu selección. Allí podrás enviar una foto de tu fórmula directamente al asesor.</div>
      </div>
    `}

    <div class="armador-resumen-mini">
      <img src="${l ? l.imagen : ""}" alt="">
      <div><strong>${l ? l.nombre : ""}</strong><span>Selección de lentes</span></div>
    </div>

    <div class="armador-footer armador-footer-doble">
      <button class="boton boton-secundario" id="volverLentes"><i class="fa-solid fa-arrow-left"></i> Atrás</button>
      <button class="boton boton-primario" id="siguienteFormula">Ver resumen <i class="fa-solid fa-arrow-right"></i></button>
    </div>
  `;

  document.querySelectorAll(".formula-tipo").forEach(btn => {
    btn.addEventListener("click", () => {
      armador.formulaTipo = btn.dataset.tipo;
      renderPasoFormula();
    });
  });

  if (armador.formulaTipo === "Manual") {
    ["odEsfera","odCilindro","odEje","odAdd","oiEsfera","oiCilindro","oiEje","oiAdd","dp"].forEach(id => {
      const input = document.getElementById(id);
      if (input) input.addEventListener("input", () => armador.formula[id] = input.value);
    });
  }

  document.getElementById("volverLentes").addEventListener("click", () => {
    armador.paso = 2; renderArmador();
  });
  document.getElementById("siguienteFormula").addEventListener("click", () => {
    armador.paso = 4; renderArmador();
  });
}

function renderPasoResumen() {
  const m = monturas.find(x => x.id === armador.monturaId);
  const l = lentesDisponibles.find(x => x.id === armador.lenteId);
  const formulaTexto = armador.formulaTipo === "Manual"
    ? `OD: ${armador.formula.odEsfera || "-"} / ${armador.formula.odCilindro || "-"} / ${armador.formula.odEje || "-"} / ADD ${armador.formula.odAdd || "-"}\nOI: ${armador.formula.oiEsfera || "-"} / ${armador.formula.oiCilindro || "-"} / ${armador.formula.oiEje || "-"} / ADD ${armador.formula.oiAdd || "-"}\nDP: ${armador.formula.dp || "-"}`
    : "La fórmula será enviada por WhatsApp.";

  armadorContenido.innerHTML = `
    <div class="armador-titulo">
      <span>PASO 04</span>
      <h3>Así quedan tus gafas</h3>
      <p>Revisa tu selección antes de enviarla a Óptica Eyeon.</p>
    </div>

    <div class="resumen-builder">
      <div class="resumen-montura">
        <img src="${m.imagenes[0]}" alt="${m.nombre}">
        <div><span>Montura</span><strong>${m.marca} ${m.nombre}</strong><small>Ref. ${m.referencia} · Color: ${armador.colorSeleccionado || m.color?.[0] || "No especificado"}</small></div>
      </div>
      <div class="resumen-lente">
        <img src="${l.imagen}" alt="${l.nombre}">
        <div><span>Lentes</span><strong>${l.nombre}</strong><small>${l.descripcion || "Lente seleccionado"}</small></div>
      </div>
      <div class="resumen-formula">
        <i class="fa-solid fa-prescription"></i>
        <div><span>Fórmula</span><strong>${armador.formulaTipo}</strong><small>${formulaTexto.replace(/\n/g,"<br>")}</small></div>
      </div>
    </div>

    ${armador.formulaTipo === "WhatsApp" ? `<div class="aviso-archivo"><i class="fa-brands fa-whatsapp"></i> Al enviar se abrirá WhatsApp con tu configuración. Allí podrás adjuntar la foto de tu fórmula si la necesitas.</div>` : ""}

    <div class="armador-footer armador-footer-doble">
      <button class="boton boton-secundario" id="editarFormula"><i class="fa-solid fa-arrow-left"></i> Editar</button>
      <button class="boton boton-primario" id="enviarArmado"><i class="fa-brands fa-whatsapp"></i> Enviar configuración por WhatsApp</button>
    </div>
  `;

  document.getElementById("editarFormula").addEventListener("click", () => {
    armador.paso = 3; renderArmador();
  });

  document.getElementById("enviarArmado").addEventListener("click", () => {
    const formulaWhatsApp = armador.formulaTipo === "Manual"
      ? `📝 Fórmula manual:
• OD (derecho): Esfera ${armador.formula.odEsfera || "-"} · Cilindro ${armador.formula.odCilindro || "-"} · Eje ${armador.formula.odEje || "-"} · ADD ${armador.formula.odAdd || "-"}
• OI (izquierdo): Esfera ${armador.formula.oiEsfera || "-"} · Cilindro ${armador.formula.oiCilindro || "-"} · Eje ${armador.formula.oiEje || "-"} · ADD ${armador.formula.oiAdd || "-"}
• DP: ${armador.formula.dp || "-"}`
      : "📄 Fórmula: la enviaré directamente por WhatsApp.";

    const texto = `👓✨ ¡Hola, Óptica Eyeon!

Quiero armar mis gafas y me gustaría recibir asesoría con la configuración que seleccioné en su catálogo. 😊

🕶️ MONTURA
• Marca: ${m.marca}
• Modelo: ${m.nombre}
• Referencia: ${m.referencia}
• Color: ${armador.colorSeleccionado || m.color?.[0] || "No especificado"}

🔎 LENTES
• Tipo: ${l.nombre}
• Características: ${l.descripcion || "No especificadas"}

${formulaWhatsApp}

💬 ¡Quedo atento(a) a la confirmación de disponibilidad y a las indicaciones para continuar con mi pedido! 🙌👓`;

    window.open(`https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`, "_blank");
  });
}

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

actualizarContadorMarcas();
actualizarContadorMonturas();
iniciarMarquee();
crearFiltros();
actualizarFavoritos();
mostrarProductos();
