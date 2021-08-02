import {
  BaseFilter,
  Candidate,
  Context,
  Denops,
  DdcOptions,
  FilterOptions,
  SourceOptions,
} from "https://deno.land/x/ddc_vim@v0.0.7/types.ts";

export class Filter extends BaseFilter {
  filter(
    _denops: Denops,
    _context: Context,
    _options: DdcOptions,
    _sourceOptions: SourceOptions,
    _filterOptions: FilterOptions,
    _filterParams: Record<string, unknown>,
    completeStr: string,
    candidates: Candidate[],
  ): Promise<Candidate[]> {
    const filtered = candidates.filter(
      (candidate) => candidate.word.startsWith(completeStr),
    );
    return Promise.resolve(filtered);
  }
}
