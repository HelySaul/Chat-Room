import React, {Component} from 'react';
import { firebaseMessages } from '../firebase';

class ChatRoom extends Component{

	constructor(props, context){
		super(props, context);
		this.state = {
			message:'',
			messages:[]
		}
	}

	componentWillMount() {
		firebaseMessages.on('value', (snapshot)=>{
			let currentMessages= [];
			snapshot.forEach(item =>{
				let obj = item.val();
				currentMessages= [...currentMessages, obj];
			})
			this.setState({'messages':currentMessages});
		})
	}

	componentDidMount() {
		firebaseMessages.on('value', (snapshot)=>{
			let currentMessages= [];
			snapshot.forEach(item =>{
				let obj = item.val();
				currentMessages= [...currentMessages, obj];
			})
			this.setState({'messages':currentMessages});
		})
	}

	sendMessage(){
		firebaseMessages.push({id:this.state.messages.length, text:this.state.message});
	}

	render(){
		return(
			<div>
				<ol>
					{
						this.state.messages.map((item, key) => {
							const {id, text} = item;
							return(
								<li key={id}>{text}</li>
							)
						})
					}
				</ol>
				This is a ChatRoom!
				<input type='text' placeholder='Message ' onChange={event => this.setState({message:event.target.value})}/>
				<br />
				<button onClick={() => this.sendMessage()}>Submit Message</button>
			</div>
		)
	}

}

export default ChatRoom;