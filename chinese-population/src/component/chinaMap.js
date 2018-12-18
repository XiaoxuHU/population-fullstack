import React from 'react';
import ReactEcharts from 'echarts-for-react';
import 'echarts/map/js/china';
const chinaMap = (props) => {
  let option =  {
        visualMap: {
          min: 100,
          max: 1000,
            right:0,
            bottom:'bottom',
            padding:[5,0,5,5],
            text:['Density:'],
          },
        tooltip:{
          trigger:'item',
          backgroundColor:'rgba(250,250,250,0.9)',
          formatter: '{b}<br/>{c}',
          textStyle:{
            color:'black',
          },
        },
        series: [
          {
            type: 'map',
            map: 'china',
            data:props.data,
          },
        ]
  };
  let onEvents = {
    'click': props.click,
  };
    return <ReactEcharts
                option={option}
                onEvents={onEvents}
            />
}

export default chinaMap;