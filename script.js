document.getElementById('uploadForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const fileInput = document.getElementById('csvFile');
    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append('csvFile', file);
    
    try {
        const response = await fetch('/upload', {
            method: 'POST',
            body: formData
        });
        
        if (response.ok) {
            const result = await response.json();
            document.getElementById('output').textContent = JSON.stringify(result, null, 2);
        } else {
            alert('Error al procesar el archivo.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Hubo un problema al conectar con el servidor.');
    }
});
