/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import React from 'react';

// Define a animação de fade-in
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Define estilos para os parágrafos com animação
const textStyle = css`
  animation: ${fadeIn} 2s ease-out;
`;

// Define estilos para o container
const containerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2.5rem; // Ajuste conforme necessário
  gap: 1.25rem; // Espaçamento entre os parágrafos
`;

export const TextInfo = () => {
  return (
    <div css={containerStyle}>
      <p css={textStyle} className="text-xl w-72">
        Procura um trabalhador? Se cadastre como cliente e faça parte do grupo de
        pessoas que buscam soluções rápidas para resolver seus problemas com um
        freelancer próximo de si! Cadastre-se aqui!
      </p>


    </div>
  );
};
