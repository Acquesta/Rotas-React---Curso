import styles from './Banner.module.css'
import circulocolorido from 'assets/circulo_colorido.png'
import minhafoto from 'assets/minha_foto.png'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Ola Mundo
                </h1>
                <p className={styles.paragrafo}>
                Boas vindas ao meu espaço pessoal! Eu sou Antônio Evaldo, instrutor de Front-end da Alura. Aqui compartilho vários conhecimentos, espero que aprenda algo novo :)
                </p>
            </div>
            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido}
                    src={circulocolorido}
                    aria-hidden={true}
                />

                <img 
                    className={styles.minhaFoto}
                    src={minhafoto}
                    alt='Foto do antonio sorrindo' 
                />
            </div>
        </div>
    )
}