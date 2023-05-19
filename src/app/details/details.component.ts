import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SensorService } from '../services/sensor.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private sensorService: SensorService) { }
  sensor_name: any
  selected_count = 5;
  values: any = []
  ngOnInit(): void {
    this.sensor_name = this.route.snapshot.paramMap.get('sensor_name')
    this.getCount()
  }

  getCount() {
    this.sensorService.getSensorDataByCount(this.sensor_name, +this.selected_count).subscribe({
      next: (res:any) => {
        this.values = res['data'].values
        console.log(this.values)
      },
      error: (error) => {
        console.log(error)
        alert("Service Unavailable, Please try after sometime")
      }
    })

  }

}
