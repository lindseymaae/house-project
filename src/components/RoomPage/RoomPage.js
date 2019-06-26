import React, { Component } from 'react';
import { connect } from 'react-redux';

class RoomPage extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_INFO' })
    }

    render() {
        return (
            <div>
                <h1>Your Rooms</h1>
                {this.props.projectReducer.map((item) => (
                    <table>
                        <thead>
                            <th>Room Name</th>
                            <th>Length</th>
                            <th>Width</th>
                            <th>Height</th>
                        </thead>
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.length}</td>
                            <td>{item.width}</td>
                            <td>{item.height}</td>
                        </tr>
                    </table>
                   
                       
                ))}
                
            </div>
        )

        }
    }

const mapStateToProps = state => ({
    projectReducer: state.projectReducer,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(RoomPage);