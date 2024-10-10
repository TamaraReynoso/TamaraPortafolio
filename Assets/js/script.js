function sendEmail(event) {
        event.preventDefault(); 
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        
        const subject = encodeURIComponent(`Mensaje de ${name}`);
        const body = encodeURIComponent(`Nombre: ${name}\nCorreo: ${email}\n\nMensaje:\n${message}`);
        const mailtoLink = `mailto:tu_correo@example.com?subject=${subject}&body=${body}`;
        
        
        window.location.href = mailtoLink;
    }
