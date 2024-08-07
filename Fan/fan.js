function runFan(opt){
    if(opt==0){
        document.querySelector('[data-alam="myfanBoxe"]').style.animationPlayState= 'paused';

    } else if(opt == 1){
        document.querySelector('[data-alam="myfanBoxe"]').style.animationPlayState='running';
        document.querySelector('[data-alam="myfanBoxe"]').style.animationDuration='0.40s';

    } else if(opt == 2){
        document.querySelector('.fanbox').style.animationPlayState='running';
        document.querySelector('#fanid').style.animationDuration='0.25s';

    } else if(opt == 3){
        document.querySelector('.fanbox').style.animationPlayState='running';
        document.querySelector('#fanid').style.animationDuration='0.15s';


    } else{
        document.getElementById("fanid").style.animationPlayState='running';
        document.getElementById('fanid').style.animationDuration='0.1s';
        
    }
    
};