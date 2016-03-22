import Reflux from 'reflux'
import NavigationActions from './../actions/NavigationActions.js'

import MenuItem from './MenuItem.js'

import History from '../classes/History.js'

let data = {
    item: undefined,
    items: []
};



let NavigationStore = Reflux.createStore({
    initRawItems: function(rawItems){
        data.items = this.normalize(rawItems);
        this._setInitialItem(data.items)
    },
    _setInitialItem: function(items){
        items.forEach(function(item){
            if (item.isActive){
                data.item = item
            }
            if(item.items){
                this._setInitialItem(item.items)
            }
        }.bind(this))

    },
    listenables: NavigationActions,
    onGetItemsCompleted: function (_data) {
        data.items = this.normalize(_data.items);
        this.trigger(data)
    },
    onActivate: function (item) {
        data.item = item;
        if(item.route)
            History.pushState(null, item.route)
        this.trigger({
            item: item
        })
    },
    normalize: function (items) {
        return _.map(items, function (item) {
            return new MenuItem(item)
        })
    },
    getData: function () {
        return data
    }

});


export default NavigationStore