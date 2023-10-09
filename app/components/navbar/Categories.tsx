import { TbBeach, TbMountain, TbPool } from 'react-icons/tb'
import { GiBarn, GiBoatFishing, GiCactus, GiCastle, GiCaveEntrance, GiForestCamp, GiIsland, GiWindmill } from 'react-icons/gi'
import { FaSkiing } from 'react-icons/fa'
import { MdOutlineVilla } from 'react-icons/md'
import { BsSnow } from 'react-icons/bs'
import { IoDiamond } from 'react-icons/io5'

import Container from "../Container"
import CategoryBox from "../CategoryBox"
import { usePathname, useSearchParams } from 'next/navigation'

export const categories = [
  {
    label: 'Beach',
    icon: TbBeach,
    description: 'Essa propriedade está perto da praia!'
  },
  {
    label: 'Windmills',
    icon: GiWindmill,
    description: 'Essa propriedade tem moinhos de vento!'
  },
  {
    label: 'Modern',
    icon: MdOutlineVilla,
    description: 'Essa propriedade é moderna!'
  },
  {
    label: 'Countryside',
    icon: TbMountain,
    description: 'Essa propriedade é no interior!'
  },
  {
    label: 'Pools',
    icon: TbPool,
    description: 'Essa propriedade tem piscina!'
  },
  {
    label: 'Islands',
    icon: GiIsland,
    description: 'Essa propriedade está em uma ilha!'
  },
  {
    label: 'Lake',
    icon: GiBoatFishing,
    description: 'Essa propriedade fica perto de um lago'
  },
  {
    label: 'Skiing',
    icon: FaSkiing,
    description: 'Essa propriedade tem atividades para esquiar'
  },
  {
    label: 'Castle',
    icon: GiCastle,
    description: 'Essa propriedade está em um castelo'
  },
  {
    label: 'Camping',
    icon: GiForestCamp,
    description: 'Essa propriedade tem atividades para acampar'
  },
  {
    label: 'Arctic',
    icon: BsSnow,
    description: 'Essa propriedade é muito gelada!'
  },
  {
    label: 'Cave',
    icon: GiCaveEntrance,
    description: 'Essa propriedade é em uma caverna!'
  },
  {
    label: 'Desert',
    icon: GiCactus,
    description: 'Essa propriedade está no deserto!'
  },
  {
    label: 'Barn',
    icon: GiBarn,
    description: 'Essa propriedade tem um celeiro!'
  },
  {
    label: 'Lux',
    icon: IoDiamond,
    description: 'Essa propriedade é luxuosa!'
  },
]

const Categories = () => {
  const params = useSearchParams()
  const category = params?.get('category')
  const pathname = usePathname()

  const isMainPage = pathname === '/'

  if(!isMainPage) {
    return null
  }

  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox key={item.label} label={item.label} selected={category === item.label} icon={item.icon}/>
        ))}
      </div>
    </Container>
  )
}

export default Categories