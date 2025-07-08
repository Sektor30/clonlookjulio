// Funcionalidad del botón de WhatsApp
document.addEventListener("DOMContentLoaded", function() {
    // Selección de elementos
    const whatsappButton = document.querySelector('.whatsapp-button');
    const chatBox = document.querySelector('.chat-box');
    const closeChat = document.querySelector('.close-chat');
    const sendMessage = document.querySelector('.send-message');
    const messageInput = document.querySelector('.message-input');
    const chatMessages = document.querySelector('.chat-messages');

    // Verificar que los elementos existan
    if (!whatsappButton || !chatBox || !closeChat || !sendMessage || !messageInput || !chatMessages) {
        console.error('No se encontraron todos los elementos necesarios para el chat');
        return;
    }

    // Configuración de WhatsApp
    const whatsappGroupLink = 'https://chat.whatsapp.com/CHT7nmUnqlpE4HaxG5xxuR';

    // Mensaje de bienvenida
    const welcomeMessage = {
        text: "¡Hola! 👋 Bienvenido a Chooj. Únete a nuestro grupo de WhatsApp para más información.",
        isUser: false
    };

    // Mostrar mensaje en el chat
    function addMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        if (message.isUser) {
            messageElement.classList.add('user-message');
        }
        messageElement.textContent = message.text;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Función para mostrar el chat
    function showChat() {
        chatBox.classList.add('active');
        if (chatMessages.children.length === 0) {
            addMessage(welcomeMessage);
            // Agregar mensaje con el enlace del grupo
            setTimeout(() => {
                addMessage({
                    text: "Haz clic en el botón de enviar para unirte a nuestro grupo de WhatsApp",
                    isUser: false
                });
            }, 1000);
        }
    }

    // Función para ocultar el chat
    function hideChat() {
        chatBox.classList.remove('active');
    }

    // Función para redirigir al grupo de WhatsApp
    function redirectToWhatsAppGroup() {
        try {
            window.open(whatsappGroupLink, '_blank');
            addMessage({
                text: "¡Te estamos redirigiendo al grupo de WhatsApp!",
                isUser: false
            });
        } catch (error) {
            console.error('Error al redirigir al grupo:', error);
            addMessage({
                text: "Lo siento, hubo un error al intentar unirte al grupo. Por favor, intenta de nuevo.",
                isUser: false
            });
        }
    }

    // Event Listeners
    whatsappButton.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Botón de WhatsApp clickeado');
        showChat();
    });

    closeChat.addEventListener('click', function(e) {
        e.preventDefault();
        hideChat();
    });

    // Enviar mensaje
    sendMessage.addEventListener('click', function(e) {
        e.preventDefault();
        redirectToWhatsAppGroup();
    });

    // Enviar mensaje con Enter
    messageInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            sendMessage.click();
        }
    });

    // Cerrar chat al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (!chatBox.contains(e.target) && !whatsappButton.contains(e.target) && chatBox.classList.contains('active')) {
            hideChat();
        }
    });
});