var teslaThemes = {

  init: function () {
    this.module();    
  },

  module: function () {
    this.queryLoader();
    this.sticky();
    this.viewport();
    this.flickr();
    this.menu();
    this.knob();
    this.fitvids();
    this.progressBar();
    this.tubular();
    this.zoomImage();
    this.datePicker();
    this.roomSelect();
    this.parallaxEff();
    this.customScroll();
  },
  
  queryLoader: function () {
    jQuery(document).ready(function () {
      jQuery("body").queryLoader2({
        backgroundColor: '#FBFBFB',
        barColor: '#E48D40',
        percentage: false,
        barHeight: 10,
        minimumTime: 3000,
        overlayId: 'theme-loader',
        onComplete: showContent(),
      });

      //jQuery('#theme-loader').prepend('Some text');

      function showContent() {
        jQuery('#home').addClass('show-content');
        teslaThemes.simpleSlider();
      }
    });
  },

  sticky: function () {
    if(jQuery('.sticky-bar').length) {
      jQuery(".sticky-bar").sticky({topSpacing:0});       
    }
  },

  fitvids: function () {
    var video = jQuery('noscript').text();

    if(video.trim().search('iframe') === 1) {
      jQuery('noscript').parent().append(video);      
    }


    jQuery("#home").fitVids({ customSelector: "iframe[src^='//player.vimeo.com'], iframe[src^='//www.youtube.com']"});
  },

  viewport: function () {
     //jQuery(":in-viewport")
     //jQuery(":below-the-fold")
     //jQuery(":above-the-top")
     //jQuery(":left-of-screen")
     //jQuery(":right-of-screen")

    jQuery(window).scroll(function () {
       jQuery('.small-footer:in-viewport').each(function () {
       
     });
    }); 
  },

  parallaxEff: function() {
     jQuery(window).stellar();
  },

  tubular: function () {
    if(jQuery('.full-video').length){
      jQuery('.full-video').tubular({
        videoId : 'ssutK1Gei4A',
        start   : 3
      });
    }

  },

  flickr: function () {
    jQuery('.flickr-widget').each(function(){
        var stream = jQuery(this),
            stream_userid = stream.attr('data-userid'),
            stream_items = parseInt(stream.attr('data-items'));

        $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?lang=en-us&format=json&id="+stream_userid+"&jsoncallback=?", function(stream_feed){
            
            for(var i=0;i<stream_items&&i<stream_feed.items.length;i++){
                var stream_function = function(){
                    if(stream_feed.items[i].media.m){
                        var stream_a = jQuery('<a>').addClass('flickr-link').attr('href',stream_feed.items[i].link).attr('target','_blank');
                        var stream_img = jQuery('<img>').addClass('flickr-img').attr('src',stream_feed.items[i].media.m).attr('alt','').each(function(){
                            var t_this = this;
                            var j_this = jQuery(this);
                            var t_loaded_function = function(){
                                stream_a.append(t_this);
                            };
                            var t_loaded_ready = false;
                            var t_loaded_check = function(){
                                if(!t_loaded_ready){
                                    t_loaded_ready = true;
                                    t_loaded_function();
                                }
                            }
                            var t_loaded_status = function(){
                                if(t_this.complete&&j_this.height()!==0)
                                    t_loaded_check();
                            }
                            t_loaded_status();
                            jQuery(this).load(function(){
                                t_loaded_check();
                            });
                        });
                        stream.append(jQuery('<li class="col-xs-3 col-sm-4 col-md-4">').append(stream_a));
                    }
                }
                stream_function();
            }
        });
    });
  },

  twitter: function () {
    var linkify = function(text) {
        text = text.replace(/(https?:\/\/\S+)/gi, function(s) {
            return '<a href="' + s + '">' + s + '</a>';
        });
        text = text.replace(/(^|)@(\w+)/gi, function(s) {
            return '<a href="http://twitter.com/' + s + '">' + s + '</a>';
        });
        text = text.replace(/(^|)#(\w+)/gi, function(s) {
            return '<a href="http://search.twitter.com/search?q=' + s.replace(/#/, '%23') + '">' + s + '</a>';
        });
        return text;
    };
    jQuery('.twitter-widget').each(function() {
        var t = jQuery(this);
        var t_date_obj = new Date();
        var t_loading = 'Loading tweets..'; //message to display before loading tweets
        var t_container = t.append('<p>' + t_loading + '</p>');
        t.append(t_container);
        var t_user = t.attr('data-user');
        var t_posts = parseInt(t.attr('data-posts'), 10);
        $.getJSON("php/twitter.php?user=" + t_user, function(t_tweets) {
            t_container.empty();
            for (var i = 0; i < t_posts && i < t_tweets.length; i++) {
                var t_date = Math.floor((t_date_obj.getTime() - Date.parse(t_tweets[i].created_at)) / 1000);
                var t_date_str;
                var t_date_seconds = t_date % 60;
                t_date = Math.floor(t_date / 60);
                var t_date_minutes = t_date % 60;
                if (t_date_minutes) {
                    t_date = Math.floor(t_date / 60);
                    var t_date_hours = t_date % 60;
                    if (t_date_hours) {
                        t_date = Math.floor(t_date / 60);
                        var t_date_days = t_date % 24;
                        if (t_date_days) {
                            t_date = Math.floor(t_date / 24);
                            var t_date_weeks = t_date % 7;
                            if (t_date_weeks)
                                t_date_str = t_date_weeks + ' week' + (1 == t_date_weeks ? '' : 's') + ' ago';
                            else
                                t_date_str = t_date_days + ' day' + (1 == t_date_days ? '' : 's') + ' ago';
                        }
                        else
                            t_date_str = t_date_hours + ' hour' + (1 == t_date_hours ? '' : 's') + ' ago';
                    }
                    else
                        t_date_str = t_date_minutes + ' minute' + (1 == t_date_minutes ? '' : 's') + ' ago';
                }
                else
                    t_date_str = t_date_seconds + ' second' + (1 == t_date_seconds ? '' : 's') + ' ago';
                var t_message =
                        '<p>' +
                        linkify(t_tweets[i].text) +
                        '<span>' +
                        t_date_str +
                        '</span>' +
                        '</p>';
                t_container.append(t_message);
            }
        });
    });
  },

  menu: function () {
    var menu = jQuery('.main-nav'),
        menuSwitch = jQuery('.mobile-switch'),
        mobileMenu;

    if(jQuery(window).width() < 992) {
      menu.addClass('mobile-menu');
    }

    jQuery(window).resize(function(e) {
      if(e.target.innerWidth < 992) {
        menu.addClass('mobile-menu');
      } else {
        menu.removeClass('mobile-menu');
        jQuery('body').removeClass('acitve-mobile');
      }
    });

    mobileMenu = jQuery('.mobile-menu');

    menuSwitch.click(function(e) {
      e.preventDefault();

      jQuery('body').toggleClass('acitve-mobile');

    });

  },

  simpleSlider: function () {

    jQuery( '.simple-slider' ).sudoSlider({
       numeric: false,
       controlsShow: false,
       responsive: true,
       autoHeight: false,
       effect: "random",
       customLink: '.custom-controls a',
       continuous: true,
       updateBefore: true,
       animationZIndex: 10,
    });

    jQuery( '.slider-helper' ).sudoSlider({
       numeric: false,
       controlsShow: false,
       responsive: true,
       autoHeight: false,
       effect: "fadeOutIn",
       customLink: '.custom-controls a',
       continuous: true,
       updateBefore: true,
       animationZIndex: 10,
    });

    var roomSlider = jQuery( '#rooms-slider' ).sudoSlider({
       numeric: false,
       controlsShow: false,
       responsive: true,
       slideCount: 3,
       moveCount: 1,
       speed: 500,
       continuous: true,
       updateBefore: true,
       customLink: '#controls-carousel a',
    });

    if(jQuery( '#rooms-slider' ).length) {
      if(jQuery(window).width() < 990 && jQuery(window).width() > 768) {
        roomSlider.setOption('slideCount', 2);
      }else if(jQuery(window).width() < 768) {
        roomSlider.setOption('slideCount', 1);
      }else {
        roomSlider.setOption('slideCount', 3);
      }

      jQuery(window).resize(function() {
      if(jQuery(window).width() < 990 && jQuery(window).width() > 768) {
        roomSlider.setOption('slideCount', 2);
      }else if(jQuery(window).width() < 768) {
        roomSlider.setOption('slideCount', 1);
      }else {
        roomSlider.setOption('slideCount', 3);
      }
    });
    }

    var roomNav = jQuery( '.preview-room-nav' ).sudoSlider({
       numeric: false,
       controlsShow: false,
       responsive: true,
       slideCount: 8,
       moveCount: 1,
       speed: 500,
       continuous: true,
       updateBefore: true,
       customLink: '.preview-room-nav b',
    });

      if(jQuery( '#portfolio-slider' ).length) {
        jQuery(window).resize(function() {
        if(jQuery(window).width() < 992) {
          roomNav.setOption('slideCount', 1);
        }else {
          roomNav.setOption('slideCount', 3);
        }
      });
    }

    jQuery( '#review-slider' ).sudoSlider({
       numeric: false,
       controlsShow: false,
       responsive: true,
       slideCount: 1,
       moveCount: 1,
       speed: 500,
       continuous: true,
       updateBefore: true,
       customLink: '.review-nav',
    });

    jQuery( '.preview-room' ).sudoSlider({
       numeric: false,
       controlsShow: false,
       responsive: true,
       autoHeight: false,
       effect: "fadeOutIn",
       customLink: '.preview-room-nav a',
       continuous: true,
       updateBefore: true,
       animationZIndex: 10,
    });

    jQuery( '#testimonials-slider' ).sudoSlider({
       numeric: false,
       responsive: true,
       moveCount: 1,
       speed: 1000,
       updateBefore: true,
       vertical: true,
       continuous: true,
       auto: true,
       prevhtml:          ' <a href="#" class="prev-nav"><i class="icon-503"></i></a> ',
       nexthtml:          ' <a href="#" class="next-nav"><i class="icon-515"></i></a> ',
       controlsattr:      'id="controls-testimonials"'
    });

    jQuery( '.booking-slider' ).sudoSlider({
       numeric: false,
       controlsShow: false,
       responsive: true,
       slideCount: 1,
       moveCount: 1,
       speed: 500,
       continuous: false,
       updateBefore: true,
       customLink: '.nav-step',
    });

    jQuery( '.portfolio-slider' ).sudoSlider({
       numeric: false,
       responsive: true,
       moveCount: 1,
       speed: 1000,
       auto: false,
       continuous: true,
       updateBefore: true,
       prevhtml:          ' <a href="#" class="prev-nav"><i class="icon-517"></i></a> ',
       nexthtml:          ' <a href="#" class="next-nav"><i class="icon-501"></i></a> ',
       controlsattr:      'id="controls"',
       numericattr:       'class="slider-nav"', 
    });

    jQuery( '.event-slider' ).sudoSlider({
       numeric: false,
       responsive: true,
       controlsShow: false,
       moveCount: 1,
       speed: 1000,
       auto: false,
       continuous: true,
       updateBefore: true,
       customLink: '.event-nav a, #controls > a',
    });

    jQuery( '.event-nav' ).sudoSlider({
       numeric: false,
       controlsShow: false,
       responsive: true,
       slideCount: 4,
       moveCount: 1,
       speed: 500,
       continuous: true,
       updateBefore: true,
       customLink: '.event-nav a, #controls > a',
    });

  },

  knob: function () {

    jQuery(".statistic-item").knob({
      thickness: '.1',
      lineCap: 'round',
      fgColor: '#ffffff',
      bgColor: 'rgba(255,255,255,0.2)',
      readOnly: true,
      displayInput: true,
      font: "Oxygen",
      fontWeight: '300',
      step: 1,
    });

    function animate () {

      jQuery(".statistic-item").each(function() {
        var defaultVal = jQuery(this).val(),
            item = jQuery(this),
            i = 0,
            statisticAnimation = setInterval(function(){
              if(i<=defaultVal) {
                item.val(i).trigger("change");
                i++;
              } else {
                clearInterval(statisticAnimation);
              }
            }, 50);

      });

    }

    animate();

  },

 progressBar: function () {
    var target = jQuery('.progresive-bar-items > li'),
        bar = jQuery('.progresive-bar-items > li span');

    target.each(function (e) {

      var data = bar.eq(e).data('progress');
      var i = 100;

      data = 100-data;

      var progressVal = setInterval(function() {
        if (i > data) {

          if(i%2 == 0) {
            i = i+3;
          } else {
            i = i-5;
          }

          bar.eq(e).css('right', i+'%');
        } else {
          clearInterval(progressVal);
        }          
      }, 20);
      
    });
  },

  datePicker: function() {
    jQuery('#check-in').val("Check-in");
    jQuery('#check-out').val("Check-out");
    jQuery('#check-in').datetimepicker({
      format:'m-d-Y',
      onShow:function( ct ){
        this.setOptions({
          minDate:jQuery('#check-in').val()?jQuery('#check-out').val():false
        })
      },
      timepicker:false
    });
    jQuery('#check-out').datetimepicker({
      format:'m-d-Y',
      onShow:function( ct ){
        this.setOptions({
          minDate:jQuery('#check-in').val()?jQuery('#check-out').val():false
        })
      },
      timepicker:false
    });
  },

  roomSelect: function() {
    var select = jQuery('.room-select').parent();

    select.click(function(e) {
      e.preventDefault();
      select.not(jQuery(this)).find('ul').hide();
      jQuery(this).find('ul').toggle();
    });

    jQuery('html').click(function() {
      select.find('ul').hide();
    });

    select.each( function(index, val) {
      jQuery(this).click(function(event){
        event.stopPropagation();
      });
    });

    select.each( function(index, val) {
      jQuery(this).find('ul li').click(function(e) {
        e.preventDefault();
          jQuery(this).parent().parent().find('input').attr('value', jQuery(this).text());
      });
    });
  },

  zoomImage: function () {
    jQuery( '.zoom-image' ).swipebox();
  },

  customScroll: function() {
    if(jQuery('#custom-scroll').length){
      var container = jQuery('#custom-scroll'),
          conHeight = container.height(),
          scrollArea = jQuery('#custom-scroll > ul'),
          saHeight = scrollArea[0].scrollHeight,
          offset = saHeight - conHeight,
          scrollPen = jQuery('.scroll-bar span'),
          penHeight = Math.round(Math.round((conHeight/saHeight)*100)/100 * conHeight),
          topOffset = conHeight - penHeight,
          scrolled;

          if(saHeight > conHeight) {
            scrollPen.height(penHeight);
            scrollArea.scroll(function() {
              scrolled  = jQuery(this).scrollTop();
              scrollPen.css('top', Math.round(scrolled/topOffset*100));
            });      

          } else {
            scrollPen.parent().hide();
          }
    }

  },

};

(function () {
    'use strict';
    teslaThemes.init();
}());
