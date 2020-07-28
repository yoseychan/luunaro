<template>
  <div class="container">
    <h1>About Luunaro project</h1>
    <div class="row justify-content-center">
        <p class="col-xl-8">
            Luunaro is a research project developed by student of SAE Institute Belgrade as a part of the Major project for BSc degree in Web Development.
            The project introduces the users to the neumorphic design concept which is widely dicussed in 2020. Luunaro.com is practical component of the project, that also 
            offers functional examples of neumorphic design elements combined into small sample applications for other developers. 
            The usability page introduces the project outcome -
            the recommendations of how to effectivily use the neumorphic design, pros and cons that are based on results of survey, expert heuristic evaluations 
            and participant observation methods.
        </p>    
    </div>
    <div class="row justify-content-center">
        <p class="col-xl-8">
            Luunaro.com offers its own <a href="https://www.figma.com/proto/9W9TLv1w2PWI55XMzDP4jo/Major-project?node-id=13%3A15&scaling=min-zoom" target="_blank">styleguide</a> 
            that contains all the elements and their styling used for the project. 
           
        </p>
    </div>
  </div>
</template>

<style scoped lang="scss">

h1 {
    color:#BC5353;
    text-align: center;
    margin: 50px 0px;

}
p {
    display: inline-block;
    margin-top: 30px;
    text-align: justify;
    font-size: 20px;
    color: #606875;
    padding: 0 30px;
    a {
        color: #BC5353;
        transition: .6s;
    }
    a:hover {
        color: #926d8c;
        text-decoration: none;
    }
}
.container {
    min-height: 800px;
}

@media screen and (max-width: 390px) {
    p {
        text-align: left;
    }
}
    
</style>