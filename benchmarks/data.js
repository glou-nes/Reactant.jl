window.BENCHMARK_DATA = {
  "lastUpdate": 1727924938011,
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
      }
    ]
  }
}