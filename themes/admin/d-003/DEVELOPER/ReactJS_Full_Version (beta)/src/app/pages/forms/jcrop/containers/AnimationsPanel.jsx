import  React from 'react'

import {Provider} from 'react-redux'
import animationsPanelStore from '../stores/animationsPanelStore'

import JCrop from '../components/JCrop.jsx'
import OptionRadio from '../components/OptionRadio.jsx'

export default ()=>(
    <Provider store={animationsPanelStore}>
        <div>
            <section className="row">
                <JCrop store={animationsPanelStore}
                       className="col-sm-9"
                       options={{
                            initRandomCrop: false,
                            bgColor: 'red',
                            bgOpacity: 0.55
                       }}
                       crop={{

                       selection: {
                            x: 100,
                            y: 100,
                            w: 250,
                            h: 150
                       }}}
                       src="styles/img/superbox/superbox-full-7.jpg"/>

                <div className="col-sm-3">
                    <fieldset>
                        <legend>Change bgColor</legend>
                        <OptionRadio group="bgColor" checked={true} options={{
                            bgColor: 'red'
                        }} label="red"/>
                        <OptionRadio group="bgColor" options={{
                            bgColor: 'blue'
                        }} label="blue"/>
                        <OptionRadio group="bgColor" options={{
                            bgColor: 'gray'
                        }} label="gray"/>
                        <OptionRadio group="bgColor" options={{
                            bgColor: 'yellow'
                        }} label="yellow"/>
                        <OptionRadio group="bgColor" options={{
                            bgColor: 'black'
                        }} label="black"/>
                        <OptionRadio group="bgColor" options={{
                            bgColor: 'green'
                        }} label="green"/>
                        <OptionRadio group="bgColor" options={{
                            bgColor: 'white'
                        }} label="white"/>
                        <br/>
                    </fieldset>
                    <fieldset>
                        <legend>Manipulate bgOpacity</legend>
                        <OptionRadio group="bgOpacity" options={{
                            bgOpacity: .85
                        }} label="Low"/>

                        <OptionRadio group="bgOpacity" checked={true} options={{
                            bgOpacity: 0.55
                        }} label="Mid"/>
                        <OptionRadio group="bgOpacity" options={{
                            bgOpacity: 0.15
                        }} label="High"/>
                        <OptionRadio group="bgOpacity"  options={{
                            bgOpacity: 0
                        }} label="Full"/>

                        <br/>
                    </fieldset>
                </div>
            </section>
        </div>
    </Provider>
);
