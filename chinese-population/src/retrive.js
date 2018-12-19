const retriveData = async (url) => {
    let backResponse = await fetch(url);
    let resArr = await backResponse.json();
    return convertData(resArr);
}

const convertData = (data) => {
    return data.map(obj => {
      return {
        name:obj.name.trim(),
        value:obj.value
      }
    })
}

export default retriveData;