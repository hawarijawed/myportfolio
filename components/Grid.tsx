import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '../data/index'
const Grid = () => {
  return (
    <section id='about'>
      <BentoGrid className="">
        {gridItems.map((item, i) =>(
          <BentoGridItem 
          id={item.id}
          key={item.id}
          title={item.title}
          description={item.description}
          className={item.className}
          />
        ))
        }
      </BentoGrid>
    </section>
  )
}

export default Grid
