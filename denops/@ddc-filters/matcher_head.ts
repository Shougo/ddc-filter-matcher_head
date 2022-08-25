import {
  BaseFilter,
  Item,
  SourceOptions,
} from "https://deno.land/x/ddc_vim@v2.3.1/types.ts";

type Params = Record<never, never>;

export class Filter extends BaseFilter<Params> {
  filter(args: {
    sourceOptions: SourceOptions,
    completeStr: string,
    items: Item[],
  }): Promise<Item[]> {
    if (args.sourceOptions.ignoreCase) {
      args.completeStr = args.completeStr.toLowerCase();
      return Promise.resolve(args.items.filter(
        (item) => item.word.toLowerCase().startsWith(args.completeStr),
      ));
    } else {
      return Promise.resolve(args.items.filter(
        (item) => item.word.startsWith(args.completeStr),
      ));
    }
  }

  params(): Params { return {}; }
}
