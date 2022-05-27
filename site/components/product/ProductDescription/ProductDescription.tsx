import React, { FC } from 'react'
import { Collapse, Rating } from '@components/ui'
import { CallOut, Item, ProductMeta, ProductReview } from '@commerce/types/product'
import cn from 'clsx'
import s from './ProductDescription.module.css'
import {
  Plant,
  ClinicallyApproved,
  GmpCertified,
  MadeInUSA,
  NonGMO,
  ShortCut
} from '@components/icons'

interface ProductDescriptionProps {
  meta?: ProductMeta
  reviews?: ProductReview[]
}

const iconMap = {
  plant: Plant,
  clinicallyApproved: ClinicallyApproved,
  gmpCertified: GmpCertified,
  nonGMO: NonGMO,
  madeInUSA: MadeInUSA,
  shortcut: ShortCut
}

const ProductDescription: FC<ProductDescriptionProps> = ({meta, reviews }) => {
  const renderCallOut = (callout: CallOut, index: number) => {
    let Component = iconMap[callout?.icon]

    return (
      <li key={callout.title}
          className={`mb-5 ${index % 2 === 0 ? 'sm:pr-6' : 'sm:pl-6'} flex`}
      >
        <div className="flex-initial pr-4 border-r-2">
          { Component ? (<Component />) :null}
        </div>
        <div className="pl-3 col-span-4">
          <h5 className="text-lg font-bold">{callout.title}</h5>
          <p>{callout.description}</p>
        </div>
      </li>
    )
  }

  return (
    <section>
      {meta && (
        <>
          <Collapse title="Under The Hood">
            <ul className="grid grid-flow-row-dense sm:grid-cols-2">
              {meta.allIngredients.map((ingredient: Item, index: number) => (
                <li key={ingredient.title}
                    className={`mb-5 ${index % 2 === 0 ? 'sm:pr-6' : 'sm:pl-6'}`}
                >
                  <h5 className="pb-2 mb-3 text-lg font-bold border-b">
                    {ingredient.title}
                  </h5>
                  <p>{ingredient.description}</p>
                </li>
              ))}
            </ul>
          </Collapse>

          <Collapse title="Only The Best">
            <ul className="grid grid-flow-row-dense sm:grid-cols-2">
              {meta.callouts.map((callout, index) => renderCallOut(callout, index))}
            </ul>
          </Collapse>

          <Collapse title="Supplement Facts">
            <dl>
              {meta.servings.map((fact: any) => (
                <li key={fact.title} className="flex flex-row justify-between my-1">
                  <dt className="font-bold">{fact.title}</dt>
                  <dd>{fact.description}</dd>
                </li>
              ))}
              <hr className="my-3" />
              {meta.amounts.map((fact: any) => (
                <li key={fact.title} className="flex flex-row justify-between my-1">
                  <dt className="font-bold">{fact.title}</dt>
                  <dd className="font-bold">{fact.description}</dd>
                </li>
              ))}

              <hr className="my-3"/>
              {meta.nutritionalInfo.map((fact: any) => (
                <li key={fact.title} className="flex flex-row justify-between my-1">
                  <dt className="font-bold">{fact.title}</dt>
                  <dd>{fact.dv}%</dd>
                </li>
              ))}
              <hr className="my-3" />
              {meta.extraNutritionalInfo.map((fact: any) => (
                <li key={fact.title} className="flex flex-row justify-between my-1">
                  <dt className="font-bold">{fact.title}</dt>
                  <dd className="font-bold">{fact.description}</dd>
                </li>
              ))}
            </dl>
          </Collapse>
        </>
      )}

      {reviews && (
        <Collapse title="Product Reviews">
          <ul className="-mx-4 px divide-y-8 divide-white">
            {reviews.map((review: ProductReview) => (
              <li
                key={review.id}
                className="items-center p-4 grid grid-cols-9"
              >
                    <span className="text-4xl font-bold text-accent-1 place-self-center">
                      {review.author
                        .split(' ')
                        .map((s: string) => s[0])
                        .slice(0, 2)
                        .join('')}
                    </span>
                <div className="pl-3 col-span-8">
                  <Rating
                    className="text-sm mb-2"
                    value={review.rating}
                    starSize={20}
                  />
                  <h5 className="font-bold uppercase">{review.title}</h5>
                  <p className="text-sm mb-2">{review.content}</p>
                  <h6 className="text-sm font-bold">{review.author}</h6>
                  <span className="text-sm text-primary-light">
                        {review.city}, {review.state}
                      </span>
                </div>
              </li>
            ))}
          </ul>
        </Collapse>
      )}
    </section>
  )
}

export default ProductDescription
