<template>
    <div id="nav">
        <h1> {{manong}} </h1>

        <table class="infoBox">
            <tr class="addList" @click="showHide = true,addOrEdit = true">
                <td>添加</td>
            </tr>
            <tr class="infoTit">
                <td>序号</td>
                <td>姓名</td>
                <td>年龄</td>
                <td>性别</td>
                <td>生日</td>
                <td>操作</td>
            </tr>
            <tr class="infoList" v-for="(item, index) in infoData">
                <td>{{index + 1}}</td>
                <td>{{item.name}}</td>
                <td>{{item.age}}</td>
                <td>{{item.sex}}</td>
                <td>{{item.birthday}}</td>
                <td>
                    <a @click="edit(item),addOrEdit = false" href="javascript:;">修改</a> |
                    <a @click="deleteData(item.id,index)" href="javascript:;">删除</a>
                </td>
            </tr>
        </table>
        <div id="mask" v-show="showHide">
            <div class="mask">
                <input type="text" placeholder="姓名" v-model="addSqlData.name">
                <input type="text" placeholder="年龄" v-model="addSqlData.age">
                <input type="text" placeholder="性别" v-model="addSqlData.sex">
                <input type="text" placeholder="生日" v-model="addSqlData.birthday">
                <button @click="addData">保存</button>
                <button @click="showHide = false">取消</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                manong      : '导航',
                showHide    : false,
                addOrEdit   : true,
                infoData    : [],
                addSqlData  : {}
            }
        },
        created:function () {
            this.selectData();
        },
        methods:{
            selectData:function(){//查询
                this.$axios.post('http://localhost:6688/selectData.json')
                    .then(function (res) {
                        this.infoData = res.data.data;
                        console.log(res.data.explain);
                    }.bind(this))
                    .catch(function (err) {
                        console.log(err)
                    }.bind(this))
            },
            addData:function () {
                if(this.addOrEdit){//添加
                    this.addSqlData.id = this.infoData.length + 1;
                    let dataArr = [];
                    dataArr.push(this.addSqlData.id);
                    dataArr.push(this.addSqlData.name);
                    dataArr.push(this.addSqlData.age);
                    dataArr.push(this.addSqlData.sex);
                    dataArr.push(this.addSqlData.birthday);
                    this.$axios.post('http://localhost:6688/insertData.json',dataArr)
                        .then(function (res) {
                            this.showHide = false;
                            this.addSqlData = {};
                            this.selectData();
                            console.log(res.data.explain);
                        }.bind(this))
                        .catch(function (err) {
                            console.log(err)
                        }.bind(this))
                }else{//修改
                    let dataArr = [];
                    dataArr.push(this.addSqlData.id);
                    dataArr.push(this.addSqlData.name);
                    dataArr.push(this.addSqlData.age);
                    dataArr.push(this.addSqlData.sex);
                    dataArr.push(this.addSqlData.birthday);
                    dataArr.push(this.addSqlData.id);
                    this.$axios.post('http://localhost:6688/editData.json',dataArr)
                        .then(function (res) {
                            this.showHide = false;
                            this.addSqlData = {};
                            this.selectData();
                            console.log(res.data.explain);
                        }.bind(this))
                        .catch(function (err) {
                            console.log(err)
                        }.bind(this))
                }

            },
            edit:function(item){//修改
                this.addSqlData = {
                    id : item.id,
                    name : item.name,
                    age : item.age,
                    sex : item.sex,
                    birthday : item.birthday
                };
                this.showHide = true;
            },
            deleteData:function (id,i) {//删除
                this.$axios.post('http://localhost:6688/deleteData.json',id)
                    .then(function (res) {
                        console.log(res.data.explain);
                        this.selectData();
                    }.bind(this))
                    .catch(function (err) {
                        console.log(err)
                    }.bind(this))
            }
        }
    }
</script>

<style>
    .infoBox{
        width: 100%;
    }
    .infoBox tr td{
        height: 30px;
        line-height: 30px;
        border: 1px solid #666;
    }
    .infoBox .addList td{
        background: #999;
    }
    #mask{
        background: rgba(0,0,0,0.5);
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 6;
    }
    .mask{
        background: #eee;
        width: 300px;
        height: 200px;
        padding: 10px 0;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        border-radius:8px ;
    }
    .mask input{
        display: block;
        background: transparent;
        border: 1px solid #333;
        border-radius:4px ;
        width: 280px;
        height: 30px;
        margin: 5px auto;
        text-indent: 10px;
    }
    .mask button{
        width: 30%;
        height: 30px;
        background: #1bc6d5;
        border-radius:4px ;
        color: #fff;
        outline: none;
    }
</style>
