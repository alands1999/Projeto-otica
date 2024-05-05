import estilos from "./SecaoContato.module.css";
import Image from "next/image";
import Local from "../../../public/local.png";
import Telefone from "../../../public/telefone.png"
import Email from "../../../public/email.png"
import Facebook from "../../../public/fb.png"
import Instagram from "../../../public/ig.png"
import Twitter from "../../../public/tt.png"

export default function SecaoContato () {
    return (
        <main className={estilos.container_principal} id="contato">
            <div className={estilos.container_textos}>
                <h3>Fale conosco</h3>
                <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
            </div>

        <div className={estilos.container_contato}>
            <div className={estilos.box}>
                <h3>Contato</h3>
                <div><Image src={Local} alt="Localização" className={estilos.img}/><span>Nova Iguaçu, RJ</span></div>
                <div><Image src={Telefone} alt="Telefone" className={estilos.img}/><span><a href="tel:2199999999">(21) 9999-9999</a></span></div>
                <div><Image src={Email} alt="Email" className={estilos.img}/><span><a href="mailto:contato@oticavida.com">contato@oticavida.com</a></span></div>
            </div>

            <div className={estilos.box}>
                <h3>Nossas Redes Sociais</h3>
                <div><Image src={Facebook} alt="Facebook" className={estilos.img}/><span>/OticaVida</span></div>
                <div><Image src={Instagram} alt="Instagram" className={estilos.img}/><span>@oticavidarj</span></div>
                <div><Image src={Twitter} alt="Twitter" className={estilos.img}/><span>@oticavidarj</span></div>
            </div>
        </div>

        </main>
    )
}