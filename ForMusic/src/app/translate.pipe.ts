import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  transform(value: String, args?: any[]): String {
    if(value == "ru") {
      return "Независимо от того, находитесь ли вы за рулем, в тренажерном зале, на вечеринке или в отпуске, " +
        "ForMusic имеет миллионы треков и подкастов у вас под рукой. Слушайте, что вы хотите, или оставьте выбор " +
        "нам, и мы постараемся удивить вас.";
    } else{
      return "Whether you're driving, at the gym, at a party, or on vacation, ForMusic has millions of tracks and\n" +
        "podcasts at your fingertips. Listen to what you want, or leave the choice to us, and we will try to\n" +
        "surprise you.";
    }
  }

}
