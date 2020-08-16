<template>
	<div class="row justify-content-center neu-dark-inv">
			<div id="calculator" class="neu-darker">
					<div class="headline">
							<h4>Calorie counter</h4>
					</div>
					<div class="desc items neu-darker">
							<p>Description</p>
							<p>Cal</p>
							<p>Fat</p>
							<p>Carb</p>
							<p>Prot</p>
					</div>
					<div class="list">
							<div v-for="(item, index) in allItems" :key="index" class="items">
									<input type="text" v-bind:value="item.desc" >
									<input type="text" v-model="item.cal">
									<input type="text" v-model="item.fat">
									<input type="text" v-model="item.carb">
									<input type="text" v-model="item.pro">
									<button class="item-btn neu-darker" @click = "remove(index)"> x </button>
							</div>
					</div>

                    <div class="totals neu-darker">
                            <span>Totals:</span>
                            <span class="count" >{{ total.cal }}</span>
                            <span class="count">{{ total.fat }}</span>
                            <span class="count">{{ total.carb }}</span>
                            <span class="count">{{ total.pro }}</span>    
                    </div>
                    <div class="new">
                            <input @keypress.enter="addNew" type="text" v-bind:placeholder="PH.desc" v-model="newItem.desc">
                            <input @keypress.enter="addNew" type="text" v-bind:placeholder="PH.cal" v-model="newItem.cal">
                            <input @keypress.enter="addNew" type="text" v-bind:placeholder="PH.fat" v-model="newItem.fat">
                            <input @keypress.enter="addNew" type="text" v-bind:placeholder="PH.carb" v-model="newItem.carb">
                            <input @keypress.enter="addNew" type="text" v-bind:placeholder="PH.pro" v-model="newItem.pro">
                            <button @click="addNew" class="item-btn add-new neu-darker"> + </button>                    
                    </div>
                    <div class="clearfix"></div>
			</div>
	</div>
</template>

<style scoped lang="scss">
.section {
    margin-top: 100px;
    .row {
        margin: 50px 0 70px;   
    }
    h3 {
        color: #BC5353;
    }
    p {
        color: #606875;
        max-width: 800px;
    }
}
.row {
    border-radius: 10px;
}

input {
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #282b31;
    margin: 10px;
    padding: 4px;
    color: #606875;
    background-color: #15151B;
    transition: .6s;    
}
input:focus {
    outline: none;
    background-color: transparent;
    border-radius: 10px;
    box-shadow: inset 4px 4px 12px #0A0A0D, inset -4px -4px 12px #21212E;
}
input::placeholder {
    border: none;
    color: none;
}

#calculator {
    width: 850px;
    border-radius: 10px;
    margin: 50px 0;
    padding: 10px 30px 30px;
}
.headline {
    h4 {
        color: #BC5353;
        text-align: center;
        padding: 20px;
        font-weight: 400;
        margin: 10px 0 30px;
    }
}
.list {
    min-height: 200px;
}
.items,
.new , 
.totals{
    overflow: hidden;
    box-sizing: border-box;
    padding:10px 0 10px 20px;
    display: block;
}

.items > *,
.new > * ,
.totals > *{
    float: left;
    width: 13%;
}
.totals > * {
    margin: 0 10px;
    padding: 4px;
}
.count{
    text-align: center;
}

button.item-btn {
    height: 25px;
    width: 25px;
    background-color: transparent;
    border: none;
    font-weight: 700;
    position: relative;
    top: 10px;
    color: #606875;
    border-radius: 50%;
    padding: 0 0 1px 1px;
    -webkit-transition: 0.6s;
    -moz-transition: 0.6s;
    -o-transition: 0.6s;
    transition: 0.6s;
}
.add-new {
    font-size: 18px;
    
}

button.item-btn:hover {
    box-shadow: inset 4px 4px 12px #0A0A0D, inset -4px -4px 12px #21212E;
    color: #BC5353; 
}

.desc {
    border-radius: 10px;
}

.desc.items > * {
    margin: 10px;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 90%;
}
        
.items > *:first-child,
.new > *:first-child,
.totals > *:first-child {
    width: 30%;
}
.total-new {
    border-radius: 10px;
    margin: 10px 0;
}
.totals {
    border-radius: 10px;
    color: #BC5353;
}

.clearfix {
    clear: both;
}


@media screen and (max-width:820px) {
    .items > *,
    .new > * ,
    .totals > *{
        float: left;
        width: 20%;
    }
    .items > *:first-child,
    .new > *:first-child,
    .totals > *:first-child {
        width: 95%;
    }
}

@media screen and (max-width:650px) {
    .items > *,
    .new > * ,
    .totals > *{
        float: left;
        width: 15%;
    }
    .items > *:first-child,
    .new > *:first-child,
    .totals > *:first-child {
        width: 90%;
    }
}

@media screen and (max-width:400px) {
    #calculator {
        padding: 0;
    }
    .items > *:first-child,
    .new > *:first-child,
    .totals > *:first-child {
        width: 85%;
    }
}
</style>

<script>
export default {
    name: 'CalMeterDark',
    props: {
        msg: String,
    },
    data(){
        return {
            newItem: {
                desc: '',
                cal: 0,
                fat: 0,
                carb: 0,
                pro: 0
            },
            PH: {
                desc: "Description",
                cal: "Cal",
                fat: "Fat",
                carb: "Carb",
                pro: "Prot"
            },
            allItems: [
                {
                    desc: "Rice Noodles, 100g",
                    cal: 108,
                    fat: 0.2,
                    carb: 24,
                    pro: 1.8
                },
                {
                    desc: "Grilled Bacon, 100g",
                    cal: 468,
                    fat: 35,
                    carb: 1.7,
                    pro: 34
                },
                {
                    desc: "Beef soup",
                    cal: 13,
                    fat: 0.1,
                    carb: 1.2,
                    pro: 2
                }
            ],
        }
    },
    computed: {
        total: function() {
            var calories = 0;
            var cal;
            var fats = 0;
            var fat;
            var carbs = 0;
            var carb;
            var protein = 0;
            var pro;
            for (let i = 0; i < this.allItems.length; i++) {
                calories += Number(this.allItems[i].cal);
                cal = calories.toFixed(1);
                fats += Number(this.allItems[i].fat);
                fat = fats.toFixed(1);
                carbs += Number(this.allItems[i].carb);
                carb = carbs.toFixed(1);
                protein += Number(this.allItems[i].pro);
                pro = protein.toFixed(1);
            }
            return { 
                cal: cal,
                fat: fat,
                carb: carb,
                pro: pro            
            };
        }
    },
    methods: {
        addNew: function() {
            this.allItems.push({
                desc: this.newItem.desc,
                cal: Number(this.newItem.cal),
                fat: Number(this.newItem.fat),
                carb: Number(this.newItem.carb),
                pro: Number(this.newItem.pro),

                
            })
                this.newItem.desc = "";
                this.newItem.cal = "";
                this.newItem.fat = "";
                this.newItem.carb = "";
                this.newItem.pro = "";
        },
        remove: function(index) {
            this.allItems.splice(index,1)
        }
    },
}
</script>
