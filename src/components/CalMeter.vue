<template>
  <div class="container section">
    <h3>Sample application: Calorie counter</h3>
    <p>The calorie counter allows the user to input the description of the food item and its nutrition values.
        The application calculates all the submitted values into totals. Users are able to remove and edit them at any time.</p>

    <CalMeterDark />
    <CalMeterLight />

  </div>
</template>

<script>
import CalMeterDark from '@/components/Cal-meter-dark';
import CalMeterLight from '@/components/Cal-meter-light';

export default {
  name: 'CalMeter',
  components: {
    CalMeterDark,
    CalMeterLight
  }
}
</script>

<style scoped lang="scss">

.container {
	.row {
		margin-top:64px;
        padding: 10px;
	}
    h3 {
        padding: 10px;
    }
	p {
		max-width: 1000px;
        font-size: 1rem;
        padding: 10px;

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