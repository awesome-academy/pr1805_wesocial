// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require ./lib/webfontloader
//= require ./lib/jquery-3.2.1
//= require ./lib/jquery.appear
//= require ./lib/jquery.mousewheel
//= require ./lib/perfect-scrollbar
//= require ./lib/jquery.matchHeight
//= require ./lib/svgxuse
//= require ./lib/imagesloaded.pkgd
//= require ./lib/Headroom
//= require ./lib/velocity
//= require ./lib/ScrollMagic
//= require ./lib/jquery.waypoints
//= require ./lib/jquery.countTo
//= require ./lib/popper
//= require ./lib/material
//= require ./lib/bootstrap-select
//= require ./lib/smooth-scroll
//= require ./lib/selectize
//= require ./lib/swiper.jquery
//= require ./lib/moment
//= require ./lib/daterangepicker
//= require ./lib/simplecalendar
//= require ./lib/fullcalendar
//= require ./lib/isotope.pkgd
//= require ./lib/ajax-pagination
//= require ./lib/Chart
//= require ./lib/chartjs-plugin-deferred
//= require ./lib/circle-progress
//= require ./lib/loader
//= require ./lib/run-chart
//= require ./lib/jquery.magnific-popup
//= require ./lib/jquery.gifplayer
//= require ./lib/mediaelement-and-player
//= require ./lib/mediaelement-playlist-plugin
//= require ./lib/ion.rangeSlider
//= require ./lib/base-init
//= require ./lib/fontawesome-all
//= require ./lib/bootstrap.bundle
//= require rails-ujs
//= require activestorage
//= require_tree .

$(document).ready(function() {
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
      var target = this.href.split('#');
      $('.nav a').filter('a[href="#'+target[1]+'"]').tab('show');
  })
})