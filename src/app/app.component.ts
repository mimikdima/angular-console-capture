import { Component, OnInit } from '@angular/core';
import { AngularConsoleCaptureService } from 'angular-console-capture';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'console';

  constructor(private angularConsoleCaptureService: AngularConsoleCaptureService){}

  ngOnInit() {
    document.addEventListener('keydown', (event) => {
       if (event.ctrlKey && event.key === 'b') {
           this.angularConsoleCaptureService.pauseCapturing();

           const capturedData = this.angularConsoleCaptureService.getCapturedData();

           console.log(capturedData)
           this.angularConsoleCaptureService.unPauseCapturing();
       }
   });
  }
}
