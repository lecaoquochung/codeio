import React from 'react'
import UserStore from '../stores/UserStore'
import ToggleShortcut from './ToggleShortcut.jsx'


let LoginInfo = React.createClass({
    getInitialState: function () {
        return {}
    },
    componentWillMount: function () {
		UserStore.listen(function (data) {
            this.setState(data)
        }.bind(this))
    },
	render: function(){
		return (

			<div className="login-info">
			    <span>
			        <ToggleShortcut>
			            <img src={this.state.picture} alt="me"
							 className="online" /><span>{ this.state.username }</span><i className="fa fa-angle-down" />
			        </ToggleShortcut>
			     </span>
			</div>
		)
	}
});

export default LoginInfo