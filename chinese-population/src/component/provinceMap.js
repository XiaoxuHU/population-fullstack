import React from 'react';
import ReactEcharts from 'echarts-for-react';
import * as provinces from '../indexProvinces';

const provinceMap = (props) => {
    let option = {
        title:{
          text:props.provinceName,
          bottom:'bottom',
          left:'center',
        },
        visualMap: {
            min: 100,
            max: 1000,
            text:['p/km2'],
            left:0,
            top:'bottom',
            padding:[5,5,5,0],
          },
        tooltip:{
          trigger:'item',
          backgroundColor:'rgba(250,250,250,0.9)',
          formatter: (params) => {
            if (params.value) {
              return params.name + '<br />' + params.value + ' 人/平方公里';
            } else {
              return '<br />' + '无数据';
            }
          },
          textStyle:{
            color:'black',
          },
        },
          series: [{
              type: 'map',
              map: props.provinceName,
              data:props.data,
          }]
    }
    return <ReactEcharts
            option={option}
            />
}

export default provinceMap;