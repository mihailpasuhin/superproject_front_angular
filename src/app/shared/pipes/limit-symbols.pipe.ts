import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "limitSymbols"
})
export class LimitSymbolsPipe implements PipeTransform {

  /**
   * ограничение выводимых символов с добавлением троеточия
   * Example used:
   * <h3 [innerHTML]="news.name | limitSymbols:39"></h3>
   * <h3>{{news.name | limitSymbols:39}}</h3>
   */
  transform(string, limit) {

    if (string.length > limit) {
      return string.slice(0, limit) + " ...";
    }
    return string;

  }
}
