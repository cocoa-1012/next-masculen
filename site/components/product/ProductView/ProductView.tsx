import { FC } from 'react'
import cn from 'clsx'
import Image from 'next/image'
import s from './ProductView.module.css'
import type { Product } from '@commerce/types/product'
import { WishlistButton } from '@components/wishlist'
import { ProductSlider } from '@components/product'
import { Container } from '@components/ui'
import { SEO } from '@components/common'
import ProductSidebar from '../ProductSidebar'

import ProductDescription from '@components/product/ProductDescription'
interface ProductViewProps {
  product: Product
  relatedProducts: Product[]
}

const ProductView: FC<ProductViewProps> = ({ product, relatedProducts }) => {
  return (
    <>
      <Container className="w-full max-w-none px-6 pt-6" clean>
        <div className={cn(s.root, 'fit')}>
          <div className={cn(s.main, 'fit')}>
            <div className={s.sliderContainer}>
              <ProductSlider key={product.id}>
                {product.images.map((image, i) => (
                  <div key={image.url} className={s.imageContainer}>
                    <Image
                      className={s.img}
                      src={image.url!}
                      alt={image.alt || 'Product Image'}
                      width={381}
                      height={550}
                      priority={i === 0}
                      quality="85"
                    />
                  </div>
                ))}
              </ProductSlider>
            </div>
            {process.env.COMMERCE_WISHLIST_ENABLED && (
              <WishlistButton
                className={s.wishlistButton}
                productId={product.id}
                variant={product.variants[0]}
              />
            )}
          </div>
          <ProductSidebar
            key={product.id}
            product={product}
            className={s.sidebar}
          />
          <div className={cn(s.productDescription)}>
            <ProductDescription
              meta={product.meta}
              reviews={product.reviews}
            />
          </div>
        </div>
        {/*
        <hr className="mt-7 border-accent-2" />
        <section className="px-6 py-12 mb-10">
          <Text variant="sectionHeading">Related Products</Text>
          <div className={s.relatedProductsGrid}>
            {relatedProducts.map((p) => (
              <div
                key={p.path}
                className="border animated fadeIn bg-accent-0 border-accent-2"
              >
                <ProductCard
                  noNameTag
                  product={p}
                  key={p.path}
                  variant="simple"
                  className="animated fadeIn"
                  imgProps={{
                    width: 300,
                    height: 300,
                  }}
                />
              </div>
            ))}
          </div>
        </section>
      */}
      </Container>
      <SEO
        title={product.name}
        description={product.description}
        openGraph={{
          type: 'website',
          title: product.name,
          description: product.description,
          images: [
            {
              url: product.images[0]?.url!,
              width: '800',
              height: '600',
              alt: product.name,
            },
          ],
        }}
      />
    </>
  )
}

export default ProductView
