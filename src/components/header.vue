<template>
	<div id="firstcompontent">
      <h1> {{manong}} </h1>
      <img class="logo" src="../assets/logo.png">
          <div class="authorName">周艳伟</div>
          <componentTem></componentTem>
      <p class="menu">
          <router-link to="/header/firstchildren">选项一</router-link>
          <router-link to="/header/secondchildren">选项二</router-link>
      </p>
      <router-view></router-view>
      <div>
          启动mongoDB：sudo mongod<br/>
          新建窗口操作数据库：mongo
      </div>
	</div>
</template>

<script>
    import componentTem from './componentTem.vue'
    export default {
        components : { componentTem },
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
