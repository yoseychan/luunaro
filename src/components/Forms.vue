<template>
	<div class="container">
		<h3>Forms</h3>
		<p>The following forms display the common form elements in both - light and dark modes. They consist of text, email, 
				password inputs, checkbox with a link and submit button.</p>
		<p class="notice"><span>Notice!</span> The sample forms are created only for testing. They do not collect any submitted data.</p>

		<div class="row justify-content-around">

			<div class="dark col-xl-6">
				<div class="forms">
					<h4>Account creation</h4>
					<input type="text" hidden>
					<div class="form-item"><input type="text" placeholder="Username" v-model="usernameDark"></div>
					<div class="form-item"><input type="email" placeholder="Email" v-model="emailDark"></div>
					<div class="form-item"><input type="password" placeholder="Password" v-model="passDark"></div>
					<div class="form-item checkbox">
						<label for="subscribe" class="check"> I agree to the <span class="terms">Terms and Conditions</span>
							<input type="checkbox" @click="changeDark" name="subscribe" id="subscribe" v-model="checkedDark">
							<span class="checkmark"></span>
						</label>
					</div>
					<div class="form-item"><button @click="clearDark" class="bttn shade">Create</button></div>
				</div>
			</div>

			<div class="white col-xl-6">
				<div class="forms">
					<h4>Account creation</h4>
					<div class="form-item"><input type="text" placeholder="Username" v-model="usernameLight"></div>
					<div class="form-item"><input type="email" placeholder="Email" v-model="emailLight"></div>
					<div class="form-item"><input type="password" placeholder="Password" v-model="passLight"></div>
					<div class="form-item checkbox">
						<label for="subscribes" class="check">I agree to the <span class="terms">Terms and Conditions</span>
							<input type="checkbox" @click="changeLight"  name="subscribes" id="subscribes" v-model="checkedLight">
							<span class="checkmark"></span>  
						</label>
					</div>
					<div class="form-item"><button @click="clearLight" class="bttn bright">Create</button></div>
				</div>
			</div>

		</div>
			
			
	</div>
</template>

<script>
export default {
	name: 'Forms',
	data() {
		return{
			usernameDark: "",
			usernameLight: "",
			emailDark: "",
			emailLight: "",
			passDark: "",
			passLight: "",
			checkedDark: false,
			checkedLight: false
		}
	},
	methods: {
		clearDark: function(){

			this.usernameDark = "";
			this.emailDark = "";
			this.passDark = ""
			this.checkedDark = false;
		},
		clearLight: function(){

			this.usernameLight = "";
			this.emailLight = "";
			this.passLight = ""
			this.checkedLight = false;
		},
		changeDark: function(){

			if (this.checkedDark == false) {
				this.checkedDark = true;
			}else {
				this.checkedDark = false;
			}
		},
		changeLight: function(){

			if (this.checkedLight == false) {
				this.checkedLight = true;
			}else {
				this.checkedLight = false;
			}
		}
	}

}
</script>

<style scoped lang="scss">
@import '../assets/styles/colors';
@import '../assets/styles/buttons';

.container {
	.row {
		margin-top:64px;
	}

	p {
		max-width: 1000px;
		font-size: 1rem;

		&.notice {
			font-style:italic;
		}
	}

}


/**.checkbox
 * 		
 * 		Checkboxes
 * 		~ Dark & White
 */

.checkbox {

	.check {
		position: relative;
		padding: 5px 0 0 50px;
		cursor: pointer;
		font-size: 16px;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;

		input {
			position: absolute;
			opacity: 0;
			cursor: pointer;
			height: 0;
			width: 0;

			&:checked ~ .checkmark:after {
				display: block;        
			}
		}

		.checkmark {
			position: absolute;
			top: 0;
			left: 0;
			height: 35px;
			width: 35px;
			border-radius: 50%;

			// Transition
			-webkit-transition: all 0.16s 0s ease-in-out;
			-moz-transition: all 0.16s 0s ease-in-out;
			-o-transition: all 0.16s 0s ease-in-out;
			transition: all 0.16s 0s ease-in-out;
			
			&:after {
				content: "";
				position: absolute;
				left: 15px;
				top: 11px;
				width: 6px;
				height: 10px;
				border: solid $primary;
				border-width: 0 3px 3px 0;
				-webkit-transform: rotate(45deg);
				-ms-transform: rotate(45deg);
				transform: rotate(45deg);
				display: none;
			}
		}
	}
}


//CHECKBOX 

.dark {
	background: $dark;
	box-shadow: $shade-inv;

	border-radius:12px 0 0 12px;

	h4 { color: $txt-onDark-0; }
	
	.forms { box-shadow: $shade; }

	.form-item input {

		color: $txt-onDark-0;
		
		&::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
			color: lighten($dark, 15%);
			opacity: 1; /* Firefox */
		}

		&:-ms-input-placeholder { /* Internet Explorer 10-11 */
			color: lighten($dark, 15%);
		}

		&::-ms-input-placeholder { /* Microsoft Edge */
			color: lighten($dark, 15%);
		}
	}

	.form-item input, button {
		background: $dark;
		box-shadow: $shade-inv;
	}

	// Checkmark
	.checkmark {
		box-shadow: $shade;
	}
	input ~ .checkmark:hover {
		box-shadow: $shade-inv;
	}
	input:checked ~ .checkmark {
		box-shadow: $shade-inv;
	}

}

.white {
	border-radius:0 12px 12px 0;
	background: $white;
	box-shadow: $bright-inv;

	h4 { color: $txt-onLight-0; }

	.forms {
		box-shadow: $bright;
		color: $txt-onLight-0;
	}

	.form-item input {

		color: $txt-onLight-0;
		
		&::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
			color: darken($white, 20%);
			opacity: 1; /* Firefox */
		}

		&:-ms-input-placeholder { /* Internet Explorer 10-11 */
			color: darken($white, 20%);
		}

		&::-ms-input-placeholder { /* Microsoft Edge */
			color: darken($white, 20%);
		}
	}

	.form-item input, button {
		background: $white;
		box-shadow: $bright-inv;
	}
	// Checkmark
	.checkmark {
		box-shadow: $bright;
	}
	input ~ .checkmark:hover {
		box-shadow: $bright-inv;
	}
	input:checked ~ .checkmark {
		box-shadow: $bright-inv;
	}
}

.dark, .white {
	padding:48px 0;

	h4 {
		text-align:center;
		margin: 16px 0;
	}

	.terms {
			color:$primary;
			transition: .6s;
	}
	.terms:hover {
			text-decoration: underline;
	}
	.forms {
		width: 400px;
		margin: 100px auto;
		padding: 32px 30px;
		border-radius: 10px;

		.form-item input {
			border: none;
			width: 100%;
			margin: 15px auto;
			border-radius: 10px;
			padding: 10px 20px;  
		}
		input[type="password"] {
			margin-bottom: 50px;
		}

		button {
			width: 100%;
			border: none;
			border-radius: 12px;
			margin: 50px 0 10px;
			padding: 15px;
		}

		button:focus, input:focus {
			outline: none;
		}
	}
}

@media screen and (max-width: 450px){
    .forms {
		max-width: 300px;
		// margin: 100px auto;
		// padding: 32px 30px;
        // border-radius: 10px;
        .form-item input {
			border: none;
			width: 80%;
			margin: 15px auto;
			border-radius: 10px;
			padding: 10px 20px;  
		}
    }
}
</style>