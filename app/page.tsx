import Image from "next/image";
import styles from "./page.module.css";

const atouts = [
  {
    src: "/illustrations/retrait.png",
    title: "Retrait en magasin",
    text: "Commandez en ligne, passez au comptoir avec votre code de retrait. Le store prépare, vous récupérez, sans attendre.",
  },
  {
    src: "/illustrations/paiement.png",
    title: "PrelakayPay",
    text: "Un wallet en gourdes, rechargé par MonCash, NatCash ou carte bancaire. Payer devient un geste, sans liquide.",
  },
  {
    src: "/illustrations/livraison.png",
    title: "Livraison",
    text: "Pas le temps de passer ? Un livreur partenaire apporte la commande, avec une preuve de remise.",
  },
  {
    src: "/illustrations/carte.png",
    title: "Les stores près de vous",
    text: "Chaque produit affiche son store et sa distance. La carte montre ce qui est disponible autour de vous.",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Image
          src="/logo/_simple/full-logo-lagon.svg"
          alt="Prélakay"
          width={160}
          height={40}
          priority
        />
        <nav className={styles.nav}>
          <a href="https://vendeur.prelakay.com">Vendre sur Prélakay</a>
          <a href="https://app.prelakay.com" className={styles.navCta}>
            Ouvrir l&rsquo;application
          </a>
        </nav>
      </header>

      <main>
        <section className={styles.hero}>
          <h1>Cherchez-vous encore votre produit&nbsp;?</h1>
          <p>
            Commandez en ligne auprès des commerces près de chez vous,
            retirez au comptoir ou faites-vous livrer. Votre argent reste
            protégé jusqu&rsquo;à ce que vous ayez votre article en main.
          </p>
          <div className={styles.heroCtas}>
            <a href="https://app.prelakay.com" className={styles.primary}>
              Ouvrir l&rsquo;application
            </a>
            <a href="https://vendeur.prelakay.com" className={styles.secondary}>
              Enregistrer sa boutique
            </a>
          </div>
        </section>

        <section className={styles.atouts} aria-label="Ce que Prélakay vous apporte">
          {atouts.map((atout) => (
            <article key={atout.title} className={styles.card}>
              <Image src={atout.src} alt="" width={72} height={72} />
              <h2>{atout.title}</h2>
              <p>{atout.text}</p>
            </article>
          ))}
        </section>
      </main>

      <footer className={styles.footer}>
        <Image
          src="/logo/_simple/full-logo-black.svg"
          alt="Prélakay"
          width={120}
          height={30}
        />
        <p>
          <a href="mailto:dev@prelakay.com">dev@prelakay.com</a>
          <span aria-hidden="true"> · </span>
          <a href="https://www.prelakay.com">www.prelakay.com</a>
        </p>
        <p className={styles.copyright}>
          © 2026 Prélakay LLC. Tous droits réservés.
        </p>
      </footer>
    </div>
  );
}
