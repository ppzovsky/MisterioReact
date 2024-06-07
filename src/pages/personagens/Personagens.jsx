import '../personagens/personagens.css'
import '../../functions/seletorpersonagens.js'

function Personagens() {
  return (
    <>
    <div>
    <main className="selecao-de-personagens">
            <section className="personagens">
              <h1 className='titulo'> Selecione um personagem</h1>
              <ul className='lista-de-personagens'>

                  <li className='personagem selecionado' id='bruxa' data-name='Morgana Shadowveil' 
                  data-description= 'Morgana é uma bruxa sábia e reclusa que vive em uma cabana escondida na floresta encantada. '>
                      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbqFtGj7LA54HMjpXlKSkMxXRIDSlhmKgRmg&s' alt='Personagem Ciclope'/> 
                  </li>

                  <li className='personagem' id='vampiro' data-name='Vladislav Darkthorn' data-description= ' Vladislav é um vampiro aristocrata da Transilvânia, com uma personalidade intimista e arrogante.'>
                      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbqFtGj7LA54HMjpXlKSkMxXRIDSlhmKgRmg&s' alt='Personagem Jean Grey'/> 
                  </li>

                  <li className='personagem' id='robo' data-name='XR-47' data-description= 'XR-47 é um robô mercenário especializado no comércio de itens ilegais, desde armas até artefatos raros'>
                      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbqFtGj7LA54HMjpXlKSkMxXRIDSlhmKgRmg&s' alt='Personagem Lince negra'/> 
                  </li>

                  <li className='personagem' id='pirata' data-name='Bartholomew "Bart" Blackbeard' data-description= 'Bart é o típico pirata beberrão e engraçado, sempre com um copo de rum na mão e uma risada contagiante. '>
                      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbqFtGj7LA54HMjpXlKSkMxXRIDSlhmKgRmg&s' alt='Tempestade'/> 
                  </li>

                  <li className='personagem' id='demonio' data-name='Emberflame' data-description= 'Ela tem o poder de absoEmber é uma jovem demônio com cabelo de fogo e um espírito travesso, mas não é maligna.'>
                      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbqFtGj7LA54HMjpXlKSkMxXRIDSlhmKgRmg&s' alt='Vampira'/> 
                  </li>
              </ul>
            </section>
            <section className="personagem-selecionado">
                <img className="personagem-grande" src="./src/imagens/card-ciclope.png" alt="Personagem Selecionado"/>
                <div className="informacoes-personagem">
                    <h2 className="nome-personagem" id="nome-personagem">Bruxa</h2>
                    <p className="descricao-personagem" id="descricao-personagem">Ele tem pode de disparar rajadas ópticas, por um acidente que aconteceu com ele quando criança, mas não consegue controlá-los</p>
                </div>
            </section>
          </main>
      </div>
    </>
      )
    }
    
export default Personagens
