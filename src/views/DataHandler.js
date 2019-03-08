class DataHandler {
  constructor () {
    this.temperatureEndpoint = 'http://192.168.1.9:3000/temperature'
    this.locationTemperatureEndpoint = 'http://192.168.1.9:3000/locationTemperature'
    this.devicesListEndpoint = 'http://192.168.1.9:3000/deviceList'
   
  }
  getLocationTemperature (location) {
    var getJsonPromise = new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.open('GET', this.locationTemperatureEndpoint + '/?location=' + location)
      xhr.send()
      xhr.onload = () => resolve(xhr.responseText)
      xhr.onerror = () => reject(xhr.statusText)
    })
    getJsonPromise = getJsonPromise.then(measurments => {
      var _jsonResults = JSON.parse(measurments)
      return _jsonResults
    })
    return getJsonPromise
  }

  getTemperatureJson (nodeName, timeRange) {
    var getJsonPromise = new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      var reqUrl = this.temperatureEndpoint + '/?nodeName=' + nodeName + '&timeRange=' + timeRange
      xhr.open('GET', reqUrl)
      xhr.send()
      xhr.onload = () => resolve(xhr.responseText)
      xhr.onerror = () => reject(xhr.statusText)
    })
    getJsonPromise = getJsonPromise.then(measurments => {
      var _jsonResults = JSON.parse(measurments)
      return _jsonResults
    })
    return getJsonPromise
  }

  getDeviceList () {
    var getDeviceListPromise = new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.open('GET', this.devicesListEndpoint)
      xhr.send()
      xhr.onload = () => resolve(xhr.responseText)
      xhr.onerror = () => reject(xhr.statusText)
    })
    getDeviceListPromise = getDeviceListPromise.then(deviceList => {
      var _jsonResults = JSON.parse(deviceList)

      return _jsonResults
    })
    return getDeviceListPromise
  }

  webSocketHandler () {
    var socket = io('http://192.168.1.9:5000', { timeout: 5000 })
    socket.on('sensor change', (msg) => {
      this.deviceChangedEvent.emit(msg)
    })
    socket.on('device connected', (msg) => {
      this.deviceConnectedEvent.emit(msg)
    })
    socket.on('device disconnected', (msg) => {
      this.deviceDisconnectedEvent.emit(msg)
    })
    socket.on('connect_error', (error) => {
      this.errorHandler.showError('Brak połączenia WebSocket', error)
      setTimeout('', 5000)
      socket.on('connect', () => {
        this.errorHandler.clearPage()
      })
    })
  }
}
var dh = new DataHandler()
export default dh
