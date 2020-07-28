<template>
	<div class="container"> 
		<h3>Buttons</h3>
		<p>Here are some of the button styles of the neumorphic design - squared with rounded edges and completely rounded buttons. </p>

		<div class="row justify-content-around">
			<div class="dark col-xl-6 justify-cone">

				<h4>Dark mode</h4>
				<div class="square">
					<h5>Squared Buttons</h5>
					<Button url="" theme="shade" size="large">Large</Button>
					<Button url="" theme="shade">Default</Button>
					<Button url="" theme="shade" size="small">Small</Button>
				</div>
				<div class="square">
					<h5>Disabled Square Buttons</h5>
					<Button url="" theme="shade" size="large" disabled>Large</Button>
					<Button url="" theme="shade" disabled>Default</Button>
					<Button url="" theme="shade" size="small" disabled>Small</Button>
				</div>
				<div class="rounded">
					<h5>Rounded buttons</h5>
					<RoundButton url="" theme="shade" size="large">L</RoundButton>
					<RoundButton url="" theme="shade">D</RoundButton>
					<RoundButton url="" theme="shade" size="small">S</RoundButton>
				</div>
				<div class="rounded">
					<h5>Disabled Rounded Buttons</h5>
					<RoundButton url="" theme="shade" size="large" disabled>L</RoundButton>
					<RoundButton url="" theme="shade" disabled>D</RoundButton>
					<RoundButton url="" theme="shade" size="small" disabled>S</RoundButton>
				</div>
			</div>

			<div class="white col-xl-6">

				<h4>Light mode</h4>
				<div class="square">
					<h5>Squared Buttons</h5>
					<Button class="bttns" url="" theme="bright" size="large">Large</Button>
					<Button class="bttns" url="" theme="bright">Default</Button>
					<Button class="bttns" url="" theme="bright" size="small">Small</Button>
				</div>
				<div class="square">
					<h5>Disabled Square Buttons</h5>
					<Button class="bttns" url="" theme="bright" size="large" disabled>Large</Button>
					<Button class="bttns" url="" theme="bright" disabled>Default</Button>
					<Button class="bttns" url="" theme="bright" size="small" disabled>Small</Button>
				</div>
				<div class="rounded">
					<h5>Rounded buttons</h5>
					<RoundButton class="bttns" url="" theme="bright" size="large">L</RoundButton>
					<RoundButton class="bttns" url="" theme="bright">D</RoundButton>
					<RoundButton class="bttns" url="" theme="bright" size="small">S</RoundButton>
				</div>
				<div class="rounded">
					<h5>Disabled Rounded Buttons</h5>
					<RoundButton class="bttns" url="" theme="bright" size="large" disabled>L</RoundButton>
					<RoundButton class="bttns" url="" theme="bright" disabled>D</RoundButton>
					<RoundButton class="bttns" url="" theme="bright" size="small" disabled>S</RoundButton>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Button from '@/components/ui/Button';
import RoundButton from '@/components/ui/RoundButton';

export default {
  name: 'Buttons',
	components: {
		Button,
		RoundButton
	}
}
</script>

<style scoped lang="scss">

@import '../assets/styles/colors';

.container {
	.row {
		margin-top:64px;
	}

	p {
		max-width: 800px;
		font-size: 1rem;
	} 
}

h4 { text-align:center; }
 .rounded > *, .square > * {
    margin: 10px;
}
.square, .rounded {
    padding: 32px;    

	h5 {
        font-size:16px;
        margin: 0;
		margin-bottom:16px;
	}

	a {
		margin-right:48px;
	}
}

.dark {
	border-radius:12px 0 0 12px;
	background: $dark;
	box-shadow: $shade-inv;

	h4 {
		color: $txt-onDark-0;
		margin-top:16px;
	}
}

.white {
	border-radius:0 12px 12px 0;
	background: $white;
	box-shadow: $bright-inv;

	h4 {
		color: $txt-onLight-0;
	}
}

.dark, .white {
	padding:48px 0;
}
.bttns {
    margin-bottom: 20px;
    margin-right: 10px;
}


@media screen and (max-width: 400px){
    .rounded > * {
        margin-right: 10px;
    }
}
</style>