import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WishService {
  private renderer: Renderer2;
  selectedTemplate: {
    imageUrl: 'assets/images/card/c1.jpeg';
    title: 'Dummy text to check the response of the user';
  };
  constructor(
    rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private document: any
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  createMeme(payload: any) {
    const createMemeObs = new ReplaySubject<any>();

    window.devicePixelRatio = 2;
    const height = 656;
    const width = 656;
    //step 1: create canvas tag
    const canvasEl: HTMLCanvasElement = this.renderer.createElement('canvas');
    canvasEl.height = height;
    canvasEl.width = width;
    canvasEl.style.height = String(height / 2 + 'px');
    canvasEl.style.width = String(width / 2 + 'px');

    const ctx: any = canvasEl.getContext('2d');
    ctx.imageSmoothingEnabled = true;

    //step 2: get image
    const bgImage: HTMLImageElement = this.renderer.createElement('img');
    bgImage.crossOrigin = 'anonymous';
    bgImage.src = payload.imageUrl;
    bgImage.onerror = () => {
      //handle template image load error
      createMemeObs.error({
        success: false,
        message: 'template image load failed',
      });
    };
    bgImage.onload = () => {
      //step2-a: center image in canvas    object-fit:cover and draw it to canvas
      var scale = Math.min(
        canvasEl.width / bgImage.width,
        canvasEl.height / bgImage.height
      );
      var w = bgImage.width * scale;
      var h = bgImage.height * scale;
      var left = canvasEl.width / 2 - w / 2;
      var top = canvasEl.height / 2 - h / 2;

      ctx.drawImage(bgImage, left, top, w, h);

      //step3: add text
      ctx.font = '36px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#FFFFFF';
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 10;

      //add bottom text:
      if (payload.title) {
        ctx.strokeText(payload.title, width / 2, height - 48, width - 40);
        ctx.fillText(payload.title, width / 2, height - 48, width - 40);
      }

      //step4: convert to image
      let file = this.dataURLtoFile(
        canvasEl.toDataURL('image/png'),
        'image.png'
      );

      const blob = new Blob([file], { type: 'image/png' });
      const url = window.URL.createObjectURL(blob);
      // window.open(url);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Greeting';
      link.click();

      // const base64Canvas = canvasEl
      //   .toDataURL('image/jpeg')
      //   .split(';base64,')[1];

      // let sharePayload = {
      //   text: 'Come join us and spread love on the day',
      //   url: base64Canvas,
      // };
      // navigator.share(sharePayload);
    };
    return createMemeObs.asObservable();
  }

  dataURLtoFile(dataurl: any, filename: any) {
    var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }
}
