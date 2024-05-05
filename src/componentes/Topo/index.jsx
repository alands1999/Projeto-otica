import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/logo.png";
import estilos from "./Topo.module.css";

export default function Topo () {
    return (

        <main className={estilos.global}>
        <header className={estilos.topo}> 

            <Image src={Logo} className={estilos.img_logo} alt="Logo"/>
                <nav className={estilos.navegacao}>
                    <Link className={estilos.link} href="#produtos">Produtos</Link>
                    <Link className={estilos.link} href="#sobre">Sobre</Link>
                    <Link className={estilos.link} href="#contato">Contato</Link>
                </nav>

        </header>
        </main>
    )
}