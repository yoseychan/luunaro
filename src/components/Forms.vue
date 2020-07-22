<template>
    <div class="container section">
        <h3>Forms</h3>
        <p>The following forms display the common form elements in both - light and dark modes. They consist of text, email, 
            password inputs, checkbox with a link and submit button.</p>
        <p class="notice"><span>Notice!</span> The sample forms are created only for testing. They do not collect any submitted data.</p>
        <div class="row justify-content-around">
            <div class="dark neu-dark-inv col-xl-6">
                <div class="forms neu-darker">
                    <p>Account creation</p>
                    <input type="text" hidden>
                    <div class="form-item"><input type="text" class="input neu-dark-inv" placeholder="Username" v-model="usernameDark"></div>
                    <div class="form-item"><input type="email" class="input neu-dark-inv" placeholder="Email" v-model="emailDark"></div>
                    <div class="form-item"><input type="password" class="input neu-dark-inv" placeholder="Password" v-model="passDark"></div>
                    <div class="form-item checkbox">
                        <label for="subscribe" class="check"> I agree to the <span class="terms">Terms and Conditions</span>
                            <input type="checkbox" @click="changeDark" name="subscribe" id="subscribe" v-model="checkedDark">
                            <span class="checkmark"></span>
                        </label>
                    </div>
                    <div class="form-item"><button @click="clearDark" class="neu-darker">Create</button></div>
                </div>
            </div>
            <div class="white neu-light-inv col-xl-6">
                <div class="forms neu-light">
                    <p>Account creation</p>
                    <div class="form-item"><input type="text" class="input neu-light-inv" placeholder="Username" v-model="usernameLight"></div>
                    <div class="form-item"><input type="email" class="input neu-light-inv" placeholder="Email" v-model="emailLight"></div>
                    <div class="form-item"><input type="password" class="input neu-light-inv" placeholder="Password" v-model="passLight"></div>
                    <div class="form-item checkbox">
                        <label for="subscribes" class="check">I agree to the <span class="terms">Terms and Conditions</span>
                            <input type="checkbox" @click="changeLight"  name="subscribes" id="subscribes" v-model="checkedLight">
                            <span class="checkmark"></span>  
                        </label>
                    </div>
                    <div class="form-item"><button @click="clearLight" class="neu-light">Create</button></div>
                </div>
            </div>
        </div>
        
        
    </div>
</template>

<script>
export default {
    name: 'Forms',
    props: {
        msg: String
    },
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
h3{
    color: #BC5353;
}
p {
    max-width: 800px;
    color: #606875;
}
.section{
    margin-top: 100px;
    .row {
        margin: 50px 0 70px;   
    }
}
.notice {
    margin-bottom: 100px;
    font-size: 14px;
    font-style: italic;
    span {
        font-weight: 700;
    }
}

.white {
    background-color: #DEDEDE;
    box-shadow: inset 4px 4px 12px #3b3b3b, inset -4px -4px 12px #EFEFEF;
    .input, button {
        background-color: #DEDEDE;
    }
    button:hover {
        box-shadow: inset 4px 4px 12px #b3b3b3, inset -4px -4px 12px #ffffff;
    }

}

.dark {
    .input, button {
        background-color: #15151B;
    }
    button:hover {
        box-shadow: inset 4px 4px 12px #0A0A0D, inset -4px -4px 12px #21212E;
    }
}

.dark, .white {
    padding: 30px  0;
    border-radius: 10px;
    p{
        text-align: center;
        font-size: 20px;
        margin-bottom: 20px;
        color:#BC5353;
    }
    .terms {
        color:#BC5353;
        transition: .6s;
    }
    .terms:hover {
        text-decoration: underline;
    }
    .forms {
        width: 400px;
        margin: 100px auto;
        padding: 50px 30px;
        border-radius: 10px;
       .input {
            border: none;
            width: 100%;
            margin: 15px auto;
            border-radius: 10px;
            padding: 10px 20px; 
            color: #606875;   
        }
        input[type="password"] {
            margin-bottom: 50px;
        }
        button {
            width: 100%;
            border: none;
            border-radius: 10px;
            margin: 50px 0 10px;
            padding: 15px;
            color: #BC5353;
            font-weight: 700;
            font-size: 20px;
            
        }
        button:focus, input:focus {
            outline: none;
        }
    }
}

//CHECKBOX 
    
.check {
    display: block;
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
    }
    .checkmark:after {
        left: 15px;
        top: 11px;
        width: 6px;
        height: 10px;
        border: solid #BC5353;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);        
    }
}

.check:hover {
    input ~ .checkmark {
        transition: .4s;
    }
}


.check {
    input:checked ~ .checkmark {
        transition: .4s;
    }
}

.check {
    input:checked ~ .checkmark:after {
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
}

.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}
.checkbox {
    padding: 0;    
    input {
        position: absolute;
        opacity : 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }
}
.dark {
    
    .check {
        input:checked ~ .checkmark {
            box-shadow: inset 4px 4px 12px #0A0A0D, inset -4px -4px 12px #21212E;
        }
    }
    .check:hover {
        input ~ .checkmark {
            box-shadow: inset 4px 4px 12px #0A0A0D, inset -4px -4px 12px #21212E;
        }
    }
    .checkmark {
        box-shadow: 4px 4px 12px #0A0A0D, -4px -4px 15px #21212E;
    }
}
.white {
    .check {
        input:checked ~ .checkmark {
            box-shadow: inset 4px 4px 12px #b3b3b3, inset -4px -4px 12px #ffffff;

        }
    }
    .check:hover {
        input ~ .checkmark {
            box-shadow: inset 4px 4px 12px #b3b3b3, inset -4px -4px 12px #ffffff;
        }
    }
    .checkmark{
        box-shadow: 4px 4px 12px #b3b3b3, -4px -4px 12px #ffffff;
    }
}
   
</style>