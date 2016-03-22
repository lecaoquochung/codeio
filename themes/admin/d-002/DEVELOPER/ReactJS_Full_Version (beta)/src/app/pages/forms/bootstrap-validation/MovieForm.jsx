import React from 'react'

import BootstrapValidator from '../../../../components/forms/validation/BootstrapValidator.jsx'

let validatorOptions = {
    feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
        title: {
            group: '.col-md-8',
            validators: {
                notEmpty: {
                    message: 'The title is required'
                },
                stringLength: {
                    max: 200,
                    message: 'The title must be less than 200 characters long'
                }
            }
        },
        genre: {
            group: '.col-md-4',
            validators: {
                notEmpty: {
                    message: 'The genre is required'
                }
            }
        },
        director: {
            group: '.col-md-4',
            validators: {
                notEmpty: {
                    message: 'The director name is required'
                },
                stringLength: {
                    max: 80,
                    message: 'The director name must be less than 80 characters long'
                }
            }
        },
        writer: {
            group: '.col-md-4',
            validators: {
                notEmpty: {
                    message: 'The writer name is required'
                },
                stringLength: {
                    max: 80,
                    message: 'The writer name must be less than 80 characters long'
                }
            }
        },
        producer: {
            group: '.col-md-4',
            validators: {
                notEmpty: {
                    message: 'The producer name is required'
                },
                stringLength: {
                    max: 80,
                    message: 'The producer name must be less than 80 characters long'
                }
            }
        },
        website: {
            group: '.col-md-6',
            validators: {
                notEmpty: {
                    message: 'The website address is required'
                },
                uri: {
                    message: 'The website address is not valid'
                }
            }
        },
        trailer: {
            group: '.col-md-6',
            validators: {
                notEmpty: {
                    message: 'The trailer link is required'
                },
                uri: {
                    message: 'The trailer link is not valid'
                }
            }
        },
        review: {
            // The group will be set as default (.form-group)
            validators: {
                stringLength: {
                    max: 500,
                    message: 'The review must be less than 500 characters long'
                }
            }
        },
        rating: {
            // The group will be set as default (.form-group)
            validators: {
                notEmpty: {
                    message: 'The rating is required'
                }
            }
        }
    }
}

let MovieForm = React.createClass({
    _onSubmit: function(e){
        e.preventDefault();
        console.log('submit stuff')
    },
    render: function () {
        return (
            <BootstrapValidator options={validatorOptions}>
                <form id="movieForm" onSubmit={this._onSubmit}>
                    <fieldset>
                        <legend>
                            Default Form Elements
                        </legend>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-md-8">
                                    <label className="control-label">Movie title</label>
                                    <input type="text" className="form-control" name="title"/>
                                </div>

                                <div className="col-md-4 selectContainer">
                                    <label className="control-label">Genre</label>
                                    <select className="form-control" name="genre">
                                        <option value="">Choose a genre</option>
                                        <option value="action">Action</option>
                                        <option value="comedy">Comedy</option>
                                        <option value="horror">Horror</option>
                                        <option value="romance">Romance</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-sm-12 col-md-4">
                                    <label className="control-label">Director</label>
                                    <input type="text" className="form-control" name="director"/>
                                </div>

                                <div className="col-sm-12 col-md-4">
                                    <label className="control-label">Writer</label>
                                    <input type="text" className="form-control" name="writer"/>
                                </div>

                                <div className="col-sm-12 col-md-4">
                                    <label className="control-label">Producer</label>
                                    <input type="text" className="form-control" name="producer"/>
                                </div>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-sm-12 col-md-6">
                                    <label className="control-label">Website</label>
                                    <input type="text" className="form-control" name="website"/>
                                </div>

                                <div className="col-sm-12 col-md-6">
                                    <label className="control-label">Youtube trailer</label>
                                    <input type="text" className="form-control" name="trailer"/>
                                </div>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset>
                        <div className="form-group">
                            <label className="control-label">Review</label>
                            <textarea className="form-control" name="review" rows="8"/>
                        </div>
                    </fieldset>

                    <fieldset>
                        <div className="form-group">

                            <div className="row">
                                <div className="col-sm-12 col-md-12">
                                    <label className="control-label">Rating</label>
                                </div>

                                <div className="col-sm-12 col-md-10">

                                    <label className="radio radio-inline no-margin">
                                        <input type="radio" name="rating" value="terrible"
                                               className="radiobox style-2"/>
                                        <span>Terrible</span> </label>

                                    <label className="radio radio-inline">
                                        <input type="radio" name="rating" value="watchable"
                                               className="radiobox style-2"/>
                                        <span>Watchable</span> </label>
                                    <label className="radio radio-inline">
                                        <input type="radio" name="rating" value="best" className="radiobox style-2"/>
                                        <span>Best ever</span> </label>

                                </div>

                            </div>

                        </div>
                    </fieldset>

                    <div className="form-actions">
                        <div className="row">
                            <div className="col-md-12">
                                <button className="btn btn-default" type="submit">
                                    <i className="fa fa-eye"/>
                                    Validate
                                </button>
                            </div>
                        </div>
                    </div>

                </form>
            </BootstrapValidator>
        )
    }
});

export default MovieForm