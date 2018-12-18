import React, { Component } from 'react';
import './App.css';
import totalData from './Cn-Density';
import ChinaMap from './component/chinaMap';
import ProvinceMap from './component/provinceMap';
class App extends Component {
  state = {
    provinceName : '',
    chinaData : [],
    provinceData : [],
  };

  abbrName = (cityName) => {
    if (cityName === '内蒙古自治区' || cityName === '黑龙江省') {
      return cityName.substring(0,3);
    }
    return cityName.substring(0,2);
  }
  
  componentDidMount = () => {
    let tempData = totalData.filter( obj => {
      return obj.upperReigon === '中国';
    })
    .map( obj => {
      return {
        name: this.abbrName(obj.name),
        value:obj.value
      }
    });
    this.setState({chinaData: tempData});
  }
  onClickHandler = (e) => {
    let name = e.name;
    this.setState({provinceName:name});
    let tempData = totalData.filter(obj => {
      return obj.upperReigon.startsWith(name);
    }).map(obj => {
      return {
        name : obj.name,
        value : obj.value,
      }
    });
    this.setState({provinceData : tempData});
  }
  render() {
    return (
      <div>
        <h1>Chinese Population</h1>
        <div className="container">
          <div className="china">
            <ChinaMap 
              click={this.onClickHandler} 
              data={this.state.chinaData} 
            />
          </div>
          <div className="province">
            <ProvinceMap 
              provinceName={this.state.provinceName}
              data={this.state.provinceData}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
