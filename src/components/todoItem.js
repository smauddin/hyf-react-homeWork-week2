import React from 'react';


class TodoItem extends React.Component {
    /* constructor(props) {
        super(props);
    } */

    constructor(props) {
        super(props);

        this.state = {
            todos: [
                { id: 0, text: "Get out of Bed, Wed sep 13 2018", done: true },
                { id: 1, text: "Brush teeth, Thu Sep 14 2018", done: true },
                { id: 2, text: "Eat breakfast, Fri Sep 15 2017" }
            ],
            nextId: 3
        };
    }

    removeTodo(id) {
        this.props.removeTodo(id);
    }

    render() {
        return (<div className="todoWrapper">
            <button className="removeTodo" onClick={(e) => this.removeTodo(this.props.id)}>Remove </button>
            {this.props.todo.text}
            <input className="cbox" type="checkbox" />

        </div>);
    }
}

export default TodoItem;