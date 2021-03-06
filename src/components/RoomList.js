import React, {Component} from 'react';

class RoomList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rooms: []
        }

        this.roomsRef = this.props.firebase.database().ref('rooms');
    }

    componentDidMount() {
        this.roomsRef.on('child_added', snapshot => {
            console.log(snapshot);
        });
    }
    render() {
        return(
            <section className="room-list">
                <div className="rooms">
                    <ul>
                        <li>{/*iterate through room list here*/}</li>
                    </ul>
                </div>
            </section>
        )
    }
    
}