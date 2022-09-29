import Link from 'next/link'
import Button from './button'

const Intro = () => {
    return (
        <section className="flex-col items-center text-center md:justify-betweenmb-16 md:mb-8">
            <h1 className="text-6xl text-main font-bold text-center tracking-tighter leading-tight md:pr-8">
                tweetgrabber.
            </h1>
            <p className="text text-gray-700 text-center tracking-tighter leading-tight mt-4">
                coloque a id do tweet e faça o download do seu vídeo, sem precisar marcar bot 🤠👍
            </p>
        </section>
    )
}

export default Intro
