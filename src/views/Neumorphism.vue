<template>
    <div>
        <div class="section dark neu-dark-inv">
            <div class="container row justify-content-between">
                <div class="col-xl-8">
                    <h1>About Neumorphism</h1>
                    <p> 
                        Neumorphism combines characteristics of both skeuomorphism and minimalism. 
                        It mainly uses shadows to make the elements seem to be softly extruded from the background.   
                    </p>
                </div>
                <div class="col-xl-3 orn">
                    <div class="shape sqr neu-darker">
                        <div class="shape-inner sqr neu-darker"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section white neu-light-inv">
            <div class="container row justify-content-between">
                <div class="orn col-xl-3">
                    <div class="shape circle neu-light">
                        <div class="shape-inner circle neu-light-inv"></div>
                    </div>                   
                </div>
                <div class="col-xl-8">
                    <h2>Skeuomorphism</h2>
                    <p>text text text pragraph text text text</p>    
                </div>
            </div>
        </div>
        <div class="section white neu-light-inv">
            <div class="container row justify-content-between">
                <div class="col-xl-8">
                    <h2>Minimalism</h2>
                    <p>text text text pragraph text text text</p>
                </div>
                <div class="col-xl-3 orn">
                    <div class="shape circle neu-light-inv">
                        <div class="shape-inner circle neu-light-inv"></div>
                    </div>        
                </div>
            </div>
        </div>
        <div class="section red neu-red-inv">
            <div class="container row justify-content-between">
                <div class="orn col-xl-3">
                    <div class="shape neu-red-inv sqr">  
                        <div class="shape-inner sqr neu-red-inv"></div>
                    </div>
                </div>
                <div class="col-xl-8">
                    <h2>Heading</h2>
                    <p>text text text pragraph text text text</p>          
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

.dark {
    p {
        margin-top: 30px;
        color: #8B919A;
    }
}
.white {
    background-color: #DEDEDE;
    h2 {
        color: #BC5353;
    }
    p {
        color: #606875;
    }
}

.red {
    background-color: #BC5353;
    h2 {
        color: #DEDEDE;
    }
    p {
        color: #C4C4C4;
    }
    
}

.section {
    min-height: 400px;

    .col-xl-3, .col-xl-8 {
        min-height: 400px;

    }
    .orn {
        display: inline-block;
        margin: 100px auto 0;

    }
    .shape {
        width: 300px;
        height: 300px;
        margin: 0 auto;   
        .shape-inner {
            display: inline-block;
            width: 200px;
            height: 200px;
            margin: 50px 50px;   
        }
    }
    .sqr {
        border-radius: 10px;
    }
    .circle {
        border-radius: 50%;
    }  
    h1 {
        font-weight: 900;
        color:  #BC5353;
    }
    h1, h2 {
        margin-top: 100px;
        
    }
    h2 {
        font-size: 34px;
    }
    p {
        font-size: 20px;
    }
}



</style>