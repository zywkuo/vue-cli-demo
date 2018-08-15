<template>
    <div id="login">
        <div class="loginBox">
            <h3>{{manong}}</h3>
            <div class="loginUserName clear"><span class="fl">用户名</span><input type="text" class="fr" v-model = 'loginUserName'></div>
            <div class="loginPassWord clear"><span class="fl">密码</span><input type="password" class="fr" v-model="loginPassWord"></div>
            <div>{{resData}}</div>
            <button v-on:click = 'pushData'>{{manong}}</button>
        </div>
    </div>
</template>

<script>
	export default {
      data() {
          return {
              manong : '登陆',
              resData:'',
              loginUserName:'',
              loginPassWord:''
          }
      },
      methods:{
          pushData:function(){
              var pushData = {
                  name:this.loginUserName,
                  passWord:this.loginPassWord
              }
              console.log(pushData)
              this.$axios.get('http://localhost:9999/pushData.json',{params: pushData})
              .then(function(res){
                  console.log(res);
                  this.resData = res.data.data;
                  var that = this
                  if(res.data.code == 1){
                      setTimeout(function(){
                          that.$router.push({
                              path : '/footer/mine',
                              name : 'mine',
                              params : {
                                  name : pushData.name
                              }
                          });
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
.loginBox h3{
    font-size: 30px;
    line-height: 60px;
    color: #fff;
    background: #999;
}
.loginBox div{
    width: 80%;
    height: 60px;
    margin: 0 auto;
    font-size: 22px;
    line-height: 60px;
}
.loginBox div span{
    display: block;
    width: 26%;
    height: 60px;
    text-align: justify;
}
.loginBox div span:after{
    content: '';
    padding-left:100%;
    display: inline-block;
}
.loginBox div input{
    width: 66%;
    height: 30px;
    font-size: 18px;
    border: 1px solid #999;
    border-radius: 6px;
    margin-top: 12px;
    outline: none;
    text-indent: 6px;
}
.loginBox button{
    width: 60%;
    height: 50px;
    background: #00796B;
    color: #fff;
    border: none;
    border-radius: 6px;
    font-size: 30px;
}
</style>





