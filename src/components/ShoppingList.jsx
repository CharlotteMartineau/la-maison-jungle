import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import '../styles/ShoppingList.css'

function ShoppingList() {
    const categories = plantList.reduce((accumulator, currentValue) =>
      accumulator.includes(currentValue.category) ? accumulator : accumulator.concat(currentValue.category),
      []
    )

    return (
      <div>
        <ul>
          {categories.map((category) => (
            <li key={ category }>{ category }</li>
          ))}
        </ul>

        <ul className='lmj-plant-list'>
            {plantList.map((plant) => (
              <PlantItem
                id={plant.id}
                cover={plant.cover}
                name={plant.name}
                water={plant.water}
                light={plant.light}
                isSpecialOffer ={plant.isSpecialOffer}
              />
            ))}
        </ul>
      </div>
    )
}

export default ShoppingList
