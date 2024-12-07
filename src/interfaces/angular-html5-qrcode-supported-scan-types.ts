import { Html5QrcodeScanType } from "html5-qrcode";

export interface AngularHTML5QRCodeSupportedScanTypes {
  camera:Html5QrcodeScanType[] | undefined,
  file:Html5QrcodeScanType[] | undefined,
  both:Html5QrcodeScanType[] | undefined,
}
