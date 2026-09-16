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
  { id:"cr39", nombre:"Blancos", descripcion:"Lente oftálmico liviano para uso diario.", imagen:"imagenes/lentes/cr.foto.color.arb/1.jpeg", etiqueta:"Esencial" },
  { id:"antirreflejo", nombre:"Antirreflejo", descripcion:"Mayor comodidad visual y menos reflejos.", imagen:"imagenes/lentes/cr.foto.color.arb/2.jpeg", etiqueta:"Más elegido" },
  { id:"fotocromatico", nombre:"Fotocromático + AR", descripcion:"Se adapta a la luz exterior e incluye antirreflejo.", imagen:"imagenes/lentes/cr.foto.color.arb/3.jpeg", etiqueta:"Práctico" },
  { id:"progresivo", nombre:"Progresivo Poly + AR", descripcion:"Visión para lejos, intermedio y cerca.", imagen:"imagenes/lentes/cr.foto.color.arb/4.jpeg", etiqueta:"Progresivo" },
  { id:"transitions", nombre:"Transitions + AR", descripcion:"Tecnología fotocromática avanzada con antirreflejo.", imagen:"imagenes/lentes/cr.foto.color.arv/1.jpeg", etiqueta:"Premium" },
  { id:"ocupacional", nombre:"Ocupacional", descripcion:"Pensado para distancias de trabajo y pantallas.", imagen:"imagenes/lentes/cr.foto.color.arv/2.jpeg", etiqueta:"Trabajo" }
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
