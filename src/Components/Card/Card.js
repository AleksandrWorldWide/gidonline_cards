import star_on from '../../assets/rating_on.png'
import star_off from '../../assets/rating_off.png'

const Card = (props) => {
	const arr = new Array(props.star).fill(0)
	const arr_ = new Array(10-props.star).fill(0)
	return(
	<div className="card">
		<div className="card__body">
			<div className="card__foto ibg">
				<img src={require(`../../assets/${props.foto}.jpg`)} alt={props.foto_alt} />
			</div>
			<div className="card__title">{props.title}</div>
			<div className="card__close" onClick={props.handleDelete}></div>
		</div>
		<div className="card__input">
				<input type="text" onChange={props.handleInputCard}/>
			</div>
		<div className="card__footer footer-card">
			<div className="footer-card__stars">
				{
					arr.map(() => {
						return (
							<img src={star_on} alt="star" />
						)
					})
				}
				{
					arr_.map(() => {
						return (
							<img src={star_off} alt="star" />
						)
					})
				}
			</div>
			<div className="footer-card__year">{props.year}</div>
		</div>
		{props.children}
	</div>
)
			}

export default Card