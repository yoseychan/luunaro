<template>
	<div>
		<div class="section dark">
			<div class="container row justify-content-between">
				<div class="col-xl-8 text neumorphism">
					<h1>About Neumorphism</h1>
					<p> 
						Neumorphism combines characteristics of both skeuomorphism and material design. 
						It mainly uses shadows to make the elements seem to be softly extruded from the background.   
					</p>
					<Button url="examples" theme="shade">See Examples</Button>
				</div>
				<div class="col-xl-3 orn">
					<div class="circle">
						<div class="inner"></div>
					</div>
				</div>
			</div>
		</div>

		<div class="section light">
			<div class="container row justify-content-between">
				<div class="col-xl-3 orn">
					<div class="shape skeumorphism"></div>                
				</div>
				<div class="col-xl-9 text">
					<h2>Skeuomorphism</h2>
					<p>Skeuomorphism in user interfaces imitated the real world textures. Users could easily familiarize with the UI.
						Although it offered great user experience and was affordable,
						it had the downside of leading to very cluttered interfaces with unnecessary features and furthermore cause the UI design stagnation.
					</p>    
				</div>
			</div>
		</div>
		<div class="section light darken">
			<div class="container row justify-content-between">
				<div class="col-xl-8 text">
					<h2>Minimalism</h2>
					<p>Minimalism replaced the skeuomorphism, creating clean interfaces and leaving only the most necessary functionality.
								Flat design replaced the realism in the icons with 2D, that made the icons look flat.
								Material design added a shadow to the elements to give a light accent and make them seem slightly elevated from the background.</p>
				</div>
				<div class="col-xl-3 orn">
					<div class="shape minimalism right"></div>        
				</div>
			</div>
		</div>
		<div class="section red">
			<div class="container row justify-content-between">
				<div class="col-xl-3 orn">
					<div class="shape softness"></div>
				</div>
				<div class="col-xl-9 text">
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

<script>
import Button from '@/components/ui/Button';

export default {
	components: {
		Button
	}
}
</script>

<style scoped lang="scss">
@import '../assets/styles/colors';

.text {
	padding:12px 0;
}

.neumorphism {
	a {
		margin-top:32px;
	}
}

.orn {
	display: inline-block;
	margin: auto 0;
	padding: 50px 16px 20px;

	.circle {
		width: 300px;
		height: 300px;
		margin: 0 auto;
		box-shadow: $shade;

		.inner {
			display: inline-block;
			width: 200px;
			height: 200px;
			margin: 50px 50px;
			box-shadow: $shade-inv;  
		}

		&, .inner {
			border-radius:50%;
		}
	}

	.shape {

		display: inline-block;
		border-radius: 12px;
		width:300px;
        height:300px;


		&.skeumorphism{
			background-image: url('.././assets/wood.jpg');
			background-position: center;
			background-size: cover;
			box-shadow: $bright;
		}

		&.minimalism {
			background-color:$primary;
			-webkit-box-shadow: 4px 4px 12px rgba(0,0,0,0.35);
			-moz-box-shadow: 4px 4px 12px rgba(0,0,0,0.35);
			box-shadow: 4px 4px 12px rgba(0,0,0,0.35);
		}

		&.softness {
			background: linear-gradient(131.93deg, #BC5353 -12.11%, #E07474 -12.11%, #BC5353 53.42%, #A54747 100%), #BC5353;
			box-shadow: $cardinal;
		}
	}
}

</style>