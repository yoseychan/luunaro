<template>
<div>
    <div class="container row justify-content-around dark">
        <div class="ff col col-xl-6">
            <h1><span>Neumorphism </span> - the new web design of 2020</h1>
            <p>
                After the skeuomorphism was replaced with minimalism - flat design and material design in 2010, skeuomorphism did not really disappear.
                Neumorphistic design is the new combination of both - minimalism and skeuomorphism, and is widely discussed among web designers and developers in 2020.
            </p>
            <div class="buttn neu-darker">
                <router-link to="neumorphism"> Read more </router-link>
            </div>
        </div>
        <div class="logo-place col-xl-5">
            <div class="logo"></div>
        </div>
    </div>

    <div class="section red">
        <div class="container row justify-content-around">
            <div class="col-xl-3">
                <div class="bubble b1">
                    <h2>Soft</h2>
                    <p>Made from soft-like material, you could almost touch</p>
                </div>
            </div>
            <div class="col-xl-4">
                <div class="bubble b2">
                    <h2>Neumorphic</h2>
                    <p>Longer or same description length as the first bubble, but it can aslo hold longer text</p>
                </div>
            </div>
            <div class="col-xl-3">
                <div class="bubble b1">
                    <h2>Minimalistic</h2>
                    <p>Adding </p>
                </div>
            </div>
        </div>
    </div>

    <div class="section white">
        <div class="container row justify-content-center">
            <div class="menu-list col">
                <div class="headings">
                    <h3>Neumorphism</h3>
                </div>
                <div class="text">
                    <p>Find out more about neumorphism and its predecessor design concepts - material desing and skeuomorphism.</p>
                </div>
                <div class="buttn neu-light">
                    <router-link to="/neumorphism">Read more</router-link>
                </div>
            </div>
            <div class="menu-list col">
                <div class="headings">
                    <h3 class="align-items-center">Examples</h3>
                </div>
                <div class="text">
                    <p>Try out a few interactive Neumorphic elements and sample applications! </p>
                </div>
                <div class="buttn neu-light">
                    <router-link to="/examples">Take me there</router-link>
                </div>
            </div>
            <div class="menu-list col">
                <div class="headings">
                    <h3>Usability</h3>
                </div>
                <div class="text">
                    <p>List of recommendations, pros and cons of Neumorphic design.</p>
                </div>
                <div class="buttn neu-light-inv disabled">
                    <router-link to="/">Coming soon</router-link>
                </div>
            </div>
        </div>
    </div>
</div>
</template>


<style scoped lang="scss">

 a {
    text-decoration: none;
  } 

//FIRST FOLD SECTION
.dark {
    min-height: 880px;
}
.ff {
    max-width: 600px;
    margin: 200px 0 50px;
    span {
        color: #BC5353;
    }
    h1 {
        color: #C4C4C4;
    }
    p {
        color: #606875;
        margin-top: 50px;
    }
    .buttn {
        margin-top: 70px;
        transition: .6s;
        a {
            color:#BC5353;
            font-weight: 900;
            font-size: 20px;
        }
    }
    .buttn:hover {
        box-shadow: inset 4px 4px 12px #0A0A0D, inset -4px -4px 12px #21212E;
    }
}
.logo-place {
    .logo {
        background-image: url('.././assets/logo.png');
        background-position: center;
        background-size: contain;
        width: 400px;
        height: 400px;
        margin: 170px auto 50px;
    }
}

 //SECOND FOLD BUBBLES

.red {
    background-color: #BC5353;
    min-height: 600px;
    .col-xl-3 {
        width:300px
    }
    .col-xl-4 {
        width:460px;
    }
    .col-xl-3, .col-xl-4 {
        min-height: 460px;
        .bubble {
            border-radius: 50%;
            margin: 100px auto;
            display: flex;
            justify-content: center;
            flex-direction: column;
            h2, p {
                margin: 0;
                text-align: center;
                color: #DEDEDE;
            }
            h2 {
                font-weight: 700;
                margin-bottom: 30px;
            }
            p { 
                width: 290px; 
                margin: 0 auto;
            }
        }
        .b1 {
            width: 330px;
            height: 330px;
            background: linear-gradient(131.93deg, #BC5353 -12.11%, #E07474 -12.11%, #BC5353 53.42%, #A54747 100%), #BC5353;
            box-shadow: 4px 4px 12px #A24747, -4px -4px 12px #C46363;
        }
        .b2 {
            width: 450px;
            height: 450px;
            background: linear-gradient(134.57deg, #953B3B 4.13%, #BC5353 50.15%, #C76161 93.39%), #BC5353;
            box-shadow: inset 4px 4px 12px #A24747, inset -4px -4px 12px #C46363;
        }
    }
}

// White section

.white {
    background-color: #DEDEDE;
    min-height: 500px;
    box-shadow: inset 4px 4px 12px #4d4d4d, inset -4px -4px 12px #b3b3b3;
    h3 {
        color: #BC5353;
        font-weight: 900;
        text-align: center;
        line-height: 150px;
  }
}

.section {
    width:100%;
}

.menu-list {
    min-width: 350px;
    max-width: 350px;
    margin: 100px 40px;
    .headings {
        background-color: #D3D3D3;
        border-radius: 10px;
        height: 150px;
    }
    .text {
        margin: 30px 0;
        max-width: 330px;
        height: 80px;
        color: #646464;
        p {
            text-align: justify;
        }
    }
    .buttn {
        margin-top: 40px auto;
        width: 320px;
        border-radius: 10px;
        text-align: center;
        transition: .6s; 
        a {
            width: 320px;
            padding: 10px 0;
            display: inline-block; 
            color:#BC5353;
        }
    }
    .buttn:hover {
        box-shadow: inset 4px 4px 12px #b3b3b3, inset -4px -4px 12px #ffffff;
    }
    .disabled {
        a {
            color:#646464;
            cursor: default;
        }
    }
}

.buttn { 
    width: 330px;
    border-radius: 10px;
    text-align: center;
    transition: .6s;
        a {
        width: 330px;
        padding: 10px 5px;
        display: inline-block;
        font-size: 20px;
        font-weight: 900;  
    }
}

  
</style>
<script>

export default {
  name: 'Home',

}
</script>
