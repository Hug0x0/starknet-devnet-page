---
sidebar_position: 9
---

## Lite mode

To improve Devnet performance, instead of calculating the actual hash of deployment transactions and blocks, sequential numbering can be used (0x0, 0x1, 0x2, ...).

Consider passing these CLI flags on Devnet startup:

- `--lite-mode` enables all of the optimizations described below (same as using all of the flags below)
- `--lite-mode-deploy-hash`
  - disables the calculation of transaction hash for deploy transactions
- `--lite-mode-block-hash`
  - disables the calculation of block hash
  - disables get_state_update functionality
