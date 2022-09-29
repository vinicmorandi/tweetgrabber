import Container from './container'
import cn from 'classnames'
import { EXAMPLE_PATH } from '../lib/constants'

type Props = {
    preview?: boolean
}

const Alert = ({ preview }: Props) => {
    return (
        <div
            className={cn('border-b', {
                'bg-neutral-800 border-neutral-800 text-white': preview,
                'bg-black': !preview,
            })}
        >
            <Container>
                <div className="py-2 text-center text-sm">
                    <a
                        href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
                        className="text-white font-bold hover:underline"
                    >
                        VEM CONFERIR A LISTA DE PRODUTOS QUE SEPARAMOS COM ATÉ 20% OFF, PRA VOCÊ GARANTIR O PRESENTE DO SEU PAI.
                    </a>
                </div>
            </Container>
        </div>
    )
}

export default Alert
