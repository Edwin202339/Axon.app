export const showCustomMessage = (message: string, duration: number = 3000) => {
  const messageBox = document.createElement('div');
  messageBox.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #4361ee;
    color: white;
    padding: 20px 30px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    z-index: 9999;
    font-family: 'Inter', sans-serif;
    font-size: 1.1rem;
    text-align: center;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  `;
  
  messageBox.textContent = message;
  document.body.appendChild(messageBox);

  setTimeout(() => messageBox.style.opacity = '1', 10);
  setTimeout(() => {
    messageBox.style.opacity = '0';
    messageBox.addEventListener('transitionend', () => messageBox.remove());
  }, duration);
};
