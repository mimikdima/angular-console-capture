import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsoleCaptureService {

  private logs: any[] = [];
  private isCapturing = true;
  private originalLog = console.log;
  private originalError = console.error;

  constructor() {
      this.startCapturing();
  }

  private startCapturing() {
      // Override console.log
      console.log = (...args: any[]) => {
          if (this.isCapturing) {
              let log = {
                  logType: 'log',
                  logTime: new Date().toISOString(),
                  logData: args[0]
              }
              this.logs.push(log);
          }
          this.originalLog.apply(console, args);
      };

      // Override console.error
      console.error = (...args: any[]) => {
          if (this.isCapturing) {
              const cleanedError = args.map(arg => {
                  if (arg instanceof Error) {
                      return {
                          message: arg.message,
                          stack: arg.stack,
                          name: arg.name
                      };
                  }
                  return arg;
              });
              let log = {
                  logType: 'error',
                  logTime: new Date().toISOString(),
                  logData: cleanedError[0]
              }
              this.logs.push(log);
          }
          this.originalError.apply(console, args);
      };

      this.originalLog('ConsoleCaptureService initialized. Logs and errors are being captured.');
  }

  getCapturedData() {
      let capturedData = [...this.logs]
      return capturedData;
  }

  // Clear capturing Data
  clearCapturedData() {
      this.logs = [];
  }

  // Pause capturing
  pauseCapturing() {
      this.isCapturing = false;
  }

  // Resume capturing
  unPauseCapturing() {
      this.isCapturing = true;
  }
}
