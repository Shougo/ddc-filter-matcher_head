# ddc-matcher_head

Heading matcher for ddc.vim

This filter checks heading match.

## Required

### denops.vim

https://github.com/vim-denops/denops.vim

### ddc.vim

https://github.com/Shougo/ddc.vim

## Configuration

```vim
call ddc#custom#patch_global('sourceOptions', {
      \ '_': {
      \   'matchers': ['matcher_head'],
      \ }
      \})
```
