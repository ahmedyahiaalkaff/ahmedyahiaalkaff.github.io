import Link from 'next/link'

interface MyLinkProps {
  href: string,
  onClick?: React.MouseEventHandler,
  name: string | React.JSX.Element,
  target?: string,
  invertedColors?: boolean,
}

const MyLink = ({href, onClick, name, target, invertedColors}: MyLinkProps) => {
  const hoverColors = {
    normal: 'hover:text-primary dark:hover:text-lightPrimary',
    inverted: 'hover:text-lightPrimary dark:hover:text-primary'
  }
  return (
    <Link href={href} onClick={onClick}
      className={`  ${invertedColors?hoverColors.inverted:hoverColors.normal}
                    hover:scale-150
                    active:scale-100
                    transition-transform ease-in-out
                    inline-block`}
      target={target}
    >
        {name}
    </Link>
  );
}

export default MyLink;