import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../interfaces/post'
import Button from '../components/button'
import { useState } from 'react'
import cn from "classnames"

type Props = {
    allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
    const [id, setId] = useState("")
    const [erro, setErro] = useState("")
    const [animacaoController, setAnimacaoController] = useState(true)

    const alteraId = (valor: string) => {
        setId(valor)
    }

    function downloadFile(url: string) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'blob';
        xhr.onload = function () {
            var urlCreator = window.URL || window.webkitURL;
            var imageUrl = urlCreator.createObjectURL(this.response);
            var tag = document.createElement('a');
            tag.href = imageUrl;
            tag.target = '_blank';
            tag.download = 'video.mp4';
            document.body.appendChild(tag);
            tag.click();
            document.body.removeChild(tag);
        };
        xhr.onerror = err => {
            addErro("ocorreu um erro ao baixar o arquivo 😿")
        };
        xhr.send();
    }

    const envia = () => {
        if (!erro) {
            if (/^[0-9]+$/.test(id)) {
                fetch(`https://tweetstes.herokuapp.com/${id}`)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data?.includes?.media[0]?.variants)
                        if (data?.includes?.media[0]?.variants) {
                            let arquivo = ""
                            data?.includes?.media[0]?.variants.forEach(variant => {
                                if (variant.content_type === "video/mp4") {
                                    arquivo = variant.url
                                }
                            });
                            if (arquivo !== "") {
                                downloadFile(arquivo)
                            } else {
                                addErro("o tweet não tem arquivo mp4 😡")
                            }
                        } else {
                            addErro("o tweet não tem mídia 😡")
                        }
                    })
                    .catch(error => addErro("ocorreu um erro ao pegar o tweet 😿"))
            } else if (!id) {
                addErro("tem que escrever uma id, porcapipa! 😡")
            } else {
                addErro("só números são permitidos! 😡")
            }
        }
    }

    const addErro = (texto: string) => {
        setErro(texto)
        setTimeout(() => { setAnimacaoController(false) }, 1200)
        setTimeout(() => { setErro("") }, 1500)
        setTimeout(() => { setAnimacaoController(true) }, 1500)
    }

    return (
        <>
            <Layout>
                <Head>

                    <title>tweetgrabber.</title>
                </Head>
                <Container>
                    <Intro />
                    <section className='w-full flex justify-between'>
                        <input onChange={(e) => alteraId(e.target.value)} className="appearance-none w-10/12 border pb-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="(ex: 1574587509102718981)" />
                        <Button texto='buscar' clickFunction={envia} />
                    </section>
                    <div className={cn("text-xs mt-1 h-2 text-red-500 transition duration-300", {
                        'opacity-0': !animacaoController,
                        'opacity-100': animacaoController,
                    })}>{erro} </div>
                </Container>
            </Layout>
        </>
    )
}

export const getStaticProps = async () => {
    const allPosts = getAllPosts([
        'title',
        'date',
        'slug',
        'author',
        'coverImage',
        'excerpt',
    ])

    return {
        props: { allPosts },
    }
}
