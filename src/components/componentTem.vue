<template>
	<div id="firstcompontent">
		<h1> {{manong}} </h1>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				manong : '码农'
			}
		}
	}
</script>


<!--scoped css只应用当前页面-->
<style scoped>
	h1{
		font-size: 28px;
		line-height: 56px;
		color: #999;
	}
</style>












