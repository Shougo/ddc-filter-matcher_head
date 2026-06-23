import type { Item, SourceOptions } from "@shougo/ddc-vim/types";
import { BaseFilter } from "@shougo/ddc-vim/filter";

type Params = {
  maxMatchLength: number;
};

export class Filter extends BaseFilter<Params> {
  override async filter(args: {
    sourceOptions: SourceOptions;
    filterParams: Params;
    completeStr: string;
    items: Item[];
  }): Promise<Item[]> {
    const { maxMatchLength } = args.filterParams;
    let compareStr = maxMatchLength === 0
      ? args.completeStr
      : args.completeStr.slice(0, maxMatchLength);

    if (args.sourceOptions.ignoreCase) {
      compareStr = compareStr.toLowerCase();
      return args.items.filter(
        (item) => item.word.toLowerCase().startsWith(compareStr),
      );
    }

    return args.items.filter((item) => item.word.startsWith(compareStr));
  }

  override params(): Params {
    return {
      maxMatchLength: 0,
    };
  }
}
