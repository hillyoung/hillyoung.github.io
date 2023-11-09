/**
 * Main JS file for Casper behaviours
 */

/* globals jQuery, document */
(function($, undefined) {
    "use strict";

    var $document = $(document);

    $document.ready(function() {

        var $postContent = $(".post-content");
        $postContent.fitVids();

        $(".scroll-down, .title-scroll").arctic_scroll();

        $(".menu-button[href='#'], .nav-cover, .nav-close").on("click", function(e) {
            e.preventDefault();
            $("body").toggleClass("nav-opened nav-closed");
        });

        var year = new Date().getFullYear();
        var copyrightYear = year == 2022 ? year : "2022-" + year;
        $("#copyright").text("© " + copyrightYear + " 溧水丘壑网络技术服务 版权所有");


        tippy("#bttool", {
            placement: 'left-end',
            theme: 'light',
            trigger:'click',
            content: "<div id=\"qrcode\" style='width: 120px;height: 120px;'></div>",
            onTrigger(instance, event) {
                // ...
                console.log(event.currentTarget.dataset.type)
                // $('#qrcode').qrcode("this plugin is great");
                // $('#qrcode').text('45646646464654')
              },
              onMount(instance) {
                $('#qrcode').empty()
                let type = instance.reference.dataset.type
                let url = new URL("install.html?type=" + type ,window.location.href)
                $('#qrcode').qrcode({width: 120,height: 120,text: url.toString()})
              },
            allowHTML: true,
        });

        tippy("#about_us", {
            placement: 'left-end',
            theme: 'light',
            trigger:'click',
            // hideOnClick:false,
            interactive:true,
            content: "<div style=\"display: flex;flex-direction: column;align-items: center;padding: 8px 0 0 0;\"><div id=\"qrcode_aboutus\" style='width: 120px;height: 120px;'></div><table style='margin: 8px 0;' frame='void'><tr><td style='background: unset;box-sizing: border-box;word-break: keep-all;'>电话</td><td style='background: unset;'>18550521640</td></tr><tr><td>邮箱</td><td>hillyoung@yeah.net</td></tr></table></div>",
            onTrigger(instance, event) {
                // ...
                console.log(event.currentTarget.dataset.type)
                // $('#qrcode').qrcode("this plugin is great");
                // $('#qrcode').text('45646646464654')
            },
            onMount(instance) {
            $('#qrcode_aboutus').empty()
            let type = instance.reference.dataset.type
            let url = new URL("install.html?type=" + type ,window.location.href)
            $('#qrcode_aboutus').qrcode({width: 120,height: 120,text: url.toString()})
            },
            allowHTML: true,
        });
    });

    // Arctic Scroll by Paul Adam Davis
    // https://github.com/PaulAdamDavis/Arctic-Scroll
    $.fn.arctic_scroll = function(options) {

        var defaults = {
                elem: $(this),
                speed: 500
            },

            allOptions = $.extend(defaults, options);

        allOptions.elem.click(function(event) {
            event.preventDefault();
            var $this = $(this),
                $htmlBody = $('html, body'),
                offset = ($this.attr('data-offset')) ? $this.attr('data-offset') : false,
                position = ($this.attr('data-position')) ? $this.attr('data-position') : false,
                toMove;

            if (offset) {
                toMove = parseInt(offset);
                $htmlBody.stop(true, false).animate({ scrollTop: ($(this.hash).offset().top + toMove) }, allOptions.speed);
            } else if (position) {
                toMove = parseInt(position);
                $htmlBody.stop(true, false).animate({ scrollTop: toMove }, allOptions.speed);
            } else {
                $htmlBody.stop(true, false).animate({ scrollTop: ($(this.hash).offset().top) }, allOptions.speed);
            }
        });

    };
})(jQuery);


function installAppWithType(type) {
    window.open('./install.html?type=' + type)
}