import {
  BaseFilter,
  Candidate,
  SourceOptions,
} from "https://deno.land/x/ddc_vim@v0.3.0/types.ts#^";

export class Filter extends BaseFilter {
  filter(args: {
    sourceOptions: SourceOptions,
    completeStr: string,
    candidates: Candidate[],
  }): Promise<Candidate[]> {
    if (args.sourceOptions.ignoreCase) {
      args.completeStr = args.completeStr.toLowerCase();
      return Promise.resolve(args.candidates.filter(
        (candidate) => candidate.word.toLowerCase().startsWith(args.completeStr),
      ));
    } else {
      return Promise.resolve(args.candidates.filter(
        (candidate) => candidate.word.startsWith(args.completeStr),
      ));
    }
  }
}
