const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

  //function circlemove(){

    var Xscale = 1;
    var Yscale = 1;

    var Xprev =0;
    var Yprev= 0 ;

    window.addEventListener("mousemove", function(dets) {
 


 Xscale = gsap.utils.clamp(.8,1.2,dets.clientX-Xprev);
 Yscale = gsap.utils.clamp(.8,1.2,dets.clientY - Yprev);

 
 Xprev = dets.clientX;
 Yprev = dets.clientY;
 

 circlemousefollower(Xscale,Yscale);
 


    });
///}


document.querySelectorAll('.elem').forEach(function (elem) {
    elem.addEventListener("mousemove",function (details) {
          
        gsap.to(elem.querySelectorAll("img"),{

            opacity:1,
            
        });
    });
});









function firstpageanim() {
         
    var t1 = gsap.timeline();

    t1.from("#nav", {

        y:"-10",
        opacity:0,
        duration: 1.5,
        ease:Expo.easeInOut
    })

  .to(".bondingelem", {

        y:0,
        ease:Expo.easeInOut,
        duration:1.5,
        delay:-1,
        stagger:.2
    })

    .from("#herofooter",{
        y:-10,
        opacity:0,
        duration:1.5,
        delay:-1,
        ease : Expo.easeInOut
    })

}




function cirlcemousefollower() {

    window.addEventListener("mousemove",function (dets)  {

        document.querySelector("#min-cicle").style.transform =`translate(${dets.clientX}px,${dets.clientY}px) `;
    })


}

cirlcemousefollower();
firstpageanim();
circlemove();
