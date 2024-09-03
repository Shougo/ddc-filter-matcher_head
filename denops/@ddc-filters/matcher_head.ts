import { type Item, type SourceOptions } from "jsr:@shougo/ddc-vim@~7.0.0/types";
import { BaseFilter } from "jsr:@shougo/ddc-vim@~7.0.0/filter";

type Params = {
  maxMatchLength: number;
};

export class Filter extends BaseFilter<Params> {
  override filter(args: {
    sourceOptions: SourceOptions;
    filterParams: Params;
    completeStr: string;
    items: Item[];
  }): Promise<Item[]> {
    const maxMatchLength = args.filterParams.maxMatchLength;
    let compareStr: string = maxMatchLength === 0
      ? args.completeStr
      : args.completeStr.slice(0, maxMatchLength);
    if (args.sourceOptions.ignoreCase) {
      compareStr = compareStr.toLowerCase();
      return Promise.resolve(args.items.filter(
        (item) => item.word.toLowerCase().startsWith(compareStr),
      ));
    } else {
      return Promise.resolve(args.items.filter(
        (item) => item.word.startsWith(compareStr),
      ));
    }
  }

  override params(): Params {
    return {
      maxMatchLength: 0,
    };
  }
}
