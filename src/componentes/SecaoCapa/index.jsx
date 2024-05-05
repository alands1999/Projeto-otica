import Capa from "../../../public/capa.png";
import estilos from "./SecaoCapa.module.css";

export default function SecaoCapa () {
    return (
        <main className={estilos.container}>
             
            <section className={estilos.secao_capa}>

                <div className={estilos.box_textos}>

                    <div className={estilos.textos}>
                        <div className={estilos.textos_edit}>
                            <p>Preços baixos em</p>
                            <h1>ÓCULOS DE<br/>GRAU E DE SOL</h1>
                            <p>Você só encontra aqui</p>
                        </div>
                    </div>

                    <div className={estilos.textos2}>
                    </div>


                </div>

                

            </section>

        </main>
    )
}