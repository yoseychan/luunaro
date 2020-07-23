<template>
    <div>
        <div class="section dark neu-dark-inv">
            <div class="container row justify-content-between">
                <div class="col-xl-8">
                    <h1>About Neumorphism</h1>
                    <p> 
                        Neumorphism combines characteristics of both skeuomorphism and material design. 
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
                    <p>Skeuomorphism in user interfaces imitated the real world textures. Users could easily familiarize with the UI.
                         Although it offered great user experience and was affordable,
                         it had the downside of leading to very cluttered interfaces with unnecessary features and furthermore cause the UI design stagnation.
                    </p>    
                </div>
            </div>
        </div>
        <div class="section white neu-light-inv">
            <div class="container row justify-content-between">
                <div class="col-xl-8">
                    <h2>Minimalism</h2>
                    <p>Minimalism replaced the skeuomorphism, creating clean interfaces and leaving only the most necessary functionality.
                         Flat design replaced the realism in the icons with 2D, that made the icons look flat.
                         Material design added a shadow to the elements to give a light accent and make them seem slightly elevated from the background.</p>
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
                    <h2>Softness</h2>
                    <p>Similarly to material design, neumorphism made the elements seem extruded or pushed in softly. The design uses multiple shadows to give an element a dimension.
                         Another characteristic of Neumorphism is the rounded edges of the elements.
                         The non changing colour of the element, round edges and multiple shadows make it seem as the element has a nearly touchable, soft form.
                    </p>          
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