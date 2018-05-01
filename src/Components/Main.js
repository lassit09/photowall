import React, {Component} from 'react';
import List from './List'
import Title from './Title'

class Main extends Component {
    render() {
        return (
            <div>
                <Title title = {'Todos'}/>
                <List tasks = {['Mow the lawn', 'Walk the dog']}/>
                <List tasks = {['Finish the laundry', 'Pay the bills', 'Practice coding']}/>
            </div>
        )
    }
}

export default Main