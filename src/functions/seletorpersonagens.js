import styles from '../pages/personagens/personagens.module.css';

export function seletor(){
    const personagens = document.querySelectorAll(`.${styles.personagem}`);

    personagens.forEach((personagem) => {
        personagem.addEventListener('mouseenter', () => {

            if(window.innerWidth < 450) {
                window.scrollTo({top: 0, behavisor: 'smooth'});
            }
            
            removerSelecaoDoPersonagem();

            personagem.classList.add('selecionado');

            alterarImagemPersonagemSelecionado(personagem);

            alterarNomePersonagemSelecionado(personagem);

            alterarDescricaoPersonagem(personagem);

        })
    })
    function alterarDescricaoPersonagem(personagem) {
        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');
    }

    function alterarNomePersonagemSelecionado(personagem) {
        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');
    }

    function alterarImagemPersonagemSelecionado(personagem) {
        const imagemPersonagemGrande = document.querySelector(`.${styles['personagem-grande']}`);

        const idPersonagem = personagem.attributes.id.value;
        imagemPersonagemGrande.src = `../src/assets/img/personas/card-${idPersonagem}.png`;
    }

    function removerSelecaoDoPersonagem() {
        const personagemSelecionado = document.querySelector(`.${styles.selecionado}`);
        personagemSelecionado.classList.remove(`.${styles.selecionado}`);
    }
}

export default seletor