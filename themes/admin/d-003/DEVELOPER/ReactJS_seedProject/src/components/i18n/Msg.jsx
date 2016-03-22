import React from 'react'
import Reflux from 'reflux'

import LanguageStore from './LanguageStore'


let Msg = React.createClass({
    mixins: [Reflux.listenTo(LanguageStore, '_onChangeLanguage')],
    languageKey: LanguageStore.getData().language.key,

    _onChangeLanguage: function(data){
        if(data.language.key != this.languageKey){
            this.languageKey = data.language.key;
            this.forceUpdate()
        }
    },
    render: function () {
        let phrase = LanguageStore.getData().phrases[this.props.phrase] || this.props.phrase;
        return (
            <span>{phrase}</span>
        )
    }
});

export default Msg