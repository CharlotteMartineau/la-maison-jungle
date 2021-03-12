import CareScale from './CareScale'
import '../styles/PlantItem.css'

function handleClick(plantName) {
    alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`)
}

function PlantItem({ id, cover, name, water, light, isSpecialOffer }) {

  return (

    <li className='lmj-plant-item' onClick={() => handleClick(name)} key={ id }>
      <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
      { name }
      { /*isSpecialOffer && <div className="lmj-sales">Solde</div>*/ }
      <div>
        <CareScale careType='water' scaleValue={water} />
        <CareScale careType='light' scaleValue={light} />
      </div>
    </li>

  )

}

export default PlantItem
