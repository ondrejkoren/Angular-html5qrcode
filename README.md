# Angular HTML5 QR Code Library

The **Angular HTML5 QR Code Library**  based on  [html5-qrcode](https://github.com/mebjas/html5-qrcode) library
The **Angular HTML5 QR Code Library** provides an Angular wrapper for the [html5-qrcode](https://github.com/mebjas/html5-qrcode) library, allowing developers to easily integrate QR code and barcode scanning functionalities into their Angular applications.
## Component Template Usage
```bash
npm install angular-html5-qrcode
```

```TYPESCRIPT
import { AngularHtmlQrcodeComponent } from 'angular-html5-qrcode';
```

```HTML
<angular-html-qrcode
  [types]="[Html5QrcodeSupportedFormats.QR_CODE]"
  [fps]="2"
  [aspectRatio]="1.333334"
  [disableFlip]="false"
  [supportCameraOrFile]="'camera'"
  (onSuccess)="handleScanSuccess($event)"
  (onError)="handleScanError($event)">
</angular-html-qrcode>
```
## Input Properties Table

| Property              | Type                                   | Default                    | Description                                                                                      |
|-----------------------|----------------------------------------|----------------------------|--------------------------------------------------------------------------------------------------|
| `types`              | `Html5QrcodeSupportedFormats[]`       | All supported formats      | List of formats to support during scanning.                                                     |
| `fps`                | `number`                              | `10`                       | Frames per second for the camera feed.                                                          |
| `selectorID`         | `string`                              | `'reader'`                 | ID of the container element for the scanner.                                                    |
| `rememberLastUsedCamera` | `boolean`                         | `true`                     | Whether to remember the last used camera.                                                       |
| `aspectRatio`        | `number`                              | `1.333334`                 | Aspect ratio of the camera feed.                                                                |
| `disableFlip`        | `boolean`                             | `false`                    | Disable the flipping of the camera feed (useful for mirrored scans).                            |
| `supportCameraOrFile` | `string`          | `'both'`                 | Choose whether to enable camera scanning, file scanning, or both.                               |
| `qrbox`              | `QrDimensions , QrDimensionFunction` | `{ width: 250, height: 250 }` | Dimensions of the scanning box.                                                                 |

---

## Output Events Table

| Event       | Payload Type       | Description                                           |
|-------------|--------------------|-------------------------------------------------------|
| `onSuccess` | `QrcodeSuccessCallback`              | Triggered when a QR code or barcode is successfully scanned. |
| `onError`   | `QrErrorCallback`              | Triggered when there is an error during scanning.    |
## Import the Service
```Typescript
import { Component } from '@angular/core';
import { AngularHtmlQrcodeService } from 'angular-html5-qrcode';

export class AppComponent {
  constructor(private qrCodeService: AngularHtmlQrcodeService) {}
}
```
## Methods

| Method                           | Description                                                                               | Parameters                                                                                                                                         | Returns                            |
|----------------------------------|-------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------|
| `clear()`                        | Clears the scanner instance and releases resources.                                       | None                                                                                                                                                | `Promise<void>` or `undefined`.    |
| `pause(shouldPauseVideo)`        | Temporarily pauses the scanner.                                                          | - `shouldPauseVideo` *(boolean)*: Whether to pause video input (default: `true`).                                                                   | `void`.                            |
| `resume()`                       | Resumes the scanner if it was paused.                                                    | None                                                                                                                                                | `void`.                            |
