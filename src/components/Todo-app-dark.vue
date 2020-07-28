<template>
	<div class="col-xl-6 dark">

		<div class="application">

			<h4>To-do planner</h4>

			<!-- Add Field -->
			<div class="newData">
				<div class="new-task">
					<input type="text" class="col-xl-9" @keypress.enter="submit" v-model="newItem" v-bind:placeholder="placeholder">
					<button @click="submit" class="col-xl-2 bttn shade add">+</button>
				</div>                      
			</div>

			<!-- Controls -->
			<div class="controls">
				<div class="check-wrap col">
					<input type="checkbox" name="check" v-model="allChecked">
					<span @click="selectAll(); change();" class="checkmark"></span>
				</div>

				<span class="label">Select All</span>

				<div class="clear-wrap">
					<button @click="remove" class="clear-list bttn shade small">Clear List</button>
				</div>
			</div>

			<!-- Tasks -->
			<div class="tasks">
				<div class="task-row" v-for="(listItem, index) in listItems" :key="index">
					<div class="task col">
						<div class="check-wrap col">
							<input type="checkbox" name="check" v-model="listItems[index].checked">
							<span @click="check(index)" class="checkmark"></span>
						</div>
						<input type="text" v-model="listItem.name">
						<button class="bttn shade small" @click="deleteItem(index)"> x </button>
					</div>
				</div>
			</div>

		</div>
	</div>
</template>

<style scoped lang="scss">
@import '../assets/styles/colors';
@import '../assets/styles/buttons';

h4 {
	text-align:center;
	margin: 16px 0;
}

.application {
	box-shadow: $shade;
	padding: 20px 40px;
	border-radius: 12px;
	margin: 100px auto;
	max-width: 550px;

	input[type="text"] {
		border:none;
		color: $txt-onDark-0;
		background: none;
		padding:12px;
		width: 100%;
		
		// Transition
		-webkit-transition: all 0.26s 0s ease-in-out;
		-moz-transition: all 0.26s 0s ease-in-out;
		-o-transition: all 0.26s 0s ease-in-out;
		transition: all 0.26s 0s ease-in-out;

		&:focus {
			outline: none;
			border-radius: 10px;
		}
	}

	label {
		cursor: default;
	}

	// Top Part
	.newData {
		margin:32px 0;
		box-shadow: $shade;
		padding:16px;
		border-radius: 12px;
	}

}

.controls, .tasks {

	position:relative;
	left:0;
	right:0;

	.check-wrap {
		position:relative;

		// Disable UserSelect
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;

		input {
			display:none;

			&:checked ~ .checkmark:after {
				display: block;        
			}
		}

		.checkmark {
			position: absolute;
			top: 0;
			left: 0;
			height: 32px;
			width: 32px;
			border-radius: 50%;
			cursor:pointer;

			// Transition
			-webkit-transition: all 0.16s 0s ease-in-out;
			-moz-transition: all 0.16s 0s ease-in-out;
			-o-transition: all 0.16s 0s ease-in-out;
			transition: all 0.16s 0s ease-in-out;
			
			&:after {
				content: "";
				position: absolute;
				left: 13px;
				top: 10px;
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

.controls {

	height:38px;

	.check-wrap {
		left:16px;
	}

	.label{
		position:absolute;
		top:3px;
		left:72px;
	}

	.clear-wrap {
		
		button {
			position:absolute;
			right:16px;
		}
	}

	
}

.tasks {
	position:relative;
	top:24px;
	left:0;
	right:0;
	padding-bottom:32px;

	.task-row {

		position:relative;
		height:64px;

		.task {

			.check-wrap {
				position:absolute;
				top:9px;
				left:16px;
			}

			input {
				position:absolute;
				left:60px;
				width:70%;
			}

			button {
				position:absolute;
				top:8px;
				right:16px;
			}

		}
	}
}

.checkbox-container, .controls-container {

	/**.checkbox
	* 		
	* 		Checkboxes
	* 		~ Dark & White
	*/

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
			display:none;

			&:checked ~ .checkmark:after {
				display: block;        
			}
		}

		.checkmark {
			position: absolute;
			top: 0;
			left: 0;
			height: 32px;
			width: 32px;
			border-radius: 50%;

			// Transition
			-webkit-transition: all 0.16s 0s ease-in-out;
			-moz-transition: all 0.16s 0s ease-in-out;
			-o-transition: all 0.16s 0s ease-in-out;
			transition: all 0.16s 0s ease-in-out;
			
			&:after {
				content: "";
				position: absolute;
				left: 13px;
				top: 10px;
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

.dark, .white {
	padding: 32px;
}

.dark {
	background: $dark;
	box-shadow: $shade-inv;

	border-radius:12px 0 0 12px;

	h4 { color: $txt-onDark-0; }

	.application input[type=text] {
		border-bottom: 1px solid lighten($dark, 6%);

		&:focus {
			box-shadow: $shade-inv;
		}
	}

	button {
		padding:10px 24px;
		border-radius:12px;
		outline:none;

		&.add {
			float:right;
			padding:0;
			padding:12px 20px;
			text-align:center;

			i {
				width:16px;
				height:16px;
				color:$white;
			}
		}
	}

	// Checkmark
	.checkmark {
		box-shadow: $shade;
		background: $dark;
	}
	input ~ .checkmark:hover {
		box-shadow: $shade-inv;
	}
	input:checked ~ .checkmark {
		box-shadow: $shade-inv;
	}
}
@media screen and (max-width: 1200px) {
    
    .application {
        padding: 20px 15px;
        .newData {
            height: 180px;
            input {
                margin-bottom: 20px;
            }
        }
        .task-row {
            input {
                width:50%;
            }
        }

    }
    .dark {
        padding: 10px 0;
    }
}
@media screen and (max-width: 500px) {
    .task-row {
        input {
            max-width: 220px;
        }
    }
}
@media screen and (max-width: 400px) {
    .task-row {
        input {
            max-width: 150px;
        }
    }
}
</style>

<script>

export default {
    
	name: 'Todo-app-dark',
	data() {
		return {
			newItem: "",
			placeholder: "Enter the task name here",
			allChecked: false,
			listItems: [
				{
					name: 'Sample task',
					checked: false
				},
				{   
					name: 'Sample task 2',
					checked: false
				},
				{ 
					name: 'Sample task 3',
					checked: false
				}
			]
		}
	},
	methods: {
		submit: function() {
			if (this.newItem !== ""){
				this.listItems.push({name: this.newItem, checked: false});
				this.newItem = "";
			}
		},
		remove: function() {
			for (let i = this.listItems.length - 1; i >= 0; i--){
				if(this.listItems[i].checked === true) {
					this.listItems.splice(i, 1);
				}
			}
			this.allChecked = false;
		},
		deleteItem(index) {
			this.listItems.splice(index, 1);
		},
		check: function(index){
			if(this.listItems[index].checked === false) {
				this.listItems[index].checked = true;
			} else {
				this.listItems[index].checked = false;
			}
		},
		change: function() {
			if(this.allChecked === false){
				this.allChecked = true;
									
			} else {
				this.allChecked = false;                
			}
		},
		selectAll: function() {
			if (this.allChecked === false){
				for (let i = this.listItems.length - 1; i >= 0; i--){
					this.listItems[i].checked = true;
				}
			} else {
				for (let i = this.listItems.length - 1; i >= 0; i--){
					this.listItems[i].checked = false;        
				}       
			}
		}
	}
}    

</script>    