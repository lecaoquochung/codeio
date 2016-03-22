import React from 'react'

import SubHeader from '../layout/SubHeader.jsx'
import BigBreadcrumbs from '../../../components/layout/navigation/components/BigBreadcrumbs.jsx'
import WidgetGrid from '../../../components/layout/widgets/WidgetGrid.jsx'
import JarvisWidget from '../../../components/layout/widgets/JarvisWidget.jsx'

import MovieForm from './bootstrap-validation/MovieForm.jsx'
import TogglingForm from './bootstrap-validation/TogglingForm.jsx'
import AttributeForm from './bootstrap-validation/AttributeForm.jsx'
import ButtonGroupForm from './bootstrap-validation/ButtonGroupForm.jsx'
import ProductForm from './bootstrap-validation/ProductForm.jsx'
import ProfileForm from './bootstrap-validation/ProfileForm.jsx'
import ContactForm from './bootstrap-validation/ContactForm.jsx'


let BootstrapValidation = React.createClass({
    render: function () {
        return (
            <div id="content">

                <div className="row">
                    <BigBreadcrumbs items={['Forms', 'Bootstrap Form Validation']} icon="table" className="col-xs-12 col-sm-7 col-md-7 col-lg-4"/>
                    <SubHeader />
                </div>

                {/* widget grid */}
                <WidgetGrid>

                    {/* row */}
                    <div className="row">

                        {/* NEW WIDGET ROW START */}
                        <div className="col-sm-6">

                            {/* Widget ID (each widget will need unique ID)*/}
                            <JarvisWidget colorbutton={false} editbutton={false} deletebutton={false} sortable={false}>

                                <header>
                                    <h2>#movieForm </h2>
                                </header>

                                {/* widget div*/}

                                <div>


                                    {/* widget content */}
                                    <div className="widget-body">

                                        <MovieForm />
                                    </div>
                                    {/* end widget content */}

                                </div>
                                {/* end widget div */}

                            </JarvisWidget>
                            {/* end widget */}

                            {/* Widget ID (each widget will need unique ID)*/}
                            <JarvisWidget colorbutton={false} editbutton={false} deletebutton={false} sortable={false}>

                                <header>
                                    <h2>#togglingForm </h2>
                                </header>

                                {/* widget div*/}

                                <div>


                                    {/* widget content */}
                                    <div className="widget-body">


                                        <TogglingForm />

                                    </div>
                                    {/* end widget content */}

                                </div>
                                {/* end widget div */}

                            </JarvisWidget>
                            {/* end widget */}

                            {/* Widget ID (each widget will need unique ID)*/}
                            <JarvisWidget colorbutton={false} editbutton={false} deletebutton={false} sortable={false}>

                                <header>
                                    <h2>#attributeForm </h2>
                                </header>

                                {/* widget div*/}

                                <div>


                                    {/* widget content */}
                                    <div className="widget-body">

                                        <AttributeForm />
                                    </div>
                                    {/* end widget content */}

                                </div>
                                {/* end widget div */}

                            </JarvisWidget>
                            {/* end widget */}

                        </div>
                        {/* WIDGET ROW END */}

                        {/* NEW WIDGET ROW START */}
                        <div className="col-sm-6">

                            {/* Widget ID (each widget will need unique ID)*/}
                            <JarvisWidget colorbutton={false} editbutton={false} deletebutton={false} sortable={false}>

                                <header>
                                    <h2>#buttonGroupForm </h2>
                                </header>

                                {/* widget div*/}

                                <div>


                                    {/* widget content */}
                                    <div className="widget-body">

                                        <ButtonGroupForm />
                                    </div>
                                    {/* end widget content */}

                                </div>
                                {/* end widget div */}

                            </JarvisWidget>
                            {/* end widget */}

                            {/* Widget ID (each widget will need unique ID)*/}
                            <JarvisWidget colorbutton={false} editbutton={false} deletebutton={false} sortable={false}>

                                <header>
                                    <h2>#productForm </h2>
                                </header>

                                {/* widget div*/}

                                <div>


                                    {/* widget content */}
                                    <div className="widget-body">

                                        <ProductForm />

                                    </div>
                                    {/* end widget content */}

                                </div>
                                {/* end widget div */}

                            </JarvisWidget>
                            {/* end widget */}

                            {/* Widget ID (each widget will need unique ID)*/}
                            <JarvisWidget colorbutton={false} editbutton={false} deletebutton={false} sortable={false}>

                                <header>
                                    <h2>#profileForm </h2>
                                </header>

                                {/* widget div*/}

                                <div>


                                    {/* widget content */}
                                    <div className="widget-body">

                                        <ProfileForm />
                                    </div>
                                    {/* end widget content */}

                                </div>
                                {/* end widget div */}

                            </JarvisWidget>
                            {/* end widget */}

                            {/* Widget ID (each widget will need unique ID)*/}
                            <JarvisWidget colorbutton={false} editbutton={false} deletebutton={false} sortable={false}>

                                <header>
                                    <h2>#contactForm </h2>
                                </header>

                                {/* widget div*/}

                                <div>


                                    {/* widget content */}
                                    <div className="widget-body">

                                        <ContactForm />
                                    </div>
                                    {/* end widget content */}

                                </div>
                                {/* end widget div */}

                            </JarvisWidget>
                            {/* end widget */}
                        </div>
                        {/* WIDGET ROW END */}

                    </div>

                    {/* end row */}

                </WidgetGrid>
                {/* end widget grid */}

            </div>


        )
    }
});

export default BootstrapValidation