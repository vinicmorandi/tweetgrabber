import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import Button from './button'

const Footer = () => {
    return (
        <footer className="bg-neutral-50 border-t border-neutral-200">
            <Container>
                <div className="py-28 flex flex-col lg:flex-row items-center">
                    <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
                        Statically Generated with Next.js.
                    </h3>
                    <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
                        <Button texto='Read Documentation' link='https://nextjs.org/docs/basic-features/pages'/>
                        <a
                            href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
                            className="mx-3 font-bold hover:underline"
                        >
                            View on GitHub
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
