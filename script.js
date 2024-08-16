// script.js
document.getElementById('share-button').addEventListener('click', async () => {
    if (navigator.share) {
        try {
            await navigator.share({
                url: 'https://publico.alternativateatral.com/entradas42363-la-suerte-de-la-fea?o=14&c=20off&m=e'
            });
            console.log('Contenido compartido exitosamente');
        } catch (error) {
            console.error('Error al compartir:', error);
        }
    } else {
        alert('La funcionalidad de compartir no está soportada en este navegador.');
    }
});
