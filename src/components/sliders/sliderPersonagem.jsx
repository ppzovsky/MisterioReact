import { useState } from 'react';
import { motion } from 'framer-motion';
import './fichario.css';

function Fichario() {
  const [paginaAtiva, setPaginaAtiva] = useState(null);

  const paginas = [
    { nome: 'Página 1', conteudo: 'Conteúdo da página 1' },
    { nome: 'Página 2', conteudo: 'Conteúdo da página 2' },
    { nome: 'Página 3', conteudo: 'Conteúdo da página 3' },
    { nome: 'Página 4', conteudo: 'Conteúdo da página 4' },
  ];

  const abrirPagina = (index) => {
    setPaginaAtiva(index);
  };

  return (
    <div className="fichario">
      <div className="abas">
        {paginas.map((pagina, index) => (
          <button key={index} onClick={() => abrirPagina(index)}>
            {pagina.nome}
          </button>
        ))}
      </div>
      <div className="conteudo">
        {paginas.map((pagina, index) => (
          <motion.div
            key={index}
            className="pagina"
            initial={{ y: 0, scale: 0.8, opacity: 0 }}
            animate={index === paginaAtiva ? { y: -100 * index, scale: 1, opacity: 1 } : { y: 0, scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 15 }}
          >
            <h2>{pagina.nome}</h2>
            <p>{pagina.conteudo}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Fichario
