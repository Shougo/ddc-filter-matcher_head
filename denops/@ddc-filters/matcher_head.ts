import {
  BaseFilter,
  Item,
  SourceOptions,
} from "https://deno.land/x/ddc_vim@v3.2.0/types.ts";

type Params = {
  maxMatchLength: number;
};

export class Filter extends BaseFilter<Params> {
  filter(args: {
    sourceOptions: SourceOptions,
    filterParams: Params,
    completeStr: string,
    items: Item[],
  }): Promise<Item[]> {
    const maxMatchLength = args.filterParams.maxMatchLength;
    let compareStr: string = maxMatchLength == 0
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

  params(): Params {
    return {
      maxMatchLength: 0,
    };
  }
}
