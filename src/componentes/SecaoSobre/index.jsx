import Image from "next/image";
import estilo from "./SecaoSobre.module.css";
import Atendimento from "../../../public/atendimento.png";
import Loja from "../../../public/loja.png";

export default function SecaoSobre () {
    return (
        <main className={estilo.container_principal} id="sobre">
            <section>
                <div className={estilo.texto_superior}>
                    <h3>QUEM SOMOS NÓS?</h3>
                    <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais<br/>baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>
                </div>

                <div className={estilo.container_caixas}>
                    <div className={estilo.caixa}>
                        <Image src={Loja} alt="Atendimento" className={estilo.img} />
                    </div>

                    <div className={estilo.caixa_texto}>
                        <h4>NOSSAS FILIAIS</h4> 
                        <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                    </div>

                    <div className={estilo.caixa_texto}>
                        <h4>ATENDIMENTO FLEXÍVEL</h4> 
                        <p>Nossa equipe é treinada para te atender</p>
                    </div>

                    <div className={estilo.caixa}>
                        <Image src={Atendimento} alt="Loja" className={estilo.img} />
                    </div>
                </div>

            </section>
        </main>
    )
}