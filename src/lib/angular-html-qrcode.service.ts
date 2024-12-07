import { Injectable } from '@angular/core';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { QrcodeErrorCallback, QrcodeSuccessCallback } from 'html5-qrcode/esm/core';


@Injectable({
  providedIn: 'root'
})
export class AngularHtmlQrcodeService {

  private instance?:Html5QrcodeScanner;
  constructor() {

   }
   html5QrcodeScanner(selector:string,config:any,verbose:boolean=true){

      this.instance = new Html5QrcodeScanner(selector,config,verbose);
    return this.instance
    }
   render(onSuccess:QrcodeSuccessCallback,onError:QrcodeErrorCallback) {
    this.instance?.render(onSuccess,onError)
   }
   clear():Promise<void> | undefined {
   return this.instance?.clear()
   }
   pause(shouldPauseVideo?: boolean) {
    this.instance?.pause(shouldPauseVideo)
   }
   resume() {
    this.instance?.resume()
   }

}
