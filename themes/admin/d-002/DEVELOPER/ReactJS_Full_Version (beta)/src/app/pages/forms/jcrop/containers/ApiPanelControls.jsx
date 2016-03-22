import React from 'react'

import OptionToggle from './../components/OptionToggle.jsx'
import OptionRadio from './../components/OptionRadio.jsx'

export default  () =>(
    <div className="row" style={{
        padding: '0 .75rem .5rem'
    }}>
        <fieldset className="col-md-4">
            <legend>Selection properties</legend>
            <OptionToggle option="canDrag" label="Draggable"/>
            <OptionToggle option="canResize" label="Resizeable"/>
            <br/>
            <legend>Thumbnail</legend>
            <OptionToggle option="showThumbnail" label="Show"/>
        </fieldset>
        <fieldset className="col-md-4">
            <legend>Aspect Ratio</legend>
            <OptionRadio group="aspectRatio" checked={true} options={{
                aspectRatio: 0
            }} label="None"/>
            <OptionRadio group="aspectRatio" options={{
                aspectRatio: 1.4
            }} label="Wide"/>
            <OptionRadio group="aspectRatio" options={{
                aspectRatio: 0.8
            }} label="Tall"/>

            <br/>

            <legend>Shading</legend>
            <OptionRadio group="shading" options={{
                bgOpacity: .35,
                bgColor: 'black'
            }} label="Light"/>
            <OptionRadio group="shading" checked={true} options={{
                bgOpacity: .55,
                bgColor: 'black'
            }} label="Medium"/>
            <OptionRadio group="shading" options={{
                bgOpacity: .75,
                bgColor: 'black'
            }} label="Dark"/>
        </fieldset>
        <fieldset className="col-md-4">
            <legend>New Selections</legend>
            <OptionRadio group="newSelections" options={{
                allowSelect: false
            }} label="None"/>
            <OptionRadio group="newSelections" checked={true} options={{
                allowSelect: true,
                multi: false
            }} label="Single"/>
            <OptionRadio group="newSelections" options={{
                allowSelect: true,
                multi: true
            }} label="Multi"/>
            <br/>
            <legend>Test image</legend>
            <OptionRadio group="testImage" options={{
                setImage: 'styles/img/superbox/superbox-full-24.jpg',
                bgOpacity: .6
            }} label="Lego"/>
            <OptionRadio group="testImage" checked={true} options={{
                setImage: 'styles/img/superbox/superbox-full-7.jpg',
                bgOpacity: .6
            }} label="Breakdance"/>
            <OptionRadio group="testImage" options={{
                setImage: 'styles/img/superbox/superbox-full-20.jpg',
                outerImage: 'styles/img/superbox/superbox-full-20-bw.jpg',
                bgOpacity: 1
            }} label="Dragon Fly"/>
        </fieldset>

    </div>
)
