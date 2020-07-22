<template>
    <div>
        <div id="header">
            <div class="container">
                <router-link class="logo" to="/">Luunaro</router-link>
                <div class="right">
                    <router-link class="hnav" to="/neumorphism">Neumorphism</router-link>
                    <router-link to="/examples">Examples</router-link>
                    <a class="disabled">Usability</a>
                    <router-link to="/about">About</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

#header {
    box-shadow: 4px 4px 12px #0f0f13;
    min-height:76px;
    .disabled {
        color:#21212E;
    }
    .disabled:hover{
        color: #21212E;
    }
    .logo {
        float: left;
        font-family: 'Megrim', cursive;
        font-size: 44px;
        font-weight: 900;
        padding: 5px ;
        color: #BC5353;  
    }
    .right {
        a {
            transition: .6s;
            line-height: 76px ;
        }   
        a:hover {
            color:#BC5353;
        }
        a.disabled {
            color:#626262;
        }
        a.disabled:hover {
            color:#626262;
            cursor: default;
        } 
    }
    a {
        display: inline-block;
        color: #ADADAD;
        font-size: 20px;
        text-decoration: none;
        padding: 0 12px;
        &.router-link-exact-active {
            color: #BC5353;
        }
    }
}
</style>
<script>
export default {
    name: 'Header',
    props: {
        msg: String,
    }
}
</script>