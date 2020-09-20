import React from 'react';
import ReactDOM from 'react-dom';
import User from './components/User';
import Container from './components/Container';
import Photo from './components/Photo';
import faker from 'faker';
// import styles from './styles.css'

class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {apiResponse:""};
	}

	callAPI(){
		fetch("http://localhost:9000/testAPI")
		.then(res => res.text())
		.then(res => this.setState({apiResponse: res}))
	}	

	componentWillMount(){
		this.callAPI();
	}


	render() {
		return (
			<div className="ui container">
				<p>{this.state.apiResponse}</p>
				<div className="ui items">
					<div className="item">
						<div className="image">
							<User 
								author={faker.internet.userName()}
								avatar={faker.image.avatar()}
								selfDescription={faker.lorem.sentence()}
							/>
						</div>
					</div>
				</div>

				<Container>

					<Photo
						photo_image={faker.image.image()}
						photo_text={faker.lorem.sentence()} 
					/>
				</Container>
			</div>
		);
	};
};

ReactDOM.render(<App />, document.querySelector('#root'));