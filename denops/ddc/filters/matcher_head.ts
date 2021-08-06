import {
  BaseFilter,
  Candidate,
  Context,
  DdcOptions,
  FilterOptions,
  SourceOptions,
} from "https://deno.land/x/ddc_vim@v0.0.10/types.ts#^";
import { Denops } from "https://deno.land/x/ddc_vim@v0.0.10/deps.ts#^";

export class Filter extends BaseFilter {
  filter(
    _denops: Denops,
    _context: Context,
    _options: DdcOptions,
    sourceOptions: SourceOptions,
    _filterOptions: FilterOptions,
    _filterParams: Record<string, unknown>,
    completeStr: string,
    candidates: Candidate[],
  ): Promise<Candidate[]> {
    if (sourceOptions.ignoreCase) {
      completeStr = completeStr.toLowerCase();
      return Promise.resolve(candidates.filter(
        (candidate) => candidate.word.toLowerCase().startsWith(completeStr),
      ));
    } else {
      return Promise.resolve(candidates.filter(
        (candidate) => candidate.word.startsWith(completeStr),
      ));
    }
  }
}
