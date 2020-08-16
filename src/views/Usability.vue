<template>
    <div class="container">
        <div class="section container">
            <h1>Usability</h1>
            <p>For neumorphic design to be effective it is necessary to find the balance between the aesthetics,
                 effectiveness and usability, while at the same time identifying the neumorphism advantages and disadvantages
            </p>
        </div>
        <div class="row justify-content-around ">
            <div class="pros col-xl-5 neu-darker">
                <h3>Advantages</h3>
                <ul>
                    <li> 
                        <p>Aesthetically pleasing (new, soft, realistic, appealing, refreshing, minimalistic and attention-grabbing).</p> 
                    </li>
                    <li> 
                        <p>Satisfying and easy to use.</p> 
                    </li>
                    <li> 
                        <p>Can be combined with other designs.</p> 
                    </li>
                    <li> 
                        <p>Improves the effectiveness of simple application usability.</p> 
                    </li>
                    <li> 
                        <p>Works well with data presentation.</p> 
                    </li>
                </ul>
            </div>
            <div class="cons col-xl-5 neu-light-inv">
                <h3>Disadvantages</h3>
                <ul>
                    <li> 
                        <p>Not accessible to users with visual and physical disabilities.</p> 
                    </li>
                    <li> 
                        <p>It can be hard for the eyes to adjust.</p>
                     </li>
                    <li> 
                        <p>It is harder to efficiently implement than minimalism.</p>
                    </li>
                    <li> 
                        <p>Requires accent and element balance.</p>
                    </li>
                    <li> 
                        <p>Too many elements cause the loss of focal points in the website.</p>
                    </li>
                    <li> 
                        <p>Mobile device built-in browsers, with dark mode activated, do not support the neumorphic effect.</p> 
                    </li>
                </ul>
            </div>
        </div>
        <div class="recommendations neu-darker ">
            <div class="inner neu-dark-inv">
                <h3>Recommendations for practitioners</h3>
                <ul>
                    <li>
                        <p>Neumorphism brings a refreshing, soft visual presentation that grabs the user attention.</p>
                    </li>
                    <li> 
                        <p>Darker contrasts work better for accents and aesthetic elements, but lighter contrasts are more effective for information presentation.</p> 
                    </li>
                    <li>
                        <p>Darker contrasts can bring readability issues and may not be optimized for lower quality device brightness.</p> 
                    </li>
                    <li>
                        <p>The design should have a limited number of contrasts used, preferably similar colours and not complete opposites, as this can cause visual difficulty to adjust.</p> 
                    </li>
                    <li>
                        <p>It is important to avoid using too many elements in neumorphic design otherwise it will cause confusion for the users and the loss of focal points in the page.</p> 
                    </li>
                    <li>
                        <p>It is necessary to avoid the overuse and over accenting the elements with the neumorphic shadows need to be used only for heavy accents,
                        outlines for important or functional elements.</p> 
                    </li>
                    <li>
                        <p>Neumorphic design takes some time to adjust to, afterwards, users feel comfortable in its functionality.</p> 
                    </li>
                    <li>
                        <p>Neumorphism is not supported in the mobile device built-in browsers when the dark mode setting is enabled.</p> 
                    </li>
                    <li>
                        <p>For website design, neumorphism would be better if used in combination with other design styles, due to it being too simple and bare.</p> 
                    </li>
                    <li>
                        <p> For application design, neumorphism offers ease of use and satisfying functionality.</p>
                    </li>
                    <li>
                        <p>Neumorphic design is most effective when working with data.</p> 
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '../assets/styles/colors';

h1 {
    color: $txt-onDark-0;
}
p {
    max-width: 800px;
}
.cons, .pros {
    border-radius: 10px;
    padding: 20px;
}
.pros {
    h3 {
        color:$white;
    }
}
.cons {
    background-color: $white;
    h3 {
        color:$dark;
    }
}
ul {
    display: inline-block;

    li {
        list-style: circle;
        padding: 10px 30px;
    }
}
.recommendations {
    max-width: 800px;
    padding: 30px;
    margin: 50px auto;
    border-radius: 10px;
    .inner {
        border-radius: 10px;
        h3 {
            padding-top: 50px;
            text-align: center;
            color:$primary;
        }
    }
}

    
</style>