import React, { Component } from 'react';
import './App.css';
import totalData from './Cn-Density';
import retriveData from './retrive';
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
    let receivedData = retriveData('/中国');
    receivedData.then(data => {
      return data.map(obj =>{
          return {
            'name':this.abbrName(obj.name),
            'value':obj.value
          } 
      })
    }).then(data => this.setState({chinaData:data}))
  }

  onClickHandler = (e) => {
    let name = e.name;
    this.setState({provinceName:name});
    let tempData = retriveData('/' + name);
    tempData.then(data => this.setState({provinceData: data}));
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
