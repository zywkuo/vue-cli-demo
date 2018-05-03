<template>
	<div id="firstcompontent">
		<h1> {{manong}} </h1>
		<img class="logo" src="../assets/logo.jpeg">
        <div class="authorName">周艳伟</div>
        <component></component>
		<p class="menu">
		    <router-link to="/header/firstchildren">选项一</router-link>
		    <router-link to="/header/secondchildren">选项二</router-link>
		</p>
		<router-view></router-view>
	</div>
</template>

<script>
    import component from './component.vue'
	export default {
		components : { component },
		data() {
			return {
				manong : '首页'
			}
		}
	}
</script>

<style>
	.logo{
	  width: 150px;
	  height: 150px;
	}
	.authorName{
		font-size: 26px;
		line-height: 56px;
	}
	.menu{
		font-size: 26px;
		line-height: 56px;
	}
	.menu a{
		padding: 0 20px;
	}
</style>