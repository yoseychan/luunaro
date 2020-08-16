<template>
	<div>
		<div id="footer">
			<div class="container fupper">
				<div class="left">
					<p>More information available at:</p>
					<ul class="ficons">
						<li><a class="bttn shade small" href="https://www.figma.com/proto/9W9TLv1w2PWI55XMzDP4jo/Major-project?node-id=13%3A15&scaling=min-zoom"><i class="fab fa-figma"></i></a></li>
						<li><a class="bttn shade small" href="https://www.youtube.com/watch?v=tAs59fxBDSU" target="_blank"><i class="fab fa-youtube"></i></a></li>
						<li><a class="bttn shade small" href="https://github.com/yoseychan/luunaro" target="_blank"><i class="fab fa-github"></i></a></li>
						<li><a class="bttn shade small" href="https://uxdesign.cc/neumorphism-in-user-interfaces-b47cef3bf3a6" target="_blank"><i class="fab fa-medium-m"></i></a></li>
						<li><a class="bttn shade small" href="https://dribbble.com/tags/softui" target="_blank"><i class="fab fa-dribbble"></i></a></li>
					</ul>
				</div>

				<div class="right fnav">
					<router-link to="/" replace>Home</router-link> |
					<router-link to="/neumorphism">Neumorphism</router-link> |
					<router-link to="/examples">Examples</router-link> |
                    <router-link to="/usability">Usability</router-link> |
					<router-link to="/about">About</router-link>
				</div>
			</div>  
		</div>
		
		<div class="flogo"> <span>Luunaro</span> © 2020, All Rights Reserved</div>
	</div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped lang="scss">

@import '../assets/styles/colors';
@import '../assets/styles/buttons';

#footer {
		
	min-height: 160px;

	.container {
		border-bottom: 2px solid lighten($dark, 4%);
	}

	a.bttn {

    width:80px;
    height:80px;
    border-radius:50%;
    line-height:80px;

  }


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
			display: inline-block;
			color: $txt-onDark-1;
			font-size: 14px;
			text-decoration: none;
			box-sizing: border-box;

			i {
				margin: 0 auto;
				padding: 12px;
			}

			&:hover {
				color: $txt-onDark-0;
			}
			&.disabled {
				color: $txt-onDark-2;
				text-decoration: line-through;
				cursor: default;
			}
			&.disabled:hover {
				color: $txt-onDark-2;
			} 
		}

    p {
        display: inline-block;
        color: $txt-onDark-1;
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
                //box-shadow: 4px 4px 12px #0F0F13, -4px -4px 15px #1b1b23;
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
                //box-shadow: inset 4px 4px 12px #0A0A0D, inset -4px -4px 12px #21212E;
            }
        }
    }
}

.flogo {
    padding: 20px 0;  
    color: $txt-onDark-2;
		font-weight: 200;
		font-size:14px;
		text-align: center;
		
		span {
			font-family: 'Megrim', cursive;
			font-size:16px;
			font-weight: 900;
		}
}
</style>