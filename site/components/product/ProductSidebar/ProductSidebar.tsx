import { FC, useEffect, useState } from 'react'
import cn from 'clsx'
import { useAddItem } from '@framework/cart'
import type { Product } from '@commerce/types/product'
import { Button, Text, useUI } from '@components/ui'
import ProductTag from '@components/product/ProductTag'
import { Capsules, Cart } from '@components/icons'
import usePrice from '@framework/product/use-price'
import { ChevronLeft, ChevronRight } from '@components/icons'
import ProductQuantityInput from '@components/product/ProductQuantityInput'

import {
  getProductVariant,
  selectDefaultOptionFromProduct,
  SelectedOptions,
} from '../helpers'

import s from './ProductSidebar.module.css'

interface ProductSidebarProps {
  product: Product
  className?: string
}

const DEFAULT_DISCOUNT = 30

const ProductSidebar: FC<ProductSidebarProps> = ({ product, className }) => {
  const { price } = usePrice({
    amount: product.price.value,
    baseAmount: product.price.retailPrice,
    currencyCode: product.price.currencyCode!,
  })
  const addItem = useAddItem()
  const { openSidebar } = useUI()
  const [loading, setLoading] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({})

  useEffect(() => {
    selectDefaultOptionFromProduct(product, setSelectedOptions)
  }, [product])

  const variant = getProductVariant(product, selectedOptions)
  const addToCart = async () => {
    setLoading(true)
    try {
      await addItem({
        productId: String(product.id),
        variantId: String(variant ? variant.id : product.variants[0]?.id),
      })
      openSidebar()
      setLoading(false)
    } catch (err) {
      setLoading(false)
    }
  }

  const calculateDiscount = (amount: number, discount = DEFAULT_DISCOUNT) =>
    ((amount * discount) / 100).toFixed(2)

  return (
    <div className={cn(className, 'divide-y')}>
      <ProductTag
        name={product.name}
        kind={product.meta?.kind}
        price={`${price} ${product.price?.currencyCode}`}
        fontSize={32}
      />

      <ul className="flex flex-wrap justify-left py-4 list-disc gap-y-4">
        {product.meta?.primaryIngredients.map((ingredient: string) => (
          <li key={ingredient} className="mx-5 uppercase">
            {ingredient}
          </li>
        ))}
      </ul>
      <Text
        className="w-full max-w-xl py-4 break-words"
        html={product.descriptionHtml || product.description}
      />
      <div className="py-4">
        <h3 className="mb-2 text-xl font-bold uppercase">
          {product.meta?.benefitsTitle}:
        </h3>
        <ul className="list-disc pl-3 grid grid-flow-row-dense sm:grid-cols-2">
          {product.meta?.benefits.map((benefit: string) => (
            <li key={benefit} className="mx-5">
              {benefit}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col py-4 align-center">
        <div className="flex flex-row mb-4">
          <div
            className={cn(
              s.productQuantity,
              'justify-center items-center border text-center mr-2 flex'
            )}
          >
            <Capsules />
            <span className="ml-2 font-bold">{product.meta?.quantity}</span>
          </div>
          <button
            className={cn(s.leftControl)}
            // onClick={onPrev}
            aria-label="Previous Product Image"
          ></button>
          <button
            className={cn(s.rightControl)}
            // onClick={onNext}
            aria-label="Next Product Image"
          ></button>
          <ProductQuantityInput />
          <span className="flex-grow"></span>
          <span className={cn(s.price, 'font-bold text-accent-1')}>
            ${product.price.value}
          </span>
        </div>
        <div className="flex items-center">
          <label className="flex items-center font-bold text-lg">
            <input
              type="checkbox"
              name="subscribe"
              className={cn(s.subscribe, 'mr-2')}
            />
            Subscribe &amp; Save
          </label>
          <span className="flex-grow"></span>
          <span className="font-bold text-green text-lg">
            -${calculateDiscount(product.price.value)}
          </span>
        </div>
        {process.env.COMMERCE_CART_ENABLED && (
          <div className="flex justify-center md:justify-end">
            <Button
              aria-label="Add to Bag"
              type="button"
              className={cn(s.button, 'mt-6 bg-accent-1 px-2 w-200')}
              onClick={addToCart}
              loading={loading}
              disabled={variant?.availableForSale === false}
            >
              {variant?.availableForSale === false ? (
                'Not Available'
              ) : (
                <div className="flex items-center">
                  <Cart />
                  <span className="ml-3">{'Add To Cart'}</span>
                </div>
              )}
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductSidebar
