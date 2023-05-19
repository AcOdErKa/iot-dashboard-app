import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SensorService {

  constructor(private http: HttpClient) { }
  baseURL: string = 'http://localhost:3000/sensor';
  getLatestSensorData(sensor_name: string) {
    const requestURL = `${this.baseURL}/read?sensor_name=${sensor_name}&count=1`
    return this.http.get(requestURL)
  }

  getSensorDataByCount(sensor_name:string, count:number) {
    const requestURL = `${this.baseURL}/read?sensor_name=${sensor_name}&count=${count}`
    return this.http.get(requestURL)
  }
}
