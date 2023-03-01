import { printLine } from './modules/print';

const url = window.location.href;
printLine(url);

if (url) {
  // const body = document.getElementsByTagName('body');
  const modal = document.createElement('div');
  modal.id = 'myModal';
  modal.classList.add('modal');
  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');
  const closeButton = document.createElement('span');
  closeButton.innerText = `x`;
  closeButton.classList.add('close');
  const iframe = document.createElement('iframe');
  iframe.width = '582px';
  iframe.height = '543px';
  iframe.src = `https://aikyam-7607.fly.dev/`;
  modalContent.appendChild(closeButton);
  modalContent.appendChild(iframe);
  modal.appendChild(modalContent);

  const div = document.createElement('div');
  div.classList.add('button-container');
  const button = document.createElement('div');
  div.classList.add('chat-button');
  button.addEventListener('click', () => {
    modal.style.display = 'block';
  });
  button.innerText = 'chat';
  closeButton.onclick = function () {
    modal.style.display = 'none';
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
  div.appendChild(button);
  document.body.appendChild(div);
  document.body.appendChild(modal);
  // document.body.appendChild(appContainer);
  printLine(div);
}
