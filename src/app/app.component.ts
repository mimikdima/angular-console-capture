import { Component, OnInit } from '@angular/core';
import { ConsoleCaptureService } from 'console-capture';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'console';

  constructor(private consoleCaptureService: ConsoleCaptureService){}

  ngOnInit() {
    document.addEventListener('keydown', (event) => {
       if (event.ctrlKey && event.key === 'b') {
           this.consoleCaptureService.pauseCapturing();

           const capturedData = this.consoleCaptureService.getCapturedData();

           console.log(capturedData)
           this.consoleCaptureService.unPauseCapturing();
       }
   });
  }
}
