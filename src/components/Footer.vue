<template>
    <div>
        <div id="footer">
            <div class="container fupper">
                <div class="left">
                    <p>More information available at:</p>
                    <ul class="ficons">
                        <li><a href="#"><i class="fab fa-figma"></i></a></li>
                        <li><a href="https://www.youtube.com/watch?v=tAs59fxBDSU" target="_blank"><i class="fab fa-youtube"></i></a></li>
                        <li><a href="https://github.com/yoseychan/luunaro" target="_blank"><i class="fab fa-github"></i></a></li>
                        <li><a href="https://uxdesign.cc/neumorphism-in-user-interfaces-b47cef3bf3a6" target="_blank"><i class="fab fa-medium-m"></i></a></li>
                        <li><a href="https://dribbble.com/tags/softui" target="_blank"><i class="fab fa-dribbble"></i></a></li>
                    </ul>
                </div>

                <div class="right fnav">
                    <router-link to="/" replace>Home</router-link> |
                    <router-link to="/neumorphism">Neumorphism</router-link> |
                    <router-link to="/examples">Examples</router-link> |
                    <a class="disabled">Usability</a> | 
                    <router-link to="/about">About</router-link>
                </div>
            </div>  
        </div>
        <div class="flogo"> Luunaro </div>
    </div>
</template>

<style scoped lang="scss">

#footer {
    box-shadow: 4px 4px 12px #0f0f13;
    min-height: 160px;
    .fupper {
        min-height: 200px;
    }
    .disabled {
        color:#21212E;
    }
    .disabled:hover{
        color: #21212E;
    }
    .fnav {
        margin-top: 50px;
    }
    a {
        color: #626262;
        font-size: 14px;
        text-decoration: none;
        transition: .6s;
        box-sizing: border-box;
        i {
            margin: 0 auto;
            padding: 12px;
        }
    }
    a:hover {
        color: #ADADAD;
    }
    p {
        display: inline-block;
        color: #626262;
        margin-top: 100px;
    }
    .ficons {
        display: inline-block;
        list-style-type: none;
        margin: none;
        li {
            display: inline-block;
            padding: 5px 15px;
            a {
                box-shadow: 4px 4px 12px #0F0F13, -4px -4px 15px #1b1b23;
                display: inline-block;
                height: 60px;
                width: 60px;
                border-radius: 100%;
                transition: .6s;
                i {
                    font-size: 38px;
                }
            }
            a:hover {
                color:#BC5353;
                box-shadow: inset 4px 4px 12px #0A0A0D, inset -4px -4px 12px #21212E;
            }
        }
    }
}

.flogo {
    box-shadow: 4px 4px 12px #0f0f13;
    padding: 20px 0;  
    color: #646363;
    font-weight: 900;
    font-family: 'Megrim', cursive;
    text-align: center;
}
</style>

<script>
export default {
    name: 'Footer',
    props: {
        msg: String,
    }
}
</script>