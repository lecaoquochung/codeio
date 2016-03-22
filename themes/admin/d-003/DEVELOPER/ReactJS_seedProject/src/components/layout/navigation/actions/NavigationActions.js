/**
 * Created by griga on 11/24/15.
 */

import Reflux from 'reflux'

let NavigationActions = Reflux.createActions({
    activate: {},
    getItems: {asyncResult: true},
    fromMap: {}
});

NavigationActions.getItems.listen( function() {
    $.getJSON('api/menu-items.json')
        .then( this.completed, this.failed )
});

export default NavigationActions



