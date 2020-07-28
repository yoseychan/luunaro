<template>
	<div>
		<div class="section dark examples">
			<div class="container">
				<h1>Examples</h1>
				<p>This section provides elements designed according to neumorphic design principles.
							Buttons, Register forms and sample interactive applications are designed for users to try out the neumorphic design in real time.</p>
			</div>
		</div>
		<div class="section dark">
			<Buttons></Buttons>
		</div>
		<div class="section dark">
			<Forms></Forms>
		</div>
		<div class="section dark">
			<TodoApp />
		</div>
		<div class="section dark">
			<CalMeter></CalMeter>
		</div>
	</div>
</template>

<style scoped lang="scss">

.section {

	&.examples {
		p {
			max-width: 1000px;
		} 
	}
}  

</style>

<script>
import Buttons from '@/components/Buttons.vue'
import Forms from '@/components/Forms.vue'
import TodoApp from '@/components/TodoApp'
import CalMeter from '@/components/CalMeter'

export default {
  name: 'Examples',
  components: {
    Buttons,
    Forms,
    TodoApp,
    CalMeter
  }
}
</script>