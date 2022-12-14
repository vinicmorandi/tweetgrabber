import cn from 'classnames'
import Link from 'next/link'

type Props = {
    title: string
    src: string
    slug?: string
    height?: number | string
    width?: number | string
}

const CoverImage = ({ title, src, slug, height = 'auto', width = '100%' }: Props) => {
    const image = (
        <img
            src={src}
            alt={`Cover Image for ${title}`}
            className={cn('shadow-sm', {
                'hover:shadow-lg transition-shadow duration-200': slug,
            })}
            style={{
                height: height,
                width: width,
            }}
        />
    )
    return (
        <div className="sm:mx-0">
            {slug ? (
                <Link as={`/posts/${slug}`} href="/posts/[slug]">
                    <a aria-label={title}>{image}</a>
                </Link>
            ) : (
                image
            )}
        </div>
    )
}

export default CoverImage
