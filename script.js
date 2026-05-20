document.addEventListener('DOMContentLoaded', () => {
    const botoesReserva = document.querySelectorAll('.botao-card');

    botoesReserva.forEach(botao => {
        botao.addEventListener('click', (evento) => {
            const cardPai = evento.target.closest('.card-aula');
            const nomeAula = cardPai.querySelector('.bloco-info h3').textContent;
            const horarioAula = cardPai.querySelector('.bloco-tempo .hora').textContent;

            const mensagem = `🎉 Vaga Reservada com Sucesso!\n\nAula: ${nomeAula}\nHorário: ${horarioAula}\n\nPrepara a tua toalha e garrafa de água. Vemo-nos no treino! 💪`;
            
            alert(mensagem);
        });
    });
});