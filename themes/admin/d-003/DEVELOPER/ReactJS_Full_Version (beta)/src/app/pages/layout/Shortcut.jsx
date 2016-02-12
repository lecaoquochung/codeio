import React from 'react'

import {Link} from 'react-router'

let Shortcut =  React.createClass({
	render: function(){
		return (
			<div id="shortcut">
				<ul>
					<li>
						<Link to="/inbox" title="Inbox" className="jarvismetro-tile big-cubes bg-color-blue">
							<span className="iconbox"> <i className="fa fa-envelope fa-4x" /> <span>Mail <span className="label pull-right bg-color-darken">14</span></span> </span>
						</Link>
					</li>
					<li>
						<Link to="/calendar" className="jarvismetro-tile big-cubes bg-color-orangeDark"> <span className="iconbox"> <i className="fa fa-calendar fa-4x" /> <span>Calendar</span> </span> </Link>
					</li>
					<li>
						<Link to="/maps" className="jarvismetro-tile big-cubes bg-color-purple"> <span className="iconbox"> <i className="fa fa-map-marker fa-4x" /> <span>Maps</span> </span> </Link>
					</li>
					<li>
						<Link to="/invoice" className="jarvismetro-tile big-cubes bg-color-blueDark"> <span className="iconbox"> <i className="fa fa-book fa-4x" /> <span>Invoice <span className="label pull-right bg-color-darken">99</span></span> </span> </Link>
					</li>
					<li>
						<Link to="/gallery" className="jarvismetro-tile big-cubes bg-color-greenLight"> <span className="iconbox"> <i className="fa fa-picture-o fa-4x" /> <span>Gallery </span> </span> </Link>
					</li>
					<li>
						<Link to="/profile" className="jarvismetro-tile big-cubes selected bg-color-pinkDark"> <span className="iconbox"> <i className="fa fa-user fa-4x" /> <span>My Profile </span> </span> </Link>
					</li>
				</ul>
			</div>
		)
	}
});

export default Shortcut