//IIFE TO EXTRACT DIMENSION DATA
var dimensions = (function(){
        var str = document.querySelectorAll("[name='ad.size']")[0].getAttributeNode("content").value;
        var widthMatch = /width\=(\d+)/.exec(str);
        var heightMatch = /height\=(\d+)/.exec(str);
        return {
            width: parseInt(widthMatch[1]),
            height: parseInt(heightMatch[1])
        }
})();

var tl;
var stopWatch;

//INITIALIZE
function init(){

    // Helper function for FOUC
    let domReady = (cb) => {
        document.readyState === 'interactive' || document.readyState === 'complete'
        ? cb()
        : document.addEventListener('DOMContentLoaded', cb);
    };
    
    domReady(() => {
        // Display body when DOM is loaded
        document.body.style.visibility = 'visible';
    });

    IDsToVars();

    container.style.width = dimensions.width + 'px';
    container.style.height = dimensions.height + 'px';
    
    //set timeline
    tl = new TimelineLite();

    addListeners();
    
    animate();
}

function addListeners(){
    //replay functionality
    /*
    replay_button.addEventListener('mouseover',function(){
        TweenLite.fromTo(replay_button, .5, {rotation:'-360'}, {overwrite:false, rotation:'0'});
    })
    replay_button.addEventListener('click',function(){
            tl.restart();
    })
    */
}

//ANIMATE
function animate(){
    stopWatch=new Date().getTime(); 

    //timeline animation here
    
    tl = new TimelineLite();
    tl    
    // set elements
    // .set(og2_2x, {scale:1.2})
    // .set(ched_2x, {scale:1.44})


    // f1
    .to(logo_2x, .7, {x:-dimensions.width/.7, ease:Power2.easeIn},"+=1.3")

    // f2

    .from([c1_2x], .7, {x:dimensions.width/.7, ease:Power1.easeOut},"-=.2")
    .to([c1_2x], .7, {x:-dimensions.width/.7, ease:Power2.easeIn},"+=1")


    // // f3
    .from([og_2x,c2_2x], .7, {x:dimensions.width/.7, ease:Power1.easeOut})
    .to([og_2x,c2_2x], .7, {x:-dimensions.width/.7, ease:Power2.easeIn},"+=1")


    // f4
    .from([c3_2x,ched_2x], .7, {x:dimensions.width/.7, ease:Power1.easeOut})
    .to([c3_2x], .7, {x:-dimensions.width/.7, ease:Power2.easeIn},"f4+=1")

    // f5
    .to(ched_2x, .7, {scale:.86,x:42, y:3, ease:Power1.easeIn},"f4+=1")
    .to(og_2x, .7, {scale:.8,x:-16,y:0, ease:Power1.easeIn},"f4+=1")
    .from(c5_2x, .3, {scale:.9, opacity:0, ease:Power3.easeOut},"+=0.4")


    // add a pause
    .to({}, 1, {})

    .to(c5_2x, .7, {scale:0.7, x:-18, y:-4, ease:Power3.easeIn},"-=.3")
    .to(ched_2x, .7, {scale:.7, x:1, y:0, ease:Power3.easeIn},"ef-=.6")
    .to(og_2x, .7, {scale:.65, x:-63, y:-1, ease:Power3.easeIn},"ef-=.6")
    .from([c6_2x,c7_2x], .7, {scale:.9, opacity:0, ease:Power3.easeOut},"ef")



    .staggerFrom([mini_logo_2x], .8, {scale:.9, opacity:0, ease:Power3.easeOut},0.3,"-=0.1")
    .from(legal_2x, .4, {opacity:0, ease:Power1.easeIn},"-=0.2")


    // f1 start anims
    .from(logo_2x, 3, {scale:1.2, ease:Elastic.easeOut},0)

    //.call(returnTimer)
}

function returnTimer(){
    stopWatch=((new Date().getTime())-stopWatch)*.001;
    console.log(stopWatch+" seconds");
}

function clickThrough(){
    window.open(clicktag);
}

//SET IDs IN DOM TO GLOBAL VARIABLES
function IDsToVars(){
    var allElements = document.getElementsByTagName("*");
    
    for (var q = 0; q<allElements.length; q++){
         var el = allElements[q];
         if (el.id){
            window[el.id]=document.getElementById(el.id);
        }
    }
};