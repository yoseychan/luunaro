<template>
    <div class="container section"> 
        <h3>Buttons</h3>
        <p>Here are some of the button styles of the neumorphic design - squared with rounded edges and completely rounded buttons. </p>
        <div class="row justify-content-around">
            <div class="dark neu-dark-inv col-xl-6 justify-cone">
                <h4>Dark mode</h4>
                <div class="square">
                    <h5>Squared buttons</h5>
                    <div class="btns sqr lg neu-darker"> Large </div>
                    <div class="btns sqr md neu-darker"> Medium </div>
                    <div class="btns sqr sm neu-darker"> Small </div>
                </div>
                <div class="square">
                    <div class="btns sqr lg disabled neu-dark-inv"> Disabled </div>
                    <div class="btns sqr md disabled neu-dark-inv"> Disabled </div>
                    <div class="btns sqr sm disabled neu-dark-inv"> Disabled </div>
                </div>
                <div class="rounded">
                    <h5>Rounded buttons</h5>
                    <div class="btns round lg neu-darker"> L </div>
                    <div class="btns round md neu-darker"> M </div>
                    <div class="btns round sm neu-darker"> S </div>
                </div>
                <div class="rounded">
                    <div class="btns round lg disabled neu-dark-inv"> D </div>
                    <div class="btns round md disabled neu-dark-inv"> D </div>
                    <div class="btns round sm disabled neu-dark-inv"> D </div>
                </div>
            </div>
            <div class="white col-xl-6">
                <h4>Light mode</h4>
                <div class="square">
                    <h5>Squared buttons</h5>
                    <div class="btns sqr lg neu-light"> Large </div>
                    <div class="btns sqr md neu-light"> Medium </div>
                    <div class="btns sqr sm neu-light"> Small </div>
                       
                </div>
                <div class="square">
                    <div class="btns sqr lg neu-light disabled"> Disabled </div>
                    <div class="btns sqr md neu-light disabled"> Disabled </div> 
                    <div class="btns sqr sm neu-light disabled"> Disabled </div>  
                </div>
                <div class="rounded">
                    <h5>Rounded buttons</h5>
                    <div class="btns round lg neu-light"> L </div>
                    <div class="btns round md neu-light"> M </div>
                    <div class="btns round sm neu-light"> S </div>
                </div>
                <div class="rounded">
                    <div class="btns round lg disabled neu-light"> D </div>
                    <div class="btns round md disabled neu-light"> D </div>
                    <div class="btns round sm disabled neu-light"> D </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Buttons',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
h3{
    color: #BC5353;
}
p {
    color: #606875;
    max-width: 800px;   
}
.section{
    margin-top: 100px;
    .row {
        margin: 50px 0 70px;   
    }
}
.dark, .white {
    padding: 30px 20px; 
    h4 {
        text-align: center;
        margin: 20px 0;
        font-size: 22px;
    }
    h5 {
        margin: 40px 0 20px;
    }
    .btns {
        display: inline-block;
        margin: 20px 10px;   
        text-align: center;
        color:#BC5353;
        transition: .6s;
        padding: 15px;
        cursor: pointer;
    }
    .sqr {
        border-radius: 10px;
    }
    .round {
        border-radius: 50%;   
    }
    .disabled {
        cursor: default;
    }
    .rounded {
        .round {
            margin: 20px 30px;
        }
        .lg {
            width: 80px;
            height: 80px;
            line-height: 50px;
            font-size: 24px;
            font-weight: 700;
        }
        .md {
            width: 60px;
            height: 60px;
            line-height: 30px;
            font-size: 18px;
        }
        .sm {
            width: 40px;
            height: 40px;
            line-height: 12px;
            font-size: 12px;
        }
        
    }
    .square {
        .sqr {
            margin:20px 30px;
        }
        .lg  {
            width: 280px;
            font-size: 24px;
            font-weight: 600;  
        }
        .md {
            width: 150px;
            padding: 10px;
            font-size: 18px;
        }
        .sm {
            width: 80px;
            padding: 5px;
            font-size: 12px;
        }
    }
    
}
// Dark mode Buttons

.dark {
    border-radius: 10px;
    h4, h5 {
        color: #606875;
    }
    .disabled {
        color: #626262;  
    }
    .btns:hover {
        box-shadow: inset 4px 4px 12px #0A0A0D, inset -4px -4px 12px #21212E;
    }
}

.white {
    background-color: #DEDEDE;
    box-shadow: inset 4px 4px 12px #3b3b3b, inset -4px -4px 12px #EFEFEF;
    border-radius: 10px;
    .disabled {
        box-shadow: inset 4px 4px 12px #b3b3b3, inset -4px -4px 12px #ffffff;
        color: #646464;
    }
    .btns:hover {
        box-shadow: inset 4px 4px 12px #b3b3b3, inset -4px -4px 12px #ffffff;
        
    }
}
</style>