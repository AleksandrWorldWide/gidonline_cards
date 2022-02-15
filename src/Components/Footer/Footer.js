

const Footer = (props) => {
	return (
		<div className="footer">
			<div className="footer__title">{props.title}</div>
			<div className="footer__btn">
				<button onClick={props.handleClick}>Click</button>
			</div>
			<div className="footer__input">
				<input type="text" onChange={props.handleInput}/>
			</div>
			<div className="footer__show">
				<button onClick={props.handleShow}>Show</button>
			</div>
		</div>
	)
}

export default Footer