<template>
	<div id="mine">
		<h1> {{manong}} </h1>
		<h3>{{welcome}}</h3>
		<h4>{{user}}</h4>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				manong : '个人中心',
				welcome : '欢迎',
				user : ''
			}
		},
		created:function(){
	        this.goback();
	    },
		methods: {
            goback: function() {
            	this.user = this.$route.params.name
			}
		}
	}
</script>

<style>
	#mine h3{
		font-size: 30px;
		line-height: 60px;
	}
	#mine h4{
		font-size: 36px;
		line-height: 66px;
		color: #f60;
	}
</style>