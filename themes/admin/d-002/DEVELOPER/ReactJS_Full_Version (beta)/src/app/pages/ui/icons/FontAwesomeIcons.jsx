import React from 'react'

import LinkedStateMixin from 'react-addons-linked-state-mixin'

import SubHeader from '../../layout/SubHeader.jsx'
import BigBreadcrumbs from '../../../../components/layout/navigation/components/BigBreadcrumbs.jsx'
import WidgetGrid from '../../../../components/layout/widgets/WidgetGrid.jsx'
import JarvisWidget from '../../../../components/layout/widgets/JarvisWidget.jsx'

let FontAwesomeIcons = React.createClass({
    mixins: [LinkedStateMixin],
    getInitialState: function(){
        return {
            search: ''
        }
    },
    shouldComponentUpdate: function(nextProps, nextState){
        if(this.state.search != nextState.search ) {
            let $container = $(this.refs.demoContainer);
            if (nextState.search) {
                $(".demo-icon-font", $container).hide();

                $(".demo-icon-font .fa", $container)
                    .filter(function () {
                        var r = new RegExp(nextState.search, 'i');
                        return r.test($(this).attr('class') + $(this).attr('alt'))
                    })
                    .closest(".demo-icon-font").show();
                $(".alert, h2", $container).hide()
            } else {
                $(".demo-icon-font", $container).show();
                $(".alert, h2", $container).show()
            }
        }
        return true
    },
    render: function () {
        return (
            <div id="content">
                <div className="row">
                    <BigBreadcrumbs className="col-xs-12 col-sm-7 col-md-7 col-lg-4"/>
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
                    <div className="row">

                        {/* NEW WIDGET START */}
                        <article className="col-sm-12">

                            {/* Widget ID (each widget will need unique ID)*/}
                            <JarvisWidget colorbutton={false} editbutton={false} togglebutton={false} deletebutton={false} sortable={false} color="blue">

                                <header>
                                    <span className="widget-icon"> <i className="fa fa-comments"/> </span>
                                    <h2>Font Awesome</h2>

                                </header>

                                {/* widget div*/}
                                <div>

                                    {/* widget content */}
                                    <div className="widget-body" id="all-icons-demo" ref='demoContainer'>


                                        <div className="alert alert-info" >
                                            <i className="fa fa-exclamation"/> Please note: As of the of Font Awesome version 4.0. All icons now require a base class of <code>
                                            fa</code> as well as individual icon classes. For example <code> fa fa-adjust</code>
                                            <br/>
                                            <div className="margin-top-5">View the full icon list by going to <a href="http://fortawesome.github.io/Font-Awesome/icons/" target="_blank">//fortawesome.github.io/Font-Awesome/icons/</a></div>
                                        </div>

                                        <div className="alert alert-warning" > <strong>NOTE</strong>: FontAwesome version 4.2 is blurry on some resolutions, therefore we did not upgrade (the included FontAwesome version is 4.1). Hopefully this issue will be resolved in later versions of FontAwesome and will be safer to upgrade</div>

                                        {/*<h2>40 NEW icons with 4.2</h2>

                                         <div className="row">

                                         <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                         <i className="fa fa-angellist"/> fa-angellist
                                         </div>

                                         <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                         <i className="fa fa-area-chart"/> fa-area-chart
                                         </div>

                                         <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                         <i className="fa fa-at"/> fa-at
                                         </div>

                                         <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                         <i className="fa fa-bell-slash"/> fa-bell-slash
                                         </div>

                                         <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                         <i className="fa fa-bell-slash-o"/> fa-bell-slash-o
                                         </div>

                                         <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                         <i className="fa fa-bicycle"/> fa-bicycle
                                         </div>

                                         <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                         <i className="fa fa-binoculars"/> fa-binoculars
                                         </div>

                                         <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                         <i className="fa fa-birthday-cake"/> fa-birthday-cake
                                         </div>

                                         <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                         <i className="fa fa-bus"/> fa-bus
                                         </div>

                                         <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                         <i className="fa fa-calculator"/> fa-calculator
                                         </div>

                                         <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                         <i className="fa fa-cc"/> fa-cc
                                         </div>

                                         <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                         <i className="fa fa-cc-amex"/> fa-cc-amex
                                         </div>

                                         <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                         <i className="fa fa-cc-discover"/> fa-cc-discover
                                         </div>

                                         <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                         <i className="fa fa-cc-mastercard"/> fa-cc-mastercard
                                         </div>

                                         <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                         <i className="fa fa-cc-paypal"/> fa-cc-paypal
                                         </div>

                                         <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                         <i className="fa fa-cc-stripe"/> fa-cc-stripe
                                         </div>

                                         <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                         <i className="fa fa-cc-visa"/> fa-cc-visa
                                         </div>

                                         <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                         <i className="fa fa-copyright"/> fa-copyright
                                         </div>

                                         <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                         <i className="fa fa-eyedropper"/> fa-eyedropper
                                         </div>

                                         <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                         <i className="fa fa-futbol-o"/> fa-futbol-o
                                         </div>

                                         <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                         <i className="fa fa-google-wallet"/> fa-google-wallet
                                         </div>

                                         <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                         <i className="fa fa-ils"/> fa-ils
                                         </div>

                                         <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                         <i className="fa fa-ioxhost"/> fa-ioxhost
                                         </div>

                                         <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                         <i className="fa fa-lastfm"/> fa-lastfm
                                         </div>

                                         <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                         <i className="fa fa-lastfm-square"/> fa-lastfm-square
                                         </div>

                                         <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                         <i className="fa fa-line-chart"/> fa-line-chart
                                         </div>

                                         <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                         <i className="fa fa-meanpath"/> fa-meanpath
                                         </div>

                                         <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                         <i className="fa fa-newspaper-o"/> fa-newspaper-o
                                         </div>

                                         <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                         <i className="fa fa-paint-brush"/> fa-paint-brush
                                         </div>

                                         <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                         <i className="fa fa-paypal"/> fa-paypal
                                         </div>

                                         <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                         <i className="fa fa-pie-chart"/> fa-pie-chart
                                         </div>

                                         <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                         <i className="fa fa-plug"/> fa-plug
                                         </div>

                                         <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                         <i className="fa fa-shekel"/> fa-shekel <span className="text-muted">(alias)</span>
                                         </div>

                                         <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                         <i className="fa fa-sheqel"/> fa-sheqel <span className="text-muted">(alias)</span>
                                         </div>

                                         <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                         <i className="fa fa-slideshare"/> fa-slideshare
                                         </div>

                                         <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                         <i className="fa fa-soccer-ball-o"/> fa-soccer-ball-o <span className="text-muted">(alias)</span>
                                         </div>

                                         <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                         <i className="fa fa-toggle-off"/> fa-toggle-off
                                         </div>

                                         <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                         <i className="fa fa-toggle-on"/> fa-toggle-on
                                         </div>

                                         <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                         <i className="fa fa-trash"/> fa-trash
                                         </div>

                                         <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                         <i className="fa fa-tty"/> fa-tty
                                         </div>

                                         <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                         <i className="fa fa-twitch"/> fa-twitch
                                         </div>

                                         <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                         <i className="fa fa-wifi"/> fa-wifi
                                         </div>

                                         <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                         <i className="fa fa-yelp"/> fa-yelp
                                         </div>

                                         </div>*/}

                                        <h2 >70 new icons was introduced in 4.1</h2>

                                        <div className="row">

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-automobile"/> fa-automobile <span className="text-muted">(alias)</span>
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-bank"/> fa-bank <span className="text-muted">(alias)</span>
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-behance"/> fa-behance
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-behance-square"/> fa-behance-square
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-bomb"/> fa-bomb
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-building"/> fa-building
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-cab"/> fa-cab <span className="text-muted">(alias)</span>
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-car"/> fa-car
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-child"/> fa-child
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-circle-o-notch"/> fa-circle-o-notch
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-circle-thin"/> fa-circle-thin
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-codepen"/> fa-codepen
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-cube"/> fa-cube
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-cubes"/> fa-cubes
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-database"/> fa-database
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-delicious"/> fa-delicious
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-deviantart"/> fa-deviantart
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-digg"/> fa-digg
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-drupal"/> fa-drupal
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-empire"/> fa-empire
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-envelope-square"/> fa-envelope-square
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-fax"/> fa-fax
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-file-archive-o"/> fa-file-archive-o
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-file-audio-o"/> fa-file-audio-o
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-file-code-o"/> fa-file-code-o
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-file-excel-o"/> fa-file-excel-o
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-file-image-o"/> fa-file-image-o
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-file-movie-o"/> fa-file-movie-o <span className="text-muted">(alias)</span>
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-file-pdf-o"/> fa-file-pdf-o
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-file-photo-o"/> fa-file-photo-o <span className="text-muted">(alias)</span>
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-file-picture-o"/> fa-file-picture-o <span className="text-muted">(alias)</span>
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-file-powerpoint-o"/> fa-file-powerpoint-o
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-file-sound-o"/> fa-file-sound-o <span className="text-muted">(alias)</span>
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-file-video-o"/> fa-file-video-o
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-file-word-o"/> fa-file-word-o
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-file-zip-o"/> fa-file-zip-o <span className="text-muted">(alias)</span>
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-ge"/> fa-ge <span className="text-muted">(alias)</span>
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-git"/> fa-git
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-git-square"/> fa-git-square
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-google"/> fa-google
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-graduation-cap"/> fa-graduation-cap
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-hacker-news"/> fa-hacker-news
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-header"/> fa-header
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-history"/> fa-history
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-institution"/> fa-institution <span className="text-muted">(alias)</span>
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-joomla"/> fa-joomla
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-jsfiddle"/> fa-jsfiddle
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-language"/> fa-language
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-life-bouy"/> fa-life-bouy <span className="text-muted">(alias)</span>
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-life-ring"/> fa-life-ring
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-life-saver"/> fa-life-saver <span className="text-muted">(alias)</span>
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-mortar-board"/> fa-mortar-board <span className="text-muted">(alias)</span>
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-openid"/> fa-openid
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-paper-plane"/> fa-paper-plane
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-paper-plane-o"/> fa-paper-plane-o
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-paragraph"/> fa-paragraph
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-paw"/> fa-paw
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-pied-piper"/> fa-pied-piper
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-pied-piper-alt"/> fa-pied-piper-alt
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-pied-piper-square"/> fa-pied-piper-square <span className="text-muted">(alias)</span>
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-qq"/> fa-qq
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-ra"/> fa-ra <span className="text-muted">(alias)</span>
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-rebel"/> fa-rebel
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-recycle"/> fa-recycle
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-reddit"/> fa-reddit
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-reddit-square"/> fa-reddit-square
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-send"/> fa-send <span className="text-muted">(alias)</span>
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-send-o"/> fa-send-o <span className="text-muted">(alias)</span>
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-share-alt"/> fa-share-alt
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-share-alt-square"/> fa-share-alt-square
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-slack"/> fa-slack
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-sliders"/> fa-sliders
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-soundcloud"/> fa-soundcloud
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-space-shuttle"/> fa-space-shuttle
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-spoon"/> fa-spoon
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-spotify"/> fa-spotify
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-steam"/> fa-steam
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-steam-square"/> fa-steam-square
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-stumbleupon"/> fa-stumbleupon
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-stumbleupon-circle"/> fa-stumbleupon-circle
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-support"/> fa-support <span className="text-muted">(alias)</span>
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-taxi"/> fa-taxi
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-tencent-weibo"/> fa-tencent-weibo
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-tree"/> fa-tree
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-university"/> fa-university
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-vine"/> fa-vine
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-wechat"/> fa-wechat <span className="text-muted">(alias)</span>
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-weixin"/> fa-weixin
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-wordpress"/> fa-wordpress
                                            </div>

                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-yahoo"/> fa-yahoo
                                            </div>

                                        </div>

                                        {/* new sets */}

                                        <h2 >Web Application Icons</h2>

                                        <div className="row">
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-adjust"/> fa-adjust
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-anchor"/> fa-anchor
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-archive"/> fa-archive
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-asterisk"/> fa-asterisk
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-ban"/> fa-ban
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-bar-chart-o"/> fa-bar-chart-o
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-barcode"/> fa-barcode
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-beer"/> fa-beer
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-bell"/> fa-bell
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-bell-o"/> fa-bell-o
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-bolt"/> fa-bolt
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-book"/> fa-book
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-bookmark"/> fa-bookmark
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-bookmark-o"/> fa-bookmark-o
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-briefcase"/> fa-briefcase
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-bug"/> fa-bug
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-building"/> fa-building
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-bullhorn"/> fa-bullhorn
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-bullseye"/> fa-bullseye
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-calendar"/> fa-calendar
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-calendar-o"/> fa-calendar-o
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-camera"/> fa-camera
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-camera-retro"/> fa-camera-retro
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-caret-square-o-down"/> fa-caret-square-o-down
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-caret-square-o-left"/> fa-caret-square-o-left
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-caret-square-o-right"/> fa-caret-square-o-right
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-caret-square-o-up"/> fa-caret-square-o-up
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-certificate"/> fa-certificate
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-check"/> fa-check
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-check-circle"/> fa-check-circle
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-check-circle-o"/> fa-check-circle-o
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-check-square"/> fa-check-square
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-check-square-o"/> fa-check-square-o
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-circle"/> fa-circle
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-circle-o"/> fa-circle-o
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-clock-o"/> fa-clock-o
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-cloud"/> fa-cloud
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-cloud-download"/> fa-cloud-download
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-cloud-upload"/> fa-cloud-upload
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-code"/> fa-code
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-code-fork"/> fa-code-fork
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-coffee"/> fa-coffee
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-cog"/> fa-cog
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-cogs"/> fa-cogs
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-plus-square-o"/> fa-plus-square-o
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-comment"/> fa-comment
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-comment-o"/> fa-comment-o
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-comments"/> fa-comments
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-comments-o"/> fa-comments-o
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-compass"/> fa-compass
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-credit-card"/> fa-credit-card
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-crop"/> fa-crop
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-crosshairs"/> fa-crosshairs
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-cutlery"/> fa-cutlery
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-dashboard"/> fa-dashboard <span className="text-muted">(alias)</span>
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-desktop"/> fa-desktop
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-dot-circle-o"/> fa-dot-circle-o
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-download"/> fa-download
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-edit"/> fa-edit <span className="text-muted">(alias)</span>
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-ellipsis-horizontal"/> fa-ellipsis-horizontal
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-ellipsis-vertical"/> fa-ellipsis-vertical
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-envelope"/> fa-envelope
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-envelope-o"/> fa-envelope-o
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-eraser"/> fa-eraser
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-exchange"/> fa-exchange
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-exclamation"/> fa-exclamation
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-exclamation-circle"/> fa-exclamation-circle
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-exclamation-triangle"/> fa-exclamation-triangle
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-minus-square-o"/> fa-minus-square-o
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-external-link"/> fa-external-link
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-external-link-square"/> fa-external-link-square
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-eye"/> fa-eye
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-eye-slash"/> fa-eye-slash
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-female"/> fa-female
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-fighter-jet"/> fa-fighter-jet
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-film"/> fa-film
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-filter"/> fa-filter
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-fire"/> fa-fire
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-fire-extinguisher"/> fa-fire-extinguisher
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-flag"/> fa-flag
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-flag-checkered"/> fa-flag-checkered
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-flag-o"/> fa-flag-o
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-flash"/> fa-flash <span className="text-muted">(alias)</span>
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-flask"/> fa-flask
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-folder"/> fa-folder
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-folder-o"/> fa-folder-o
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-folder-open"/> fa-folder-open
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-folder-open-o"/> fa-folder-open-o
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-frown-o"/> fa-frown-o
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-gamepad"/> fa-gamepad
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-gavel"/> fa-gavel
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-gear"/> fa-gear <span className="text-muted">(alias)</span>
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-gears"/> fa-gears <span className="text-muted">(alias)</span>
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-gift"/> fa-gift
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-glass"/> fa-glass
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-globe"/> fa-globe
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-group"/> fa-group
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-hdd-o"/> fa-hdd-o
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-headphones"/> fa-headphones
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-heart"/> fa-heart
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-heart-o"/> fa-heart-o
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-home"/> fa-home
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-inbox"/> fa-inbox
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-info"/> fa-info
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-info-circle"/> fa-info-circle
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-key"/> fa-key
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-keyboard-o"/> fa-keyboard-o
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-laptop"/> fa-laptop
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-leaf"/> fa-leaf
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-legal"/> fa-legal <span className="text-muted">(alias)</span>
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-lemon-o"/> fa-lemon-o
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-level-down"/> fa-level-down
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-level-up"/> fa-level-up
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-lightbulb-o"/> fa-lightbulb-o
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-location-arrow"/> fa-location-arrow
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-lock"/> fa-lock
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-magic"/> fa-magic
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-magnet"/> fa-magnet
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-mail-forward"/> fa-mail-forward <span className="text-muted">(alias)</span>
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-mail-reply"/> fa-mail-reply <span className="text-muted">(alias)</span>
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-mail-reply-all"/> fa-mail-reply-all
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-male"/> fa-male
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-map-marker"/> fa-map-marker
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-meh-o"/> fa-meh-o
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-microphone"/> fa-microphone
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-microphone-slash"/> fa-microphone-slash
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-minus"/> fa-minus
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-minus-circle"/> fa-minus-circle
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-minus-square"/> fa-minus-square
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-minus-square-o"/> fa-minus-square-o
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-mobile"/> fa-mobile
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-mobile-phone"/> fa-mobile-phone <span className="text-muted">(alias)</span>
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-money"/> fa-money
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-moon-o"/> fa-moon-o
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-move"/> fa-move
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-music"/> fa-music
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-pencil"/> fa-pencil
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-pencil-square"/> fa-pencil-square
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-pencil-square-o"/> fa-pencil-square-o
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-phone"/> fa-phone
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-phone-square"/> fa-phone-square
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-picture-o"/> fa-picture-o
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-plane"/> fa-plane
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-plus"/> fa-plus
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-plus-circle"/> fa-plus-circle
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-plus-square"/> fa-plus-square
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-power-off"/> fa-power-off
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-print"/> fa-print
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-puzzle-piece"/> fa-puzzle-piece
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-qrcode"/> fa-qrcode
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-question"/> fa-question
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-question-circle"/> fa-question-circle
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-quote-left"/> fa-quote-left
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-quote-right"/> fa-quote-right
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-random"/> fa-random
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-refresh"/> fa-refresh
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-reorder"/> fa-reorder
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-reply"/> fa-reply
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-reply-all"/> fa-reply-all
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-resize-horizontal"/> fa-resize-horizontal
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-resize-vertical"/> fa-resize-vertical
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-retweet"/> fa-retweet
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-road"/> fa-road
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-rocket"/> fa-rocket
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-rss"/> fa-rss
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-rss-square"/> fa-rss-square
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-search"/> fa-search
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-search-minus"/> fa-search-minus
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-search-plus"/> fa-search-plus
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-share"/> fa-share
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-share-square"/> fa-share-square
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-share-square-o"/> fa-share-square-o
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-shield"/> fa-shield
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-shopping-cart"/> fa-shopping-cart
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-sign-in"/> fa-sign-in
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-sign-out"/> fa-sign-out
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-signal"/> fa-signal
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-sitemap"/> fa-sitemap
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-smile-o"/> fa-smile-o
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-sort"/> fa-sort
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-sort-alpha-asc"/> fa-sort-alpha-asc
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-sort-alpha-desc"/> fa-sort-alpha-desc
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-sort-amount-asc"/> fa-sort-amount-asc
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-sort-amount-desc"/> fa-sort-amount-desc
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-sort-asc"/> fa-sort-asc
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-sort-desc"/> fa-sort-desc
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-sort-down"/> fa-sort-down <span className="text-muted">(alias)</span>
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-sort-numeric-asc"/> fa-sort-numeric-asc
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-sort-numeric-desc"/> fa-sort-numeric-desc
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-sort-up"/> fa-sort-up <span className="text-muted">(alias)</span>
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-spinner"/> fa-spinner
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-square"/> fa-square
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-square-o"/> fa-square-o
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-star"/> fa-star
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-star-half"/> fa-star-half
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-star-half-empty"/> fa-star-half-empty <span className="text-muted">(alias)</span>
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-star-half-full"/> fa-star-half-full <span className="text-muted">(alias)</span>
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-star-half-o"/> fa-star-half-o
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-star-o"/> fa-star-o
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-subscript"/> fa-subscript
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-suitcase"/> fa-suitcase
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-sun-o"/> fa-sun-o
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-superscript"/> fa-superscript
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-tablet"/> fa-tablet
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-tachometer"/> fa-tachometer
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-tag"/> fa-tag
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-tags"/> fa-tags
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-tasks"/> fa-tasks
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-terminal"/> fa-terminal
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-thumb-tack"/> fa-thumb-tack
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-thumbs-down"/> fa-thumbs-down
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-thumbs-o-down"/> fa-thumbs-o-down
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-thumbs-o-up"/> fa-thumbs-o-up
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-thumbs-up"/> fa-thumbs-up
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-ticket"/> fa-ticket
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-times"/> fa-times
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-times-circle"/> fa-times-circle
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-times-circle-o"/> fa-times-circle-o
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-tint"/> fa-tint
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-toggle-down"/> fa-toggle-down <span className="text-muted">(alias)</span>
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-toggle-left"/> fa-toggle-left <span className="text-muted">(alias)</span>
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-toggle-right"/> fa-toggle-right <span className="text-muted">(alias)</span>
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-toggle-up"/> fa-toggle-up <span className="text-muted">(alias)</span>
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-trash-o"/> fa-trash-o
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-trophy"/> fa-trophy
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-truck"/> fa-truck
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-umbrella"/> fa-umbrella
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-unlock"/> fa-unlock
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-unlock-alt"/> fa-unlock-alt
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-unsorted"/> fa-unsorted <span className="text-muted">(alias)</span>
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-upload"/> fa-upload
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-user"/> fa-user
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-video-camera"/> fa-video-camera
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-volume-down"/> fa-volume-down
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-volume-off"/> fa-volume-off
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-volume-up"/> fa-volume-up
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-warning"/> fa-warning <span className="text-muted">(alias)</span>
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-wheelchair"/> fa-wheelchair
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-wrench"/> fa-wrench
                                            </div>
                                        </div>

                                        {/* new sets */}

                                        <h2 >Form Control Icons</h2>

                                        <div className="row">
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-check-square"/> fa-check-square
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-check-square-o"/> fa-check-square-o
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-circle"/> fa-circle
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-circle-o"/> fa-circle-o
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-dot-circle-o"/> fa-dot-circle-o
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-minus-square"/> fa-minus-square
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-minus-square-o"/> fa-minus-square-o
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-square"/> fa-square
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-square-o"/> fa-square-o
                                            </div>
                                        </div>

                                        {/* new sets */}

                                        <h2 >Currency Icons</h2>

                                        <div className="row">
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-bitcoin"/> fa-bitcoin <span className="text-muted">(alias)</span>
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-btc"/> fa-btc
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-cny"/> fa-cny <span className="text-muted">(alias)</span>
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-dollar"/> fa-dollar <span className="text-muted">(alias)</span>
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-eur"/> fa-eur
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-euro"/> fa-euro <span className="text-muted">(alias)</span>
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-gbp"/> fa-gbp
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-inr"/> fa-inr
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-jpy"/> fa-jpy
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-krw"/> fa-krw
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-money"/> fa-money
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-rmb"/> fa-rmb <span className="text-muted">(alias)</span>
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-rouble"/> fa-rouble <span className="text-muted">(alias)</span>
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-rub"/> fa-rub
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-ruble"/> fa-ruble <span className="text-muted">(alias)</span>
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-rupee"/> fa-rupee <span className="text-muted">(alias)</span>
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-try"/> fa-try
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-turkish-lira"/> fa-turkish-lira <span className="text-muted">(alias)</span>
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-usd"/> fa-usd
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-won"/> fa-won <span className="text-muted">(alias)</span>
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-yen"/> fa-yen <span className="text-muted">(alias)</span>
                                            </div>
                                        </div>

                                        {/* new sets */}

                                        <h2 >Text Editor Icons</h2>

                                        <div className="row">
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-align-center"/> fa-align-center
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-align-justify"/> fa-align-justify
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-align-left"/> fa-align-left
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-align-right"/> fa-align-right
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-bold"/> fa-bold
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-chain"/> fa-chain <span className="text-muted">(alias)</span>
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-chain-broken"/> fa-chain-broken
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-clipboard"/> fa-clipboard
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-columns"/> fa-columns
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-copy"/> fa-copy <span className="text-muted">(alias)</span>
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-cut"/> fa-cut <span className="text-muted">(alias)</span>
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-dedent"/> fa-dedent <span className="text-muted">(alias)</span>
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-eraser"/> fa-eraser
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-file"/> fa-file
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-file-o"/> fa-file-o
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-file-text"/> fa-file-text
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-file-text-o"/> fa-file-text-o
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-files-o"/> fa-files-o
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-floppy-o"/> fa-floppy-o
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-font"/> fa-font
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-indent"/> fa-indent
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-italic"/> fa-italic
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-link"/> fa-link
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-list"/> fa-list
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-list-alt"/> fa-list-alt
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-list-ol"/> fa-list-ol
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-list-ul"/> fa-list-ul
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-outdent"/> fa-outdent
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-paperclip"/> fa-paperclip
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-paste"/> fa-paste <span className="text-muted">(alias)</span>
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-repeat"/> fa-repeat
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-rotate-left"/> fa-rotate-left <span className="text-muted">(alias)</span>
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-rotate-right"/> fa-rotate-right <span className="text-muted">(alias)</span>
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-save"/> fa-save <span className="text-muted">(alias)</span>
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-scissors"/> fa-scissors
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-strikethrough"/> fa-strikethrough
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-table"/> fa-table
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-text-height"/> fa-text-height
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-text-width"/> fa-text-width
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-th"/> fa-th
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-th-large"/> fa-th-large
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-th-list"/> fa-th-list
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-underline"/> fa-underline
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-undo"/> fa-undo
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-unlink"/> fa-unlink <span className="text-muted">(alias)</span>
                                            </div>
                                        </div>

                                        {/* new sets */}

                                        <h2 >Directional Icons</h2>

                                        <div className="row">
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-angle-double-down"/> fa-angle-double-down
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-angle-double-left"/> fa-angle-double-left
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-angle-double-right"/> fa-angle-double-right
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-angle-double-up"/> fa-angle-double-up
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-angle-down"/> fa-angle-down
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-angle-left"/> fa-angle-left
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-angle-right"/> fa-angle-right
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-angle-up"/> fa-angle-up
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-arrow-circle-down"/> fa-arrow-circle-down
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-arrow-circle-left"/> fa-arrow-circle-left
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-arrow-circle-o-down"/> fa-arrow-circle-o-down
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-arrow-circle-o-left"/> fa-arrow-circle-o-left
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-arrow-circle-o-right"/> fa-arrow-circle-o-right
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-arrow-circle-o-up"/> fa-arrow-circle-o-up
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-arrow-circle-right"/> fa-arrow-circle-right
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-arrow-circle-up"/> fa-arrow-circle-up
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-arrow-down"/> fa-arrow-down
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-arrow-left"/> fa-arrow-left
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-arrow-right"/> fa-arrow-right
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-arrow-up"/> fa-arrow-up
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-caret-down"/> fa-caret-down
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-caret-left"/> fa-caret-left
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-caret-right"/> fa-caret-right
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-caret-square-o-down"/> fa-caret-square-o-down
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-caret-square-o-left"/> fa-caret-square-o-left
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-caret-square-o-right"/> fa-caret-square-o-right
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-caret-square-o-up"/> fa-caret-square-o-up
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-caret-up"/> fa-caret-up
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-chevron-circle-down"/> fa-chevron-circle-down
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-chevron-circle-left"/> fa-chevron-circle-left
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-chevron-circle-right"/> fa-chevron-circle-right
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-chevron-circle-up"/> fa-chevron-circle-up
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-chevron-down"/> fa-chevron-down
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-chevron-left"/> fa-chevron-left
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-chevron-right"/> fa-chevron-right
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-chevron-up"/> fa-chevron-up
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-hand-o-down"/> fa-hand-o-down
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-hand-o-left"/> fa-hand-o-left
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-hand-o-right"/> fa-hand-o-right
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-hand-o-up"/> fa-hand-o-up
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-long-arrow-down"/> fa-long-arrow-down
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-long-arrow-left"/> fa-long-arrow-left
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-long-arrow-right"/> fa-long-arrow-right
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-long-arrow-up"/> fa-long-arrow-up
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-toggle-down"/> fa-toggle-down <span className="text-muted">(alias)</span>
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-toggle-left"/> fa-toggle-left <span className="text-muted">(alias)</span>
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-toggle-right"/> fa-toggle-right <span className="text-muted">(alias)</span>
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-toggle-up"/> fa-toggle-up <span className="text-muted">(alias)</span>
                                            </div>
                                        </div>

                                        {/* new sets */}

                                        <h2 >Video Player Icons</h2>

                                        <div className="row">
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-backward"/> fa-backward
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-eject"/> fa-eject
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-fast-backward"/> fa-fast-backward
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-fast-forward"/> fa-fast-forward
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-forward"/> fa-forward
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-arrows-alt"/> fa-arrows-alt
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-pause"/> fa-pause
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-play"/> fa-play
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-play-circle"/> fa-play-circle
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-play-circle-o"/> fa-play-circle-o
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-expand"/> fa-expand
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-compress"/> fa-compress
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-step-backward"/> fa-step-backward
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-step-forward"/> fa-step-forward
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-stop"/> fa-stop
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-youtube-play"/> fa-youtube-play
                                            </div>
                                        </div>

                                        {/* new sets */}

                                        <h2 >Brand Icons</h2>

                                        <div className="alert alert-success" >
                                            <ul className="margin-bottom-none padding-left-lg">
                                                <li>
                                                    All brand icons are trademarks of their respective owners.
                                                </li>
                                                <li>
                                                    The use of these trademarks does not indicate endorsement of the trademark holder by Font Awesome, nor vice versa.
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="row">
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-adn"/> fa-adn
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-android"/> fa-android
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-apple"/> fa-apple
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-bitbucket"/> fa-bitbucket
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-bitbucket-square"/> fa-bitbucket-square
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-bitcoin"/> fa-bitcoin <span className="text-muted">(alias)</span>
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-btc"/> fa-btc
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-css3"/> fa-css3
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-dribbble"/> fa-dribbble
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-dropbox"/> fa-dropbox
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-facebook"/> fa-facebook
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-facebook-square"/> fa-facebook-square
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-flickr"/> fa-flickr
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-foursquare"/> fa-foursquare
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-github"/> fa-github
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-github-alt"/> fa-github-alt
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-github-square"/> fa-github-square
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-gittip"/> fa-gittip
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-google-plus"/> fa-google-plus
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-google-plus-square"/> fa-google-plus-square
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-html5"/> fa-html5
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-instagram"/> fa-instagram
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-linkedin"/> fa-linkedin
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-linkedin-square"/> fa-linkedin-square
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-linux"/> fa-linux
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-maxcdn"/> fa-maxcdn
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-pagelines"/> fa-pagelines
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-pinterest"/> fa-pinterest
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-pinterest-square"/> fa-pinterest-square
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-renren"/> fa-renren
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-skype"/> fa-skype
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-stack-exchange"/> fa-stack-exchange
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-stack-overflow"/> fa-stack-overflow
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-trello"/> fa-trello
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-tumblr"/> fa-tumblr
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-tumblr-square"/> fa-tumblr-square
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-twitter"/> fa-twitter
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-twitter-square"/> fa-twitter-square
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-vimeo-square"/> fa-vimeo-square
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-vk"/> fa-vk
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-weibo"/> fa-weibo
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-windows"/> fa-windows
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-xing"/> fa-xing
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-xing-square"/> fa-xing-square
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-youtube"/> fa-youtube
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-youtube-play"/> fa-youtube-play
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-youtube-square"/> fa-youtube-square
                                            </div>
                                        </div>

                                        {/* new sets */}

                                        <h2 >Medical Icons</h2>

                                        <div className="row">
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-ambulance"/> fa-ambulance
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-h-square"/> fa-h-square
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-hospital-o"/> fa-hospital-o
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-medkit"/> fa-medkit
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-plus-square"/> fa-plus-square
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-stethoscope"/> fa-stethoscope
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-user-md"/> fa-user-md
                                            </div>
                                            <div className="col-xs-6 col-md-3 col-sm-4 demo-icon-font">
                                                <i className="fa fa-wheelchair"/> fa-wheelchair
                                            </div>
                                        </div>

                                        {/* END sets */}
                                    </div>
                                    {/* end widget content */}

                                </div>
                                {/* end widget div */}

                            </JarvisWidget>
                            {/* end widget */}

                        </article>
                        {/* WIDGET END */}

                    </div>

                    {/* end row */}

                </WidgetGrid>

            </div>
        )
    }
});

export default FontAwesomeIcons