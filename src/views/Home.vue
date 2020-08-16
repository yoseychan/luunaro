<template>
	<div>
		<div class="container row justify-content-around ff-wrapper"> <!-- Dark FF Section Start -->
			<div class="ff col col-xl-6">
				<h1><span>Neumorphism </span> - the new web design trend of 2020</h1>
				
				<p>
					After the skeuomorphism was replaced with minimalism - flat design and material design in 2010, skeuomorphism did not really disappear.
					Neumorphistic design is the new combination of both - minimalism and skeuomorphism, and is widely discussed among web designers and developers in 2020.
				</p>

				<Button url="neumorphism" theme="shade">Read More</Button>
			</div>

			<div class="logo-place col-xl-5">
					<div class="logo"></div>
			</div>
		</div> <!-- Dark FF Section End -->

		<div class="section red"> <!-- Red Section Start -->
			<div class="container row justify-content-around">
				<div class="col-lg-3">
					<div class="bubble b1">
						<h2>Soft</h2>
						<p>Made from soft-like material, you could almost touch</p>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="bubble b2">
						<h2>Neumorphic</h2>
						<p>Reviving the skeuomorphism and improving it with new proven values of minimalism</p>
					</div>
				</div>
				<div class="col-lg-3">
					<div class="bubble b1">
						<h2>Realistic</h2>
						<p>Adding back the realism feeling that was once lost with skeuomorphism</p>
					</div>
				</div>
			</div>
		</div> <!-- Red Section End -->

		<div class="section white"> <!-- White Section Start -->
			<div class="container row justify-content-center">
				<div class="menu-list col">
					<div class="headings">
						<h3>Neumorphism</h3>
					</div>
					<div class="text">
						<p>Find out more about neumorphism and its predecessor design concepts - material design and skeuomorphism.</p>
					</div>

					<Button url="neumorphism" theme="bright">Read More</Button>
				</div>
				<div class="menu-list col">
					<div class="headings">
						<h3 class="align-items-center">Examples</h3>
					</div>
					<div class="text">
						<p>Try out a few interactive Neumorphic elements and sample applications! </p>
					</div>

					<Button url="examples" theme="bright">Take me there</Button>
				</div>
				<div class="menu-list col">
					<div class="headings">
						<h3>Usability</h3>
					</div>
					<div class="text">
						<p>List of recommendations on how to use the neumorphic design effectively and its pros and cons.</p>
					</div>

					<Button url="usability" theme="bright">Read more</Button>
				</div>
			</div>
		</div> <!-- White Section End -->
	</div>
</template>

<script>
import Button from '@/components/ui/Button'

export default {
  name: 'Home',
	components: {
		Button
	}
}
</script>

<style scoped lang="scss">

@import '../assets/styles/colors';

//FIRST FOLD SECTION
.ff-wrapper {
  min-height: 880px;
}
.ff {
	max-width: 600px;
	margin: 200px 0 50px;

	span {
		color: $primary;
	}
	h1 {
		color: $txt-onDark-0;
	}
	p {
		color: $txt-onDark-1;
		margin-top: 50px;
		font-size: 1rem;
	}

	.bttn { width:320px; margin-top:32px; }
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
	.col-lg-3, .col-lg-4 {
        margin-bottom: 50px;
		.bubble {
			border-radius: 50%;
			display: flex;
			justify-content: center;
            flex-direction: column;
            margin-bottom: 50px;
			h2 {
					font-weight: 700;
					margin-bottom: 30px;
			}
			p { 
					width: 290px; 
					margin: 0 auto;
					font-size: 1rem;
			}

			h2, p { text-align:center; }
		}
		.b1 {
    
			width: 330px;
            height: 330px;
            margin: 5px auto;
			background: linear-gradient(131.93deg, #BC5353 -12.11%, #E07474 -12.11%, #BC5353 53.42%, #A54747 100%), #BC5353;
			box-shadow: $cardinal;
		}
		.b2 {
            
			width: 400px;
            height: 400px;
            margin: 0 auto;
			background: linear-gradient(134.57deg, #953B3B 4.13%, #BC5353 50.15%, #C76161 93.39%), #BC5353;
			box-shadow: $cardinal-inv;
		}
    }
}

// White section

.white {
	background: $white;

    h3 {
        color: $primary;
        font-weight: 900;
        text-align: center;
        line-height: 150px;
    }

    .bttn {
        margin-top: 40px auto;
        width:100%;
    }

    p {
        color: $txt-onLight-0;
    }
}

.section {
  width:100%;
}

.menu-list {
	min-width: 350px;
	max-width: 350px;
	padding:12px;
	margin: 0 36px 70px;

	.headings {
        background-color: darken($white, 5%); ;
        border-radius: 10px;
        height: 150px;
	}
	.text {
		margin: 30px 0;
		max-width: 330px;
		height: 80px;
		p {
			text-align: justify;
			font-size: 1rem;
		}
	}
	.bttn {
		margin-top: 40px auto;
	}
} 

//Media queries

@media screen and (max-width: 700px){
//hero margin
    .ff {
        margin-top: 100px;
    }
    .col-lg-3, .col-lg-4 {
        margin: 0;
        padding:0;
    }
}

@media screen and (max-width: 450px) {

//hero margin
.ff {
    margin-top: 100px;
}
//logo image
.logo-place .logo {
    width: 150px;
    height: 150px;
    margin: 50px auto;
}

//middle red ornament
.b2 {
    max-width: 300px;
    max-height: 300px;

}
.b1 {
    max-width: 300px;
    max-height: 300px;
}

.menu-list {
    min-width: 310px;
    max-width: 310px;
    .text {
        max-width: 310px;
    }
} 
} 
</style>
