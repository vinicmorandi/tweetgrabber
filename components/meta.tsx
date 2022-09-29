import Head from 'next/head'
import { CMS_NAME, HOME_OG_IMAGE_URL } from '../lib/constants'

const Meta = () => {
    return (
        <Head>
            <link rel="shortcut icon" href="https://abs.twimg.com/favicons/twitter.2.ico" />
            <meta name="msapplication-TileColor" content="#000000" />
            <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
            <meta name="theme-color" content="#000" />
            <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
            <meta
                name="description"
                content={`website para baixar vídeos do twitter gratuitamente - feito por @vinicmorandi`}
            />
        </Head>
    )
}

export default Meta
