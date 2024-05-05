import estilo from "./SecaoProdutos.module.css";
import Image from "next/image";
import Img01 from "../../../public/oculos01.png";
import Img02 from "../../../public/oculos02.png";
import Img03 from "../../../public/oculos03.png";
import Img04 from "../../../public/oculos04.png";



export default function SecaoProdutos () {
    return (
        <main className={estilo.container_principal} id="produtos">
            <section>

                <div className={estilo.textos_Superior}>
                    <h3>Nossos produtos</h3>
                    <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
                    <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
                </div>

                <div className={estilo.container_produtos}>

                    <div className={estilo.produto}>
                        <h4>Óculos de grau</h4>
                        <Image src={Img01} alt="óculos de grau" className={estilo.imagem}/>
                        <p>R$ 500,00</p>
                    </div>

                    <div className={estilo.produto}>
                        <h4>Óculos transition</h4>
                        <Image src={Img02} alt="óculos transition" className={estilo.imagem} />
                        <p>R$ 750,00</p>
                    </div>

                    <div className={estilo.produto}>
                        <h4>Óculos de sol</h4>
                        <Image src={Img03} alt="óculos de sol" className={estilo.imagem} />
                        <p>R$ 700,00</p>
                    </div>

                    <div className={estilo.produto}>
                        <h4>Óculos infantil</h4>
                        <Image src={Img04} alt="óculos infantil" className={estilo.imagem} />
                        <p>R$ 500,00</p>
                    </div>

                </div>

                <div className={estilo.textos_Inferior}>
                        <h3>Todos os nossos produtos incluem: </h3>

                        <ul>
                            <div className={estilo.lista}><li>Garantia de 1 ano</li></div>
                            <div className={estilo.lista}><li>Manutenção preventiva</li></div>
                            <div className={estilo.lista}> <li>Descontos especiais na compra da segunda unidade</li></div>
                            <div className={estilo.lista}><li>Flexibilidade de pagamento</li></div>
                        </ul>
                </div>

            </section>
        </main>


    )
}