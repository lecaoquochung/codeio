import React from 'react'
import _ from 'lodash'

import ScriptLoader from '../utils/mixins/ScriptLoader.jsx'
import ElementHolder from '../utils/mixins/ElementHolder.jsx'

import AjaxActions from '../actions/AjaxActions'

let Datatable = React.createClass({
    mixins: [ScriptLoader, ElementHolder],
    componentDidMount: function () {
        this.loadScript('/vendor.datatables.js').then(function () {
            this._datatable()
        }.bind(this))
    },

    _datatable: function () {
        var element = $(this.getHold());
        var options = this.props.options || {}


        let toolbar = '';
        if (options.buttons)
            toolbar += 'B';
        if (this.props.paginationLength)
            toolbar += 'l';
        if (this.props.columnsHide)
            toolbar += 'C';

        if(typeof options.ajax === 'string'){
            let url = options.ajax;
            options.ajax = {
                url: url,
                complete: function(xhr){
                    AjaxActions.contentLoaded(xhr)
                }
            }
        }

        options = _.extend(options, {

            "dom": "<'dt-toolbar'<'col-xs-12 col-sm-6'f><'col-sm-6 col-xs-12 hidden-xs text-right'" + toolbar + ">r>" +
            "t" +
            "<'dt-toolbar-footer'<'col-sm-6 col-xs-12 hidden-xs'i><'col-xs-12 col-sm-6'p>>",
            oLanguage: {
                "sSearch": "<span class='input-group-addon input-sm'><i class='glyphicon glyphicon-search'></i></span> ",
                "sLengthMenu": "_MENU_"
            },
            "autoWidth": false,
            retrieve: true,
            responsive: true
        });

        var _dataTable;
        //


        _dataTable = element.DataTable(options);

        if (this.props.filter) {
            // Apply the filter
            element.on('keyup change', 'thead th input[type=text]', function () {
                _dataTable
                    .column($(this).parent().index() + ':visible')
                    .search(this.value)
                    .draw();

            });
        }

        if (!toolbar) {
            element.parent().find(".dt-toolbar").append('<div class="text-right"><img src="styles/img/logo.png" alt="SmartAdmin" style="width: 111px; margin-top: 3px; margin-right: 10px;"></div>');
        }

        if(this.props.detailsFormat){
            let format = this.props.detailsFormat
            element.on('click', 'td.details-control', function () {
                var tr = $(this).closest('tr');
                var row = _dataTable.row( tr );
                if ( row.child.isShown() ) {
                    row.child.hide();
                    tr.removeClass('shown');
                }
                else {
                    row.child( format(row.data()) ).show();
                    tr.addClass('shown');
                }
            })
        }

    }
    ,
    render: function () {
        let {children, ...props} = this.props;
        return (
            <table {...props}>
                {children}
            </table>
        )
    }
});

export default Datatable