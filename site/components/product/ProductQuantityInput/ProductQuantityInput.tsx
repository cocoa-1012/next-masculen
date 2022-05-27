import { FC } from 'react'
import cn from 'clsx'
import s from './ProductQuantityInput.module.css'
import { ChevronLeft, ChevronRight } from '@components/icons'

interface ProductQuantityInputProps {
  className?: string
  quantity?: number
}

const ProductQuantityInput: FC<ProductQuantityInputProps> = ({
  className = '',
  quantity = 1,
}) => {
  return (
    <div className={cn(s.inputWrapper, 'border')}>
      <ChevronLeft className={cn(s.productQuantityInputDecrement)} />
      <input
        className={cn(s.productQuantityInput, 'text-center font-bold')}
        type="number"
        value="1"
      />
      <ChevronRight className={cn(s.productQuantityInputIncrement)} />
    </div>
  )
}

export default ProductQuantityInput
