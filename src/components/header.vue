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

        <v-component :time="time" @sendIptVal="childTextFun"></v-component>

        <p>你写的在这里 {{ childText }}</p>

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

        <input type="text">

	</div>
</template>

<script>
    import componentTem from './componentTem.vue';

    //局部组件
    var ComponentA = {

        data: function () {
            return {
                // time: ''
                iptVal: ''
            }
        },
        // created:function () {
        //     this.getTime();
        // },
        methods: {
            // getTime: function(){
            //     setInterval( ()=> this.time = new Date().toLocaleTimeString(), 1000 )
            // }
            enter: function () {
                console.log(this.iptVal)
                this.$emit('sendIptVal', this.iptVal)
            }
        },
        template: `<div>
                        <div>{{ time }}</div>
                        <input class="doSome" type="text" placeholder="写点啥吧" v-model='iptVal' @keyup="enter">
                    </div>`,
        props: ['time']
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
                },
                time: '',
                childText: ''
            }
        },
        created:function () {
            this.getTime();
        },
        methods: {
            getTime: function(){
                setInterval( ()=> this.time = new Date().toLocaleTimeString(), 1000 )
            },
            childTextFun: function (textVal) {
                this.childText = textVal
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
    .doSome {
        width: 100%;
        height: 40px;
        border: 1px solid #f60;
        box-sizing: border-box;
    }
</style>
