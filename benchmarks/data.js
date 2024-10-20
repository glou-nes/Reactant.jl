window.BENCHMARK_DATA = {
  "lastUpdate": 1729431122794,
  "repoUrl": "https://github.com/EnzymeAD/Reactant.jl",
  "entries": {
    "Reactant.jl Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "avikpal@mit.edu",
            "name": "Avik Pal",
            "username": "avik-pal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "59d31c6ac271cec661a09d01a5eb524be26490fb",
          "message": "perf: benchmarking CI (#136)\n\n* ci(buildkite): add benchmark runners\r\n\r\n* perf: initial ViT benchmarking\r\n\r\n* fix: path names\r\n\r\n* ci: run CPU benchmarks on larger machine\r\n\r\n* ci: try fixing CUDA bench\r\n\r\n* fix: aggregation script\r\n\r\n* ci: run GC to rule out allocations",
          "timestamp": "2024-10-01T14:58:53-04:00",
          "tree_id": "ff92305f4f07822178dd33f0944720ea016b3b18",
          "url": "https://github.com/EnzymeAD/Reactant.jl/commit/59d31c6ac271cec661a09d01a5eb524be26490fb"
        },
        "date": 1727812366495,
        "tool": "julia",
        "benches": [
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 6942179887,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21183152\nallocs=345052\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 24784244971,
            "unit": "ns",
            "extra": "gctime=1207430582\nmemory=9667628832\nallocs=17443\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 1621279958.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 2476387150,
            "unit": "ns",
            "extra": "gctime=0\nmemory=745497744\nallocs=4746\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 2190441873,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21184160\nallocs=345055\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 3992875719,
            "unit": "ns",
            "extra": "gctime=101454048\nmemory=2531928864\nallocs=13603\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 1457853745.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 1406146760,
            "unit": "ns",
            "extra": "gctime=0\nmemory=448016080\nallocs=3294\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 1761404286,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 2429831502,
            "unit": "ns",
            "extra": "gctime=80352075\nmemory=1341138368\nallocs=7760\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 2204656833,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21183008\nallocs=345052\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 3911804290,
            "unit": "ns",
            "extra": "gctime=96659377\nmemory=2531061152\nallocs=13523\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 3061427596,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 8351728163,
            "unit": "ns",
            "extra": "gctime=670341176\nmemory=4910335712\nallocs=13603\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 3279966376,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 9422553540,
            "unit": "ns",
            "extra": "gctime=355533363\nmemory=4909469664\nallocs=13523\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 1897694820,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 2501997946,
            "unit": "ns",
            "extra": "gctime=92124603\nmemory=1340496208\nallocs=7650\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gh@wsmoses.com",
            "name": "William Moses",
            "username": "wsmoses"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "55ce2cdf40545ba9ac41836ccce2e5b787cf9ea0",
          "message": "Bump dependencies (#143)",
          "timestamp": "2024-10-01T22:10:59-05:00",
          "tree_id": "350eb85b08840fe5169c3f4e6cc32a7cf0d42844",
          "url": "https://github.com/EnzymeAD/Reactant.jl/commit/55ce2cdf40545ba9ac41836ccce2e5b787cf9ea0"
        },
        "date": 1727841232675,
        "tool": "julia",
        "benches": [
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1511306590,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21183152\nallocs=345052\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 220630508,
            "unit": "ns",
            "extra": "gctime=94892449\nmemory=2320488\nallocs=45512\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 6086790888,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21183152\nallocs=345052\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 20987570101,
            "unit": "ns",
            "extra": "gctime=1460486286\nmemory=9667628832\nallocs=17443\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1442706109,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21183152\nallocs=345052\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 8958787,
            "unit": "ns",
            "extra": "gctime=0\nmemory=579584\nallocs=21996\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 1759361667,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21183488\nallocs=345053\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 2171845551,
            "unit": "ns",
            "extra": "gctime=0\nmemory=745497744\nallocs=4746\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1513155642,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21183584\nallocs=345054\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 88431013,
            "unit": "ns",
            "extra": "gctime=74119609\nmemory=579728\nallocs=22005\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 2209228872,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21185264\nallocs=345059\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 7276493924.5,
            "unit": "ns",
            "extra": "gctime=223573122.5\nmemory=2531928864\nallocs=13603\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1391234101.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 8028951,
            "unit": "ns",
            "extra": "gctime=0\nmemory=579584\nallocs=21996\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 1463259455,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21184496\nallocs=345056\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 1505466535.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=448016080\nallocs=3294\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1395090007.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 91438172.5,
            "unit": "ns",
            "extra": "gctime=80392188.5\nmemory=579600\nallocs=21997\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 1750380825,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 2588957726,
            "unit": "ns",
            "extra": "gctime=100454111\nmemory=1341138368\nallocs=7760\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1353809315,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 96514528,
            "unit": "ns",
            "extra": "gctime=77758972.5\nmemory=579600\nallocs=21997\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 2235469049,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21183008\nallocs=345052\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 3644458748,
            "unit": "ns",
            "extra": "gctime=117005132\nmemory=2531061152\nallocs=13523\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1342936571,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 119408913,
            "unit": "ns",
            "extra": "gctime=76819027\nmemory=579856\nallocs=22009\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 3018633262,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 10685489431,
            "unit": "ns",
            "extra": "gctime=419853810\nmemory=4910335712\nallocs=13603\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1414936998,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 143053914,
            "unit": "ns",
            "extra": "gctime=85241271.5\nmemory=581120\nallocs=22072\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 3250590467,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 7186489751,
            "unit": "ns",
            "extra": "gctime=532636056.5\nmemory=4909469664\nallocs=13523\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1435836062,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21183104\nallocs=345052\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 90822248.5,
            "unit": "ns",
            "extra": "gctime=79048003\nmemory=580416\nallocs=22048\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 1897964660,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 2611187269,
            "unit": "ns",
            "extra": "gctime=103693186\nmemory=1340496208\nallocs=7650\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "wsmoses@cyclops.juliacomputing.io",
            "name": "William Moses"
          },
          "committer": {
            "email": "wsmoses@cyclops.juliacomputing.io",
            "name": "William Moses"
          },
          "distinct": true,
          "id": "4f4cb40af080a6f60a63fa3e747b95788804205c",
          "message": "don't build rocm",
          "timestamp": "2024-10-01T23:22:15-04:00",
          "tree_id": "13bad54d4ed40e7b64e3664bc1ec4311cb95a6ae",
          "url": "https://github.com/EnzymeAD/Reactant.jl/commit/4f4cb40af080a6f60a63fa3e747b95788804205c"
        },
        "date": 1727841580777,
        "tool": "julia",
        "benches": [
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1427801876,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21183152\nallocs=345052\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 241937991,
            "unit": "ns",
            "extra": "gctime=103421124\nmemory=2289624\nallocs=45189\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 5706546145,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21183152\nallocs=345052\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 19592540088,
            "unit": "ns",
            "extra": "gctime=1740694624\nmemory=9667628832\nallocs=17443\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1367040220.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 8765018,
            "unit": "ns",
            "extra": "gctime=0\nmemory=579584\nallocs=21996\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 1617045921.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 2228339749.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=745497744\nallocs=4746\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1369778487.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21185168\nallocs=345058\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 95384074,
            "unit": "ns",
            "extra": "gctime=79230160\nmemory=579728\nallocs=22005\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 2267863268,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21184160\nallocs=345055\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 4660275687.5,
            "unit": "ns",
            "extra": "gctime=97075839\nmemory=2531928864\nallocs=13603\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1374725656.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 7919007,
            "unit": "ns",
            "extra": "gctime=0\nmemory=579584\nallocs=21996\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 1523146334.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 1657446563,
            "unit": "ns",
            "extra": "gctime=0\nmemory=448016080\nallocs=3294\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1293396969,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 84573801,
            "unit": "ns",
            "extra": "gctime=73454447\nmemory=579600\nallocs=21997\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 1829891224,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 3023920644,
            "unit": "ns",
            "extra": "gctime=84928182.5\nmemory=1341138368\nallocs=7760\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1292433719,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 88498026,
            "unit": "ns",
            "extra": "gctime=70972413\nmemory=579600\nallocs=21997\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 2315496105,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21183008\nallocs=345052\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 4181219607,
            "unit": "ns",
            "extra": "gctime=88481293\nmemory=2531061152\nallocs=13523\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1367617841,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 113824695,
            "unit": "ns",
            "extra": "gctime=76372555\nmemory=579856\nallocs=22009\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 3118475424,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 6707702872,
            "unit": "ns",
            "extra": "gctime=454533648\nmemory=4910335712\nallocs=13603\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1342010577,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21183104\nallocs=345052\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 129882165.5,
            "unit": "ns",
            "extra": "gctime=80611321\nmemory=580672\nallocs=22060\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 3304575961,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 9641559937,
            "unit": "ns",
            "extra": "gctime=793590002\nmemory=4909469664\nallocs=13523\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1318534127.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 87600441,
            "unit": "ns",
            "extra": "gctime=76662062.5\nmemory=580416\nallocs=22048\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 1971771485,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 2525837503,
            "unit": "ns",
            "extra": "gctime=73044260\nmemory=1340496208\nallocs=7650\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gh@wsmoses.com",
            "name": "William Moses",
            "username": "wsmoses"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ab92877b5a07d3b4b3a73a8965a77113335da0bf",
          "message": "Arm64 (#147)\n\n* try arm64\r\n\r\n* fix maybe",
          "timestamp": "2024-10-02T21:12:23-05:00",
          "tree_id": "4928d36b6532f3ff2de2370499df2c8186567f1b",
          "url": "https://github.com/EnzymeAD/Reactant.jl/commit/ab92877b5a07d3b4b3a73a8965a77113335da0bf"
        },
        "date": 1727924936203,
        "tool": "julia",
        "benches": [
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1433938661,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21183152\nallocs=345052\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 241225931,
            "unit": "ns",
            "extra": "gctime=105280115\nmemory=2289624\nallocs=45189\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 5293983326,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21183152\nallocs=345052\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 17066026908,
            "unit": "ns",
            "extra": "gctime=1023855564\nmemory=9667628832\nallocs=17443\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1370513178,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21183152\nallocs=345052\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 8307967.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=579584\nallocs=21996\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 1626851066.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 2450375926.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=745497744\nallocs=4746\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1384065918.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21183584\nallocs=345054\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 88623982,
            "unit": "ns",
            "extra": "gctime=71464609\nmemory=579728\nallocs=22005\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 2188317241,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21184160\nallocs=345055\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 3783884903.5,
            "unit": "ns",
            "extra": "gctime=132591830.5\nmemory=2531928864\nallocs=13603\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1401367836.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 7284208,
            "unit": "ns",
            "extra": "gctime=0\nmemory=579584\nallocs=21996\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 1462297272.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 1424961515,
            "unit": "ns",
            "extra": "gctime=0\nmemory=448016080\nallocs=3294\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1400469080,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 81326117.5,
            "unit": "ns",
            "extra": "gctime=70769265\nmemory=579600\nallocs=21997\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 1760867772,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 2319602333,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1341138368\nallocs=7760\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1367132681,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 92864268,
            "unit": "ns",
            "extra": "gctime=75291982\nmemory=579600\nallocs=21997\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 2237352484,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21183008\nallocs=345052\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 4234209066,
            "unit": "ns",
            "extra": "gctime=260017329\nmemory=2531061152\nallocs=13523\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1386068553,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 117300918,
            "unit": "ns",
            "extra": "gctime=77736793.5\nmemory=579856\nallocs=22009\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 3133188515,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 8735211128,
            "unit": "ns",
            "extra": "gctime=161840326\nmemory=4910335712\nallocs=13603\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1391545514,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 134529716.5,
            "unit": "ns",
            "extra": "gctime=77236762\nmemory=581120\nallocs=22072\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 3316472465,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 5726214214.5,
            "unit": "ns",
            "extra": "gctime=342167034.5\nmemory=4909469664\nallocs=13523\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1374340443,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21183104\nallocs=345052\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 78982601.5,
            "unit": "ns",
            "extra": "gctime=67384230\nmemory=580400\nallocs=22047\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 1899222307.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 2483023554,
            "unit": "ns",
            "extra": "gctime=97279868\nmemory=1340496208\nallocs=7650\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gh@wsmoses.com",
            "name": "William Moses",
            "username": "wsmoses"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f3c65db3989c208a926f3a095c4ae2f0b1e7a579",
          "message": "Build (#145)\n\n* Bump dependencies\r\n\r\n* build\r\n\r\n* darwin arm64\r\n\r\n* fix\r\n\r\n* fix\r\n\r\n* Revert \"fix\"\r\n\r\nThis reverts commit aa00173a2c061f5a848874a1114ff2a6b5896944.",
          "timestamp": "2024-10-03T08:15:53-05:00",
          "tree_id": "f607d02cc4fa13f5217252aca284c28cac71ad46",
          "url": "https://github.com/EnzymeAD/Reactant.jl/commit/f3c65db3989c208a926f3a095c4ae2f0b1e7a579"
        },
        "date": 1727963143110,
        "tool": "julia",
        "benches": [
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1458455508,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21183152\nallocs=345052\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 251236706,
            "unit": "ns",
            "extra": "gctime=98278621\nmemory=2293000\nallocs=45211\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 5585368365,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21183152\nallocs=345052\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 18510942516,
            "unit": "ns",
            "extra": "gctime=2720730741\nmemory=9667628832\nallocs=17443\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1416635330,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21183152\nallocs=345052\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 8999966.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=580608\nallocs=22000\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 1626174510,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 2507000840,
            "unit": "ns",
            "extra": "gctime=0\nmemory=745497744\nallocs=4746\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1464452980,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21183584\nallocs=345054\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 87282999,
            "unit": "ns",
            "extra": "gctime=70414742\nmemory=580752\nallocs=22009\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 2196952516,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21184160\nallocs=345055\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 5380501243,
            "unit": "ns",
            "extra": "gctime=153645223\nmemory=2531928864\nallocs=13603\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1539579056,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21190352\nallocs=345074\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 7997757,
            "unit": "ns",
            "extra": "gctime=0\nmemory=580608\nallocs=22000\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 1478484824,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21190352\nallocs=345074\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 1648231085,
            "unit": "ns",
            "extra": "gctime=0\nmemory=448016080\nallocs=3294\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1433497500,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 79774892,
            "unit": "ns",
            "extra": "gctime=67916961.5\nmemory=580624\nallocs=22001\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 1780124071,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 2802545314,
            "unit": "ns",
            "extra": "gctime=118598835\nmemory=1341138368\nallocs=7760\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1366374529,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21183008\nallocs=345052\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 87273858,
            "unit": "ns",
            "extra": "gctime=69281901\nmemory=580624\nallocs=22001\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 2290981311,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 4409558714,
            "unit": "ns",
            "extra": "gctime=112902754\nmemory=2531061152\nallocs=13523\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1481595475,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 117880246.5,
            "unit": "ns",
            "extra": "gctime=77504004.5\nmemory=580752\nallocs=22005\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 3059007138,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 8537922961,
            "unit": "ns",
            "extra": "gctime=567971176\nmemory=4910335712\nallocs=13603\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1475455846,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 137789966,
            "unit": "ns",
            "extra": "gctime=77138677\nmemory=582144\nallocs=22076\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 3144114552,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 11348055235,
            "unit": "ns",
            "extra": "gctime=542898065\nmemory=4909469664\nallocs=13523\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1431172027,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 84404630.5,
            "unit": "ns",
            "extra": "gctime=71258845.5\nmemory=581440\nallocs=22052\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 1904321145.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 2628751204,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1340496208\nallocs=7650\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gh@wsmoses.com",
            "name": "William Moses",
            "username": "wsmoses"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9698fa89feb16cc4b4e7620d9229abaf38ddac30",
          "message": "Add fallback gpu setindex (#137)\n\n* Add fallback gpu setindex\r\n\r\n* Update ConcreteRArray.jl\r\n\r\n* Update ConcreteRArray.jl\r\n\r\n* Update ConcreteRArray.jl\r\n\r\n* Update ConcreteRArray.jl\r\n\r\n* Update ConcreteRArray.jl\r\n\r\n* Update ConcreteRArray.jl\r\n\r\n* Update ConcreteRArray.jl",
          "timestamp": "2024-10-03T13:50:51-05:00",
          "tree_id": "9dfab9b7bc48881f8ca351a0827225b85dcc4564",
          "url": "https://github.com/EnzymeAD/Reactant.jl/commit/9698fa89feb16cc4b4e7620d9229abaf38ddac30"
        },
        "date": 1727983303966,
        "tool": "julia",
        "benches": [
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1570954734,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21183152\nallocs=345052\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 235920037,
            "unit": "ns",
            "extra": "gctime=94377582\nmemory=2300536\nallocs=45310\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 5154736106,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21183152\nallocs=345052\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 19482335000,
            "unit": "ns",
            "extra": "gctime=1376487567\nmemory=9667628832\nallocs=17443\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1454393866,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21183152\nallocs=345052\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 9344541.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=579584\nallocs=21996\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 1654229125,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21183488\nallocs=345053\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 2474213271,
            "unit": "ns",
            "extra": "gctime=0\nmemory=745497744\nallocs=4746\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1427339607,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21183584\nallocs=345054\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 88867803.5,
            "unit": "ns",
            "extra": "gctime=72070399\nmemory=579728\nallocs=22005\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 2208391050,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21185264\nallocs=345059\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 4720676124,
            "unit": "ns",
            "extra": "gctime=101197367\nmemory=2531928864\nallocs=13603\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1356859332,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 7831299,
            "unit": "ns",
            "extra": "gctime=0\nmemory=579584\nallocs=21996\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 1464435737,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21184496\nallocs=345056\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 1568895073,
            "unit": "ns",
            "extra": "gctime=0\nmemory=448016080\nallocs=3294\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1298556694.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 86786255,
            "unit": "ns",
            "extra": "gctime=75426207.5\nmemory=579600\nallocs=21997\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 1773492797,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 2387188682,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1341138368\nallocs=7760\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1337103435,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 105193558,
            "unit": "ns",
            "extra": "gctime=86913362.5\nmemory=579600\nallocs=21997\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 2258439114,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 4730673199,
            "unit": "ns",
            "extra": "gctime=100757285\nmemory=2531061152\nallocs=13523\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1379404181,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 116791463.5,
            "unit": "ns",
            "extra": "gctime=76518053.5\nmemory=579856\nallocs=22009\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 3050409788,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 17858116236,
            "unit": "ns",
            "extra": "gctime=467065399\nmemory=4910335712\nallocs=13603\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1299115963,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 136028347,
            "unit": "ns",
            "extra": "gctime=78881608\nmemory=581120\nallocs=22072\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 3226928458,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 9095328291,
            "unit": "ns",
            "extra": "gctime=329867203\nmemory=4909469664\nallocs=13523\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1375900813,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21183104\nallocs=345052\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 86587539,
            "unit": "ns",
            "extra": "gctime=75166810\nmemory=580400\nallocs=22047\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 1902300110,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 2520101863,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1340496208\nallocs=7650\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "avikpal@mit.edu",
            "name": "Avik Pal",
            "username": "avik-pal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fd9b469f320f70a258c1664dda8e6d37e855de11",
          "message": "fix: broadcasted type casting (#156)\n\n* fix: broadcasted type casting\r\n\r\n* fix: optimisers compilation\r\n\r\n* chore: apply formatting\r\n\r\n* fix: handle case where the results get optimized out\r\n\r\n* test: add tests for type casting\r\n\r\n* fix: type restrict conversion to TypeCast",
          "timestamp": "2024-10-04T11:26:40-04:00",
          "tree_id": "a2a07e117c0f007797f59d532538d537e638c695",
          "url": "https://github.com/EnzymeAD/Reactant.jl/commit/fd9b469f320f70a258c1664dda8e6d37e855de11"
        },
        "date": 1728057519566,
        "tool": "julia",
        "benches": [
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1342236532,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21183152\nallocs=345052\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 217334200,
            "unit": "ns",
            "extra": "gctime=86851257\nmemory=2311752\nallocs=45391\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 7478176179,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21183152\nallocs=345052\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 18457674181,
            "unit": "ns",
            "extra": "gctime=1686184193\nmemory=9667628832\nallocs=17443\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1240775517.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 8429118,
            "unit": "ns",
            "extra": "gctime=0\nmemory=579648\nallocs=21998\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 1705665564,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21183488\nallocs=345053\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 2181011809.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=745497744\nallocs=4746\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1270663182,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21185168\nallocs=345058\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 87661764.5,
            "unit": "ns",
            "extra": "gctime=74319273.5\nmemory=579776\nallocs=22006\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 2264035064,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21185264\nallocs=345059\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 12598148585,
            "unit": "ns",
            "extra": "gctime=222071233\nmemory=2531928864\nallocs=13603\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1296031343.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 7435714,
            "unit": "ns",
            "extra": "gctime=0\nmemory=579648\nallocs=21998\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 1522842192,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21184496\nallocs=345056\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 1593852319,
            "unit": "ns",
            "extra": "gctime=0\nmemory=448016080\nallocs=3294\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1290749033,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 11587944,
            "unit": "ns",
            "extra": "gctime=0\nmemory=579664\nallocs=21999\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 1829919441,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 2589622924,
            "unit": "ns",
            "extra": "gctime=102069060.5\nmemory=1341138368\nallocs=7760\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1278886629,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 88840313,
            "unit": "ns",
            "extra": "gctime=75218084.5\nmemory=579664\nallocs=21999\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 2317384176,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 3974355306,
            "unit": "ns",
            "extra": "gctime=111559921\nmemory=2531061152\nallocs=13523\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1286135780.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 115595273.5,
            "unit": "ns",
            "extra": "gctime=78619428\nmemory=579920\nallocs=22011\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 3066839756,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21183008\nallocs=345052\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 7963080791,
            "unit": "ns",
            "extra": "gctime=337137051\nmemory=4910335712\nallocs=13603\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1298156213,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 120812566,
            "unit": "ns",
            "extra": "gctime=70916790\nmemory=580736\nallocs=22062\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 3345928889,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 12142011305,
            "unit": "ns",
            "extra": "gctime=601324748\nmemory=4909469664\nallocs=13523\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1361020077,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 87717808.5,
            "unit": "ns",
            "extra": "gctime=76684987\nmemory=580480\nallocs=22050\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 1957704050,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 2423933291,
            "unit": "ns",
            "extra": "gctime=83331865\nmemory=1340496208\nallocs=7650\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "avikpal@mit.edu",
            "name": "Avik Pal",
            "username": "avik-pal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8435c5e4ae633787bb50d422678ba8be47d33a83",
          "message": "feat: generalize indexing to all wrappers (#146)\n\n* feat: generalize indexing to all wrappers\r\n\r\n* test: use `PermuteDimsArray` to test parentindices",
          "timestamp": "2024-10-04T12:08:19-04:00",
          "tree_id": "6e1c056a395663d860e07040b469ef99b9a117cf",
          "url": "https://github.com/EnzymeAD/Reactant.jl/commit/8435c5e4ae633787bb50d422678ba8be47d33a83"
        },
        "date": 1728059854385,
        "tool": "julia",
        "benches": [
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1368821584,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21183152\nallocs=345052\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 218425022,
            "unit": "ns",
            "extra": "gctime=87237302\nmemory=2309784\nallocs=45386\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 6050106855,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21183152\nallocs=345052\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 15488677309,
            "unit": "ns",
            "extra": "gctime=1103258424\nmemory=9667628832\nallocs=17443\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1325902484,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21183152\nallocs=345052\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 9023661,
            "unit": "ns",
            "extra": "gctime=0\nmemory=579584\nallocs=21996\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 1609420383,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 2794718192,
            "unit": "ns",
            "extra": "gctime=0\nmemory=745497744\nallocs=4746\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1294577037,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21183584\nallocs=345054\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 95904983,
            "unit": "ns",
            "extra": "gctime=83037820\nmemory=579712\nallocs=22004\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 2174332771,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21184160\nallocs=345055\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 6821449717,
            "unit": "ns",
            "extra": "gctime=97831369\nmemory=2531928864\nallocs=13603\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1325701874,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 7473938,
            "unit": "ns",
            "extra": "gctime=0\nmemory=579584\nallocs=21996\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 1465073203,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 1463367147.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=448016080\nallocs=3294\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1326350975.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 11629254,
            "unit": "ns",
            "extra": "gctime=0\nmemory=579600\nallocs=21997\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 1757970313,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 3444375485.5,
            "unit": "ns",
            "extra": "gctime=93155691.5\nmemory=1341138368\nallocs=7760\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1298097547.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 88846123,
            "unit": "ns",
            "extra": "gctime=74966543\nmemory=579600\nallocs=21997\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 2210026137,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 4242489815,
            "unit": "ns",
            "extra": "gctime=188115477\nmemory=2531061152\nallocs=13523\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1276575769.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 115004565,
            "unit": "ns",
            "extra": "gctime=77978851\nmemory=579856\nallocs=22009\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 3089232880,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 17522163039,
            "unit": "ns",
            "extra": "gctime=1118957759\nmemory=4910335712\nallocs=13603\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1322144951.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 125463399,
            "unit": "ns",
            "extra": "gctime=76378011\nmemory=580672\nallocs=22060\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 3222833870,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 6170636132,
            "unit": "ns",
            "extra": "gctime=332360908\nmemory=4909469664\nallocs=13523\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1280369557,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 84708910.5,
            "unit": "ns",
            "extra": "gctime=73888512.5\nmemory=580416\nallocs=22048\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 2107430045,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21183104\nallocs=345052\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 2642122582,
            "unit": "ns",
            "extra": "gctime=88291703\nmemory=1340496208\nallocs=7650\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "avikpal@mit.edu",
            "name": "Avik Pal",
            "username": "avik-pal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "568f4aebc46b436199348ae0412d87102729285e",
          "message": "chore: bump version for release",
          "timestamp": "2024-10-04T12:08:37-04:00",
          "tree_id": "94ec81af307bbd1a037dca2ac13fea6a0e71d3da",
          "url": "https://github.com/EnzymeAD/Reactant.jl/commit/568f4aebc46b436199348ae0412d87102729285e"
        },
        "date": 1728059876247,
        "tool": "julia",
        "benches": [
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1348548882,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21183152\nallocs=345052\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 212068586,
            "unit": "ns",
            "extra": "gctime=83203062\nmemory=2309784\nallocs=45386\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 7517798530,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21183152\nallocs=345052\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 19683289506,
            "unit": "ns",
            "extra": "gctime=1530091658\nmemory=9667628832\nallocs=17443\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1243776954,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 8271918,
            "unit": "ns",
            "extra": "gctime=0\nmemory=579584\nallocs=21996\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 1618648780.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 2128908640,
            "unit": "ns",
            "extra": "gctime=0\nmemory=745497744\nallocs=4746\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1338840304,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21185168\nallocs=345058\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 96170968.5,
            "unit": "ns",
            "extra": "gctime=81750047\nmemory=579712\nallocs=22004\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 2214709425,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21184160\nallocs=345055\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 6434125934.5,
            "unit": "ns",
            "extra": "gctime=118474625.5\nmemory=2531928864\nallocs=13603\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1292610183.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 7514445,
            "unit": "ns",
            "extra": "gctime=0\nmemory=579584\nallocs=21996\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 1464508502,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 1566707310,
            "unit": "ns",
            "extra": "gctime=0\nmemory=448016080\nallocs=3294\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1311745668.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 11640995,
            "unit": "ns",
            "extra": "gctime=0\nmemory=579600\nallocs=21997\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 1752656647,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 2438524743,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1341138368\nallocs=7760\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1317061418,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 90788279.5,
            "unit": "ns",
            "extra": "gctime=75717990.5\nmemory=579600\nallocs=21997\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 2241783791,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 4103375800,
            "unit": "ns",
            "extra": "gctime=96790168\nmemory=2531061152\nallocs=13523\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1295821022,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 119511316,
            "unit": "ns",
            "extra": "gctime=82619889\nmemory=579856\nallocs=22009\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 3133047316,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 13476698130,
            "unit": "ns",
            "extra": "gctime=385420195\nmemory=4910335712\nallocs=13603\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1323664631,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 134036430.5,
            "unit": "ns",
            "extra": "gctime=84858617.5\nmemory=580672\nallocs=22060\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 3216285328,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 7686831331,
            "unit": "ns",
            "extra": "gctime=527190754\nmemory=4909469664\nallocs=13523\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1309813849,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 88057761.5,
            "unit": "ns",
            "extra": "gctime=76804450\nmemory=580416\nallocs=22048\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 1900428661,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 2543347074,
            "unit": "ns",
            "extra": "gctime=92206118\nmemory=1340496208\nallocs=7650\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "15837247+mofeing@users.noreply.github.com",
            "name": "Sergio Sánchez Ramírez",
            "username": "mofeing"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "deefd1874c8c6050c6cd42e4eb846a889f5cafb0",
          "message": "Export `GetDefaultTargetTriple` symbol (#160)",
          "timestamp": "2024-10-04T12:29:46-04:00",
          "tree_id": "03ce61ba70c711deede6533e2cac62485379651a",
          "url": "https://github.com/EnzymeAD/Reactant.jl/commit/deefd1874c8c6050c6cd42e4eb846a889f5cafb0"
        },
        "date": 1728061289719,
        "tool": "julia",
        "benches": [
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1354313354,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21183152\nallocs=345052\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 208305734,
            "unit": "ns",
            "extra": "gctime=75859642\nmemory=2310360\nallocs=45402\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 5150619393,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21183152\nallocs=345052\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 19034043181,
            "unit": "ns",
            "extra": "gctime=1327195990\nmemory=9667628832\nallocs=17443\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1337880973,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21183152\nallocs=345052\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 9140912.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=579584\nallocs=21996\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 1693455123,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21183488\nallocs=345053\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 2263974104,
            "unit": "ns",
            "extra": "gctime=0\nmemory=745497744\nallocs=4746\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1332284786.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21183584\nallocs=345054\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 86734383.5,
            "unit": "ns",
            "extra": "gctime=72107515.5\nmemory=579712\nallocs=22004\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 2287781106,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21185264\nallocs=345059\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 6118937863,
            "unit": "ns",
            "extra": "gctime=356486857\nmemory=2531928864\nallocs=13603\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1274319613,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 7577830,
            "unit": "ns",
            "extra": "gctime=0\nmemory=579584\nallocs=21996\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 1512493678,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21184496\nallocs=345056\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 1456174515,
            "unit": "ns",
            "extra": "gctime=0\nmemory=448016080\nallocs=3294\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1263335461,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 11439682,
            "unit": "ns",
            "extra": "gctime=0\nmemory=579600\nallocs=21997\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 1805020552,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 2506386037,
            "unit": "ns",
            "extra": "gctime=94355405\nmemory=1341138368\nallocs=7760\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1307096998,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 87573137,
            "unit": "ns",
            "extra": "gctime=73027349\nmemory=579600\nallocs=21997\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 2278669956,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 3700585497,
            "unit": "ns",
            "extra": "gctime=97484931\nmemory=2531061152\nallocs=13523\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1310298018,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 109805738,
            "unit": "ns",
            "extra": "gctime=72236945\nmemory=579856\nallocs=22009\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 3158445388,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 14341152106,
            "unit": "ns",
            "extra": "gctime=803532722\nmemory=4910335712\nallocs=13603\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1384173668,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21183104\nallocs=345052\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 125016343,
            "unit": "ns",
            "extra": "gctime=75605490\nmemory=580672\nallocs=22060\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 3254191833,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 6513914428,
            "unit": "ns",
            "extra": "gctime=600107349\nmemory=4909469664\nallocs=13523\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1339992292,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 81713817,
            "unit": "ns",
            "extra": "gctime=70499123.5\nmemory=580416\nallocs=22048\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 1963454757,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 2503177627,
            "unit": "ns",
            "extra": "gctime=83911646\nmemory=1340496208\nallocs=7650\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "15837247+mofeing@users.noreply.github.com",
            "name": "Sergio Sánchez Ramírez",
            "username": "mofeing"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "72e23c8505cb135ec033e5637dac4a1126837c1e",
          "message": "Bypass identical construction on `TracedRArray` (#165)",
          "timestamp": "2024-10-04T16:59:37-04:00",
          "tree_id": "397bbad099118460ad138299352b67f9032e8e25",
          "url": "https://github.com/EnzymeAD/Reactant.jl/commit/72e23c8505cb135ec033e5637dac4a1126837c1e"
        },
        "date": 1728077452285,
        "tool": "julia",
        "benches": [
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1364606816,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21183152\nallocs=345052\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 220179416,
            "unit": "ns",
            "extra": "gctime=89918631\nmemory=2310408\nallocs=45387\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 5245386789,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21183152\nallocs=345052\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 15840367988,
            "unit": "ns",
            "extra": "gctime=1464437939\nmemory=9667628832\nallocs=17443\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1272886877.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 8117592,
            "unit": "ns",
            "extra": "gctime=0\nmemory=579584\nallocs=21996\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 1652608719.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 2520830072,
            "unit": "ns",
            "extra": "gctime=0\nmemory=745497744\nallocs=4746\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1324244429.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21185168\nallocs=345058\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 88847224.5,
            "unit": "ns",
            "extra": "gctime=74828551.5\nmemory=579712\nallocs=22004\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 2174578420,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21184160\nallocs=345055\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 6397817887,
            "unit": "ns",
            "extra": "gctime=303902410.5\nmemory=2531928864\nallocs=13603\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1300600530.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 7688220,
            "unit": "ns",
            "extra": "gctime=0\nmemory=579584\nallocs=21996\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 1481446453,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21190352\nallocs=345074\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 2030602519,
            "unit": "ns",
            "extra": "gctime=0\nmemory=448016080\nallocs=3294\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1311464649,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 11571288,
            "unit": "ns",
            "extra": "gctime=0\nmemory=579600\nallocs=21997\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 1769579353,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 2893876501,
            "unit": "ns",
            "extra": "gctime=92802285.5\nmemory=1341138368\nallocs=7760\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1293350925,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 84509060.5,
            "unit": "ns",
            "extra": "gctime=70246696.5\nmemory=579600\nallocs=21997\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 2279254592,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 5814554251,
            "unit": "ns",
            "extra": "gctime=94458072.5\nmemory=2531061152\nallocs=13523\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1298745435,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 108211595,
            "unit": "ns",
            "extra": "gctime=71535803\nmemory=579856\nallocs=22009\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 3016485174,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 8990903514,
            "unit": "ns",
            "extra": "gctime=329987074\nmemory=4910335712\nallocs=13603\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1294011453,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21183104\nallocs=345052\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 119860248,
            "unit": "ns",
            "extra": "gctime=69763740\nmemory=580672\nallocs=22060\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 3181077691,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 7904449278,
            "unit": "ns",
            "extra": "gctime=1118764886\nmemory=4909469664\nallocs=13523\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1289791140.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 79052592,
            "unit": "ns",
            "extra": "gctime=67968863\nmemory=580416\nallocs=22048\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 1873620730,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 2580980072,
            "unit": "ns",
            "extra": "gctime=89464156\nmemory=1340496208\nallocs=7650\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "avikpal@mit.edu",
            "name": "Avik Pal",
            "username": "avik-pal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9904590451fe81772bd91ab382df30b8398c5b89",
          "message": "test: separate out test groups (#167)",
          "timestamp": "2024-10-05T14:51:58-05:00",
          "tree_id": "214d6e1631d15fd5fb3b16f36afa7dedcb5c22e5",
          "url": "https://github.com/EnzymeAD/Reactant.jl/commit/9904590451fe81772bd91ab382df30b8398c5b89"
        },
        "date": 1728159608721,
        "tool": "julia",
        "benches": [
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1349734013,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21183152\nallocs=345052\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 206256598,
            "unit": "ns",
            "extra": "gctime=80214902\nmemory=2309784\nallocs=45386\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 5640616179,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21183152\nallocs=345052\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 21088566845,
            "unit": "ns",
            "extra": "gctime=962164846\nmemory=9667628832\nallocs=17443\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1271785039.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 8622303,
            "unit": "ns",
            "extra": "gctime=0\nmemory=579584\nallocs=21996\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 1620712407,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 2515728657,
            "unit": "ns",
            "extra": "gctime=0\nmemory=745497744\nallocs=4746\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1309552971.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21185168\nallocs=345058\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 88993975,
            "unit": "ns",
            "extra": "gctime=75798331\nmemory=579728\nallocs=22005\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 2241028351,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21184160\nallocs=345055\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 5778081364,
            "unit": "ns",
            "extra": "gctime=146299279.5\nmemory=2531928864\nallocs=13603\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1267184417.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 7556327.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=579584\nallocs=21996\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 1485636377.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 1618719051,
            "unit": "ns",
            "extra": "gctime=0\nmemory=448016080\nallocs=3294\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1277921381,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 11579756,
            "unit": "ns",
            "extra": "gctime=0\nmemory=579600\nallocs=21997\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 1771132012,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 2573621234.5,
            "unit": "ns",
            "extra": "gctime=89672683.5\nmemory=1341138368\nallocs=7760\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1308609555,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 86522099,
            "unit": "ns",
            "extra": "gctime=72977972\nmemory=579600\nallocs=21997\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 2232948717,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21183008\nallocs=345052\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 4522528342,
            "unit": "ns",
            "extra": "gctime=178124706\nmemory=2531061152\nallocs=13523\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1299910120.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 107942560,
            "unit": "ns",
            "extra": "gctime=70821565\nmemory=579856\nallocs=22009\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 3089121407,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 12146634131,
            "unit": "ns",
            "extra": "gctime=338836323\nmemory=4910335712\nallocs=13603\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1317150051,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21183104\nallocs=345052\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 121564537,
            "unit": "ns",
            "extra": "gctime=72389943\nmemory=580672\nallocs=22060\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 3268410602,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 10888829737,
            "unit": "ns",
            "extra": "gctime=1295805136\nmemory=4909469664\nallocs=13523\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1345840157,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 78626182,
            "unit": "ns",
            "extra": "gctime=67426469\nmemory=580416\nallocs=22048\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 2037797510.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 2617867593,
            "unit": "ns",
            "extra": "gctime=90284436\nmemory=1340496208\nallocs=7650\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "15837247+mofeing@users.noreply.github.com",
            "name": "Sergio Sánchez Ramírez",
            "username": "mofeing"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f2c0e8a0c4b86f9dd3221d81b478126a27b9420a",
          "message": "Generalize `Base._cat` to non-`Val`, typed `Base._cat_t` and implement `typed_hcat`, `typed_vcat`, `typed_hvcat`, `typed_hvncat` (#163)\n\n* Remove `Val` constraint on `Base._cat` signature\r\n\r\n* Remove `Val` constraint on `maybe_expand_dims`\r\n\r\n* fix: update src/TracedRArray.jl\r\n\r\n* Generalize `Base._cat` implementation on `TracedRArray` to typed `Base._cat_t`\r\n\r\n* Update src/TracedRArray.jl\r\n\r\nCo-authored-by: github-actions[bot] <41898282+github-actions[bot]@users.noreply.github.com>\r\n\r\n* Fix collection type passed to `stablehlo.concatenate`\r\n\r\n* Test `cat` methods\r\n\r\n* Test result eltype on `*cat` methods\r\n\r\n* Fix conversion of integer arrays to `ConcreteRArray`s\r\n\r\n* Format code\r\n\r\nCo-authored-by: github-actions[bot] <41898282+github-actions[bot]@users.noreply.github.com>\r\n\r\n* Fix `_typed_cat`, `_typed_hcat`, `typed_hvcat` dispatches\r\n\r\n* Fix `hvcat`\r\n\r\n* Convert to target eltype before cat\r\n\r\n* Fix `typed_hcat` tests\r\n\r\n* Test `typed_hvncat` on vectors\r\n\r\n* Refactor tests\r\n\r\n* Add more test cases\r\n\r\n* Refactor tests\r\n\r\n* Fix typo\r\n\r\n---------\r\n\r\nCo-authored-by: Avik Pal <avikpal@mit.edu>\r\nCo-authored-by: github-actions[bot] <41898282+github-actions[bot]@users.noreply.github.com>",
          "timestamp": "2024-10-05T21:04:10-04:00",
          "tree_id": "8c175517ef480db7f0bacd00ca504f13e1ec0723",
          "url": "https://github.com/EnzymeAD/Reactant.jl/commit/f2c0e8a0c4b86f9dd3221d81b478126a27b9420a"
        },
        "date": 1728178308953,
        "tool": "julia",
        "benches": [
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1315729546,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21183152\nallocs=345052\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 212083499,
            "unit": "ns",
            "extra": "gctime=81671548\nmemory=2309784\nallocs=45386\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 5286469750,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21183152\nallocs=345052\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 23583347555,
            "unit": "ns",
            "extra": "gctime=1467735958\nmemory=9667628832\nallocs=17443\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1254858296,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 8478570,
            "unit": "ns",
            "extra": "gctime=0\nmemory=579584\nallocs=21996\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 1636237670,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21183488\nallocs=345053\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 2376437823,
            "unit": "ns",
            "extra": "gctime=0\nmemory=745497744\nallocs=4746\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1266018905,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21184832\nallocs=345057\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 84820407,
            "unit": "ns",
            "extra": "gctime=71660890\nmemory=579728\nallocs=22005\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 2170879105,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21184928\nallocs=345058\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 4675094299,
            "unit": "ns",
            "extra": "gctime=88408089\nmemory=2531928864\nallocs=13603\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1263496480,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 7782824,
            "unit": "ns",
            "extra": "gctime=0\nmemory=579584\nallocs=21996\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 1467043032.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21184496\nallocs=345056\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 1685775445,
            "unit": "ns",
            "extra": "gctime=0\nmemory=448016080\nallocs=3294\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1306815930,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 11611908,
            "unit": "ns",
            "extra": "gctime=0\nmemory=579584\nallocs=21996\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 1752808523,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 2463987825.5,
            "unit": "ns",
            "extra": "gctime=112733912\nmemory=1341138368\nallocs=7760\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1325877558.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 90330187,
            "unit": "ns",
            "extra": "gctime=75806727\nmemory=579600\nallocs=21997\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 2213119086,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 4023816395,
            "unit": "ns",
            "extra": "gctime=114647748.5\nmemory=2531061152\nallocs=13523\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1270812264,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 113097539,
            "unit": "ns",
            "extra": "gctime=76498195\nmemory=579856\nallocs=22009\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 3042643080,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 8210106924.5,
            "unit": "ns",
            "extra": "gctime=355987112.5\nmemory=4910335712\nallocs=13603\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1324054039,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 127669686.5,
            "unit": "ns",
            "extra": "gctime=77986619.5\nmemory=580544\nallocs=22052\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 3203794253,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 11004907984,
            "unit": "ns",
            "extra": "gctime=492706778\nmemory=4909469664\nallocs=13523\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1299288245,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 96277750,
            "unit": "ns",
            "extra": "gctime=85351749\nmemory=580416\nallocs=22048\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 2155333265.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 2863535293.5,
            "unit": "ns",
            "extra": "gctime=108408932\nmemory=1340496208\nallocs=7650\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "avikpal@mit.edu",
            "name": "Avik Pal",
            "username": "avik-pal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6e899524d6a5ad896e62255d7855c2f631b28407",
          "message": "feat: implement a separate `TracedRNumber` (#161)\n\n* feat: TracedRScalar\r\n\r\n* feat: partial progress on getting scalars to work\r\n\r\n* refactor: Scalar --> Number\r\n\r\n* fix: batching\r\n\r\n* fix: promote_rule and introduce union over primitive types\r\n\r\n* chore: apply formatting\r\n\r\n* feat: type-restrict arrays\r\n\r\n* refactor: move scalar ops to a separate file\r\n\r\n* feat: support Base.float\r\n\r\n* fix: import ordering\r\n\r\n* feat: handle `broadcast_preserving_zero_d` in a generic fashion\r\n\r\n* refactor: move code a bit\r\n\r\n* test: more test fixes\r\n\r\n* chore: apply formatting\r\n\r\n* fix: setindex with scalars\r\n\r\n* fix: scalar broadcasting case\r\n\r\n* feat: support BFloat16 from Core (if available)\r\n\r\n* test: more native lux functionality unblocked\r\n\r\n* refactor: use a union type for traced types\r\n\r\n* fix: check for reactant primitives\r\n\r\n* fix: missing import\r\n\r\n* fix: correct semantics for Colon mapreduce\r\n\r\n* fix: trace_type\r\n\r\n* fix: minor fixes\r\n\r\n* feat: support logsoftmax\r\n\r\n* fix: bool promote rule\r\n\r\n* fix: broadcasting of closures\r\n\r\n* refactor: use TracedTypes\r\n\r\n* Fix type of `preserved_args`\r\n\r\n* Rename `TracedTypes` to `TracedType`\r\n\r\n* small testset rename\r\n\r\n* fix: special handling for concatenation of numbers\r\n\r\n* Reenable tests\r\n\r\n* Rename `ReactantPrimitives` to `ReactantPrimitive`\r\n\r\n---------\r\n\r\nCo-authored-by: Sergio Sánchez Ramírez <15837247+mofeing@users.noreply.github.com>\r\nCo-authored-by: Sergio Sánchez Ramírez <sergio.sanchez.ramirez+git@bsc.es>",
          "timestamp": "2024-10-06T14:41:33-04:00",
          "tree_id": "6c65521ab13942fc268e3ea088154724b4855fc9",
          "url": "https://github.com/EnzymeAD/Reactant.jl/commit/6e899524d6a5ad896e62255d7855c2f631b28407"
        },
        "date": 1728243985015,
        "tool": "julia",
        "benches": [
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1325630083,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21183152\nallocs=345052\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 217828012,
            "unit": "ns",
            "extra": "gctime=90895466\nmemory=2311800\nallocs=45393\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 6953042665,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21183152\nallocs=345052\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 19834605771,
            "unit": "ns",
            "extra": "gctime=1510618527\nmemory=9667628832\nallocs=17443\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1251065036,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 8303675,
            "unit": "ns",
            "extra": "gctime=0\nmemory=579648\nallocs=21998\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 1644888663,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21183488\nallocs=345053\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 3346211607.5,
            "unit": "ns",
            "extra": "gctime=40637579\nmemory=745497744\nallocs=4746\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1268605475.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21184832\nallocs=345057\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 91911558,
            "unit": "ns",
            "extra": "gctime=77380263\nmemory=579776\nallocs=22006\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 2175800720,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21184928\nallocs=345058\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 5163881653,
            "unit": "ns",
            "extra": "gctime=304458946\nmemory=2531928864\nallocs=13603\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1305929899,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 8108212,
            "unit": "ns",
            "extra": "gctime=0\nmemory=579648\nallocs=21998\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 1478744083.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21184496\nallocs=345056\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 1501162607,
            "unit": "ns",
            "extra": "gctime=0\nmemory=448016080\nallocs=3294\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1344634647.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 11617967,
            "unit": "ns",
            "extra": "gctime=0\nmemory=579664\nallocs=21999\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 1762294312,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 2714323365,
            "unit": "ns",
            "extra": "gctime=75065703.5\nmemory=1341138368\nallocs=7760\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1258217588,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 85973438,
            "unit": "ns",
            "extra": "gctime=71825884\nmemory=579664\nallocs=21999\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 2223618180,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 4021036919,
            "unit": "ns",
            "extra": "gctime=205048048\nmemory=2531061152\nallocs=13523\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1322735409,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 115423826,
            "unit": "ns",
            "extra": "gctime=78828149\nmemory=580000\nallocs=22012\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 2991911664,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 15616144600,
            "unit": "ns",
            "extra": "gctime=315986798\nmemory=4910335712\nallocs=13603\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1316851458,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 128824702.5,
            "unit": "ns",
            "extra": "gctime=78697890.5\nmemory=580816\nallocs=22063\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 3240917788,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 6435316514,
            "unit": "ns",
            "extra": "gctime=451865254.5\nmemory=4909469664\nallocs=13523\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1330411921,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 83811390,
            "unit": "ns",
            "extra": "gctime=72590960\nmemory=580480\nallocs=22050\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 2022207539.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 2432459556.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1340496208\nallocs=7650\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "avikpal@mit.edu",
            "name": "Avik Pal",
            "username": "avik-pal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "babfa2ffcd02afe6b97bf3250caa33d8d09de19b",
          "message": "chore: bump version for release",
          "timestamp": "2024-10-06T19:08:14-04:00",
          "tree_id": "ea6e12044a34ddad50ba063dbf6ec5caa89fb330",
          "url": "https://github.com/EnzymeAD/Reactant.jl/commit/babfa2ffcd02afe6b97bf3250caa33d8d09de19b"
        },
        "date": 1728263784412,
        "tool": "julia",
        "benches": [
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1332320696,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21183152\nallocs=345052\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 227642603,
            "unit": "ns",
            "extra": "gctime=94765204\nmemory=2310024\nallocs=45389\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 5335100365,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21183152\nallocs=345052\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 13923447717,
            "unit": "ns",
            "extra": "gctime=1050675835\nmemory=9667628832\nallocs=17443\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1316736699.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 8429763.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=579584\nallocs=21996\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 1623537344.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21183488\nallocs=345053\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 2861216622,
            "unit": "ns",
            "extra": "gctime=0\nmemory=745497744\nallocs=4746\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1322466226.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21184832\nallocs=345057\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 92359736,
            "unit": "ns",
            "extra": "gctime=76915205\nmemory=579712\nallocs=22004\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 2131612752,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21183824\nallocs=345054\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 5865040182.5,
            "unit": "ns",
            "extra": "gctime=206173705.5\nmemory=2531928864\nallocs=13603\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1307662641.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 7432819,
            "unit": "ns",
            "extra": "gctime=0\nmemory=579584\nallocs=21996\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 1467758920,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 1560090503.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=448016080\nallocs=3294\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1302764583,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 11569359,
            "unit": "ns",
            "extra": "gctime=0\nmemory=579600\nallocs=21997\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 1760726473,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 3822923609.5,
            "unit": "ns",
            "extra": "gctime=87425448.5\nmemory=1341138368\nallocs=7760\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1326375402,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 91537054,
            "unit": "ns",
            "extra": "gctime=77130650\nmemory=579600\nallocs=21997\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 2202666488.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 3885854683,
            "unit": "ns",
            "extra": "gctime=105383984\nmemory=2531061152\nallocs=13523\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1296753848.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 115901535,
            "unit": "ns",
            "extra": "gctime=79237392\nmemory=579936\nallocs=22010\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 3060865793,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 5422475355,
            "unit": "ns",
            "extra": "gctime=652443863\nmemory=4910335712\nallocs=13603\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1357473731,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21183104\nallocs=345052\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 128651601.5,
            "unit": "ns",
            "extra": "gctime=78975082\nmemory=580624\nallocs=22053\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 3799896887,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 9419165654,
            "unit": "ns",
            "extra": "gctime=488139241\nmemory=4909469664\nallocs=13523\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1356160172,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21182816\nallocs=345051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 92550180,
            "unit": "ns",
            "extra": "gctime=80226003\nmemory=580416\nallocs=22048\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 2407987798,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21183104\nallocs=345052\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 2697762090,
            "unit": "ns",
            "extra": "gctime=94882483\nmemory=1340496208\nallocs=7650\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "15837247+mofeing@users.noreply.github.com",
            "name": "Sergio Sánchez Ramírez",
            "username": "mofeing"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2874e0df65ad889bbab3c34a82d8d9b2cea77ebb",
          "message": "Move Julia bindings to MLIR dialects out of JLL (#166)\n\n* Rename generated dialect file names\r\n\r\n* Add dialect binding file generator script\r\n\r\n* Generate dialect files\r\n\r\n* Automatize dialect regeneration\r\n\r\n* Fix paths\r\n\r\n* Fix docs generation",
          "timestamp": "2024-10-09T12:10:58-04:00",
          "tree_id": "1b2500d045cdb4c601ae08ea685db895392da184",
          "url": "https://github.com/EnzymeAD/Reactant.jl/commit/2874e0df65ad889bbab3c34a82d8d9b2cea77ebb"
        },
        "date": 1728496722252,
        "tool": "julia",
        "benches": [
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1477123147,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387424\nallocs=459353\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 214785620,
            "unit": "ns",
            "extra": "gctime=51901026\nmemory=4767416\nallocs=97131\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 6060496845,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232560\nallocs=453976\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 36462862558,
            "unit": "ns",
            "extra": "gctime=1099758607\nmemory=9667617328\nallocs=17425\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1187812104,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21388112\nallocs=459360\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 8061529.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=409216\nallocs=18465\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 1956949148,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21233280\nallocs=453983\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 4250420279,
            "unit": "ns",
            "extra": "gctime=0\nmemory=745483024\nallocs=4778\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1262284206,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387712\nallocs=459355\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 21000200,
            "unit": "ns",
            "extra": "gctime=4311683\nmemory=409360\nallocs=18474\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 2531747932,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232912\nallocs=453978\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 6462833510,
            "unit": "ns",
            "extra": "gctime=157419183\nmemory=2531917392\nallocs=13583\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1257017538,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21388416\nallocs=459357\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 7263013.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=409216\nallocs=18465\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 1799018534,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232640\nallocs=453974\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 2829308508,
            "unit": "ns",
            "extra": "gctime=0\nmemory=448000432\nallocs=3338\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1287683652,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21388000\nallocs=459353\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 11229614,
            "unit": "ns",
            "extra": "gctime=0\nmemory=409232\nallocs=18466\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 2142481803,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21235248\nallocs=453994\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 3163883256,
            "unit": "ns",
            "extra": "gctime=30816792\nmemory=1341126672\nallocs=7743\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1256704809,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387200\nallocs=459348\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 25518660.5,
            "unit": "ns",
            "extra": "gctime=4307109\nmemory=409232\nallocs=18466\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 2537928548,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232608\nallocs=453973\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 6538820532.5,
            "unit": "ns",
            "extra": "gctime=287606105\nmemory=2531049840\nallocs=13503\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1243726167,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21388224\nallocs=459352\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 50161174,
            "unit": "ns",
            "extra": "gctime=8067562\nmemory=409440\nallocs=18471\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 3347331233,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21236400\nallocs=453994\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 9372958155,
            "unit": "ns",
            "extra": "gctime=457320824\nmemory=4910324400\nallocs=13583\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1328529825,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21388736\nallocs=459354\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 68217886,
            "unit": "ns",
            "extra": "gctime=11129529.5\nmemory=410256\nallocs=18522\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 3568972676,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232592\nallocs=453972\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 11764280358,
            "unit": "ns",
            "extra": "gctime=488673127\nmemory=4909458160\nallocs=13505\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1323662542,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387232\nallocs=459348\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 19588351,
            "unit": "ns",
            "extra": "gctime=4441179\nmemory=410048\nallocs=18517\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 2203161073,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21233216\nallocs=453974\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 5053716394,
            "unit": "ns",
            "extra": "gctime=25144626\nmemory=1340481296\nallocs=7684\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergio.sanchez.ramirez+git@bsc.es",
            "name": "Sergio Sánchez Ramírez",
            "username": "mofeing"
          },
          "committer": {
            "email": "sergio.sanchez.ramirez+git@bsc.es",
            "name": "Sergio Sánchez Ramírez",
            "username": "mofeing"
          },
          "distinct": true,
          "id": "d5ea70c0d273f97324fb79b762030febd9e265e9",
          "message": "Fix working directory on \"Regenerate Dialects\" workflow",
          "timestamp": "2024-10-09T12:25:13-04:00",
          "tree_id": "3c572d1b6749cba3bed691a1584de86d4954315a",
          "url": "https://github.com/EnzymeAD/Reactant.jl/commit/d5ea70c0d273f97324fb79b762030febd9e265e9"
        },
        "date": 1728498008421,
        "tool": "julia",
        "benches": [
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1258057799,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387424\nallocs=459353\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 195748326,
            "unit": "ns",
            "extra": "gctime=41378725\nmemory=4767064\nallocs=97122\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 6157877671,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232560\nallocs=453976\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 30284062761,
            "unit": "ns",
            "extra": "gctime=1142384615\nmemory=9667617328\nallocs=17425\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1275617064,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21388112\nallocs=459360\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 8337019.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=409216\nallocs=18465\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 1997124967,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21233280\nallocs=453983\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 3120683113.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=745483024\nallocs=4778\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1239320203,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387712\nallocs=459355\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 21004538,
            "unit": "ns",
            "extra": "gctime=4327944\nmemory=409360\nallocs=18474\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 2531910970,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232912\nallocs=453978\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 5948436753.5,
            "unit": "ns",
            "extra": "gctime=205798563\nmemory=2531917392\nallocs=13583\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1257741550.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21388416\nallocs=459357\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 7256692,
            "unit": "ns",
            "extra": "gctime=0\nmemory=409216\nallocs=18465\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 1839098052,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232640\nallocs=453974\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 2861253802,
            "unit": "ns",
            "extra": "gctime=0\nmemory=448000432\nallocs=3338\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1253017125.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21388000\nallocs=459353\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 11267371,
            "unit": "ns",
            "extra": "gctime=0\nmemory=409232\nallocs=18466\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 2115213445,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21235248\nallocs=453994\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 3805056734,
            "unit": "ns",
            "extra": "gctime=37328132\nmemory=1341126672\nallocs=7743\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1294295038,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387200\nallocs=459348\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 25489691,
            "unit": "ns",
            "extra": "gctime=4218385\nmemory=409232\nallocs=18466\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 2578187566,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232608\nallocs=453973\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 6547085816,
            "unit": "ns",
            "extra": "gctime=267580874\nmemory=2531049840\nallocs=13503\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1256020676,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21388224\nallocs=459352\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 50160001,
            "unit": "ns",
            "extra": "gctime=8068679\nmemory=409568\nallocs=18479\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 3466286259,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21236400\nallocs=453994\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 11476464984,
            "unit": "ns",
            "extra": "gctime=537972118\nmemory=4910324400\nallocs=13583\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1261287618,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21388736\nallocs=459354\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 67930068,
            "unit": "ns",
            "extra": "gctime=12197495\nmemory=410384\nallocs=18530\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 3577704567,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232592\nallocs=453972\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 12073712557,
            "unit": "ns",
            "extra": "gctime=505260797\nmemory=4909458160\nallocs=13505\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1254008950,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387232\nallocs=459348\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 19433361.5,
            "unit": "ns",
            "extra": "gctime=3550916\nmemory=410048\nallocs=18517\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 2249675300,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21233216\nallocs=453974\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 4638946317,
            "unit": "ns",
            "extra": "gctime=24966577\nmemory=1340481296\nallocs=7684\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "41898282+github-actions[bot]@users.noreply.github.com",
            "name": "github-actions[bot]",
            "username": "github-actions[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "066dd9accdbb1028150950e45ea40540a8e17d85",
          "message": "Format code of branch \"main\" (#175)\n\nCo-authored-by: mofeing <15837247+mofeing@users.noreply.github.com>",
          "timestamp": "2024-10-09T12:30:43-04:00",
          "tree_id": "49c90b792d2e418206bf312829825f30b6b823d9",
          "url": "https://github.com/EnzymeAD/Reactant.jl/commit/066dd9accdbb1028150950e45ea40540a8e17d85"
        },
        "date": 1728498866198,
        "tool": "julia",
        "benches": [
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1302692642,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387424\nallocs=459353\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 203344813,
            "unit": "ns",
            "extra": "gctime=46433291\nmemory=4767064\nallocs=97122\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 7179925561,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232560\nallocs=453976\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 36450742008,
            "unit": "ns",
            "extra": "gctime=1337282006\nmemory=9667617328\nallocs=17425\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1236966153,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21388112\nallocs=459360\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 8152075.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=409216\nallocs=18465\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 2302932569,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21233280\nallocs=453983\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 3654738227,
            "unit": "ns",
            "extra": "gctime=0\nmemory=745483024\nallocs=4778\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1373421241,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387712\nallocs=459355\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 20777963,
            "unit": "ns",
            "extra": "gctime=3460793\nmemory=409360\nallocs=18474\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 2525263878,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232912\nallocs=453978\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 6186149038,
            "unit": "ns",
            "extra": "gctime=260311729.5\nmemory=2531917392\nallocs=13583\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1212351274,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21388416\nallocs=459357\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 6586106.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=409216\nallocs=18465\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 1890648408,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232640\nallocs=453974\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 2433974002,
            "unit": "ns",
            "extra": "gctime=0\nmemory=448000432\nallocs=3338\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1263734060,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21388000\nallocs=459353\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 11252807,
            "unit": "ns",
            "extra": "gctime=0\nmemory=409232\nallocs=18466\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 2096643414,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21235248\nallocs=453994\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 3935566038.5,
            "unit": "ns",
            "extra": "gctime=49685087\nmemory=1341126672\nallocs=7743\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1291763979,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387200\nallocs=459348\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 25485079,
            "unit": "ns",
            "extra": "gctime=4382558\nmemory=409232\nallocs=18466\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 2601612065,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232608\nallocs=453973\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 6309913868,
            "unit": "ns",
            "extra": "gctime=252181235\nmemory=2531049840\nallocs=13503\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1442282666,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21388224\nallocs=459352\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 50249460,
            "unit": "ns",
            "extra": "gctime=7835186\nmemory=409568\nallocs=18479\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 3495069705,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21236400\nallocs=453994\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 9382466062,
            "unit": "ns",
            "extra": "gctime=484747907\nmemory=4910324400\nallocs=13583\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1315437237,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21388736\nallocs=459354\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 68097744.5,
            "unit": "ns",
            "extra": "gctime=12717386\nmemory=410384\nallocs=18530\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 3529854686,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232592\nallocs=453972\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 8406915683,
            "unit": "ns",
            "extra": "gctime=346927410\nmemory=4909458160\nallocs=13505\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1291126360,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387232\nallocs=459348\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 19607130,
            "unit": "ns",
            "extra": "gctime=4369073\nmemory=410048\nallocs=18517\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 2234556870,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21233216\nallocs=453974\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 4094216124.5,
            "unit": "ns",
            "extra": "gctime=32090736\nmemory=1340481296\nallocs=7684\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gh@wsmoses.com",
            "name": "William S. Moses",
            "username": "wsmoses"
          },
          "committer": {
            "email": "gh@wsmoses.com",
            "name": "William S. Moses",
            "username": "wsmoses"
          },
          "distinct": true,
          "id": "7f55680aeb97da9262de404ad81df040b57ad9c1",
          "message": "fix const",
          "timestamp": "2024-10-14T12:38:00-05:00",
          "tree_id": "3d66c1c88d05e88777a0fd4e4224ac9da60bbb0f",
          "url": "https://github.com/EnzymeAD/Reactant.jl/commit/7f55680aeb97da9262de404ad81df040b57ad9c1"
        },
        "date": 1728929364507,
        "tool": "julia",
        "benches": [
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1247637193,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387424\nallocs=459353\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 236686188,
            "unit": "ns",
            "extra": "gctime=53140687\nmemory=4788056\nallocs=97227\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 5628416095,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232560\nallocs=453976\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 31916349634,
            "unit": "ns",
            "extra": "gctime=1357616186\nmemory=9667617328\nallocs=17425\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1204114147,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21388112\nallocs=459360\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 8102758.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=433824\nallocs=18562\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 1984596124,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21233280\nallocs=453983\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 2863795563.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=745483024\nallocs=4778\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1291140468,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387712\nallocs=459355\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 21005449,
            "unit": "ns",
            "extra": "gctime=4397054\nmemory=433968\nallocs=18571\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 2554754253,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232912\nallocs=453978\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 5653821621.5,
            "unit": "ns",
            "extra": "gctime=265218937\nmemory=2531917392\nallocs=13583\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1283417274,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21388416\nallocs=459357\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 7310369,
            "unit": "ns",
            "extra": "gctime=0\nmemory=433824\nallocs=18562\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 1847883618,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232640\nallocs=453974\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 2208133545,
            "unit": "ns",
            "extra": "gctime=0\nmemory=448000432\nallocs=3338\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1268526177,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21388000\nallocs=459353\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 11267902,
            "unit": "ns",
            "extra": "gctime=0\nmemory=433824\nallocs=18562\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 2138763724,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21235248\nallocs=453994\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 3288979367.5,
            "unit": "ns",
            "extra": "gctime=27346655\nmemory=1341126672\nallocs=7743\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1318770810,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387200\nallocs=459348\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 25473710,
            "unit": "ns",
            "extra": "gctime=4321501\nmemory=433840\nallocs=18563\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 2620296360,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232608\nallocs=453973\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 5303336546.5,
            "unit": "ns",
            "extra": "gctime=227696213.5\nmemory=2531049840\nallocs=13503\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1296525991,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21388224\nallocs=459352\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 50175515.5,
            "unit": "ns",
            "extra": "gctime=8222927.5\nmemory=434176\nallocs=18576\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 3466404211,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21236400\nallocs=453994\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 9911859073,
            "unit": "ns",
            "extra": "gctime=547044815\nmemory=4910324400\nallocs=13583\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1318294505,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21388736\nallocs=459354\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 67885858,
            "unit": "ns",
            "extra": "gctime=12084720\nmemory=434992\nallocs=18627\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 3663339329,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232592\nallocs=453972\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 10334451351,
            "unit": "ns",
            "extra": "gctime=456848100\nmemory=4909458160\nallocs=13505\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1265112521,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387232\nallocs=459348\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 19447852,
            "unit": "ns",
            "extra": "gctime=3605838.5\nmemory=434656\nallocs=18614\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 2316991944,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21233216\nallocs=453974\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 5000954254,
            "unit": "ns",
            "extra": "gctime=30465774\nmemory=1340481296\nallocs=7684\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gh@wsmoses.com",
            "name": "William Moses",
            "username": "wsmoses"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "af6b87eae701edb504e2eadd8cc58151d02bd321",
          "message": "Update Project.toml (#179)",
          "timestamp": "2024-10-16T00:39:20-05:00",
          "tree_id": "f999d2d61543d943fdcf36fd5605e8a9878d9192",
          "url": "https://github.com/EnzymeAD/Reactant.jl/commit/af6b87eae701edb504e2eadd8cc58151d02bd321"
        },
        "date": 1729060303986,
        "tool": "julia",
        "benches": [
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1327235820,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387424\nallocs=459353\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 219028044,
            "unit": "ns",
            "extra": "gctime=53619321\nmemory=4765048\nallocs=97133\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 5845238897,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232560\nallocs=453976\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 29518797165,
            "unit": "ns",
            "extra": "gctime=1128250551\nmemory=9667617328\nallocs=17425\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1322332112,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21388112\nallocs=459360\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 8630312,
            "unit": "ns",
            "extra": "gctime=0\nmemory=409728\nallocs=18467\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 1566707024,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21233280\nallocs=453983\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 3083316351,
            "unit": "ns",
            "extra": "gctime=0\nmemory=745483024\nallocs=4778\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1337462303.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387712\nallocs=459355\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 21060885.5,
            "unit": "ns",
            "extra": "gctime=4433121\nmemory=409872\nallocs=18476\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 2231339798,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232912\nallocs=453978\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 5573170040,
            "unit": "ns",
            "extra": "gctime=253250389\nmemory=2531917392\nallocs=13583\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1351142515,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21388416\nallocs=459357\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 7293382,
            "unit": "ns",
            "extra": "gctime=0\nmemory=409728\nallocs=18467\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 1413479411,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232640\nallocs=453974\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 2071126241,
            "unit": "ns",
            "extra": "gctime=0\nmemory=448000432\nallocs=3338\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1313364152,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21388000\nallocs=459353\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 11301339,
            "unit": "ns",
            "extra": "gctime=0\nmemory=409728\nallocs=18467\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 1697615080,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21235248\nallocs=453994\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 2874007879,
            "unit": "ns",
            "extra": "gctime=26465756\nmemory=1341126672\nallocs=7743\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1321641527,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387200\nallocs=459348\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 25549681,
            "unit": "ns",
            "extra": "gctime=4425077\nmemory=409744\nallocs=18468\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 2203456915,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232608\nallocs=453973\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 5182720087,
            "unit": "ns",
            "extra": "gctime=221178861\nmemory=2531049840\nallocs=13503\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1300431398,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21388224\nallocs=459352\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 50289523,
            "unit": "ns",
            "extra": "gctime=8182541\nmemory=410080\nallocs=18481\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 2981789275,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21236400\nallocs=453994\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 8413817843,
            "unit": "ns",
            "extra": "gctime=663756564\nmemory=4910324400\nallocs=13583\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1314247254,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21388736\nallocs=459354\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 68192305,
            "unit": "ns",
            "extra": "gctime=13291409\nmemory=410896\nallocs=18532\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 3487946523,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232592\nallocs=453972\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 9515453315,
            "unit": "ns",
            "extra": "gctime=509852906\nmemory=4909458160\nallocs=13505\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1279139103,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387232\nallocs=459348\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 19636102,
            "unit": "ns",
            "extra": "gctime=4633164\nmemory=410560\nallocs=18519\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 2040406414,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21233216\nallocs=453974\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 2426024274,
            "unit": "ns",
            "extra": "gctime=20069335\nmemory=1340481296\nallocs=7684\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "15837247+mofeing@users.noreply.github.com",
            "name": "Sergio Sánchez Ramírez",
            "username": "mofeing"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8b56eab03052c2e0a73380e61cc7983963c57429",
          "message": "Fix `similar` on `TracedRArray` (#184)\n\n* Fix `similar` on `TracedRArray`\r\n\r\nFixes #183\r\n\r\n* Format code\r\n\r\n* Comment new implementation\r\n\r\n* final fixes\r\n\r\n* test similar",
          "timestamp": "2024-10-19T12:37:27-07:00",
          "tree_id": "ba08305d77d4935435ae619eb98c367b0ad49bc6",
          "url": "https://github.com/EnzymeAD/Reactant.jl/commit/8b56eab03052c2e0a73380e61cc7983963c57429"
        },
        "date": 1729368732800,
        "tool": "julia",
        "benches": [
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1354425706,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387424\nallocs=459353\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 203485439,
            "unit": "ns",
            "extra": "gctime=50521198\nmemory=4764056\nallocs=97121\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 6855709852,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232560\nallocs=453976\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 31343569551,
            "unit": "ns",
            "extra": "gctime=1045603608\nmemory=9667617328\nallocs=17425\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1255073605,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21388112\nallocs=459360\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 8409403,
            "unit": "ns",
            "extra": "gctime=0\nmemory=409216\nallocs=18465\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 1622661418,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21233280\nallocs=453983\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 2664635868,
            "unit": "ns",
            "extra": "gctime=0\nmemory=745483024\nallocs=4778\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1268647691,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387712\nallocs=459355\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 21047517,
            "unit": "ns",
            "extra": "gctime=4304967\nmemory=409360\nallocs=18474\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 2194595424,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232912\nallocs=453978\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 5282969980,
            "unit": "ns",
            "extra": "gctime=59212944\nmemory=2531917392\nallocs=13583\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1200151234,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387888\nallocs=459354\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 6986342.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=409216\nallocs=18465\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 1484828969,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232640\nallocs=453974\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 1279450969,
            "unit": "ns",
            "extra": "gctime=0\nmemory=448000432\nallocs=3338\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1210080333,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387824\nallocs=459352\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 11272956,
            "unit": "ns",
            "extra": "gctime=0\nmemory=409216\nallocs=18465\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 1770403009,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21235248\nallocs=453994\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 2907556808,
            "unit": "ns",
            "extra": "gctime=18847141\nmemory=1341126672\nallocs=7743\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1305621060,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21391264\nallocs=459371\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 25490262.5,
            "unit": "ns",
            "extra": "gctime=4326799\nmemory=409232\nallocs=18466\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 2271594772,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232608\nallocs=453973\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 5919213627.5,
            "unit": "ns",
            "extra": "gctime=59665218\nmemory=2531049840\nallocs=13503\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1349934315,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21386944\nallocs=459347\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 50113323.5,
            "unit": "ns",
            "extra": "gctime=7942047.5\nmemory=409440\nallocs=18471\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 3121067183,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21236400\nallocs=453994\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 9267345848,
            "unit": "ns",
            "extra": "gctime=292062555\nmemory=4910324400\nallocs=13583\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1301083924,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21388848\nallocs=459354\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 68167411,
            "unit": "ns",
            "extra": "gctime=12880306\nmemory=410256\nallocs=18522\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 3255075163,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232592\nallocs=453972\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 11575728699,
            "unit": "ns",
            "extra": "gctime=314813560\nmemory=4909458160\nallocs=13505\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1386848368,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21392576\nallocs=459369\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 19528991.5,
            "unit": "ns",
            "extra": "gctime=4278718\nmemory=410048\nallocs=18517\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 1954049041,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21233216\nallocs=453974\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 3283934942,
            "unit": "ns",
            "extra": "gctime=22166681\nmemory=1340481296\nallocs=7684\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "avikpal@mit.edu",
            "name": "Avik Pal",
            "username": "avik-pal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "35e541d59fe5b6334848e93952a7de2b751b9943",
          "message": "feat: allow passing a optimize option to MLIR (#171)\n\n* feat: allow passing a `optimize` option to MLIR\r\n\r\n* feat: allow options to optimize\r\n\r\n* fix: run the enzyme passes\r\n\r\n* chore: apply suggestions from code review\r\n\r\nCo-authored-by: github-actions[bot] <41898282+github-actions[bot]@users.noreply.github.com>\r\n\r\n* feat: run optimizations at different locations\r\n\r\n* fix: run only a few opt passes for now\r\n\r\n* perf: run different opt pass in the main benchmarks\r\n\r\n---------\r\n\r\nCo-authored-by: github-actions[bot] <41898282+github-actions[bot]@users.noreply.github.com>",
          "timestamp": "2024-10-19T12:39:55-07:00",
          "tree_id": "1f15f28065befca881a11deaff76f26443186474",
          "url": "https://github.com/EnzymeAD/Reactant.jl/commit/35e541d59fe5b6334848e93952a7de2b751b9943"
        },
        "date": 1729368878288,
        "tool": "julia",
        "benches": [
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CUDA/Reactant (optimize = :after_enzyme)",
            "value": 1262826209,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387424\nallocs=459353\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1238767278,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21388256\nallocs=459361\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CUDA/Reactant (optimize = :before_enzyme)",
            "value": 1207813438,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387840\nallocs=459356\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CUDA/Reactant (optimize = :only_enzyme)",
            "value": 2315178987,
            "unit": "ns",
            "extra": "gctime=0\nmemory=58018752\nallocs=1177121\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 207940988,
            "unit": "ns",
            "extra": "gctime=55459064\nmemory=4764536\nallocs=97131\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Reactant (optimize = :after_enzyme)",
            "value": 6842656639,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232560\nallocs=453976\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 5001304031,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21233392\nallocs=453984\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Reactant (optimize = :before_enzyme)",
            "value": 6615396405,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232976\nallocs=453979\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Reactant (optimize = :only_enzyme)",
            "value": 6670308572,
            "unit": "ns",
            "extra": "gctime=0\nmemory=57653840\nallocs=1164435\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 30318913582,
            "unit": "ns",
            "extra": "gctime=1080052588\nmemory=9667617328\nallocs=17425\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CUDA/Reactant (optimize = :after_enzyme)",
            "value": 1296926680,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21389504\nallocs=459367\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1273799673,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21388256\nallocs=459355\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CUDA/Reactant (optimize = :before_enzyme)",
            "value": 1237483426.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387200\nallocs=459348\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CUDA/Reactant (optimize = :only_enzyme)",
            "value": 2578838547,
            "unit": "ns",
            "extra": "gctime=0\nmemory=58019888\nallocs=1177122\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 8506277.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=409216\nallocs=18465\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Reactant (optimize = :after_enzyme)",
            "value": 1581115751,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21234992\nallocs=453992\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 1547551667,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232864\nallocs=453975\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Reactant (optimize = :before_enzyme)",
            "value": 1557084710,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232592\nallocs=453972\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Reactant (optimize = :only_enzyme)",
            "value": 2765372117,
            "unit": "ns",
            "extra": "gctime=0\nmemory=57654864\nallocs=1164436\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 2597407496,
            "unit": "ns",
            "extra": "gctime=0\nmemory=745483024\nallocs=4778\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CUDA/Reactant (optimize = :after_enzyme)",
            "value": 1246518855,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387232\nallocs=459348\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1272477436.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387312\nallocs=459348\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CUDA/Reactant (optimize = :before_enzyme)",
            "value": 1231083214,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21388784\nallocs=459352\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CUDA/Reactant (optimize = :only_enzyme)",
            "value": 2435141460,
            "unit": "ns",
            "extra": "gctime=0\nmemory=58025344\nallocs=1177135\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 21011681,
            "unit": "ns",
            "extra": "gctime=4410269\nmemory=409360\nallocs=18474\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Reactant (optimize = :after_enzyme)",
            "value": 2116788346,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21233360\nallocs=453975\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 2144152980,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232368\nallocs=453971\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Reactant (optimize = :before_enzyme)",
            "value": 2140707330,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232448\nallocs=453971\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Reactant (optimize = :only_enzyme)",
            "value": 3310542901,
            "unit": "ns",
            "extra": "gctime=0\nmemory=57653808\nallocs=1164431\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 5822602228,
            "unit": "ns",
            "extra": "gctime=52322535\nmemory=2531917392\nallocs=13583\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CUDA/Reactant (optimize = :after_enzyme)",
            "value": 1248644136,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387040\nallocs=459348\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1344736220.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21386944\nallocs=459347\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CUDA/Reactant (optimize = :before_enzyme)",
            "value": 1294704004.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387488\nallocs=459348\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CUDA/Reactant (optimize = :only_enzyme)",
            "value": 2602516632,
            "unit": "ns",
            "extra": "gctime=0\nmemory=58020704\nallocs=1177120\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 7096958.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=409216\nallocs=18465\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Reactant (optimize = :after_enzyme)",
            "value": 1404612518,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21233184\nallocs=453973\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 1412314060,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21239536\nallocs=453991\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Reactant (optimize = :before_enzyme)",
            "value": 1412212164,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232080\nallocs=453970\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Reactant (optimize = :only_enzyme)",
            "value": 2595167284,
            "unit": "ns",
            "extra": "gctime=0\nmemory=57653072\nallocs=1164429\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 1265568561,
            "unit": "ns",
            "extra": "gctime=0\nmemory=448000432\nallocs=3338\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CUDA/Reactant (optimize = :after_enzyme)",
            "value": 1247216100.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21391840\nallocs=459355\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1222439486.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21386944\nallocs=459347\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CUDA/Reactant (optimize = :before_enzyme)",
            "value": 1235285814,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21386944\nallocs=459347\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CUDA/Reactant (optimize = :only_enzyme)",
            "value": 2371301860,
            "unit": "ns",
            "extra": "gctime=0\nmemory=58018752\nallocs=1177121\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 11102221,
            "unit": "ns",
            "extra": "gctime=0\nmemory=409232\nallocs=18466\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Reactant (optimize = :after_enzyme)",
            "value": 1703168126,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232080\nallocs=453970\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 1691259175,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21233360\nallocs=453973\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Reactant (optimize = :before_enzyme)",
            "value": 1683800442,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21233168\nallocs=453972\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Reactant (optimize = :only_enzyme)",
            "value": 2887412167,
            "unit": "ns",
            "extra": "gctime=0\nmemory=57655472\nallocs=1164438\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 3299601996,
            "unit": "ns",
            "extra": "gctime=15018874.5\nmemory=1341126672\nallocs=7743\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CUDA/Reactant (optimize = :after_enzyme)",
            "value": 1326564533,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21388656\nallocs=459350\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1318337748,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21386944\nallocs=459347\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CUDA/Reactant (optimize = :before_enzyme)",
            "value": 1284219501,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387568\nallocs=459348\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CUDA/Reactant (optimize = :only_enzyme)",
            "value": 2778435327,
            "unit": "ns",
            "extra": "gctime=0\nmemory=58017984\nallocs=1177115\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 25470936,
            "unit": "ns",
            "extra": "gctime=4597735\nmemory=409232\nallocs=18466\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Reactant (optimize = :after_enzyme)",
            "value": 2147636596,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21242960\nallocs=453990\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 2147385752,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232080\nallocs=453970\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Reactant (optimize = :before_enzyme)",
            "value": 2166634830,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232080\nallocs=453970\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Reactant (optimize = :only_enzyme)",
            "value": 3345791142,
            "unit": "ns",
            "extra": "gctime=0\nmemory=57653072\nallocs=1164429\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 6643081707.5,
            "unit": "ns",
            "extra": "gctime=51613032\nmemory=2531049840\nallocs=13503\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CUDA/Reactant (optimize = :after_enzyme)",
            "value": 1323060793,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21390688\nallocs=459353\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1279675530,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21399424\nallocs=459367\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CUDA/Reactant (optimize = :before_enzyme)",
            "value": 1277119914,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21386944\nallocs=459347\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CUDA/Reactant (optimize = :only_enzyme)",
            "value": 2478402849,
            "unit": "ns",
            "extra": "gctime=0\nmemory=58019040\nallocs=1177121\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 50162379,
            "unit": "ns",
            "extra": "gctime=8285187\nmemory=409568\nallocs=18479\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Reactant (optimize = :after_enzyme)",
            "value": 2981386134,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232080\nallocs=453970\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 2994055432,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232704\nallocs=453971\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Reactant (optimize = :before_enzyme)",
            "value": 2991884917,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21233168\nallocs=453972\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Reactant (optimize = :only_enzyme)",
            "value": 4375656252,
            "unit": "ns",
            "extra": "gctime=0\nmemory=57654752\nallocs=1164436\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 15649175840,
            "unit": "ns",
            "extra": "gctime=293945358\nmemory=4910324400\nallocs=13583\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CUDA/Reactant (optimize = :after_enzyme)",
            "value": 1323974983,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387760\nallocs=459348\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1309887401,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387840\nallocs=459348\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CUDA/Reactant (optimize = :before_enzyme)",
            "value": 1244129827.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21391840\nallocs=459353\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CUDA/Reactant (optimize = :only_enzyme)",
            "value": 2353341483,
            "unit": "ns",
            "extra": "gctime=0\nmemory=58017984\nallocs=1177115\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 67927239,
            "unit": "ns",
            "extra": "gctime=11553473\nmemory=410256\nallocs=18522\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Reactant (optimize = :after_enzyme)",
            "value": 3152956530,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21233328\nallocs=453972\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 3161154405,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21236448\nallocs=453977\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Reactant (optimize = :before_enzyme)",
            "value": 3157792564,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21236560\nallocs=453976\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Reactant (optimize = :only_enzyme)",
            "value": 4527178762,
            "unit": "ns",
            "extra": "gctime=0\nmemory=57653888\nallocs=1164430\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 11806181173,
            "unit": "ns",
            "extra": "gctime=285472388\nmemory=4909458160\nallocs=13505\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CUDA/Reactant (optimize = :after_enzyme)",
            "value": 1186167557,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21386944\nallocs=459347\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1261437604.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21386944\nallocs=459347\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CUDA/Reactant (optimize = :before_enzyme)",
            "value": 1261531167,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387840\nallocs=459348\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CUDA/Reactant (optimize = :only_enzyme)",
            "value": 2397454573,
            "unit": "ns",
            "extra": "gctime=0\nmemory=58017984\nallocs=1177115\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 19421656,
            "unit": "ns",
            "extra": "gctime=4196132.5\nmemory=410048\nallocs=18517\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Reactant (optimize = :after_enzyme)",
            "value": 1862637884,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232080\nallocs=453970\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 2022002245,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232896\nallocs=453971\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Reactant (optimize = :before_enzyme)",
            "value": 2033131460,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21233712\nallocs=453972\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Reactant (optimize = :only_enzyme)",
            "value": 3194467790,
            "unit": "ns",
            "extra": "gctime=0\nmemory=57658784\nallocs=1164436\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 3236081776,
            "unit": "ns",
            "extra": "gctime=8976503\nmemory=1340481296\nallocs=7684\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergio.sanchez.ramirez+git@bsc.es",
            "name": "Sergio Sánchez Ramírez",
            "username": "mofeing"
          },
          "committer": {
            "email": "sergio.sanchez.ramirez+git@bsc.es",
            "name": "Sergio Sánchez Ramírez",
            "username": "mofeing"
          },
          "distinct": true,
          "id": "f9f0ea30f4dd48cebe806a2ba8203b7aac20e2a6",
          "message": "Try fix file permissions on generated files",
          "timestamp": "2024-10-20T12:02:00+02:00",
          "tree_id": "5a7899b5f6bb79bee66eddf98f718eb848905d06",
          "url": "https://github.com/EnzymeAD/Reactant.jl/commit/f9f0ea30f4dd48cebe806a2ba8203b7aac20e2a6"
        },
        "date": 1729427350060,
        "tool": "julia",
        "benches": [
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CUDA/Reactant (optimize = :after_enzyme)",
            "value": 1252950292,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387424\nallocs=459353\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1293691787,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21388256\nallocs=459361\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CUDA/Reactant (optimize = :before_enzyme)",
            "value": 1302097702,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387840\nallocs=459356\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CUDA/Reactant (optimize = :only_enzyme)",
            "value": 2645497432,
            "unit": "ns",
            "extra": "gctime=0\nmemory=58018752\nallocs=1177121\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 218163944,
            "unit": "ns",
            "extra": "gctime=54013453\nmemory=4764792\nallocs=97132\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Reactant (optimize = :after_enzyme)",
            "value": 6794522356,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232560\nallocs=453976\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 5241928278,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21233392\nallocs=453984\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Reactant (optimize = :before_enzyme)",
            "value": 5163684522,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232976\nallocs=453979\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Reactant (optimize = :only_enzyme)",
            "value": 6962683091,
            "unit": "ns",
            "extra": "gctime=0\nmemory=57653840\nallocs=1164435\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 27851397674,
            "unit": "ns",
            "extra": "gctime=959603443\nmemory=9667617328\nallocs=17425\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CUDA/Reactant (optimize = :after_enzyme)",
            "value": 1333188820,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21389504\nallocs=459367\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1293745260,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21388256\nallocs=459355\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CUDA/Reactant (optimize = :before_enzyme)",
            "value": 1306728918,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387200\nallocs=459348\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CUDA/Reactant (optimize = :only_enzyme)",
            "value": 2610830586,
            "unit": "ns",
            "extra": "gctime=0\nmemory=58019264\nallocs=1177120\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 8484908,
            "unit": "ns",
            "extra": "gctime=0\nmemory=409472\nallocs=18466\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Reactant (optimize = :after_enzyme)",
            "value": 1602168315,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21234992\nallocs=453992\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 1797804965,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232864\nallocs=453975\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Reactant (optimize = :before_enzyme)",
            "value": 1567248435,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21236048\nallocs=453992\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Reactant (optimize = :only_enzyme)",
            "value": 2803649924,
            "unit": "ns",
            "extra": "gctime=0\nmemory=57653584\nallocs=1164431\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 2186660009.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=745483024\nallocs=4778\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CUDA/Reactant (optimize = :after_enzyme)",
            "value": 1312259167,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21388736\nallocs=459354\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1283645373.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387232\nallocs=459348\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CUDA/Reactant (optimize = :before_enzyme)",
            "value": 1291166609,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21386944\nallocs=459347\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CUDA/Reactant (optimize = :only_enzyme)",
            "value": 2487376759,
            "unit": "ns",
            "extra": "gctime=0\nmemory=58020192\nallocs=1177121\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 21023407,
            "unit": "ns",
            "extra": "gctime=4346037\nmemory=409616\nallocs=18475\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Reactant (optimize = :after_enzyme)",
            "value": 2213486180,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21233568\nallocs=453976\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 2229891569,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21237200\nallocs=453990\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Reactant (optimize = :before_enzyme)",
            "value": 2204456487,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232448\nallocs=453971\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Reactant (optimize = :only_enzyme)",
            "value": 3427101823,
            "unit": "ns",
            "extra": "gctime=0\nmemory=57654704\nallocs=1164432\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 5372744690.5,
            "unit": "ns",
            "extra": "gctime=55800903.5\nmemory=2531917392\nallocs=13583\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CUDA/Reactant (optimize = :after_enzyme)",
            "value": 1342952630,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21386944\nallocs=459347\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1277245244,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21386944\nallocs=459347\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CUDA/Reactant (optimize = :before_enzyme)",
            "value": 1283516766,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387488\nallocs=459348\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CUDA/Reactant (optimize = :only_enzyme)",
            "value": 2432237503,
            "unit": "ns",
            "extra": "gctime=0\nmemory=58018528\nallocs=1177116\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 6834674,
            "unit": "ns",
            "extra": "gctime=0\nmemory=409472\nallocs=18466\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Reactant (optimize = :after_enzyme)",
            "value": 1425650948,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21235168\nallocs=453979\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 1428976685,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21233920\nallocs=453975\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Reactant (optimize = :before_enzyme)",
            "value": 1435924788,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232080\nallocs=453970\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Reactant (optimize = :only_enzyme)",
            "value": 2666988556,
            "unit": "ns",
            "extra": "gctime=0\nmemory=57654064\nallocs=1164431\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 1202026456,
            "unit": "ns",
            "extra": "gctime=0\nmemory=448000432\nallocs=3338\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CUDA/Reactant (optimize = :after_enzyme)",
            "value": 1299185671.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21389664\nallocs=459352\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1278110042.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21386944\nallocs=459347\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CUDA/Reactant (optimize = :before_enzyme)",
            "value": 1310551524,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21386944\nallocs=459347\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CUDA/Reactant (optimize = :only_enzyme)",
            "value": 2521775185,
            "unit": "ns",
            "extra": "gctime=0\nmemory=58018752\nallocs=1177121\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 11291330,
            "unit": "ns",
            "extra": "gctime=0\nmemory=409488\nallocs=18467\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Reactant (optimize = :after_enzyme)",
            "value": 1769138121,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232080\nallocs=453970\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 1758600420,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232624\nallocs=453971\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Reactant (optimize = :before_enzyme)",
            "value": 1731874746,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21233168\nallocs=453972\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Reactant (optimize = :only_enzyme)",
            "value": 3007862691,
            "unit": "ns",
            "extra": "gctime=0\nmemory=57657648\nallocs=1164442\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 3117126968.5,
            "unit": "ns",
            "extra": "gctime=15535411.5\nmemory=1341126672\nallocs=7743\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CUDA/Reactant (optimize = :after_enzyme)",
            "value": 1238533635,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21386944\nallocs=459347\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1254886601,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21386944\nallocs=459347\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CUDA/Reactant (optimize = :before_enzyme)",
            "value": 1276076866.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21386944\nallocs=459347\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CUDA/Reactant (optimize = :only_enzyme)",
            "value": 2540701621,
            "unit": "ns",
            "extra": "gctime=0\nmemory=58018608\nallocs=1177116\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 25531554,
            "unit": "ns",
            "extra": "gctime=4395391\nmemory=409488\nallocs=18467\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Reactant (optimize = :after_enzyme)",
            "value": 2220039937,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21235888\nallocs=453976\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 2222243551,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232080\nallocs=453970\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Reactant (optimize = :before_enzyme)",
            "value": 2217557211,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232080\nallocs=453970\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Reactant (optimize = :only_enzyme)",
            "value": 3547381304,
            "unit": "ns",
            "extra": "gctime=0\nmemory=57653856\nallocs=1164431\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 5817519481.5,
            "unit": "ns",
            "extra": "gctime=46526175.5\nmemory=2531049840\nallocs=13503\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CUDA/Reactant (optimize = :after_enzyme)",
            "value": 1261836861,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21390064\nallocs=459352\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1339245888,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21392672\nallocs=459355\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CUDA/Reactant (optimize = :before_enzyme)",
            "value": 1246024896,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387760\nallocs=459348\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CUDA/Reactant (optimize = :only_enzyme)",
            "value": 2335055444,
            "unit": "ns",
            "extra": "gctime=0\nmemory=58019040\nallocs=1177121\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 50109300,
            "unit": "ns",
            "extra": "gctime=7049744\nmemory=409824\nallocs=18480\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Reactant (optimize = :after_enzyme)",
            "value": 3042137251,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232080\nallocs=453970\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 3081458348,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232080\nallocs=453970\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Reactant (optimize = :before_enzyme)",
            "value": 3049727847,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232080\nallocs=453970\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Reactant (optimize = :only_enzyme)",
            "value": 4451607397,
            "unit": "ns",
            "extra": "gctime=0\nmemory=57654128\nallocs=1164435\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 10087046720,
            "unit": "ns",
            "extra": "gctime=264887685\nmemory=4910324400\nallocs=13583\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CUDA/Reactant (optimize = :after_enzyme)",
            "value": 1285818956,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387760\nallocs=459348\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1256223664.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387760\nallocs=459348\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CUDA/Reactant (optimize = :before_enzyme)",
            "value": 1276302688,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21391840\nallocs=459353\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CUDA/Reactant (optimize = :only_enzyme)",
            "value": 2501613220,
            "unit": "ns",
            "extra": "gctime=0\nmemory=58017984\nallocs=1177115\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 67997131,
            "unit": "ns",
            "extra": "gctime=12504544\nmemory=410640\nallocs=18531\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Reactant (optimize = :after_enzyme)",
            "value": 3185662597,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232704\nallocs=453971\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 3206036769,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21233328\nallocs=453972\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Reactant (optimize = :before_enzyme)",
            "value": 3208963888,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21233952\nallocs=453973\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Reactant (optimize = :only_enzyme)",
            "value": 4680853227,
            "unit": "ns",
            "extra": "gctime=0\nmemory=57665552\nallocs=1164449\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 14036662561,
            "unit": "ns",
            "extra": "gctime=312199201\nmemory=4909458160\nallocs=13505\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CUDA/Reactant (optimize = :after_enzyme)",
            "value": 1272193623,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21386944\nallocs=459347\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1280588186,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21386944\nallocs=459347\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CUDA/Reactant (optimize = :before_enzyme)",
            "value": 1257983476,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387840\nallocs=459348\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CUDA/Reactant (optimize = :only_enzyme)",
            "value": 2314704750,
            "unit": "ns",
            "extra": "gctime=0\nmemory=58017984\nallocs=1177115\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 19563791.5,
            "unit": "ns",
            "extra": "gctime=4546060\nmemory=410304\nallocs=18518\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Reactant (optimize = :after_enzyme)",
            "value": 1926359182,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232080\nallocs=453970\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 1900467314,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232080\nallocs=453970\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Reactant (optimize = :before_enzyme)",
            "value": 1920279311,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232896\nallocs=453971\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Reactant (optimize = :only_enzyme)",
            "value": 3184418201,
            "unit": "ns",
            "extra": "gctime=0\nmemory=57655600\nallocs=1164432\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 3145975970,
            "unit": "ns",
            "extra": "gctime=8394054.5\nmemory=1340481296\nallocs=7684\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergio.sanchez.ramirez+git@bsc.es",
            "name": "Sergio Sánchez Ramírez",
            "username": "mofeing"
          },
          "committer": {
            "email": "sergio.sanchez.ramirez+git@bsc.es",
            "name": "Sergio Sánchez Ramírez",
            "username": "mofeing"
          },
          "distinct": true,
          "id": "1f51c1c31d65403b07038c078f6107c9eb01dec5",
          "message": "Try fixing formatting of newly regenerated dialect files",
          "timestamp": "2024-10-20T12:15:44+02:00",
          "tree_id": "f1ef443e7feea82d5698d4a03ae2710fd7ab73c4",
          "url": "https://github.com/EnzymeAD/Reactant.jl/commit/1f51c1c31d65403b07038c078f6107c9eb01dec5"
        },
        "date": 1729428591283,
        "tool": "julia",
        "benches": [
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CUDA/Reactant (optimize = :after_enzyme)",
            "value": 1292763475,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387424\nallocs=459353\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1261900546,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21388256\nallocs=459361\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CUDA/Reactant (optimize = :before_enzyme)",
            "value": 1255929044,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387840\nallocs=459356\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CUDA/Reactant (optimize = :only_enzyme)",
            "value": 2523446974,
            "unit": "ns",
            "extra": "gctime=0\nmemory=58018752\nallocs=1177121\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 219600259,
            "unit": "ns",
            "extra": "gctime=53112672\nmemory=4764120\nallocs=97121\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Reactant (optimize = :after_enzyme)",
            "value": 5325533573,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232560\nallocs=453976\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 5109252481,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21233392\nallocs=453984\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Reactant (optimize = :before_enzyme)",
            "value": 5277597455,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232976\nallocs=453979\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Reactant (optimize = :only_enzyme)",
            "value": 6985233496,
            "unit": "ns",
            "extra": "gctime=0\nmemory=57653840\nallocs=1164435\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 30302329874,
            "unit": "ns",
            "extra": "gctime=1171419401\nmemory=9667617328\nallocs=17425\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CUDA/Reactant (optimize = :after_enzyme)",
            "value": 1277327373,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21389504\nallocs=459367\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1252122914,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21388256\nallocs=459355\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CUDA/Reactant (optimize = :before_enzyme)",
            "value": 1270017980.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387200\nallocs=459348\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CUDA/Reactant (optimize = :only_enzyme)",
            "value": 2514212912,
            "unit": "ns",
            "extra": "gctime=0\nmemory=58019888\nallocs=1177122\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 8318154,
            "unit": "ns",
            "extra": "gctime=0\nmemory=409216\nallocs=18465\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Reactant (optimize = :after_enzyme)",
            "value": 1577592879,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21234992\nallocs=453992\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 1560605900,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232864\nallocs=453975\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Reactant (optimize = :before_enzyme)",
            "value": 1555330256,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21236048\nallocs=453992\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Reactant (optimize = :only_enzyme)",
            "value": 2767123061,
            "unit": "ns",
            "extra": "gctime=0\nmemory=57653584\nallocs=1164431\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 3264290094.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=745483024\nallocs=4778\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CUDA/Reactant (optimize = :after_enzyme)",
            "value": 1259858335,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387232\nallocs=459348\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1284764588,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387312\nallocs=459348\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CUDA/Reactant (optimize = :before_enzyme)",
            "value": 1269628836,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21388784\nallocs=459352\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CUDA/Reactant (optimize = :only_enzyme)",
            "value": 2627021439,
            "unit": "ns",
            "extra": "gctime=0\nmemory=58025344\nallocs=1177135\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 21011401,
            "unit": "ns",
            "extra": "gctime=4273650\nmemory=409360\nallocs=18474\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Reactant (optimize = :after_enzyme)",
            "value": 2138230983,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21233568\nallocs=453976\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 2149019981,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21237200\nallocs=453990\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Reactant (optimize = :before_enzyme)",
            "value": 2171329146,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232448\nallocs=453971\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Reactant (optimize = :only_enzyme)",
            "value": 3360510628,
            "unit": "ns",
            "extra": "gctime=0\nmemory=57654704\nallocs=1164432\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 6163626230.5,
            "unit": "ns",
            "extra": "gctime=174389437\nmemory=2531917392\nallocs=13583\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CUDA/Reactant (optimize = :after_enzyme)",
            "value": 1263705700,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21386944\nallocs=459347\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1282311600,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21386944\nallocs=459347\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CUDA/Reactant (optimize = :before_enzyme)",
            "value": 1244881977.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387488\nallocs=459348\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CUDA/Reactant (optimize = :only_enzyme)",
            "value": 2473462839,
            "unit": "ns",
            "extra": "gctime=0\nmemory=58020704\nallocs=1177120\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 6977430,
            "unit": "ns",
            "extra": "gctime=0\nmemory=409216\nallocs=18465\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Reactant (optimize = :after_enzyme)",
            "value": 1407410791,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21235168\nallocs=453979\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 1401472077,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21233920\nallocs=453975\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Reactant (optimize = :before_enzyme)",
            "value": 1397242962,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232080\nallocs=453970\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Reactant (optimize = :only_enzyme)",
            "value": 2577145988,
            "unit": "ns",
            "extra": "gctime=0\nmemory=57654064\nallocs=1164431\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 1095163628.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=448000432\nallocs=3338\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CUDA/Reactant (optimize = :after_enzyme)",
            "value": 1276684435.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21391840\nallocs=459355\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1298713613.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21386944\nallocs=459347\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CUDA/Reactant (optimize = :before_enzyme)",
            "value": 1257257103,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21386944\nallocs=459347\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CUDA/Reactant (optimize = :only_enzyme)",
            "value": 2502535898,
            "unit": "ns",
            "extra": "gctime=0\nmemory=58018752\nallocs=1177121\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 11185655,
            "unit": "ns",
            "extra": "gctime=0\nmemory=409232\nallocs=18466\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Reactant (optimize = :after_enzyme)",
            "value": 1695303914,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232080\nallocs=453970\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 1703490979,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232624\nallocs=453971\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Reactant (optimize = :before_enzyme)",
            "value": 1693039254,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21233168\nallocs=453972\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Reactant (optimize = :only_enzyme)",
            "value": 2902275354,
            "unit": "ns",
            "extra": "gctime=0\nmemory=57657648\nallocs=1164442\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 3002554590,
            "unit": "ns",
            "extra": "gctime=8003029\nmemory=1341126672\nallocs=7743\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CUDA/Reactant (optimize = :after_enzyme)",
            "value": 1358711582,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21388656\nallocs=459350\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1325376127.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21386944\nallocs=459347\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CUDA/Reactant (optimize = :before_enzyme)",
            "value": 1290695620,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387568\nallocs=459348\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CUDA/Reactant (optimize = :only_enzyme)",
            "value": 2559106824,
            "unit": "ns",
            "extra": "gctime=0\nmemory=58021104\nallocs=1177120\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 25478389,
            "unit": "ns",
            "extra": "gctime=3655402\nmemory=409232\nallocs=18466\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Reactant (optimize = :after_enzyme)",
            "value": 2175819870,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21235888\nallocs=453976\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 2189207002,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232080\nallocs=453970\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Reactant (optimize = :before_enzyme)",
            "value": 2176221842,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232080\nallocs=453970\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Reactant (optimize = :only_enzyme)",
            "value": 3372845065,
            "unit": "ns",
            "extra": "gctime=0\nmemory=57653856\nallocs=1164431\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 5554823205.5,
            "unit": "ns",
            "extra": "gctime=53223969.5\nmemory=2531049840\nallocs=13503\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CUDA/Reactant (optimize = :after_enzyme)",
            "value": 1332415048,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21392672\nallocs=459355\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1344488961,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387760\nallocs=459348\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CUDA/Reactant (optimize = :before_enzyme)",
            "value": 1275479587,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21386944\nallocs=459347\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CUDA/Reactant (optimize = :only_enzyme)",
            "value": 2475081845,
            "unit": "ns",
            "extra": "gctime=0\nmemory=58019856\nallocs=1177122\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 50300751,
            "unit": "ns",
            "extra": "gctime=7978716.5\nmemory=409568\nallocs=18479\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Reactant (optimize = :after_enzyme)",
            "value": 3022865275,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232080\nallocs=453970\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 3040111061,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232080\nallocs=453970\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Reactant (optimize = :before_enzyme)",
            "value": 3059484662,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232080\nallocs=453970\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Reactant (optimize = :only_enzyme)",
            "value": 4347384331,
            "unit": "ns",
            "extra": "gctime=0\nmemory=57654128\nallocs=1164435\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 9652664217,
            "unit": "ns",
            "extra": "gctime=266311346\nmemory=4910324400\nallocs=13583\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CUDA/Reactant (optimize = :after_enzyme)",
            "value": 1350845043,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387760\nallocs=459348\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1286767503,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21391024\nallocs=459352\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CUDA/Reactant (optimize = :before_enzyme)",
            "value": 1291174795,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21392656\nallocs=459354\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CUDA/Reactant (optimize = :only_enzyme)",
            "value": 2649104218,
            "unit": "ns",
            "extra": "gctime=0\nmemory=58017984\nallocs=1177115\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 68111931,
            "unit": "ns",
            "extra": "gctime=12985582\nmemory=410256\nallocs=18522\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Reactant (optimize = :after_enzyme)",
            "value": 3184406680,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232704\nallocs=453971\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 3338255189,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21233328\nallocs=453972\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Reactant (optimize = :before_enzyme)",
            "value": 3318851269,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21233952\nallocs=453973\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Reactant (optimize = :only_enzyme)",
            "value": 4488038989,
            "unit": "ns",
            "extra": "gctime=0\nmemory=57665552\nallocs=1164449\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 11383049133,
            "unit": "ns",
            "extra": "gctime=280081360\nmemory=4909458160\nallocs=13505\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CUDA/Reactant (optimize = :after_enzyme)",
            "value": 1272921259,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21386944\nallocs=459347\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1296608783.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21386944\nallocs=459347\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CUDA/Reactant (optimize = :before_enzyme)",
            "value": 1249120411.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387840\nallocs=459348\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CUDA/Reactant (optimize = :only_enzyme)",
            "value": 2352757443,
            "unit": "ns",
            "extra": "gctime=0\nmemory=58017984\nallocs=1177115\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 19441564.5,
            "unit": "ns",
            "extra": "gctime=3710632.5\nmemory=410048\nallocs=18517\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Reactant (optimize = :after_enzyme)",
            "value": 1987802081,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232080\nallocs=453970\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 1855494808,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232080\nallocs=453970\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Reactant (optimize = :before_enzyme)",
            "value": 1842218552,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232896\nallocs=453971\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Reactant (optimize = :only_enzyme)",
            "value": 3055671263,
            "unit": "ns",
            "extra": "gctime=0\nmemory=57655600\nallocs=1164432\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 3246255831,
            "unit": "ns",
            "extra": "gctime=7687285.5\nmemory=1340481296\nallocs=7684\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergio.sanchez.ramirez+git@bsc.es",
            "name": "Sergio Sánchez Ramírez",
            "username": "mofeing"
          },
          "committer": {
            "email": "sergio.sanchez.ramirez+git@bsc.es",
            "name": "Sergio Sánchez Ramírez",
            "username": "mofeing"
          },
          "distinct": true,
          "id": "fddd09a437ad01b821538eae01fac57e4c7b806f",
          "message": "fix path in \"regenerate-dialects.yml\"",
          "timestamp": "2024-10-20T12:20:16+02:00",
          "tree_id": "ce04a28a3bd44029dca83f69e63abecc721e0079",
          "url": "https://github.com/EnzymeAD/Reactant.jl/commit/fddd09a437ad01b821538eae01fac57e4c7b806f"
        },
        "date": 1729430133640,
        "tool": "julia",
        "benches": [
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CUDA/Reactant (optimize = :after_enzyme)",
            "value": 1248963352,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387424\nallocs=459353\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1259523604,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21388256\nallocs=459361\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CUDA/Reactant (optimize = :before_enzyme)",
            "value": 1222332878,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387840\nallocs=459356\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CUDA/Reactant (optimize = :only_enzyme)",
            "value": 2312174076,
            "unit": "ns",
            "extra": "gctime=0\nmemory=58018752\nallocs=1177121\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 214445881,
            "unit": "ns",
            "extra": "gctime=49881897\nmemory=4764536\nallocs=97131\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Reactant (optimize = :after_enzyme)",
            "value": 6314200866,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232560\nallocs=453976\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 5447798299,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21233392\nallocs=453984\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Reactant (optimize = :before_enzyme)",
            "value": 5067528216,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232976\nallocs=453979\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Reactant (optimize = :only_enzyme)",
            "value": 6999371260,
            "unit": "ns",
            "extra": "gctime=0\nmemory=57653840\nallocs=1164435\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 33278206058,
            "unit": "ns",
            "extra": "gctime=993312839\nmemory=9667617328\nallocs=17425\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CUDA/Reactant (optimize = :after_enzyme)",
            "value": 1206461656,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21389504\nallocs=459367\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1235715983.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21388256\nallocs=459355\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CUDA/Reactant (optimize = :before_enzyme)",
            "value": 1197924052.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387200\nallocs=459348\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CUDA/Reactant (optimize = :only_enzyme)",
            "value": 2384368138,
            "unit": "ns",
            "extra": "gctime=0\nmemory=58019888\nallocs=1177122\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 8100599,
            "unit": "ns",
            "extra": "gctime=0\nmemory=409216\nallocs=18465\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Reactant (optimize = :after_enzyme)",
            "value": 1576661299,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21234992\nallocs=453992\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 1565582308,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232864\nallocs=453975\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Reactant (optimize = :before_enzyme)",
            "value": 1563833529,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232592\nallocs=453972\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Reactant (optimize = :only_enzyme)",
            "value": 2810055749,
            "unit": "ns",
            "extra": "gctime=0\nmemory=57654864\nallocs=1164436\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 3198223626.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=745483024\nallocs=4778\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CUDA/Reactant (optimize = :after_enzyme)",
            "value": 1229280537,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387232\nallocs=459348\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1182317068.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387312\nallocs=459348\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CUDA/Reactant (optimize = :before_enzyme)",
            "value": 1182591470.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21388784\nallocs=459352\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CUDA/Reactant (optimize = :only_enzyme)",
            "value": 2445804453,
            "unit": "ns",
            "extra": "gctime=0\nmemory=58025344\nallocs=1177135\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 20895102.5,
            "unit": "ns",
            "extra": "gctime=4488339\nmemory=409360\nallocs=18474\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Reactant (optimize = :after_enzyme)",
            "value": 2126242039,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21233360\nallocs=453975\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 2145881200,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232368\nallocs=453971\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Reactant (optimize = :before_enzyme)",
            "value": 2126882761,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232448\nallocs=453971\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Reactant (optimize = :only_enzyme)",
            "value": 3441236426,
            "unit": "ns",
            "extra": "gctime=0\nmemory=57653808\nallocs=1164431\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 6363883519.5,
            "unit": "ns",
            "extra": "gctime=196735370\nmemory=2531917392\nallocs=13583\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CUDA/Reactant (optimize = :after_enzyme)",
            "value": 1272921002,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21386944\nallocs=459347\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1242225939,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21386944\nallocs=459347\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CUDA/Reactant (optimize = :before_enzyme)",
            "value": 1248160126,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387488\nallocs=459348\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CUDA/Reactant (optimize = :only_enzyme)",
            "value": 2463169171,
            "unit": "ns",
            "extra": "gctime=0\nmemory=58020704\nallocs=1177120\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 6787609,
            "unit": "ns",
            "extra": "gctime=0\nmemory=409216\nallocs=18465\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Reactant (optimize = :after_enzyme)",
            "value": 1405572056,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21233280\nallocs=453974\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 1402691803,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232080\nallocs=453970\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Reactant (optimize = :before_enzyme)",
            "value": 1395676787,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21233072\nallocs=453972\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Reactant (optimize = :only_enzyme)",
            "value": 2629544816,
            "unit": "ns",
            "extra": "gctime=0\nmemory=57653072\nallocs=1164429\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 1034760144,
            "unit": "ns",
            "extra": "gctime=0\nmemory=448000432\nallocs=3338\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CUDA/Reactant (optimize = :after_enzyme)",
            "value": 1313470851.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21391840\nallocs=459355\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1280036746,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21386944\nallocs=459347\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CUDA/Reactant (optimize = :before_enzyme)",
            "value": 1229263872.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21386944\nallocs=459347\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CUDA/Reactant (optimize = :only_enzyme)",
            "value": 2495563384,
            "unit": "ns",
            "extra": "gctime=0\nmemory=58018752\nallocs=1177121\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 11287669,
            "unit": "ns",
            "extra": "gctime=0\nmemory=409232\nallocs=18466\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Reactant (optimize = :after_enzyme)",
            "value": 1695217270,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232624\nallocs=453971\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 1691360404,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21233168\nallocs=453972\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Reactant (optimize = :before_enzyme)",
            "value": 1705365591,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21235888\nallocs=453977\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Reactant (optimize = :only_enzyme)",
            "value": 2886463474,
            "unit": "ns",
            "extra": "gctime=0\nmemory=57657648\nallocs=1164441\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 2831664847,
            "unit": "ns",
            "extra": "gctime=17041870\nmemory=1341126672\nallocs=7743\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CUDA/Reactant (optimize = :after_enzyme)",
            "value": 1250872226,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21388656\nallocs=459350\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1262266098,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21386944\nallocs=459347\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CUDA/Reactant (optimize = :before_enzyme)",
            "value": 1253581441,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387568\nallocs=459348\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CUDA/Reactant (optimize = :only_enzyme)",
            "value": 2421676903,
            "unit": "ns",
            "extra": "gctime=0\nmemory=58021104\nallocs=1177120\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 25418532,
            "unit": "ns",
            "extra": "gctime=3570070\nmemory=409232\nallocs=18466\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Reactant (optimize = :after_enzyme)",
            "value": 2195165904,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232080\nallocs=453970\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 2172628367,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232080\nallocs=453970\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Reactant (optimize = :before_enzyme)",
            "value": 2187076283,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232864\nallocs=453972\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Reactant (optimize = :only_enzyme)",
            "value": 3339653784,
            "unit": "ns",
            "extra": "gctime=0\nmemory=57653072\nallocs=1164429\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 7604106696,
            "unit": "ns",
            "extra": "gctime=87485800.5\nmemory=2531049840\nallocs=13503\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CUDA/Reactant (optimize = :after_enzyme)",
            "value": 1250720657,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21392672\nallocs=459355\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1247420721,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387760\nallocs=459348\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CUDA/Reactant (optimize = :before_enzyme)",
            "value": 1247512380.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21386944\nallocs=459347\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CUDA/Reactant (optimize = :only_enzyme)",
            "value": 2402394615,
            "unit": "ns",
            "extra": "gctime=0\nmemory=58019856\nallocs=1177122\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 50176102,
            "unit": "ns",
            "extra": "gctime=8164170\nmemory=409568\nallocs=18479\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Reactant (optimize = :after_enzyme)",
            "value": 3040589340,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232080\nallocs=453970\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 3050098284,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232080\nallocs=453970\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Reactant (optimize = :before_enzyme)",
            "value": 3024380939,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232080\nallocs=453970\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Reactant (optimize = :only_enzyme)",
            "value": 4374157099,
            "unit": "ns",
            "extra": "gctime=0\nmemory=57654752\nallocs=1164436\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 17011794286,
            "unit": "ns",
            "extra": "gctime=321506884\nmemory=4910324400\nallocs=13583\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CUDA/Reactant (optimize = :after_enzyme)",
            "value": 1257307280,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387840\nallocs=459348\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1318845225,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21391840\nallocs=459353\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CUDA/Reactant (optimize = :before_enzyme)",
            "value": 1284848355,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21403264\nallocs=459367\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CUDA/Reactant (optimize = :only_enzyme)",
            "value": 2394979309,
            "unit": "ns",
            "extra": "gctime=0\nmemory=58017984\nallocs=1177115\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 67988612,
            "unit": "ns",
            "extra": "gctime=9646402\nmemory=410384\nallocs=18530\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Reactant (optimize = :after_enzyme)",
            "value": 3140747286,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21233328\nallocs=453972\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 3219036338,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21233952\nallocs=453973\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Reactant (optimize = :before_enzyme)",
            "value": 3266946507,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21244560\nallocs=453990\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Reactant (optimize = :only_enzyme)",
            "value": 4530707846,
            "unit": "ns",
            "extra": "gctime=0\nmemory=57653072\nallocs=1164429\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 12853131023,
            "unit": "ns",
            "extra": "gctime=303012206\nmemory=4909458160\nallocs=13505\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CUDA/Reactant (optimize = :after_enzyme)",
            "value": 1251840687,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21389088\nallocs=459350\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1274726015,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21386944\nallocs=459347\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CUDA/Reactant (optimize = :before_enzyme)",
            "value": 1252559841.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387840\nallocs=459348\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CUDA/Reactant (optimize = :only_enzyme)",
            "value": 2505605027,
            "unit": "ns",
            "extra": "gctime=0\nmemory=58024096\nallocs=1177121\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 19361156,
            "unit": "ns",
            "extra": "gctime=3693805\nmemory=410048\nallocs=18517\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Reactant (optimize = :after_enzyme)",
            "value": 1836699803,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232080\nallocs=453970\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 1846933136,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232896\nallocs=453971\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Reactant (optimize = :before_enzyme)",
            "value": 1855410499,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21234608\nallocs=453973\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Reactant (optimize = :only_enzyme)",
            "value": 3068103237,
            "unit": "ns",
            "extra": "gctime=0\nmemory=57655520\nallocs=1164432\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 3190350456,
            "unit": "ns",
            "extra": "gctime=7647528.5\nmemory=1340481296\nallocs=7684\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sergio.sanchez.ramirez+git@bsc.es",
            "name": "Sergio Sánchez Ramírez",
            "username": "mofeing"
          },
          "committer": {
            "email": "sergio.sanchez.ramirez+git@bsc.es",
            "name": "Sergio Sánchez Ramírez",
            "username": "mofeing"
          },
          "distinct": true,
          "id": "b6ffc9652f4f49f9fabe11f758bea585440ea9d7",
          "message": "fix permissions again on \"regenerate-dialects.yml\"",
          "timestamp": "2024-10-20T12:25:35+02:00",
          "tree_id": "0c0b4463f9821fc49a8d270731ba3ea864f917df",
          "url": "https://github.com/EnzymeAD/Reactant.jl/commit/b6ffc9652f4f49f9fabe11f758bea585440ea9d7"
        },
        "date": 1729431120938,
        "tool": "julia",
        "benches": [
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CUDA/Reactant (optimize = :after_enzyme)",
            "value": 1350678994,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387424\nallocs=459353\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1333730634,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21388256\nallocs=459361\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CUDA/Reactant (optimize = :before_enzyme)",
            "value": 1224299079,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387840\nallocs=459356\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CUDA/Reactant (optimize = :only_enzyme)",
            "value": 2413385812,
            "unit": "ns",
            "extra": "gctime=0\nmemory=58018752\nallocs=1177121\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 214783360,
            "unit": "ns",
            "extra": "gctime=52877290\nmemory=4764536\nallocs=97131\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Reactant (optimize = :after_enzyme)",
            "value": 5981139884,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232560\nallocs=453976\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 5122023961,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21233392\nallocs=453984\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Reactant (optimize = :before_enzyme)",
            "value": 5113319698,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232976\nallocs=453979\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Reactant (optimize = :only_enzyme)",
            "value": 7167599271,
            "unit": "ns",
            "extra": "gctime=0\nmemory=57653840\nallocs=1164435\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 30196155412,
            "unit": "ns",
            "extra": "gctime=1216696191\nmemory=9667617328\nallocs=17425\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CUDA/Reactant (optimize = :after_enzyme)",
            "value": 1390284417,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21389504\nallocs=459367\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1318628555,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21388256\nallocs=459355\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CUDA/Reactant (optimize = :before_enzyme)",
            "value": 1313946336.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387200\nallocs=459348\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CUDA/Reactant (optimize = :only_enzyme)",
            "value": 2401596566,
            "unit": "ns",
            "extra": "gctime=0\nmemory=58019888\nallocs=1177122\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 8174093.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=409216\nallocs=18465\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Reactant (optimize = :after_enzyme)",
            "value": 1584431293,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21234992\nallocs=453992\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 1553681023,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232864\nallocs=453975\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Reactant (optimize = :before_enzyme)",
            "value": 1531607356,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21236048\nallocs=453992\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Reactant (optimize = :only_enzyme)",
            "value": 2742679236,
            "unit": "ns",
            "extra": "gctime=0\nmemory=57653584\nallocs=1164431\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 2582819969,
            "unit": "ns",
            "extra": "gctime=0\nmemory=745483024\nallocs=4778\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CUDA/Reactant (optimize = :after_enzyme)",
            "value": 1281294743,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387232\nallocs=459348\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1288744817,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387312\nallocs=459348\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CUDA/Reactant (optimize = :before_enzyme)",
            "value": 1267100503.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21388784\nallocs=459352\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CUDA/Reactant (optimize = :only_enzyme)",
            "value": 2720480878,
            "unit": "ns",
            "extra": "gctime=0\nmemory=58025344\nallocs=1177135\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 21023031,
            "unit": "ns",
            "extra": "gctime=4492807\nmemory=409360\nallocs=18474\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Reactant (optimize = :after_enzyme)",
            "value": 2117554963,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21233568\nallocs=453976\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 2137262300,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21237200\nallocs=453990\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Reactant (optimize = :before_enzyme)",
            "value": 2103405572,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232448\nallocs=453971\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Reactant (optimize = :only_enzyme)",
            "value": 3362911280,
            "unit": "ns",
            "extra": "gctime=0\nmemory=57654704\nallocs=1164432\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 6507662341.5,
            "unit": "ns",
            "extra": "gctime=218489258\nmemory=2531917392\nallocs=13583\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CUDA/Reactant (optimize = :after_enzyme)",
            "value": 1217692986,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21386944\nallocs=459347\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1299585715,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21386944\nallocs=459347\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CUDA/Reactant (optimize = :before_enzyme)",
            "value": 1256460884,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387488\nallocs=459348\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CUDA/Reactant (optimize = :only_enzyme)",
            "value": 2480984709,
            "unit": "ns",
            "extra": "gctime=0\nmemory=58020704\nallocs=1177120\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 7116424,
            "unit": "ns",
            "extra": "gctime=0\nmemory=409216\nallocs=18465\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Reactant (optimize = :after_enzyme)",
            "value": 1430411299,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21235168\nallocs=453979\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 1403585000,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21233920\nallocs=453975\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Reactant (optimize = :before_enzyme)",
            "value": 1397811307,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232080\nallocs=453970\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Reactant (optimize = :only_enzyme)",
            "value": 2620352135,
            "unit": "ns",
            "extra": "gctime=0\nmemory=57654160\nallocs=1164432\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 1399213050,
            "unit": "ns",
            "extra": "gctime=0\nmemory=448000432\nallocs=3338\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CUDA/Reactant (optimize = :after_enzyme)",
            "value": 1253610685,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21391840\nallocs=459355\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1221476819,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21386944\nallocs=459347\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CUDA/Reactant (optimize = :before_enzyme)",
            "value": 1298312957,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21386944\nallocs=459347\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CUDA/Reactant (optimize = :only_enzyme)",
            "value": 2626079615,
            "unit": "ns",
            "extra": "gctime=0\nmemory=58018752\nallocs=1177121\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 11262626,
            "unit": "ns",
            "extra": "gctime=0\nmemory=409232\nallocs=18466\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Reactant (optimize = :after_enzyme)",
            "value": 1700488251,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232080\nallocs=453970\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 1718228239,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232624\nallocs=453971\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Reactant (optimize = :before_enzyme)",
            "value": 1699210951,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21233168\nallocs=453972\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Reactant (optimize = :only_enzyme)",
            "value": 2904184478,
            "unit": "ns",
            "extra": "gctime=0\nmemory=57657648\nallocs=1164442\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT tiny (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 3106007765.5,
            "unit": "ns",
            "extra": "gctime=15182136\nmemory=1341126672\nallocs=7743\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CUDA/Reactant (optimize = :after_enzyme)",
            "value": 1272958705,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21388656\nallocs=459350\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1378939178,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21386944\nallocs=459347\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CUDA/Reactant (optimize = :before_enzyme)",
            "value": 1198850881.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387568\nallocs=459348\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CUDA/Reactant (optimize = :only_enzyme)",
            "value": 2455806508,
            "unit": "ns",
            "extra": "gctime=0\nmemory=58017984\nallocs=1177115\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 25454579,
            "unit": "ns",
            "extra": "gctime=4437240\nmemory=409232\nallocs=18466\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Reactant (optimize = :after_enzyme)",
            "value": 2159929701,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21235888\nallocs=453976\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 2153941620,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232080\nallocs=453970\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Reactant (optimize = :before_enzyme)",
            "value": 2145199187,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232080\nallocs=453970\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Reactant (optimize = :only_enzyme)",
            "value": 3371266112,
            "unit": "ns",
            "extra": "gctime=0\nmemory=57653696\nallocs=1164430\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 7876557815.5,
            "unit": "ns",
            "extra": "gctime=47879193\nmemory=2531049840\nallocs=13503\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CUDA/Reactant (optimize = :after_enzyme)",
            "value": 1266137207,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21390688\nallocs=459353\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CUDA/Reactant",
            "value": 1276184478,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21399424\nallocs=459367\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CUDA/Reactant (optimize = :before_enzyme)",
            "value": 1294220417,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21386944\nallocs=459347\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CUDA/Reactant (optimize = :only_enzyme)",
            "value": 2540629874,
            "unit": "ns",
            "extra": "gctime=0\nmemory=58019040\nallocs=1177121\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CUDA/Lux",
            "value": 50189996,
            "unit": "ns",
            "extra": "gctime=8376261\nmemory=409568\nallocs=18479\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Reactant (optimize = :after_enzyme)",
            "value": 2962443693,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232080\nallocs=453970\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Reactant",
            "value": 2974703852,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232080\nallocs=453970\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Reactant (optimize = :before_enzyme)",
            "value": 2942244530,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232080\nallocs=453970\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Reactant (optimize = :only_enzyme)",
            "value": 4276601888,
            "unit": "ns",
            "extra": "gctime=0\nmemory=57654128\nallocs=1164435\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT small (256 x 256 x 3 x 32)/forward/CPU/Lux",
            "value": 13263989133,
            "unit": "ns",
            "extra": "gctime=291261253\nmemory=4910324400\nallocs=13583\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CUDA/Reactant (optimize = :after_enzyme)",
            "value": 1295222803,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387760\nallocs=459348\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CUDA/Reactant",
            "value": 1225445210,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387840\nallocs=459348\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CUDA/Reactant (optimize = :before_enzyme)",
            "value": 1219220272,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21391840\nallocs=459353\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CUDA/Reactant (optimize = :only_enzyme)",
            "value": 2415846181,
            "unit": "ns",
            "extra": "gctime=0\nmemory=58017984\nallocs=1177115\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CUDA/Lux",
            "value": 67899541,
            "unit": "ns",
            "extra": "gctime=10300272\nmemory=410528\nallocs=18531\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Reactant (optimize = :after_enzyme)",
            "value": 3138236791,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232704\nallocs=453971\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Reactant",
            "value": 3137892315,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21233328\nallocs=453972\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Reactant (optimize = :before_enzyme)",
            "value": 3201453616,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21233952\nallocs=453973\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Reactant (optimize = :only_enzyme)",
            "value": 4537162657,
            "unit": "ns",
            "extra": "gctime=0\nmemory=57665712\nallocs=1164450\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 16)/forward/CPU/Lux",
            "value": 12683571332,
            "unit": "ns",
            "extra": "gctime=287793810\nmemory=4909458160\nallocs=13505\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CUDA/Reactant (optimize = :after_enzyme)",
            "value": 1268435569,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21386944\nallocs=459347\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CUDA/Reactant",
            "value": 1275431958.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21386944\nallocs=459347\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CUDA/Reactant (optimize = :before_enzyme)",
            "value": 1299364678,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21387840\nallocs=459348\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CUDA/Reactant (optimize = :only_enzyme)",
            "value": 2434244578,
            "unit": "ns",
            "extra": "gctime=0\nmemory=58017984\nallocs=1177115\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CUDA/Lux",
            "value": 19383880,
            "unit": "ns",
            "extra": "gctime=3761578\nmemory=410048\nallocs=18517\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Reactant (optimize = :after_enzyme)",
            "value": 1840351618,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232080\nallocs=453970\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Reactant",
            "value": 1845101716,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232080\nallocs=453970\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Reactant (optimize = :before_enzyme)",
            "value": 1835348896,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21232896\nallocs=453971\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Reactant (optimize = :only_enzyme)",
            "value": 3051246469,
            "unit": "ns",
            "extra": "gctime=0\nmemory=57655600\nallocs=1164432\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "ViT base (256 x 256 x 3 x 4)/forward/CPU/Lux",
            "value": 6856653231,
            "unit": "ns",
            "extra": "gctime=15802335\nmemory=1340481296\nallocs=7684\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":20,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      }
    ]
  }
}