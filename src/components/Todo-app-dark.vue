<template>
    <div class="container section">
        <h3>Sample application: To-do planner</h3>
        <p>The planner allows the user to create to-do list with a simple input field. To submit the task the user needs to press enter key.
            Users are also able to mark the tasks that are done, edit, clear them by pressing on the clear-list button, or remove the tasks one by one.</p>
        <div class="row ">
            <div class="col-xl-6 dark neu-dark-inv">
                <div class="application neu-darker ">
                    <h4>To-do planner</h4>
                    <div class="newData neu-darker">
                        <div class="checkbox-container">
                            <div class="checker">
                                <span class="label">All</span>
                                <div class="check">  
                                    <input type="checkbox" name="check" v-model="allChecked">
                                    <span @click="selectAll(); change();" class="checkmark"></span>    
                                </div>
                            </div>
                        </div>
                        <div class="new-task">
                            <input type="text" class="task-input" @keypress.enter="submit" v-model="newItem" v-bind:placeholder="placeholder">
                            <button @click="remove" class="clear neu-darker">Clear List</button>
                        </div>                      
                    </div>

                    <div class="list">
                        <div class="list-row" v-for="(listItem, index) in listItems" :key="index">
                            <div class="listing">
                                <div class="checkbox-container">
                                    <div class="checker">
                                        <div class="check">   
                                            <input type="checkbox" v-model="listItems[index].checked" >
                                            <span @click="check(index)" class="checkmark"></span>   
                                        </div>
                                    </div>
                                </div>
                                <div class="list-items">
                                    <input class="list-input" type="text" v-model="listItem.name">
                                    <button class="neu-darker list-btn" @click="deleteItem(index)"> x </button>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
            <TodoAppLight></TodoAppLight>
        </div>
    </div>
</template>

<style scoped lang="scss">
h3{
    color: #BC5353;
}
p {
    color: #606875;
    max-width: 800px;
}
.container{
    margin-top: 100px;
    .row {
        margin: 50px 0 70px;   
    }
}

.application { 
    padding: 20px 25px 40px;
    border-radius: 10px;
    margin: 100px auto;
    max-width: 550px;
    button, input {
        border:none;
        color: #606875;
        background-color: #15151B;
        -webkit-transition: all 0.6s;
        -moz-transition: all 0.6s;
        -o-transition: all 0.6s;
        transition: all 0.6s;
    }
    button:focus, input:focus {
        outline: none;
    }
    input:focus {
        border-radius: 10px;
    }
    input[type="text"] {
        color: #606875;
        min-width: 300px;
        padding: 10px;
        border-bottom: 1px solid #282b31;
    }
    label {
        cursor: default;
    }
    .label{
        display: inline-block;
    }
}


.dark{
    border-radius: 10px;
    margin: 50px auto;
    h4 {
        text-align: center;
        margin: 20px 0 30px;
        color: #BC5353;
    }
}
.newData {
    min-height: 55px;
    border-radius: 10px;
    padding: 0 10px;
    .task-input {
        background-color: #15151B;
        margin: 0 10px;

    }
    .check {
        color: #606875;
    }
    .new-task {
        display: inline-block;
        margin: 30px 0 50px;
        max-width: 600px;
    }
    .clear {
        padding: 5px 20px;
        border-radius: 10px;
        font-size: 14px;

    }
    .clear:hover {
        box-shadow: inset 4px 4px 12px #0A0A0D, inset -4px -4px 12px #21212E; 
        color:#BC5353;

    } 
}

.task-input:focus, .list-input:focus {
    box-shadow: inset 4px 4px 12px #0A0A0D, inset -4px -4px 12px #21212E;
}


//List items 

.list {
    padding: 10px;
    min-height: 200px;
    .check {
        top: 7px;
        left: 20px;
    }
}

.listing {
    margin-top: 10px;
}

.list-items {
    display: inline-block;
    input {
        display: inline-block;
        margin:  10px 20px 10px 10px;
    }
}

.list-btn {
    margin-left: 10px;
    border-radius: 10px;
    padding: 1px 10px;
}
.list-btn:hover {
     box-shadow: inset 4px 4px 12px #0A0A0D, inset -4px -4px 12px #21212E; 
     color:#BC5353; 
}

//CHECKBOX 
.checkbox-container {
    width: 50px;
    display: inline-block;
    .label {
        color: #BC5353;
        margin-left: 20px;
    }
}
.newData {
    .checker {
        width: 36px;
        height: 36px;
    }
    .check {
        top: 10px;
        left: 10px;
    }
}
.checker {
    display: inline-block;
    width:24px;
    min-height: 24px;
}
.check {
    display: block;
    position: relative;
    cursor: pointer;
    font-size: 16px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none; 
    width: 100%;      
    input[type="checkbox"] {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }
    .checkmark:after {
        left: 10px;
        top: 6px;
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
.newData {
    .checkmark {
    top: 0px;
    left: 0px;
    height: 36px;
    width: 36px;    
    }
    .checkmark:after {
        left: 15px;
        top: 11px;          
    }
}
.checkmark {
    position: absolute;
    top: 0px;
    left: 0px;
    height: 24px;
    width: 24px;
    border-radius: 50%;           
}
.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}
.checkbox {
    padding: 0;
    width: 50px;    
    input {
        position: absolute;
        opacity : 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }
} 
 .check {
        input:checked ~ .checkmark {
            box-shadow: inset 4px 4px 12px #0A0A0D, inset -4px -4px 12px #1d1d29;
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

</style>

<script>
import TodoAppLight from '@/components/Todo-app-light.vue';


export default {
    
    name: 'Todo-app-dark',
    props: {
        msg: String,
    },
    components: {
        TodoAppLight
    },
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
            }else {
                this.listItems[index].checked = false;
            }
        },
        change: function() {
            if(this.allChecked === false){
                this.allChecked = true;
                        
            }else {
                this.allChecked = false;                
            }
        },
        selectAll: function() {
            if (this.allChecked === false){
                for (let i = this.listItems.length - 1; i >= 0; i--){
                this.listItems[i].checked = true;
                }
            }else {
                for (let i = this.listItems.length - 1; i >= 0; i--){
                    this.listItems[i].checked = false;        
                }       
            }
        }
    }
}    

</script>    