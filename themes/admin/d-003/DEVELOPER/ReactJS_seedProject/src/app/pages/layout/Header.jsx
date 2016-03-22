/**
 * Created by griga on 11/17/15.
 */

import React from 'react'

import FullScreen from '../../../components/layout/actions/FullScreen.jsx'
import ToggleMenu from '../../../components/layout/actions/ToggleMenu.jsx'
import SpeechButton from '../../../components/layout/actions/SpeechButton.jsx'
import SearchMobile from '../../../components/layout/actions/SearchMobile.jsx'

import DeviceDetect from '../../../components/layout/tools/DeviceDetect.jsx'
import ActivitiesDropdown from '../../../components/activities/ActivitiesDropdown.jsx'
import LanguageSelector from '../../../components/i18n/LanguageSelector.jsx'

import RecentProjects from './header/RecentProjects.jsx'

let Header = React.createClass({
    render: function () {
        return <header id="header">
            <div id="logo-group">
                <span id="logo">
                    <img src="styles/img/logo.png" // place your logo here
                         alt="SmartAdmin"/>
                </span>
                {/* Note: The activity badge color changes when clicked and resets the number to 0
                 Suggestion: You may want to set a flag when this happens to tick off all checked messages / notifications */}

                <ActivitiesDropdown url={'api/activities/activities.json'} />
            </div>

            <RecentProjects />
            <div className="pull-right"  /*pulled right: nav area*/ >


                <ToggleMenu className="btn-header pull-right"  /* collapse menu button */ />


                {/* #MOBILE */}
                {/*  Top menu profile link : this shows only when top menu is active */}
                <ul id="mobile-profile-img" className="header-dropdown-list hidden-xs padding-5">
                    <li className="">
                        <a href-void className="dropdown-toggle no-margin userdropdown" data-toggle="dropdown">
                            <img src="styles/img/avatars/sunny.png" alt="John Doe" className="online"/>
                        </a>
                        <ul className="dropdown-menu pull-right">
                            <li>
                                <a href-void className="padding-10 padding-top-0 padding-bottom-0"><i
                                    className="fa fa-cog"/> Setting</a>
                            </li>
                            <li className="divider"/>
                            <li>
                                <a href="#/views/profile"
                                   className="padding-10 padding-top-0 padding-bottom-0"> <i className="fa fa-user"/>
                                    <u>P</u>rofile</a>
                            </li>
                            <li className="divider"/>
                            <li>
                                <a href-void className="padding-10 padding-top-0 padding-bottom-0"
                                   data-action="toggleShortcut"><i className="fa fa-arrow-down"/> <u>S</u>hortcut</a>
                            </li>
                            <li className="divider"/>
                            <li>
                                <a href-void className="padding-10 padding-top-0 padding-bottom-0"
                                   data-action="launchFullscreen"><i className="fa fa-arrows-alt"/> Full
                                    <u>S</u>creen</a>
                            </li>
                            <li className="divider"/>
                            <li>
                                <a href="#/login" className="padding-10 padding-top-5 padding-bottom-5"
                                   data-action="userLogout"><i
                                    className="fa fa-sign-out fa-lg"/> <strong><u>L</u>ogout</strong></a>
                            </li>
                        </ul>
                    </li>
                </ul>

                {/* logout button */}
                <div id="logout" className="btn-header transparent pull-right">
                    <span> <a href="#/login" title="Sign Out"
                              data-logout-msg="You can improve your security further after logging out by closing this opened browser"><i
                        className="fa fa-sign-out"/></a> </span>
                </div>

                {/* search mobile button (this is hidden till mobile view port) */}
                <SearchMobile className="btn-header transparent pull-right"/>


                {/* input: search field */}
                <form action="#/misc/search.html" className="header-search pull-right">
                    <input id="search-fld" type="text" name="param" placeholder="Find reports and more"
                           data-autocomplete='[
					"ActionScript",
					"AppleScript",
					"Asp",
					"BASIC",
					"C",
					"C++",
					"Clojure",
					"COBOL",
					"ColdFusion",
					"Erlang",
					"Fortran",
					"Groovy",
					"Haskell",
					"Java",
					"JavaScript",
					"Lisp",
					"Perl",
					"PHP",
					"Python",
					"Ruby",
					"Scala",
					"Scheme"]'/>
                    <button type="submit">
                        <i className="fa fa-search"/>
                    </button>
                    <a href="$" id="cancel-search-js" title="Cancel Search"><i className="fa fa-times"/></a>
                </form>


                <FullScreen className="btn-header transparent pull-right" />


                {/* multiple lang dropdown : find all flags in the flags page */}
                <LanguageSelector />


            </div>
            {/* end pulled right: nav area */}

            <DeviceDetect />


        </header>
    }
});


export default Header
