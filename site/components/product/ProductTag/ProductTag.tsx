import { FC } from 'react'
import cn from 'clsx'

import s from './ProductTag.module.css'

interface ProductTagProps {
  className?: string
  name: string
  kind: string
  price: string
  fontSize?: number
}

const ProductTag: FC<ProductTagProps> = ({
  name,
  kind,
  price,
  className = '',
  fontSize = 32,
}) => {
  return (
    <div className={cn(s.root, className)}>
      <h3 className={s.name}>
        <span
          className={cn({ [s.fontsizing]: fontSize < 32 })}
          style={{
            fontSize: `${fontSize}px`,
            lineHeight: `${fontSize}px`,
            textTransform: 'uppercase',
            fontStyle: 'italic',
            fontWeight: 'bold'
          }}
        >
          {name}
        </span>
        <span className={s.category}>{kind}</span>
      </h3>
      {/*<div className={s.price}>{price}</div>*/}
    </div>
  )
}

export default ProductTag
