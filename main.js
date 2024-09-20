document.addEventListener("scroll", function () {
  const header = document.getElementById("header");

  if (window.scrollY > 50) {
    // Ajuste este valor conforme necessário
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const dataAlvo = new Date("2025-02-15T00:00:00").getTime();

// Atualiza a contagem a cada segundo
const contador = setInterval(function () {
  // Obtém a data e hora atual
  const agora = new Date().getTime();

  // Calcula a diferença entre a data alvo e a data atual
  const distancia = dataAlvo - agora;

  // Calcula o tempo restante em dias, horas, minutos e segundos
  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor(
    (distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

  // Atualiza o conteúdo HTML com os valores calculados
  document.getElementById("dias").innerText = dias;
  document.getElementById("horas").innerText = horas;
  document.getElementById("minutos").innerText = minutos;
  document.getElementById("segundos").innerText = segundos;

  // Se a contagem regressiva terminar
  if (distancia < 0) {
    clearInterval(contador);
    document.querySelector(".contagem h1").innerText = "O evento começou!";
    document.querySelector(".dados").style.display = "none"; // Esconde a contagem
  }
}, 1000);
