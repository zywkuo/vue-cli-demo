<template>
    <div id="app">
        <router-view></router-view>
        <div class="nav">
            <router-link to="/">首页</router-link>
            <router-link to="/nav">导航</router-link>
            <router-link to="/section">天气</router-link>
            <router-link to="/footer">我的</router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: 'App'
}
</script>

<style>
body{

}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding-bottom: 46px;
}
.nav{
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: flex-end;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    height: 46px;
    line-height: 46px;
    font-size: 20px;
    background: #999;
}
.nav a{
    color: #333;
    text-decoration: none;
}
h1{
    font-size: 38px;
    line-height: 66px;
    color: #999;
}
</style>
