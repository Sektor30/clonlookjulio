const nameInput = document.getElementById('name-input');
const nameDisplay = document.getElementById('name-display');

        nameInput.addEventListener('input', () => {
            nameDisplay.textContent = nameInput.value || '[Nombre]';
        });

        function downloadCertificate() {
            const certificate = document.getElementById('certificate');
            if (!nameInput.value.trim()) {
                alert('Por favor, ingresa un nombre antes de descargar.');
                return;
            }
            html2canvas(certificate).then(canvas => {
                const link = document.createElement('a');
                link.download = `certificado_${nameInput.value.trim()}.png`;
                link.href = canvas.toDataURL('image/png');
                link.click();
                alert('El certificado se ha descargado con éxito.');
            });
        }