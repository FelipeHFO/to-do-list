import { Inter, Roboto } from "@next/font/google";
import Link from "next/link";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight: ["400"], subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={inter.className}>To Do List</h1>
      <h2 className={inter.className}>Bem vindo!</h2>

      <p className={roboto.className}>
        Este projeto é um estudo do Framework NextJS na sua versão 13 (Beta)
        junto com a refatoração de um antigo projeto com meus novos
        conhecimentos.
      </p>
      <p>
        Lembrando que aqui não estou levando em conta qual seria a melhor
        tecnologia para uma aplicação igual a um To Do List, somente quero criar
        um novo projeto com as novas features do NextJS 13.
      </p>

      <a
        href="https://portfolio-felipehfo.vercel.app/pt-br"
        className={`${roboto.className} ${styles.button}`}
      >
        Conheça meu portfolio! 💻📃☕
      </a>

      <Link
        href={"/project"}
        className={`${roboto.className} ${styles.button}`}
      >
        Seguir para o Projeto ➡
      </Link>
    </main>
  );
}
