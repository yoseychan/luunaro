<template>
	<div class="container">
		<h3>Sample application: To-do planner</h3>
		<p>The planner allows the user to create to-do list with a simple input field. To submit the task the user needs to press enter key.
			Users are also able to mark the tasks that are done, edit, clear them by pressing on the clear-list button, or remove the tasks one by one.</p>

		<div class="row">
      
      <TodoAppDark />
      <TodoAppLight />

    </div>
  </div>
</template>

<script>
import TodoAppLight from './Todo-app-light';
import TodoAppDark from './Todo-app-dark';

export default {
  name: 'TodoApp',
	components: {
    TodoAppLight,
    TodoAppDark
	},
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

	h4 {
		text-align:center;
		margin: 16px 0;
	}

}
</style>