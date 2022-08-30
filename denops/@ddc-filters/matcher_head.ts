import {
  BaseFilter,
  Item,
  SourceOptions,
} from "https://deno.land/x/ddc_vim@v2.3.1/types.ts";

type Params = {
  maxMatchLength: number;
};

export class Filter extends BaseFilter<Params> {
  filter(args: {
    sourceOptions: SourceOptions,
    filterParams: Record<string, unknown>,
    completeStr: string,
    items: Item[],
  }): Promise<Item[]> {
    const maxMatchLength = args.filterParams.maxMatchLength as number
    let str: string = maxMatchLength == 0
      ? args.completeStr
      : args.completeStr.slice(0, maxMatchLength)
    if (args.sourceOptions.ignoreCase) {
      str = str.toLowerCase();
      return Promise.resolve(args.items.filter(
        (item) => item.word.toLowerCase().startsWith(str),
      ));
    } else {
      return Promise.resolve(args.items.filter(
        (item) => item.word.startsWith(str),
      ));
    }
  }

  params(): Params {
    return {
      maxMatchLength: 0,
    };
  }
}
