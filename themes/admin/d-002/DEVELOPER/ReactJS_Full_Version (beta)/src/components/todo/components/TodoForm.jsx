import React from 'react'
import LinkedStateMixin from 'react-addons-linked-state-mixin'

import TodoActions from '../actions/TodoActions'

let TodoForm = React.createClass({
    mixins: [LinkedStateMixin],
    getInitialState: function(){
        return {
            title: '',
            type: 'Important'
        }
    },
    _addTodo: function(){
        TodoActions.addNewTodo(this.state)
    },
    _toggleAdd: function(){
        TodoActions.toggleNewTodo()
    },
    render: function () {
        return (
            <form name="newTodoForm" className="smart-form">
                <fieldset>
                    <section>
                        <label className="input">
                            <input type="text" required className="input-lg" valueLink={this.linkState('title')} placeholder="What needs to be done?"/>
                        </label>
                    </section>
                    <section>
                        <div className="col-xs-6">
                            <label className="select">
                                <select className="input-sm" valueLink={this.linkState('type')} >
                                    <option value="Critical">Critical</option>
                                    <option value="Important">Important</option>
                                    <option value="Completed">Completed</option>
                                </select>  </label>
                        </div>
                    </section>
                </fieldset>
                <footer>
                    <button type="button" className="btn btn-primary" onClick={this._addTodo}>
                        Add
                    </button>
                    <button type="button" className="btn btn-default" onClick={this._toggleAdd}>
                        Cancel
                    </button>
                </footer>
            </form>
        )
    }
});

export default TodoForm