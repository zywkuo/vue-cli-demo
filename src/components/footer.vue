<template>
	<div id="mine">
		<h1> {{manong}} </h1>
		<div></div>
		<router-view></router-view>
		<div class="mineNav">
			<p>
				已有账户请进行<router-link to="/footer/login">登陆</router-link>
			</p>
			<p>
				没有账户请进行<router-link to="/footer/enroll">注册</router-link>
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				manong : '个人中心'
			}
		}
	}
</script>

<style>
	.mineNav{
		font-size: 16px;
		line-height: 36px;
		display: flex;
		margin-top: 100px;
	}
	.mineNav p{
		width: 50%;
	}
	.mineNav a{
		width: 100%;
		color: #f60;
	}
</style>