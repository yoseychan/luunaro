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
                   <div class="shape circle neu-darker">
                        <div class="shape-inner circle neu-dark-inv"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section white neu-light-inv">
            <div class="container row justify-content-between">
                <div class="orn col-xl-3">
                    <div class="shape ">
                        <div class="skeumorphism neu-light"></div>
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
                    <div class="shape minimalism"></div>        
                </div>
            </div>
        </div>
        <div class="section red neu-red-inv">
            <div class="container row justify-content-between">
                <div class="orn col-xl-3">
                    <div class="shape softness"></div>
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
        .skeumorphism{
            background-image: url('.././assets/wood.jpg');
            background-position: center;
            background-size: cover;
            width: 300px;
            height: 300px;
            padding: 10px;
            border-radius: 10px;
        }
    }
    .minimalism {
        background-color:#BC5353;
        border-radius: 10px;
        -webkit-box-shadow: 10px 10px 19px -8px rgba(21,21,27,1);
        -moz-box-shadow: 10px 10px 19px -8px rgba(21,21,27,1);
        box-shadow: 10px 10px 19px -8px rgba(21,21,27,1);
    }
    .softness {
        background: linear-gradient(131.93deg, #BC5353 -12.11%, #E07474 -12.11%, #BC5353 53.42%, #A54747 100%), #BC5353;
        box-shadow: 4px 4px 12px #A24747, -4px -4px 12px #C46363;
        border-radius: 10px;
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