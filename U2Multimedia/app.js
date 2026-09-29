const modelViewer = document.getElementById('modelViewer');
const fileStatus = document.getElementById('fileStatus');
modelViewer.addEventListener('error', () => { fileStatus.textContent = 'No se pudo cargar el modelo. Comprueba tu conexión a internet y abre la página en Chrome.'; });
