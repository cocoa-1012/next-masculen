export type ProductImage = {
  url: string
  alt?: string
}

export type ProductPrice = {
  value: number
  currencyCode?: 'USD' | 'EUR' | 'ARS' | string
  retailPrice?: number
  salePrice?: number
  listPrice?: number
  extendedSalePrice?: number
  extendedListPrice?: number
}

export type ProductOption = {
  __typename?: 'MultipleChoiceOption'
  id: string
  displayName: string
  values: ProductOptionValues[]
}

export type ProductOptionValues = {
  label: string
  hexColors?: string[]
}

export type ProductVariant = {
  id: string | number
  options: ProductOption[]
  availableForSale?: boolean
}

export type Product = {
  id: string
  name: string
  meta?: ProductMeta
  description: string
  descriptionHtml?: string
  sku?: string
  slug?: string
  path?: string
  images: ProductImage[]
  variants: ProductVariant[]
  price: ProductPrice
  options: ProductOption[]
  reviews?: ProductReview[]
}

export type ProductMeta = {
  kind: string
  quantity: number
  primaryIngredients: string[]
  allIngredients: Item[]
  callouts: CallOut[]
  servings: Item[]
  amounts: Item[]
  nutritionalInfo: string[]
  extraNutritionalInfo: Item[]
  benefitsTitle: string
  benefits: string[]
}

export type Item = {
  title: string
  description?: string
}

export interface CallOut extends Item {
  icon?: string
}

export type ProductReview = {
  id: string
  author: string
  rating: number
  title: string
  content: string
  city: string
  state: string
}

export type SearchProductsBody = {
  search?: string
  categoryId?: string | number
  brandId?: string | number
  sort?: string
  locale?: string
}

export type ProductTypes = {
  product: Product
  searchBody: SearchProductsBody
}

export type SearchProductsHook<T extends ProductTypes = ProductTypes> = {
  data: {
    products: T['product'][]
    found: boolean
  }
  body: T['searchBody']
  input: T['searchBody']
  fetcherInput: T['searchBody']
}

export type ProductsSchema<T extends ProductTypes = ProductTypes> = {
  endpoint: {
    options: {}
    handlers: {
      getProducts: SearchProductsHook<T>
    }
  }
}

export type GetAllProductPathsOperation<T extends ProductTypes = ProductTypes> =
  {
    data: { products: Pick<T['product'], 'path'>[] }
    variables: { first?: number }
  }

export type GetAllProductsOperation<T extends ProductTypes = ProductTypes> = {
  data: { products: T['product'][] }
  variables: {
    relevance?: 'featured' | 'best_selling' | 'newest'
    ids?: string[]
    first?: number
  }
}

export type GetProductOperation<T extends ProductTypes = ProductTypes> = {
  data: { product?: T['product'] }
  variables: { path: string; slug?: never } | { path?: never; slug: string }
}
