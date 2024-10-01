window.BENCHMARK_DATA = {
  "lastUpdate": 1727812368898,
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
      }
    ]
  }
}