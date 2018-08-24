<template>
	<div id="firstcompontent">
        <h1> {{manong}} </h1>
        <img class="logo" src="../assets/logo.png">
        <div class="authorName">周艳伟</div>

        <v-componentTem></v-componentTem>

        <p class="menu">
            <router-link to="/header/firstchildren">选项一</router-link>
            <router-link to="/header/secondchildren">选项二</router-link>
        </p>

        <router-view></router-view>

        <div>
            启动mongoDB：sudo mongod<br/>
            新建窗口操作数据库：mongo
        </div>

        <ul :datatype="testData">
            <li v-for="(item, index) in testData"> {{index+1}} {{ item.name }} </li>
        </ul>

        <ul :datatype="testData2">
            <li v-for="(value, key, index) in testData2">{{ index }} {{ key }} {{ value }}</li>
        </ul>

        <button-counter></button-counter>

        <v-component></v-component>

	</div>
</template>

<script>
    import componentTem from './componentTem.vue';

    //局部组件
    var ComponentA = {
        data: function () {
            return {
                time: ''
            }
        },
        created:function () {
            this.getTime();
        },
        methods: {
            getTime: function(){
                setInterval( ()=> this.time = new Date().toLocaleTimeString(), 1000 )
            }
        },
        template: '<div>{{ time }}</div>'
    }


    export default {
        components : {
            'v-component': ComponentA,
            'v-componentTem':  componentTem
        },
        data() {
            return {
                manong      : '首页',
                testData    : [
                    {'name'  : '11'},
                    {'name'  : '22'},
                    {'name'  : '33'},
                    {'name'  : '44'},
                    {'name'  : '55'},
                    {'name'  : '66'}
                ],
                testData2   : {
                    'mame'  : 'zyw',
                    'age'   : '24',
                    'sex'   : '男'
                }
            }
        },
        created:function () {

        },
        methods: {
            
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
