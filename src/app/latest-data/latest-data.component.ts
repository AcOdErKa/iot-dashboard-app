import { Component, OnInit } from '@angular/core';
import { SensorService } from '../services/sensor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-latest-data',
  templateUrl: './latest-data.component.html',
  styleUrls: ['./latest-data.component.css']
})
export class LatestDataComponent implements OnInit {

  constructor(private sensorService: SensorService, private router: Router) { }
  latestTemperatureValue!: number;
  recentTemperatureTime!: Date;
  latestHumidityValue!: number;
  recentHumidityTime!: Date;

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
  };
    this.getLatestTempeeratureValue()
    this.getLatestHumidityValue()
  }

  getLatestTempeeratureValue() {
    this.sensorService.getLatestSensorData('temperature').subscribe({
      next: (response: any) => {
        this.latestTemperatureValue = response['data'].values[0].sensor_value
        this.recentTemperatureTime = new Date(response['data'].values[0].timestamp)
      },
      error: (error) => {
        console.error(error.error)
        alert('Service unavailable. Please try after sometime')
      }
    })
  }

  getLatestHumidityValue() {
    this.sensorService.getLatestSensorData('humidity').subscribe({
      next: (response: any) => {
        this.latestHumidityValue = response['data'].values[0].sensor_value
        this.recentHumidityTime = new Date(response['data'].values[0].timestamp)
      },
      error: (error) => {
        console.error(error.error)
        alert('Service unavailable. Please try after sometime')
      }
    })
  }

}
