import React from 'react'
import ScriptLoader from '../utils/mixins/ScriptLoader.jsx'
import {findDOMNode} from 'react-dom'


(function ($) {

    $.fn.SuperBox = function (options) {

        var superbox = $('<div class="superbox-show"></div>'),
            superboximg = $('<img src="" class="superbox-current-img"><div id="imgInfoBox" class="superbox-imageinfo inline-block"> <h1>Image Title</h1><span><p><em>http://imagelink.com/thisimage.jpg</em></p><p class="superbox-img-description">Image description</p><p><a href="javascript:void(0);" class="btn btn-primary btn-sm">Edit Image</a> <a href="javascript:void(0);" class="btn btn-danger btn-sm">Delete</a></p></span> </div>'),
            superboxclose = $('<div class="superbox-close txt-color-white"><i class="fa fa-times fa-lg"></i></div>');

        superbox.append(superboximg).append(superboxclose);

        var imgInfoBox = $('.superbox-imageinfo');

        return this.each(function () {

            $('.superbox-list').click(function () {
                //$('.superbox-list', $(this)).click(function() {
                var $this = $(this);

                var currentimg = $this.find('.superbox-img'),
                    imgData = currentimg.data('img'),
                    imgDescription = currentimg.attr('alt') || "No description",
                    imgLink = imgData,
                    imgTitle = currentimg.attr('title') || "No Title";

                //console.log(imgData, imgDescription, imgLink, imgTitle)

                superboximg.attr('src', imgData);

                $('.superbox-list').removeClass('active');
                $this.addClass('active');

                //$('#imgInfoBox em').text(imgLink);
                //$('#imgInfoBox >:first-child').text(imgTitle);
                //$('#imgInfoBox .superbox-img-description').text(imgDescription);

                superboximg.find('em').text(imgLink);
                superboximg.find('>:first-child').text(imgTitle);
                superboximg.find('.superbox-img-description').text(imgDescription);

                //console.log("fierd")

                if ($('.superbox-current-img').css('opacity') == 0) {
                    $('.superbox-current-img').animate({opacity: 1});
                }

                if ($(this).next().hasClass('superbox-show')) {
                    if (superbox.is(":visible"))
                        $('.superbox-list').removeClass('active');
                    superbox.toggle();
                } else {
                    superbox.insertAfter(this).css('display', 'block');
                    $this.addClass('active');
                }

                $('html, body').animate({
                    scrollTop: superbox.position().top - currentimg.width()
                }, 'medium');

            });

            $('.superbox').on('click', '.superbox-close', function () {
                $('.superbox-list').removeClass('active');
                $('.superbox-current-img').animate({opacity: 0}, 200, function () {
                    $('.superbox-show').slideUp();
                });
            });

        });
    };
})(jQuery);

let SuperBoxGallery = React.createClass({
    mixins: [ScriptLoader],
    componentDidMount: function () {
        this.loadScript('/vendor.ui.js').then(function () {
            let element = $(findDOMNode(this.refs.galleryContainer));
            element.SuperBox();
        }.bind(this))
    },
    render: function () {
        let items = this.props.items || [];
        return (
            <div>
                <div ref="galleryContainer" className={this.props.className}>
                    {items.map(function (item, idx) {
                        return (
                            <div className="superbox-list" key={idx}>
                                <img src={item.src}
                                     data-img={item.img}
                                     alt={item.alt}
                                     title={item.title} className="superbox-img"/>
                            </div>
                        )
                    })}

                    <div className="superbox-float"/>

                </div>

            </div>
        )
    }
});

export default SuperBoxGallery