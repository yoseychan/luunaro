<template>
    <div>
        <div class="container">
            <h1>Examples</h1>
            <p>This section provides elements designed according to neumorphic design principles.
                 Buttons, Register forms and sample interactive applications are designed for users to try out the neumorphic design in real time.</p>
        </div>
        <Buttons></Buttons>
        <Forms></Forms>   
        <TodoAppDark></TodoAppDark>
        <CalMeter></CalMeter>
    </div>
</template>

<style scoped lang="scss">

h1 {
    color: #BC5353;
    margin-top: 150px;
}
h3{
    color: #BC5353;
}
p {
    color: #606875;
    display: inline-block;
    max-width: 1000px;
    margin-bottom: 20px;
    font-size: 20px;
}   
.section{
    margin-top: 100px;
    .row {
        margin-top: 50px;   
    }
}

</style>

<script>
import Buttons from '@/components/Buttons.vue'
import Forms from '@/components/Forms.vue'
import TodoAppDark from '@/components/Todo-app-dark.vue'
import CalMeter from '@/components/Cal-meter-dark'
// import Testing from '@/components/Testing.vue'

export default {
  name: 'Examples',
  components: {
    Buttons,
    Forms,
    TodoAppDark,
    CalMeter

  }
}
</script>