/**
 * Created by griga on 12/27/15.
 */
import _ from 'lodash'
import Reflux from 'reflux'

import DemoActions from './DemoActions'


let config = window.SMARTADMIN_GLOBALS;

let store = {
    smartSkin: localStorage.getItem('sm-skin') || config.smartSkin,
    skin: {},
    skins: config.skins,
    fixedHeader: localStorage.getItem('sm-fixed-header') == 'true',
    fixedNavigation: localStorage.getItem('sm-fixed-navigation') == 'true',
    fixedRibbon: localStorage.getItem('sm-fixed-ribbon') == 'true',
    fixedPageFooter: localStorage.getItem('sm-fixed-page-footer') == 'true',
    insideContainer: localStorage.getItem('sm-inside-container') == 'true',
    rtl: localStorage.getItem('sm-rtl') == 'true',
    menuOnTop: localStorage.getItem('sm-menu-on-top') == 'true',
    colorblindFriendly: localStorage.getItem('sm-colorblind-friendly') == 'true'
}

let DemoStore = Reflux.createStore({
    listenables: DemoActions,
    init: function () {
        store.skin = _.find(config.skins, function (_skin) {
            return _skin.name == store.smartSkin
        })
    },
    getStore: function () {
        return store
    },

    onSmartSkin: function (skin) {
        store.skin = skin;
        store.smartSkin = skin.name
        this.dumpStorage();
        this.trigger(store)
    },
    onFixedHeader: function () {
        store.fixedHeader = !store.fixedHeader;
        if (store.fixedHeader == false) {
            store.fixedRibbon = false;
            store.fixedNavigation = false;
        }
        this.dumpStorage();
        this.trigger(store)
    },
    onFixedNavigation: function () {
        store.fixedNavigation = !store.fixedNavigation;

        if (store.fixedNavigation) {
            store.insideContainer = false;
            store.fixedHeader = true;
        } else {
            store.fixedRibbon = false;
        }
        this.dumpStorage();
        this.trigger(store)
    },
    onFixedRibbon: function () {
        store.fixedRibbon = !store.fixedRibbon;
        if (store.fixedRibbon) {
            store.fixedHeader = true;
            store.fixedNavigation = true;
            store.insideContainer = false;
        }
        this.dumpStorage();
        this.trigger(store)
    },

    onFixedPageFooter: function () {
        store.fixedPageFooter = !store.fixedPageFooter;
        this.dumpStorage();
        this.trigger(store)
    },
    onInsideContainer: function () {
        store.insideContainer = !store.insideContainer;
        if (store.insideContainer) {
            store.fixedRibbon = false;
            store.fixedNavigation = false;
        }
        this.dumpStorage();
        this.trigger(store)
    },
    onRtl: function () {
        store.rtl = !store.rtl;
        this.dumpStorage();
        this.trigger(store)
    },
    onMenuOnTop: function () {
        store.menuOnTop = !store.menuOnTop;
        this.dumpStorage();
        this.trigger(store)
    },
    onColorblindFriendly: function () {
        store.colorblindFriendly = !store.colorblindFriendly;
        this.dumpStorage();
        this.trigger(store)
    },
    dumpStorage: function () {
        localStorage.setItem('sm-skin', store.smartSkin);
        localStorage.setItem('sm-fixed-header', store.fixedHeader);
        localStorage.setItem('sm-fixed-navigation', store.fixedNavigation);
        localStorage.setItem('sm-fixed-ribbon', store.fixedRibbon);
        localStorage.setItem('sm-fixed-page-footer', store.fixedPageFooter);
        localStorage.setItem('sm-inside-container', store.insideContainer);
        localStorage.setItem('sm-rtl', store.rtl);
        localStorage.setItem('sm-menu-on-top', store.menuOnTop);
        localStorage.setItem('sm-colorblind-friendly', store.colorblindFriendly);
    }


});

export default DemoStore
