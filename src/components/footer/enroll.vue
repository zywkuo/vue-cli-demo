<template>
	<div id="enroll">
		<div class="enrollBox">
			<h3>{{manong}}</h3>
			<div class="enrollUserName clear"><span class="fl">用户名</span><input type="text" class="fr" v-model = 'enrollUserName'></div>
			<div class="enrollPassWord clear"><span class="fl">密码</span><input type="password" class="fr" v-model="enrollPassWord"></div>
			<div>{{resData}}</div>
			<button v-on:click = 'creatData'>{{manong}}</button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				manong : '注册',
				resData:'',
				enrollUserName:'',
				enrollPassWord:''
			}
		},
		methods:{
			creatData:function(){
				var creatData = {
					name:this.enrollUserName,
					passWord:this.enrollPassWord
				}
				console.log(creatData)
				this.$axios.post('http://localhost:9999/creatData.json',creatData)
				.then(function(res){
				    console.log(res);
				    this.resData = res.data.data;
				    var that = this
				    if(res.data.code == 1){
				    	setTimeout(function(){
					    	that.$router.push({path : '/footer/login'});
					    },1000)
				    }
				}.bind(this))
				.catch(function(err){
				    console.log(err)
				}.bind(this))
			}
		}
	}
</script>

<style>
	.enrollBox h3{
		font-size: 30px;
		line-height: 60px;
		color: #fff;
		background: #999;
	}
	.enrollBox div{
		width: 80%;
		height: 60px;
		margin: 0 auto;
		font-size: 22px;
		line-height: 60px;
	}
	.enrollBox div span{
		display: block;
		width: 26%;
		height: 60px;
		text-align: justify;
	}
	.enrollBox div span:after{
		content: '';
		padding-left:100%;
		display: inline-block; 
	}
	.enrollBox div input{
		width: 66%;
		height: 30px;
		font-size: 18px;
		border: 1px solid #999;
		border-radius: 6px;
		margin-top: 12px;
		outline: none;
		text-indent: 6px;
	}
	.enrollBox button{
		width: 60%;
		height: 50px;
		background: #00796B;
		color: #fff;
		border: none;
		border-radius: 6px;
		font-size: 30px;
	}
</style>




