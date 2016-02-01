import React from 'react'

import LinkedStateMixin from 'react-addons-linked-state-mixin'

import SubHeader from '../../layout/SubHeader.jsx'
import BigBreadcrumbs from '../../../../components/layout/navigation/components/BigBreadcrumbs.jsx'
import WidgetGrid from '../../../../components/layout/widgets/WidgetGrid.jsx'
import JarvisWidget from '../../../../components/layout/widgets/JarvisWidget.jsx'

let Glyphicons = React.createClass({
    mixins: [LinkedStateMixin],
    getInitialState: function(){
        return {
            search: ''
        }
    },
    shouldComponentUpdate: function(nextProps, nextState){
        if(this.state.search != nextState.search) {
            let $container = $(this.refs.demoContainer);
            if (nextState.search) {
                $("li", $container).hide();

                $("li .glyphicon", $container)
                    .filter(function () {
                        var r = new RegExp(nextState.search, 'i');
                        return r.test($(this).attr('class') + $(this).attr('alt'))
                    })
                    .closest("li").show();
                $(".alert, h2", $container).hide()
            } else {
                $("li", $container).show();
                $(".alert, h2", $container).show()
            }
        }
        return true
    },
    render: function () {
        return (
            <div id="content">
                <div className="row">
                    <BigBreadcrumbs items={['UI Elements', 'Icons', 'Glyph Icons']} icon="desktop" className="col-xs-12 col-sm-7 col-md-7 col-lg-4"/>
                    <SubHeader />
                </div>

                {/* widget grid */}

                <WidgetGrid>

                    <div className="well well-sm">
                        <div className="input-group">
                            <input className="form-control input-lg" valueLink={this.linkState('search')} placeholder="Search for an icon..."/>
                            <span className="input-group-addon"><i className="fa fa-fw fa-lg fa-search"/></span>
                        </div>
                    </div>

                    {/* row */}
                    {/* row */}
                    <div className="row">

                        {/* NEW WIDGET START */}
                        <article className="col-sm-12">

                            {/* Widget ID (each widget will need unique ID)*/}
                            <JarvisWidget colorbutton={false} editbutton={false} togglebutton={false} deletebutton={false} color="purple">

                                <header>
                                    <h2>Glyph Icons </h2>
                                </header>

                                {/* widget div*/}
                                <div>


                                    {/* widget content */}
                                    <div className="widget-body" ref='demoContainer' >

                                        <ul className="bs-glyphicons">
                                            <li>
                                                <span className="glyphicon glyphicon-adjust"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-adjust</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-align-center"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-align-center</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-align-justify"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-align-justify</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-align-left"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-align-left</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-align-right"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-align-right</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-arrow-down"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-arrow-down</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-arrow-left"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-arrow-left</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-arrow-right"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-arrow-right</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-arrow-up"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-arrow-up</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-asterisk"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-asterisk</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-backward"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-backward</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-ban-circle"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-ban-circle</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-barcode"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-barcode</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-bell"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-bell</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-bold"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-bold</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-book"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-book</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-bookmark"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-bookmark</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-briefcase"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-briefcase</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-bullhorn"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-bullhorn</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-calendar"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-calendar</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-camera"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-camera</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-certificate"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-certificate</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-check"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-check</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-chevron-down"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-chevron-down</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-chevron-left"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-chevron-left</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-chevron-right"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-chevron-right</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-chevron-up"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-chevron-up</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-circle-arrow-down"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-circle-arrow-down</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-circle-arrow-left"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-circle-arrow-left</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-circle-arrow-right"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-circle-arrow-right</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-circle-arrow-up"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-circle-arrow-up</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-cloud"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-cloud</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-cloud-download"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-cloud-download</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-cloud-upload"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-cloud-upload</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-cog"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-cog</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-collapse-down"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-collapse-down</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-collapse-up"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-collapse-up</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-comment"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-comment</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-compressed"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-compressed</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-copyright-mark"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-copyright-mark</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-credit-card"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-credit-card</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-cutlery"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-cutlery</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-dashboard"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-dashboard</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-download"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-download</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-download-alt"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-download-alt</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-earphone"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-earphone</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-edit"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-edit</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-eject"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-eject</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-envelope"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-envelope</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-euro"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-euro</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-exclamation-sign"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-exclamation-sign</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-expand"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-expand</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-export"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-export</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-eye-close"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-eye-close</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-eye-open"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-eye-open</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-facetime-video"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-facetime-video</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-fast-backward"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-fast-backward</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-fast-forward"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-fast-forward</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-file"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-file</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-film"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-film</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-filter"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-filter</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-fire"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-fire</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-flag"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-flag</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-flash"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-flash</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-floppy-disk"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-floppy-disk</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-floppy-open"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-floppy-open</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-floppy-remove"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-floppy-remove</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-floppy-save"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-floppy-save</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-floppy-saved"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-floppy-saved</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-folder-close"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-folder-close</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-folder-open"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-folder-open</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-font"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-font</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-forward"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-forward</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-fullscreen"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-fullscreen</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-gbp"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-gbp</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-gift"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-gift</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-glass"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-glass</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-globe"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-globe</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-hand-down"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-hand-down</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-hand-left"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-hand-left</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-hand-right"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-hand-right</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-hand-up"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-hand-up</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-hd-video"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-hd-video</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-hdd"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-hdd</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-header"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-header</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-headphones"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-headphones</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-heart"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-heart</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-heart-empty"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-heart-empty</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-home"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-home</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-import"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-import</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-inbox"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-inbox</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-indent-left"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-indent-left</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-indent-right"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-indent-right</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-info-sign"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-info-sign</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-italic"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-italic</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-leaf"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-leaf</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-link"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-link</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-list"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-list</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-list-alt"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-list-alt</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-lock"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-lock</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-log-in"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-log-in</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-log-out"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-log-out</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-magnet"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-magnet</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-map-marker"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-map-marker</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-minus"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-minus</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-minus-sign"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-minus-sign</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-move"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-move</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-music"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-music</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-new-window"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-new-window</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-off"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-off</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-ok"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-ok</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-ok-circle"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-ok-circle</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-ok-sign"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-ok-sign</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-open"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-open</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-paperclip"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-paperclip</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-pause"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-pause</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-pencil"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-pencil</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-phone"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-phone</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-phone-alt"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-phone-alt</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-picture"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-picture</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-plane"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-plane</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-play"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-play</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-play-circle"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-play-circle</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-plus"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-plus</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-plus-sign"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-plus-sign</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-print"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-print</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-pushpin"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-pushpin</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-qrcode"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-qrcode</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-question-sign"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-question-sign</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-random"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-random</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-record"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-record</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-refresh"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-refresh</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-registration-mark"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-registration-mark</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-remove"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-remove</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-remove-circle"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-remove-circle</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-remove-sign"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-remove-sign</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-repeat"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-repeat</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-resize-full"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-resize-full</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-resize-horizontal"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-resize-horizontal</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-resize-small"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-resize-small</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-resize-vertical"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-resize-vertical</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-retweet"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-retweet</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-road"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-road</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-save"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-save</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-saved"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-saved</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-screenshot"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-screenshot</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-sd-video"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-sd-video</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-search"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-search</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-send"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-send</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-share"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-share</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-share-alt"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-share-alt</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-shopping-cart"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-shopping-cart</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-signal"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-signal</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-sort"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-sort</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-sort-by-alphabet"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-sort-by-alphabet</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-sort-by-alphabet-alt"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-sort-by-alphabet-alt</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-sort-by-attributes"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-sort-by-attributes</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-sort-by-attributes-alt"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-sort-by-attributes-alt</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-sort-by-order"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-sort-by-order</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-sort-by-order-alt"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-sort-by-order-alt</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-sound-5-1"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-sound-5-1</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-sound-6-1"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-sound-6-1</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-sound-7-1"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-sound-7-1</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-sound-dolby"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-sound-dolby</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-sound-stereo"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-sound-stereo</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-star"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-star</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-star-empty"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-star-empty</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-stats"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-stats</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-step-backward"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-step-backward</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-step-forward"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-step-forward</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-stop"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-stop</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-subtitles"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-subtitles</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-tag"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-tag</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-tags"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-tags</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-tasks"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-tasks</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-text-height"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-text-height</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-text-width"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-text-width</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-th"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-th</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-th-large"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-th-large</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-th-list"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-th-list</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-thumbs-down"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-thumbs-down</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-thumbs-up"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-thumbs-up</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-time"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-time</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-tint"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-tint</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-tower"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-tower</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-transfer"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-transfer</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-trash"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-trash</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-tree-conifer"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-tree-conifer</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-tree-deciduous"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-tree-deciduous</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-unchecked"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-unchecked</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-upload"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-upload</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-usd"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-usd</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-user"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-user</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-volume-down"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-volume-down</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-volume-off"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-volume-off</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-volume-up"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-volume-up</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-warning-sign"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-warning-sign</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-wrench"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-wrench</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-zoom-in"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-zoom-in</span>
                                            </li>
                                            <li>
                                                <span className="glyphicon glyphicon-zoom-out"/>
                                                <span className="glyphicon-class">.glyphicon .glyphicon-zoom-out</span>
                                            </li>
                                        </ul>

                                    </div>
                                    {/* end widget content */}

                                </div>
                                {/* end widget div */}

                            </JarvisWidget>
                            {/* end widget */}

                        </article>
                        {/* WIDGET END */}

                    </div>

                </WidgetGrid>

            </div>
        )
    }
});

export default Glyphicons