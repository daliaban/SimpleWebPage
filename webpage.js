/**
 * Created by dalia on 16/06/16.
 */
'use strict';


jQuery('.dropdown-content a').click(function(e){
    var content = $('#content');
    if ($(e.target).is('#link1')){
        content.children().removeClass('active');
        content.children('#article1').addClass('active');
    } else if ($(e.target).is('#link2')){
        content.children().removeClass('active');
        content.children('#article2').addClass('active');
    } else if ($(e.target).is('#link3')){
        content.children().removeClass('active');
        content.children('#article3').addClass('active');
    } else if ($(e.target).is('#link4')){
        content.children().removeClass('active');
        content.children('#article4').addClass('active');
    } else if ($(e.target).is('#link5')){
        content.children().removeClass('active');
        content.children('#article5').addClass('active');
    }
 });

jQuery('a.sections').click(function(e){
    $('.sectionarticles').removeClass('active');
    var elm = $(e.target).parent('a');
    elm.siblings('div.sectionarticles').addClass('active');
});

