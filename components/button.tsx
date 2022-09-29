import cn from "classnames"

type Props = {
    texto: string
    link?: string
    classes?: string
    clickFunction?: Function
    disabled?: boolean
}

const Button = ({ texto, link, classes, clickFunction, disabled }: Props) => {
    if (link) {
        return (
            <>
                <a
                    href={link}
                    className={cn(`bg-main  border border-main text-white font-bold pt-1 pb-2 px-6 duration-200 transition-colors ${classes}`, {
                        'hover:bg-white hover:text-main': !disabled,
                        'opacity-75': disabled,
                    })}
                >
                    {texto}
                </a>
            </>
        )
    } else {
        return (
            <button
                className={cn(`bg-main border border-main text-white font-bold pt-1 pb-2 px-6 duration-200 transition-colors ${classes}`, {
                    'hover:bg-white hover:text-main': !disabled,
                    'opacity-75 cursor-not-allowed pointer-events-none': disabled,
                })}
                onClick={() => { if (clickFunction && !disabled) clickFunction() }}
            >
                {texto}
            </button>
        )
    }
}

export default Button