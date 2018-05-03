<template>
	<div id="section">
		<h1>{{ manong }}</h1>
		<ul class="weatherBox">
			<li class="weatherList" v-for = 'list in weatherData'>
				<div>
					<p>预报日期</p>
					<p>日出时间</p>
					<p>日落时间</p>
					<p>月升时间</p>
					<p>月落时间</p>
					<p>最高温度</p>
					<p>最低温度</p>
					<p>白天天气</p>
					<p>晚间天气</p>
					<p>风向</p>
					<p>风力</p>
					<p>风速，公里/小时</p>
					<p>相对湿度</p>
					<p>降水概率</p>
					<p>降水量</p>
					<p>大气压强</p>
					<p>紫外线强度指数</p>
					<p>能见度，单位：公里</p>
				</div>
				<div>
					<p>{{list.date}}</p>
					<p>{{list.sr}}</p>
					<p>{{list.ss}}</p>
					<p>{{list.mr}}</p>
					<p>{{list.ms}}</p>
					<p>{{list.tmp_max}}</p>
					<p>{{list.tmp_min}}</p>
					<p>{{list.cond_txt_d}}</p>
					<p>{{list.cond_txt_n}}</p>
					<p>{{list.wind_dir}}</p>
					<p>{{list.wind_sc}}</p>
					<p>{{list.wind_spd}}</p>
					<p>{{list.hum}}</p>
					<p>{{list.pop}}</p>
					<p>{{list.pcpn}}</p>
					<p>{{list.pres}}</p>
					<p>{{list.uv_index}}</p>
					<p>{{list.vis}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				manong : '天气',
				weatherData : []
			}
		},
		created:function(){
	        this.goback();
	    },
		methods: {
            goback: function() {
            	this.$axios.get('https://free-api.heweather.com/s6/weather/forecast?location=北京&key=b01c2b8e38534442b4e4d2c5f392cc1f')
				.then(function(res){
				    console.log(res.data.HeWeather6[0].daily_forecast)
				    this.weatherData = res.data.HeWeather6[0].daily_forecast
				}.bind(this))
				.catch(function(err){
				    console.log(err)
				}.bind(this))
			}
		}
	}


</script>

<style>
#section{
	margin-bottom:60px;
}
.weatherList{
	width: 90%;
	margin: 10px auto;
	padding: 10px 0;
	font-size: 18px;
	line-height: 26px;
	display: flex;
	justify-content: space-around;
	background: #f5f5f5;
	border-radius: 8px;
}
.weatherList div{
    width: 46%;
}
</style>

<!-- import axios from 'axios'
import qs from 'qs'
import { createStore } from '../store'
import config from './config-client'

axios.interceptors.request.use(
    config => {
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

axios.interceptors.response.use(response => response, error => Promise.resolve(error.response))

function checkStatus(response) {
    if (response.status === 200 || response.status === 304) {
        return response
    }
    return {
        data: {
            code: -404,
            message: response.statusText,
            data: ''
        }
    }
}

function checkCode(res) {
    if (res.data.code === -500) {
        window.location.href = '/backend'
    } else if (res.data.code === -400) {
        window.location.href = '/'
    } else if (res.data.code !== 200) {
        createStore().dispatch('global/showMsg', res.data.message)
    }
    return res
}

export default {
    post(url, data) {
        return axios({
            method: 'post',
            url: config.api + url,
            data: qs.stringify(data),
            timeout: config.timeout,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        })
            .then(checkStatus)
            .then(checkCode)
    },
    get(url, params) {
        return axios({
            method: 'get',
            url: config.api + url,
            params,
            timeout: config.timeout,
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
            .then(checkStatus)
            .then(checkCode)
    }
} -->