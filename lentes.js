/*
 * ================================================================
 * LENTES DEL ARMADOR — ÓPTICA EYEON
 * ================================================================
 * TODO lo que necesitas cambiar de los lentes está en esta lista.
 * Para agregar un lente, copia una línea y cambia sus datos.
 * No necesitas modificar el HTML ni script.js.
 *
 * CAMPOS:
 * id          = identificador único. Usa minúsculas y sin espacios.
 * nombre      = nombre que verá el cliente.
 * descripcion = descripción corta.
 * precio      = dato interno opcional (actualmente no se muestra ni se envía).
 * imagen      = ruta de la imagen dentro de imagenes/lentes/.
 * etiqueta    = etiqueta pequeña opcional.
 *
 * EJEMPLO:
 * { id:"bluecontrol", nombre:"Blue Control", descripcion:"Filtro para uso digital.", imagen:"imagenes/lentes/bluecontrol.jpg", etiqueta:"Digital" },
 *
 * Para cambiar una imagen, reemplaza el archivo en imagenes/lentes/
 * y conserva el mismo nombre, o cambia aquí la ruta.
 * ================================================================
 */

const lentesDisponibles = [
  { id:"trans.ar", nombre:"Transitions Gen S AR", descripcion:"Fotocromatico transitions de tecnologia rapida (Gen S), con antirreflejo.", imagen:"imagenes/lentes/transitiongensarverde.webp", etiqueta:"Más elegido" },
  { id:"trans.colors", nombre:"Transitions Gen S Colors AR", descripcion:"Lentes transitions disponibles en colores de moda (verde, ambar, zafiro, rubi, etc) con antirreflejo.", imagen:"imagenes/lentes/transcolors.jpeg", etiqueta:"Esencial" },
  { id:"style mirror", nombre:"Transitions Style Mirrors", descripcion:"Lentes transitions que al oscurecerse adquieren un acabado con efecto espejo, con antirreflejo.", imagen:"imagenes/lentes/stylemirror.jpeg", etiqueta:"Premium" },
  { id:"trans pro", nombre:"Transitions Gen S AR Progresivos", descripcion:"Lentes progresivo multifocal combinado con tecnologia transitions y antirreflejo.", imagen:"imagenes/lentes/protransarblue.webp", etiqueta:"Progresivo" },
  { id:"trans pro colors", nombre:"Transitions Gen S Colors AR Progresivos", descripcion:"Lente progresivo multifocal transitions en tonos de color especificos y antirreflejo.", imagen:"imagenes/lentes/protranscolor.webp", etiqueta:"Premium" },
  { id:"cr", nombre:"Blancos", descripcion:"Lentes transparentes estandar sin colaboraciones ni filtros especiales.", imagen:"imagenes/lentes/blancos.webp", etiqueta:"Trabajo" },
  { id:"cr.color", nombre:"Filtro Colors", descripcion:"Lentes con un tinte de color fijo (estetico o terapeutico).", imagen:"imagenes/lentes/filtrocolor.webp", etiqueta:"Esencial" },
  { id:"cr.polarizado", nombre:"Polarizado", descripcion:"Lentes de sol que eliminan los reflejos molestos sobre agua, nieve o asfalto, brindando mejor contraste y confort visual.", imagen:"imagenes/lentes/polarizado.jpg", etiqueta:"Más elegido" },
  { id:"ocupacional", nombre:"Ocupacional AR", descripcion:"Lentes diseñados para vision intermedia y cercana (ideales para trabajo de oficina y computador), con antirreflejo.", imagen:"imagenes/lentes/ocupacional.jpg", etiqueta:"Práctico" },
  { id:"cr.ar", nombre:"Antirreflejo", descripcion:"Lentes transparentes con capa que elimina destellos y reflejos de luz para una vision mas nitida.", imagen:"imagenes/lentes/arblue.webp", etiqueta:"Más elegido" },
  { id:"cr.foto.ar", nombre:"Fotocromatico AR", descripcion:"Lentes fotocromaticos se oscurecen bajo el sol y se aclaran en interiores, con tratamiento antirreflejo.", imagen:"imagenes/lentes/fotoarblue.webp", etiqueta:"Más elegido" },
  { id:"cr.foto.colors.ar", nombre:"Fotocromatico Colors AR", descripcion:"Lentes fotocromaticos que toman un tono de color especifico al oscurecerse, con antireflejo.", imagen:"imagenes/lentes/fotocolorrosa.webp", etiqueta:"Premium" },
  { id:"progresivos", nombre:"Progresivos", descripcion:"Lentes multifocales sin lineas que permiten ver a todas las distancias (lejos, intermedia y cerca) de forma gradual.", imagen:"imagenes/lentes/cr.foto.color.arb/1.jpeg", etiqueta:"Esencial" },
  { id:"pro.ar", nombre:"Progresivos AR", descripcion:"Lentes progresivos con capa antirreflejo.", imagen:"imagenes/lentes/proarblue.webp", etiqueta:"Más elegido" },
  { id:"pro.foto.ar", nombre:"Progresivos Fotocromaticos AR", descripcion:"Lentes progresivos que se oscurecen en exteriores y cuentan con antirreflejo.", imagen:"imagenes/lentes/cr.foto.color.arb/3.jpeg", etiqueta:"Práctico" },
  { id:"pro.foto.colors.ar", nombre:"Progresivos Fotocromaticos Colors AR", descripcion:"Lentes progresivos fotocromaticos con tono de color especifico al oscurecerse y antirreflejo.", imagen:"imagenes/lentes/cr.foto.color.arb/4.jpeg", etiqueta:"Progresivo" },
  { id:"bifo.inv", nombre:"Bifocal Invisible", descripcion:"Permiten ver de lejos y cerca sin la linea divisora visible en el lente.", imagen:"imagenes/lentes/cr.foto.color.arv/1.jpeg", etiqueta:"Premium" },
  { id:"bifo.inv.ar", nombre:"Bifocal Invisible AR", descripcion:"Bifocal invisible con capa antirreflejo", imagen:"imagenes/lentes/cr.foto.color.arv/2.jpeg", etiqueta:"Trabajo" },
  { id:"bifo.inv.foto.ar", nombre:"Bifocal Invisible Fotocromatico AR", descripcion:"Bifocal invisible que se oscurece con el sol y cuenta con antirreflejo.", imagen:"imagenes/lentes/cr.foto.color.arb/1.jpeg", etiqueta:"Esencial" },
  { id:"bifo.flat", nombre:"Bifocal Flat Top", descripcion:"Bifocal tradicional con una linea marcada visible (en forma de D) que separa la vision lejana de la cercana.", imagen:"imagenes/lentes/bifoflat.webp", etiqueta:"Más elegido" },
  { id:"bifo.flat.ar", nombre:"Bifocal Flat Top AR", descripcion:"Bifocal tradicional con tratamiento antirreflejo.", imagen:"imagenes/lentes/bifoflatar.webp", etiqueta:"Práctico" },
  { id:"bifo.flat.foto.ar", nombre:"Bifocal Flat Top Fotocromatico AR", descripcion:"Bifocal tradicional que se oscurece con la luz solar y tiene antireflejo.", imagen:"imagenes/lentes/cr.foto.color.arb/4.jpeg", etiqueta:"Progresivo" }
];

/*
 * ================================================================
 * MEDIA DEL BLOQUE "ARMA TUS GAFAS"
 * ================================================================
 * Puedes mostrar UNA IMAGEN o UN VIDEO en el cuadro de la derecha.
 *
 * IMAGEN:
 * tipo: "imagen"
 * src: "imagenes/armador/tu-imagen.jpg"
 *
 * VIDEO LOCAL:
 * tipo: "video"
 * src: "imagenes/armador/tu-video.mp4"
 * poster: "imagenes/armador/portada.jpg"
 *
 * Para cambiarlo solo modifica estos datos.
 * ================================================================
 */
const armadorMedia = {
  tipo: "imagen",
  src: "imagenes/armador/1.jpeg",
  poster: "",
  alt: "Arma tus gafas en Óptica Eyeon",
  titulo: "Arma tus gafas",
  descripcion: "Elige tu montura, color, lentes y fórmula.",
};
