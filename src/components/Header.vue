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

<script>
export default {
  name: 'Header'
}
</script>

<style scoped lang="scss">
@import '../assets/styles/colors';

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
			line-height: 76px ;
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
</style>