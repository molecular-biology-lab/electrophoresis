# electrophoresis

Count and create histogram of the DNA fragments.

## Usage

### CLI demo

```shell
$ cat /dev/urandom | base64 | tr -dc 'ATGC' | npx restriction-endonuclease AAGCTT | npx electrophoresis --resolution=10000
┌────────┬───────┬────────────┐
│ length │ count │ percentage │
├────────┼───────┼────────────┤
│ 0      │ 440   │ 44.85%     │
├────────┼───────┼────────────┤
│ 10000  │ 427   │ 43.52%     │
├────────┼───────┼────────────┤
│ 20000  │ 100   │ 10.19%     │
├────────┼───────┼────────────┤
│ 30000  │ 12    │ 1.22%      │
├────────┼───────┼────────────┤
│ 50000  │ 1     │ 0.1%       │
├────────┼───────┼────────────┤
│ 60000  │ 1     │ 0.1%       │
└────────┴───────┴────────────┘
```
