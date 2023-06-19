'use client'

import Container from '../Container'
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb'
import {
  GiWindmill,
  GiIsland,
  GiBoatFishing,
  GiCastle,
  GiForestCamp,
  GiCaveEntrance,
  GiCactus,
  GiBarn,
} from 'react-icons/gi'
import { MdOutlineVilla } from 'react-icons/md'
import { FaSkiing } from 'react-icons/fa'
import { BsSnow } from 'react-icons/bs'
import { IoDiamond } from 'react-icons/io5'
import CategoryBox from '../CategoryBox'
import { usePathname, useSearchParams } from 'next/navigation'

export const categories = [
  {
    label: 'Beach',
    icon: TbBeach,
    description: 'wwwwwwwwwwwwwwwwwwww',
  },
  {
    label: 'Windmills',
    icon: GiWindmill,
    description: 'rrrrrrrrrrrrrrrrrrrr',
  },
  {
    label: 'Modern',
    icon: MdOutlineVilla,
    description: 'mmmmmmmmmmmmmmmmmmmmm',
  },
  {
    label: 'Countryside',
    icon: TbMountain,
    description: 'mmmmmmmmmmmmmmmmmmmmm',
  },
  {
    label: 'Pools',
    icon: TbPool,
    description: 'mmmmmmmmmmmmmmmmmmmmm',
  },
  {
    label: 'Island',
    icon: GiIsland,
    description: 'mmmmmmmmmmmmmmmmmmmmm',
  },
  {
    label: 'Lake',
    icon: GiBoatFishing,
    description: 'mmmmmmmmmmmmmmmmmmmmm',
  },
  {
    label: 'Skiing',
    icon: FaSkiing,
    description: 'mmmmmmmmmmmmmmmmmmmmm',
  },
  {
    label: 'Castles',
    icon: GiCastle,
    description: 'mmmmmmmmmmmmmmmmmmmmm',
  },
  {
    label: 'Camping',
    icon: GiForestCamp,
    description: 'mmmmmmmmmmmmmmmmmmmmm',
  },
  {
    label: 'Arctic',
    icon: BsSnow,
    description: 'mmmmmmmmmmmmmmmmmmmmm',
  },
  {
    label: 'Cave',
    icon: GiCaveEntrance,
    description: 'mmmmmmmmmmmmmmmmmmmmm',
  },
  {
    label: 'Desert',
    icon: GiCactus,
    description: 'mmmmmmmmmmmmmmmmmmmmm',
  },
  {
    label: 'Barns',
    icon: GiBarn,
    description: 'mmmmmmmmmmmmmmmmmmmmm',
  },
  {
    label: 'Lux',
    icon: IoDiamond,
    description: 'mmmmmmmmmmmmmmmmmmmmm',
  },
]

const Categories = () => {
  const params = useSearchParams()
  const category = params?.get('category')
  const pathname = usePathname()

  const isMainPage = pathname === '/'

  if (!isMainPage) {
    return null
  }
  return (
    <Container>
      <div className='pt-4 flex flex-row items-center justify-between overflow-x-auto'>
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            description={item.description}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  )
}

export default Categories
