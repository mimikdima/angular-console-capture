# 📦 console-capture (Angular Library)

> Angular 14+ service that captures all `console.log()` and `console.error()` calls globally — perfect for debugging, diagnostics, and reporting.

![npm version](https://img.shields.io/npm/v/console-capture)
![Angular](https://img.shields.io/badge/angular-14+-dd0031)
![License](https://img.shields.io/npm/l/console-capture)

---

## ✨ Features

- ✅ Automatically captures all `console.log()` and `console.error()` calls.
- ✅ Prevents self-logging when inspecting logs/errors.
- ✅ Includes full error stack, name, and message.
- ✅ Lightweight service — no UI, no external dependencies.
- ✅ Easy to plug into your app or extend with hotkey triggers.

---

## 🧠 Service API
The ConsoleCaptureService provides the following functions:

🔹 **getCapturedData()** - 
Returns all captured console logs and errors.

🔹 **clearCapturedData()** - 
Clears all stored logs and errors.

🔹 **stopCapturing()d** - 
Temporarily stops console capturing.
Useful before printing captured data to avoid recursive logging.

🔹 **startCapturingAgain()** - 
Resumes console capturing after a manual stop.


## 📦 Installation

      npm install angular-console-capture


## example

Add service to your project

        import { AngularConsoleCaptureModule } from 'angular-console-capture';
        
        @NgModule({
          imports: [AngularConsoleCaptureModule]
        })
        export class AppModule {}

add activation
      
        constructor(private angularConsoleCaptureSrv: AngularConsoleCaptureService){}
      
        ngOnInit() {
         // -> here you can set the exact method you will use to call data from the console
          document.addEventListener('keydown', (event) => {
             if (event.ctrlKey && event.key === 'b') { 
                 this.angularConsoleCaptureSrv.pauseCapturing();
      
                 const capturedData = this.angularConsoleCaptureSrv.getCapturedData();
                 
                 // call API to save in server if you need
                 
                 console.log(capturedData)
                 this.angularConsoleCaptureSrv.unPauseCapturing();
             }
         });
        }
