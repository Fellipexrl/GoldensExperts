
function sendToWhatsApp() {
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let mensagem = document.getElementById('mensagem').value;

    // Verifica se os campos estão preenchidos
    if (nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos.");
        return false;  // Impede o envio do formulário se os campos não estiverem preenchidos
    }

    // Cria a mensagem a ser enviada para o WhatsApp
    let message = `Olá, meu nome é ${nome}, meu e-mail é ${email} e gostaria de saber mais sobre: ${mensagem}`;

    // Cria o link do WhatsApp com a mensagem
    let whatsappLink = `https://wa.me/5566999319376?text=${encodeURIComponent(message)}`;

    // Redireciona o usuário para o WhatsApp
    window.open(whatsappLink, '_blank');
    
    return false; // Impede o envio do formulário convencional
}

