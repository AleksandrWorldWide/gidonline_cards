import React, {Component} from 'react';
import './App.scss';
import Card from '../Card/Card';
import Footer from '../Footer/Footer';

class App extends Component {

	state = {
		pageTitle: 'gidonline',
		films: [
			{
				foto: 'kingsman',
				foto_alt: 'kingsman',
				title: 'Кингсмен: Начало',
				star: 7,
				year: '2021'
			},
			{
				foto: 'robot',
				foto_alt: 'robot',
				title: 'Робот Ари',
				star: 7,
				year: '2020'
			},
			{
				foto: 'bigbag',
				foto_alt: 'bigbag',
				title: 'Большой баг',
				star: 6,
				year: '2022'
			},
			{
				foto: 'sizif',
				foto_alt: 'sizif',
				title: 'Сериал: Миф о Сизифе',
				star: 5,
				year: '2021'
			},
			{
				foto: 'versal',
				foto_alt: 'versal',
				title: 'Сериал: Версаль',
				star: 9,
				year: '2015'
			},
			{
				foto: 'kimi',
				foto_alt: 'kimi',
				title: 'Кими',
				star: 6,
				year: '2022'
			}
		],
		showCards: true
	}

	handleClick = (new_title) => {
		this.setState({
			pageTitle: new_title
		})
	}

	handleShow = () => {
		this.setState({
			showCards: !this.state.showCards
		})
	}

	handleInput = (event) => {
		this.setState({
			pageTitle: event.target.value
		})
	}

	handleDelete = (i) => {
		const arr = [...this.state.films]
		arr.splice(i,1)
		this.setState({films:arr})
	}

	handleInputCard = (name, i) => {
		const film = this.state.films[i]
		film.star = +name
		const films = [...this.state.films]
		films[i] = film
		this.setState({films})
	}

	render() {
		return (
			<div className="App">
				<div className="wrapper">
					{this.state.showCards ?
					this.state.films.map((film, i) => {
						return (
							<Card
								key={i}
								foto={this.state.films[i].foto}
								foto_alt={this.state.films[i].foto_alt}
								title={this.state.films[i].title}
								star={this.state.films[i].star}
								year={this.state.films[i].year}
								handleDelete={this.handleDelete.bind(this, i)}
								handleInputCard={event => this.handleInputCard(event.target.value, i)}
							/>
						)
						})
						: null
					}
					<Footer
						title={this.state.pageTitle}
						handleClick={this.handleClick.bind(this, 'ivi')}
						handleShow={this.handleShow}
						handleInput={this.handleInput}
					/>
				</div>
			</div>
		)
	}
}

export default App;
