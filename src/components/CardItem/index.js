// Write your code here.
import './index.css'

const TechnologyCard = props => {
  const {card} = props
  const {title, className, description, imgUrl, id} = card
  return (
    <li className={`common-card custom-card ${className}`}>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <img src={imgUrl} alt={title} />
    </li>
  )
}

export default TechnologyCard
