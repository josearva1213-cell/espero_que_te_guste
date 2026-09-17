const slides = [...document.querySelectorAll(".story-slide")];
let current = 0;

function showSlide(index) {
  if (!slides.length) return;
  current = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => slide.classList.toggle("active", i === current));
  document.getElementById("currentSlide").textContent = current + 1;
  document.querySelectorAll(".dot").forEach((dot, i) => dot.classList.toggle("active", i === current));
}

document.getElementById("prevSlide").addEventListener("click", () => showSlide(current - 1));
document.getElementById("nextSlide").addEventListener("click", () => showSlide(current + 1));

const dots = document.getElementById("dots");
slides.forEach((_, i) => {
  const dot = document.createElement("button");
  dot.className = "dot";
  dot.setAttribute("aria-label", "Ir a diapositiva " + (i + 1));
  dot.addEventListener("click", () => showSlide(i));
  dots.appendChild(dot);
});
showSlide(0);

const reasons = [
  {n: 1, text: 'Porque me hace sonreír incluso en los días difíciles.'},
  {n: 2, text: 'Porque puedo ser yo mismo cuando estoy a su lado.'},
  {n: 3, text: 'Porque su sonrisa ilumina mis días.'},
  {n: 4, text: 'Porque sus ojos tienen algo que me encanta.'},
  {n: 5, text: 'Porque me escucha cuando necesito hablar.'},
  {n: 6, text: 'Porque me hace sentir querido.'},
  {n: 7, text: 'Porque confía en mí.'},
  {n: 8, text: 'Porque puedo confiar en ella.'},
  {n: 9, text: 'Porque me apoya en mis sueños.'},
  {n: 10, text: 'Porque celebra mis logros conmigo.'},
  {n: 11, text: 'Porque está en mis momentos buenos y malos.'},
  {n: 12, text: 'Porque me hace sentir especial.'},
  {n: 13, text: 'Porque sus abrazos me dan tranquilidad.'},
  {n: 14, text: 'Porque un beso suyo puede cambiar mi día.'},
  {n: 15, text: 'Porque me gusta escuchar su voz.'},
  {n: 16, text: 'Porque me encanta su forma de reír.'},
  {n: 17, text: 'Porque tiene una manera única de ser.'},
  {n: 18, text: 'Porque admiro su personalidad.'},
  {n: 19, text: 'Porque me inspira a ser mejor.'},
  {n: 20, text: 'Porque me hace sentir acompañado.'},
  {n: 21, text: 'Porque puedo hablar con ella de cualquier cosa.'},
  {n: 22, text: 'Porque tenemos recuerdos que nadie puede reemplazar.'},
  {n: 23, text: 'Porque cada momento a su lado tiene algo especial.'},
  {n: 24, text: 'Porque me gusta cómo me mira.'},
  {n: 25, text: 'Porque me hace sentir en casa.'},
  {n: 26, text: 'Porque incluso cuando no hablamos, disfruto estar con ella.'},
  {n: 27, text: 'Porque conoce partes de mí que pocos conocen.'},
  {n: 28, text: 'Porque acepta mis defectos.'},
  {n: 29, text: 'Porque me ayuda a aceptar los míos.'},
  {n: 30, text: 'Porque me demuestra cariño de muchas maneras.'},
  {n: 31, text: 'Porque me importa profundamente su felicidad.'},
  {n: 32, text: 'Porque quiero verla cumplir sus sueños.'},
  {n: 33, text: 'Porque me gusta cuidar de ella.'},
  {n: 34, text: 'Porque me gusta que se preocupe por mí.'},
  {n: 35, text: 'Porque juntos podemos superar momentos difíciles.'},
  {n: 36, text: 'Porque me hace sentir que no estoy solo.'},
  {n: 37, text: 'Porque cada abrazo suyo se siente diferente.'},
  {n: 38, text: 'Porque su felicidad también me hace feliz.'},
  {n: 39, text: 'Porque me encanta verla emocionarse por algo que le gusta.'},
  {n: 40, text: 'Porque tiene detalles que quizá ni siquiera nota.'},
  {n: 41, text: 'Porque me hace reír con cosas simples.'},
  {n: 42, text: 'Porque puedo contarle mis preocupaciones.'},
  {n: 43, text: 'Porque puedo compartir mis alegrías con ella.'},
  {n: 44, text: 'Porque me conoce cada día un poco más.'},
  {n: 45, text: 'Porque yo también quiero conocer cada parte de ella.'},
  {n: 46, text: 'Porque me gusta aprender de ella.'},
  {n: 47, text: 'Porque admiro su fortaleza.'},
  {n: 48, text: 'Porque admiro su forma de seguir adelante.'},
  {n: 49, text: 'Porque me hace querer un futuro a su lado.'},
  {n: 50, text: 'Porque cuando pienso en ella, sonrío sin darme cuenta.'},
  {n: 51, text: 'Porque su presencia hace especiales los momentos sencillos.'},
  {n: 52, text: 'Porque me gusta caminar a su lado.'},
  {n: 53, text: 'Porque me gusta compartir mis planes con ella.'},
  {n: 54, text: 'Porque me gusta imaginar aventuras juntos.'},
  {n: 55, text: 'Porque me hace sentir mariposas.'},
  {n: 56, text: 'Porque todavía puede ponerme nervioso.'},
  {n: 57, text: 'Porque me gusta sorprenderla.'},
  {n: 58, text: 'Porque me gusta verla feliz con mis detalles.'},
  {n: 59, text: 'Porque sus palabras pueden tranquilizarme.'},
  {n: 60, text: 'Porque su cariño significa mucho para mí.'},
  {n: 61, text: 'Porque me recuerda que el amor también está en las cosas pequeñas.'},
  {n: 62, text: 'Porque me gusta su forma de pensar.'},
  {n: 63, text: 'Porque me encanta descubrir nuevas cosas de ella.'},
  {n: 64, text: 'Porque cada recuerdo juntos tiene un lugar especial en mi corazón.'},
  {n: 65, text: 'Porque me gusta recordar cómo nos conocimos.'},
  {n: 66, text: 'Porque me gusta todo lo que hemos vivido juntos.'},
  {n: 67, text: 'Porque incluso los momentos difíciles nos han enseñado algo.'},
  {n: 68, text: 'Porque quiero seguir creando recuerdos con ella.'},
  {n: 69, text: 'Porque quiero estar presente en sus momentos importantes.'},
  {n: 70, text: 'Porque quiero verla alcanzar todo aquello que desea.'},
  {n: 71, text: 'Porque me importa lo que siente.'},
  {n: 72, text: 'Porque sus problemas también me preocupan.'},
  {n: 73, text: 'Porque sus alegrías también se sienten como mías.'},
  {n: 74, text: 'Porque me gusta decirle cuánto la quiero.'},
  {n: 75, text: 'Porque nunca me canso de verla.'},
  {n: 76, text: 'Porque hay algo en ella que siempre me atrae.'},
  {n: 77, text: 'Porque me encanta su manera de demostrar cariño.'},
  {n: 78, text: 'Porque me gusta cuando se preocupa por pequeños detalles.'},
  {n: 79, text: 'Porque me gusta hacerla sentir amada.'},
  {n: 80, text: 'Porque quiero ser alguien en quien pueda apoyarse.'},
  {n: 81, text: 'Porque me gusta cuando somos nosotros contra los problemas.'},
  {n: 82, text: 'Porque juntos podemos aprender y crecer.'},
  {n: 83, text: 'Porque me hace valorar más el presente.'},
  {n: 84, text: 'Porque me enseña que amar también es tener paciencia.'},
  {n: 85, text: 'Porque me hace querer cuidar nuestra relación.'},
  {n: 86, text: 'Porque me gusta la conexión que tenemos.'},
  {n: 87, text: 'Porque puedo encontrar tranquilidad en su compañía.'},
  {n: 88, text: 'Porque me encanta escucharla hablar de lo que le apasiona.'},
  {n: 89, text: 'Porque tiene una belleza que va mucho más allá de lo físico.'},
  {n: 90, text: 'Porque cada día encuentro una razón nueva para quererla.'},
  {n: 91, text: 'Porque no necesito que sea perfecta para amarla.'},
  {n: 92, text: 'Porque amo su forma de ser, incluso con sus pequeñas imperfecciones.'},
  {n: 93, text: 'Porque quiero estar a su lado cuando las cosas sean fáciles.'},
  {n: 94, text: 'Porque también quiero estar cuando las cosas sean difíciles.'},
  {n: 95, text: 'Porque quiero seguir aprendiendo a amar mejor.'},
  {n: 96, text: 'Porque elegiría conocerla una y otra vez.'},
  {n: 97, text: 'Porque entre millones de personas, ella se volvió especial para mí.'},
  {n: 98, text: 'Porque mi corazón encontró algo en ella que no encontró en nadie más.'},
  {n: 99, text: 'Porque cuando estoy con ella, siento que estoy donde quiero estar.'},
  {n: 100, text: 'Porque no necesito 100 motivos para amarla; pero si me pidieran mil, encontraría mil más. ❤️'}
];
const grid = document.getElementById("reasonGrid");
reasons.forEach(item => {
  const card = document.createElement("div");
  card.className = "reason-card";
  card.innerHTML = `<span>${String(item.n).padStart(2, "0")}</span><p>${item.text}</p>`;
  grid.appendChild(card);
});

// Corazones decorativos.
const hearts = document.querySelector(".hearts");
for (let i = 0; i < 18; i++) {
  const heart = document.createElement("span");
  heart.textContent = Math.random() > 0.5 ? "♡" : "♥";
  heart.style.left = Math.random() * 100 + "%";
  heart.style.animationDelay = (Math.random() * 8) + "s";
  heart.style.animationDuration = (7 + Math.random() * 7) + "s";
  heart.style.fontSize = (12 + Math.random() * 18) + "px";
  hearts.appendChild(heart);
}
