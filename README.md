# ddc-matcher_head

Heading matcher for ddc.vim

This filter checks heading match.

## Required

### denops.vim

<https://github.com/vim-denops/denops.vim>

### ddc.vim

<https://github.com/Shougo/ddc.vim>

## Configuration

```vim
call ddc#custom#patch_global('sourceOptions', {
      \ '_': {
      \   'matchers': ['matcher_head'],
      \ }
      \})
```

`matcher_head` filter provides an option:

- `maxMatchLength` (number) to adjust the length of matcher.

  - Set `0` (default) to reduce candidates which don't match with entire user
    input.
  - Set a **positive** number to reduce candidates which don't match with user
    input in the length.
  - Set a **negative** number to apply filter in the length shorter than current
    input by the absolute number.
  - (There is **no** guarantee that this option will work properly when user
    input string contains some particular characters. It depends on the
    implementation of
    [String.prototype.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice).)

You can define filters with `ddc#custom#alias()` as your preference like below:

```vim
call ddc#custom#alias('filter', 'matcher_initial', 'matcher_head')
call ddc#custom#alias('filter', 'matcher_first_2', 'matcher_head')
call ddc#custom#alias('filter', 'matcher_first_3', 'matcher_head')
call ddc#custom#alias('filter', 'matcher_lazy_1', 'matcher_head')
call ddc#custom#alias('filter', 'matcher_lazy_2', 'matcher_head')
call ddc#custom#patch_global('filterParams', {
      \ 'matcher_initial': {
      \   'maxMatchLength': 1,
      \ },
      \ 'matcher_first_2': {
      \   'maxMatchLength': 2,
      \ },
      \ 'matcher_first_3': {
      \   'maxMatchLength': 3,
      \ },
      \ 'matcher_lazy_1': {
      \   'maxMatchLength': -1,
      \ },
      \ 'matcher_lazy_2': {
      \   'maxMatchLength': -2,
      \ },
      \})
call ddc#custom#patch_global('sourceOptions', {
      \ '_': {
      \   'matchers': ['matcher_initial', 'matcher_fuzzy'],
      \ }
      \})
```

(This sample supposes that you have installed
[tani/ddc-fuzzy](https://github.com/tani/ddc-fuzzy).)
