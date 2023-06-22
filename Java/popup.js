// Selecione os elementos relevantes
const popupOverlay = document.querySelector('.popup-overlay');
const popupContent = document.querySelector('.popup-content');
const closeButton = document.querySelector('.close-button');

// Abra o popup ao clicar em algum elemento desejado
seuElemento.addEventListener('click', function() {
  popupOverlay.style.display = 'flex';
});

// Feche o popup ao clicar no botão de fechar ou fora do popup
closeButton.addEventListener('click', function() {
  popupOverlay.style.display = 'none';
});

popupOverlay.addEventListener('click', function(event) {
  if (event.target === popupOverlay) {
    popupOverlay.style.display = 'none';
  }
});