import { FC, memo } from 'react'
import rangeMap from '@lib/range-map'
import { Star } from '@components/icons'
import cn from 'clsx'

export interface RatingProps {
  value: number
  starSize?: number
}

const Quantity: FC<RatingProps & { className?: string }> = ({
  value = 5,
  starSize = 20,
  ...props
}) => (
  <div className={cn('flex flex-row text-accent-9', props.className)}>
    {rangeMap(5, (i) => (
      <span
        key={`star_${i}`}
        className={cn('inline-block', {
          'text-accent-5': i >= Math.floor(value),
          'ml-1': i > 0,
        })}
      >
        <Star width={starSize} />
      </span>
    ))}
  </div>
)

export default memo(Quantity)
