<template>
	<div>
		<div id="header">
			<div class="container">
				<router-link class="logo" to="/">Luunaro</router-link>
				<div class="right">
					<router-link class="hnav" to="/neumorphism">Neumorphism</router-link>
					<router-link to="/examples">Examples</router-link>
                    <router-link to="/usability">Usability</router-link>
					<router-link to="/about">About</router-link>
				</div>
                <div class="burger">
                    <a href="#" v-on:click="openMenu" class="menu-button" v-bind:class="classObject" id="menuButton">
                        <span class="burger-icon"></span>
                    </a>

                    <div class="burger-menu-bg" v-bind:class="classObject">
                        <div class="burger-menu-items">
                            <router-link v-on:click="closeMenu" v-bind:class="classObject" class="hnav" to="/neumorphism">Neumorphism</router-link>
                            <router-link v-on:click="closeMenu" to="/examples">Examples</router-link>
                            <router-link v-on:click="closeMenu" to="/usability">Usability</router-link>
                            <router-link  v-on:click="closeMenu" to="/about">About</router-link>
                        </div>
                    </div>
                </div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Header',
	data: function () {
		return {
			isActive: false
		}
	},
	computed: {
		classObject: function () {
			return {
                active: this.isActive,
    
			}
		}
	},
	methods: {
		openMenu: function (e) {

			// Just makes sure that it doesn't treat it as a link.
			e.preventDefault();
			
			if (this.isActive) {
				this.isActive = false;
			} else {
				this.isActive = true;
			}
        },
        closeMenu: () => {
               
			this.isActive = false;
        }
	}
}
</script>

<style scoped lang="scss">
@import '../assets/styles/colors';

@import "../assets/styles/burger";
.burger {
    display:none;
}
.menu-button {
	padding: .5em;
	position:absolute;
	top:28px;
	right:12px;
	z-index:9000;
}
.burger-menu-bg.active {
    height: 200px;
} 
.burger-menu-bg {
	position: absolute;
	top:80px;
	left:0;
	right:0;
	bottom:0;
    background: $dark;
	z-index:8800;
	opacity:0;
    padding-top:20vh;
    
    .burger-menu-items {
        position: absolute;
        top: 30px;
        left: 0;
        a {
			transition: .26s;	
		}   
		a:hover {
			color: $txt-onDark-0;
		}
		a.disabled {
			color: $txt-onDark-2;
			text-decoration: line-through;
		}
		a.disabled:hover {
			color: $txt-onDark-2;
			cursor: default;
		} 
        a.disabled {
			color: $txt-onDark-2;
			text-decoration: line-through;
		}
		a.disabled:hover {
			color: $txt-onDark-2;
			cursor: default;
		}
    }
	a {
		width:100vw;
		text-align:center;
		color: $txt-onDark-1;
		font-size: 20px;
		text-decoration: none;
		padding: 24px;
		margin-bottom:10px;
		transition: .26s;

		a {
			transition: .26s;
			line-height: 76px;
		}   
		a:hover {
			color: $txt-onDark-0;
		}
		a.disabled {
			color: $txt-onDark-2;
			text-decoration: line-through;
		}
		a.disabled:hover {
			color: $txt-onDark-2;
			cursor: default;
		} 
        a.disabled {
			color: $txt-onDark-2;
			text-decoration: line-through;
		}
		a.disabled:hover {
			color: $txt-onDark-2;
			cursor: default;
		}
	}

	&.active {
		opacity:100;
	}
}

.burger-icon {
    @include burger(25px, 3px, 5px, $txt-onDark-0);

}

.menu-button.active .burger-icon {
    @include burger-to-cross;

}



#header {
	min-height:76px;

	.container {
		border-bottom: 2px solid lighten($dark, 4%);
	}

	.logo {
		float: left;
		font-family: 'Megrim', cursive;
		font-size: 44px;
		font-weight: 900;
		padding: 5px ;
		color: $primary;  
	}
	.right {
		a {
			transition: .26s;
			line-height: 76px;
		}   
		a:hover {
			color: $txt-onDark-0;
		}
		a.disabled {
			color: $txt-onDark-2;
			text-decoration: line-through;
		}
		a.disabled:hover {
			color: $txt-onDark-2;
			cursor: default;
		} 
	}
	a {
		display: inline-block;
		color: $txt-onDark-1;
		font-size: 20px;
		text-decoration: none;
		padding: 0 12px;

		&.router-link-exact-active {
			color: $primary;
		}
	}
}
//burger menu
@media screen and (max-width: 700px){
    #header {
        .right{
            display: none;
        }
        .burger {
            display: block;
        }
    }
}

</style>