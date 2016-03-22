/**
 * Created by griga on 11/24/15.
 */

import Reflux from 'reflux'

let UserActions = Reflux.createActions({
    init: {asyncResult: true}
});

UserActions.init.listen( function() {
    $.getJSON('api/user.json')
        .then( this.completed, this.failed )
});

export default UserActions

