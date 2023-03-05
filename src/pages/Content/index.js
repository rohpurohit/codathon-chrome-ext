const url = window.location.href;

if (url) {
  // Build modal
  const modal = document.createElement('div');
  modal.id = 'myModal';
  modal.classList.add('modal');
  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');
  const closeButton = document.createElement('span');

  // Adding close icon Svg Element
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', '24');
  svg.setAttribute('height', '24');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('fill', 'none');

  const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path1.setAttribute('d', 'M18 6L6 18');
  path1.setAttribute('stroke', 'black');
  path1.setAttribute('stroke-width', '2');
  path1.setAttribute('stroke-linecap', 'round');
  path1.setAttribute('stroke-linejoin', 'round');

  const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path2.setAttribute('d', 'M6 6L18 18');
  path2.setAttribute('stroke', 'black');
  path2.setAttribute('stroke-width', '2');
  path2.setAttribute('stroke-linecap', 'round');
  path2.setAttribute('stroke-linejoin', 'round');

  svg.appendChild(path1);
  svg.appendChild(path2);

  closeButton.appendChild(svg);
  closeButton.classList.add('close');

  // Create iframe
  const iframe = document.createElement('iframe');
  iframe.width = '515px';
  iframe.height = '530px';
  iframe.src = `https://aikyam-7607.fly.dev/`;
  modalContent.appendChild(closeButton);
  modalContent.appendChild(iframe);
  modal.appendChild(modalContent);

  // Create chat button
  const div = document.createElement('div');
  div.classList.add('button-container');
  const button = document.createElement('div');
  button.classList.add('chat-button');
  button.addEventListener('click', () => {
    modal.style.display = 'block';
  });
  button.innerText = 'chat';
  closeButton.onclick = function () {
    modal.style.display = 'none';
  };

  // add listeners to chat button
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
  div.appendChild(button);

  // append to website body
  document.body.appendChild(div);
  document.body.appendChild(modal);
}
