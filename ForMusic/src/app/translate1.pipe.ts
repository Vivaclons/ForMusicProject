import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate1'
})
export class Translate1Pipe implements PipeTransform {

  transform(value: String, args?: any[]): String {
    if(value == "ru") {
      return "For Music позволяет легко найти музыку или подкасты для любой ситуации, потому что наш сервис доступен\n" +
      "на вашем телефоне, компьютере, планшете и других устройствах.";
    } else{
      return "ForMusic makes it easy to find music or podcasts for any situation, because our service is available\n" +
        "on your phone, computer, tablet, and other devices.";
    }
  }

}
