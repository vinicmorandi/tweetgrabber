import Alert from './alert'
import Footer from './footer'
import Meta from './meta'

type Props = {
    preview?: boolean
    children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
    return (
        <>
            <Meta />
            <div className="flex h-screen justify-center items-center">
                <main className='shadow-md rounded p-10'>{children}</main>
            </div>
        </>
    )
}

export default Layout
