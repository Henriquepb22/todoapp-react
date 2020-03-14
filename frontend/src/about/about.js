import React from "react";

import PageHeader from "../template/pageHeader";

const About = () => (
    <>
        <PageHeader name="Sobre" small="o App"></PageHeader>

        <h2>To-do App feito com React e Redux</h2>
        <p>Comandos do teclado ao digitar no campo:</p>
        <ul>
            <li>
                <p>
                    Adicionar: <strong>Enter</strong>
                </p>
            </li>
            <li>
                <p>
                    Buscar: <strong>Shift + Enter</strong>
                </p>
            </li>
            <li>
                <p>
                    Limpar/Resetar busca: <strong>Esc</strong>
                </p>
            </li>
        </ul>
        <p>
            Feito por{" "}
            <a href="https://github.com/henriquepb22" target="_blank">
                Henrique Pereira
            </a>
        </p>
    </>
);

export default About;
