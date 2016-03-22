import React from 'react'
import FlotChart from '../../../components/graphs/flot/FlotChart.jsx'

let statsData = [
    {
        label: "Twitter",
        data: [
            [1, 27],
            [2, 34],
            [3, 51],
            [4, 48],
            [5, 55],
            [6, 65],
            [7, 61],
            [8, 70],
            [9, 65],
            [10, 75],
            [11, 57],
            [12, 59],
            [13, 62]
        ],
        lines: {
            show: true,
            lineWidth: 1,
            fill: true,
            fillColor: {
                colors: [
                    {
                        opacity: 0.1
                    },
                    {
                        opacity: 0.13
                    }
                ]
            }
        },
        points: {
            show: true
        }
    },
    {
        label: "Facebook",
        data: [
            [1, 25],
            [2, 31],
            [3, 45],
            [4, 37],
            [5, 38],
            [6, 40],
            [7, 47],
            [8, 55],
            [9, 43],
            [10, 50],
            [11, 47],
            [12, 39],
            [13, 47]
        ],
        lines: {
            show: true,
            lineWidth: 1,
            fill: true,
            fillColor: {
                colors: [
                    {
                        opacity: 0.1
                    },
                    {
                        opacity: 0.13
                    }
                ]
            }
        },
        points: {
            show: true
        }
    }
];

let statsChartOptions = {
    grid: {
        show: true,
        hoverable: true,
        clickable: true,
        borderWidth: 0,
    },
    colors: ["#568A89", "#3276B1"],
    tooltip: true,
    tooltipOpts: {
        //content : "Value <b>$x</b> Value <span>$y</span>",
        defaultTheme: false
    },
    xaxis: {
        ticks: [
            [1, "JAN"],
            [2, "FEB"],
            [3, "MAR"],
            [4, "APR"],
            [5, "MAY"],
            [6, "JUN"],
            [7, "JUL"],
            [8, "AUG"],
            [9, "SEP"],
            [10, "OCT"],
            [11, "NOV"],
            [12, "DEC"],
            [13, "JAN+1"]
        ]
    },
    yaxes: {

    }
};

let SocialNetwork = React.createClass({
    render: function () {
        return (
            <div className={this.props.className} id={this.props.id}>
                <div className="widget-body-toolbar bg-color-white">

                    <form className="form-inline" role="form">

                        <div className="form-group">
                            <label className="sr-only" htmlFor="s123">Show From</label>
                            <input type="email" className="form-control input-sm" id="s123"
                                   placeholder="Show From"/>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control input-sm" id="s124"
                                   placeholder="To"/>
                        </div>

                        <div className="btn-group hidden-phone pull-right">
                            <a className="btn dropdown-toggle btn-xs btn-default"
                               data-toggle="dropdown"><i
                                className="fa fa-cog" /> More <span className="caret"> </span> </a><ul className="dropdown-menu pull-right">
                            <li>
                                <a href-void><i className="fa fa-file-text-alt" /> Export to
                                    PDF</a>
                            </li>
                            <li>
                                <a href-void><i className="fa fa-question-sign" /> Help</a>
                            </li>
                        </ul>
                        </div>

                    </form>

                </div>
                <div className="padding-10">
                    <FlotChart className="chart-large has-legend-unique" data={statsData} options={statsChartOptions} />
                </div>

            </div>

        )
    }
});

export default SocialNetwork