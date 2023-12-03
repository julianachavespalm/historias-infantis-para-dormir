// Aumentar fonte
function increaseFont() {
  var mainElement = document.getElementById('content');
  var mainStyle = window.getComputedStyle(mainElement);
  var currentFontSize = parseInt(mainStyle.fontSize);

  if (currentFontSize < 30) {
      var newSize = currentFontSize + 2;
      mainElement.style.fontSize = newSize + "px";
  }
}
// Função para alternar o tema de alto contraste
const highContrastToggle = document.getElementById('highContrastToggle');
const body = document.body;

highContrastToggle.addEventListener('click', function() {
    body.classList.toggle('high-contrast-theme');
});

//Diminuir fonte
function decreaseFont() {
  var mainElement = document.getElementById("content");
  var mainStyle = window.getComputedStyle(mainElement);
  var currentFontSize = parseInt(mainStyle.fontSize);

  if (currentFontSize > 12) {
      var newSize = currentFontSize - 2;
      mainElement.style.fontSize = newSize + "px";
  }
}

document.getElementById('increaseFont').addEventListener('click', function () {
  increaseFont();
});

document.getElementById('decreaseFont').addEventListener('click', function () {
  decreaseFont();
});


// Remover alterações
function resetAccessibility() {
  var mainElement = document.getElementById("content");
  mainElement.style.fontSize = '16px';

  body.classList.remove("high-contrast-theme");
}

document.getElementById('reset').addEventListener("click", resetAccessibility);



/*
    SOBREPOSIÇÃO DA CALCULADORA
*/
document.addEventListener('DOMContentLoaded', function() {
  const img = document.querySelector('.content__img');
  const overlay = document.querySelector('.overlay');
  const body = document.body;
  const calculator = document.querySelector('.calculator');
  const btnClose = document.querySelector('.close-calc');

  // Adiciona um evento de clique na imagem
  img.addEventListener('click', function() {
    overlay.style.display = 'block'; // Exibe a sobreposição
    body.classList.add('overlay-active'); // Esconde a scrollbar
    calculator.style.display = 'block'; // Exibe a calculadora ao abrir a sobreposição
  });

  // Adiciona um evento de clique no botão de fechar da calculadora
  btnClose.addEventListener('click', function(event) {
    event.stopPropagation(); // Impede a propagação do evento para a sobreposição
    overlay.style.display = 'none'; // Esconde a sobreposição
    body.classList.remove('overlay-active'); // Mostra a scrollbar novamente
    calculator.style.display = 'none'; // Esconde a calculadora ao fechar
  });

  // Adiciona um evento de clique na sobreposição
  overlay.addEventListener('click', function() {
    // Não faz nada se clicar na sobreposição fora do botão fechar
  });
});