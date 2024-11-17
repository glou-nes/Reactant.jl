import{_ as l,B as p,o as h,c as o,j as i,a,G as t,a5 as n}from"./chunks/framework.f6-H1zhv.js";const j=JSON.parse('{"title":"Core Reactant API","description":"","frontmatter":{},"headers":[],"relativePath":"api/api.md","filePath":"api/api.md","lastUpdated":null}'),r={name:"api/api.md"},d={class:"jldocstring custom-block"},k={class:"jldocstring custom-block"},c={class:"jldocstring custom-block"},g={class:"jldocstring custom-block"},y={class:"jldocstring custom-block"},u={class:"jldocstring custom-block"},m={class:"jldocstring custom-block"};function E(b,s,C,f,F,A){const e=p("Badge");return h(),o("div",null,[s[21]||(s[21]=i("h1",{id:"Core-Reactant-API",tabindex:"-1"},[a("Core Reactant API "),i("a",{class:"header-anchor",href:"#Core-Reactant-API","aria-label":'Permalink to "Core Reactant API {#Core-Reactant-API}"'},"​")],-1)),s[22]||(s[22]=i("h2",{id:"Compile-API",tabindex:"-1"},[a("Compile API "),i("a",{class:"header-anchor",href:"#Compile-API","aria-label":'Permalink to "Compile API {#Compile-API}"'},"​")],-1)),i("details",d,[i("summary",null,[s[0]||(s[0]=i("a",{id:"Reactant.Compiler.@compile",href:"#Reactant.Compiler.@compile"},[i("span",{class:"jlbinding"},"Reactant.Compiler.@compile")],-1)),s[1]||(s[1]=a()),t(e,{type:"info",class:"jlObjectType jlMacro",text:"Macro"})]),s[2]||(s[2]=n('<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">@compile</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(args</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p><a href="https://github.com/EnzymeAD/Reactant.jl/blob/952d9529e19acfe5bc303356e6b83474fccc03ec/src/Compiler.jl#L395-L397" target="_blank" rel="noreferrer">source</a></p>',2))]),i("details",k,[i("summary",null,[s[3]||(s[3]=i("a",{id:"Reactant.Compiler.@jit",href:"#Reactant.Compiler.@jit"},[i("span",{class:"jlbinding"},"Reactant.Compiler.@jit")],-1)),s[4]||(s[4]=a()),t(e,{type:"info",class:"jlObjectType jlMacro",text:"Macro"})]),s[5]||(s[5]=n(`<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">@jit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(args</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Run </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">@compile</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(args</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">..</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) then immediately execute it</span></span></code></pre></div><p><a href="https://github.com/EnzymeAD/Reactant.jl/blob/952d9529e19acfe5bc303356e6b83474fccc03ec/src/Compiler.jl#L403-L407" target="_blank" rel="noreferrer">source</a></p>`,2))]),s[23]||(s[23]=i("h2",{id:"ReactantCore-API",tabindex:"-1"},[a("ReactantCore API "),i("a",{class:"header-anchor",href:"#ReactantCore-API","aria-label":'Permalink to "ReactantCore API {#ReactantCore-API}"'},"​")],-1)),i("details",c,[i("summary",null,[s[6]||(s[6]=i("a",{id:"ReactantCore.@trace",href:"#ReactantCore.@trace"},[i("span",{class:"jlbinding"},"ReactantCore.@trace")],-1)),s[7]||(s[7]=a()),t(e,{type:"info",class:"jlObjectType jlMacro",text:"Macro"})]),s[8]||(s[8]=n(`<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">@trace</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">expr</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><p>Converts certain expressions like control flow into a Reactant friendly form. Importantly, if no traced value is found inside the expression, then there is no overhead.</p><p><strong>Currently Supported</strong></p><ul><li><p><code>if</code> conditions (with <code>elseif</code> and other niceties) (<code>@trace if ...</code>)</p></li><li><p><code>if</code> statements with a preceeding assignment (<code>@trace a = if ...</code>) (note the positioning of the macro needs to be before the assignment and not before the <code>if</code>)</p></li><li><p><code>for</code> statements with a single induction variable iterating over a syntactic <code>StepRange</code> of integers.</p></li></ul><p><strong>Special Considerations</strong></p><ul><li>Apply <code>@trace</code> only at the outermost <code>if</code>. Nested <code>if</code> statements will be automatically expanded into the correct form.</li></ul><p><strong>Extended Help</strong></p><p><strong>Caveats (Deviations from Core Julia Semantics)</strong></p><p><strong>New variables introduced</strong></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">@trace</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    p </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span></span></code></pre></div><p>In the outer scope <code>p</code> is not defined if <code>x ≤ 0</code>. However, for the traced version, it is defined and set to a dummy value.</p><p><strong>Short Circuiting Operations</strong></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">@trace</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> z </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span></span></code></pre></div><p><code>&amp;&amp;</code> and <code>||</code> are short circuiting operations. In the traced version, we replace them with <code>&amp;</code> and <code>|</code> respectively.</p><p><strong>Type-Unstable Branches</strong></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">@trace</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1.0f0</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1.0</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span></span></code></pre></div><p>This will not compile since <code>y</code> is a <code>Float32</code> in one branch and a <code>Float64</code> in the other. You need to ensure that all branches have the same type.</p><p>Another example is the following for loop which changes the type of <code>x</code> between iterations.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ...</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # ConcreteRArray{Int64, 1}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1f0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.5f0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10f0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ConcreteRArray{Float32, 1}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span></span></code></pre></div><p><strong>Certain Symbols are Reserved</strong></p><p>Symbols like [😦😃, :nothing, :missing, :Inf, :Inf16, :Inf32, :Inf64, :Base, :Core] are not allowed as variables in <code>@trace</code> expressions. While certain cases might work but these are not guaranteed to work. For example, the following will not work:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    nothing</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> sum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    @trace</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> if</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> nothing</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1.0</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    else</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2.0</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    end</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">nothing</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span></span></code></pre></div><p><a href="https://github.com/EnzymeAD/Reactant.jl/blob/952d9529e19acfe5bc303356e6b83474fccc03ec/lib/ReactantCore/src/ReactantCore.jl#L23-L110" target="_blank" rel="noreferrer">source</a></p>`,23))]),s[24]||(s[24]=i("h2",{id:"Inspect-Generated-HLO",tabindex:"-1"},[a("Inspect Generated HLO "),i("a",{class:"header-anchor",href:"#Inspect-Generated-HLO","aria-label":'Permalink to "Inspect Generated HLO {#Inspect-Generated-HLO}"'},"​")],-1)),i("details",g,[i("summary",null,[s[9]||(s[9]=i("a",{id:"Reactant.Compiler.@code_hlo",href:"#Reactant.Compiler.@code_hlo"},[i("span",{class:"jlbinding"},"Reactant.Compiler.@code_hlo")],-1)),s[10]||(s[10]=a()),t(e,{type:"info",class:"jlObjectType jlMacro",text:"Macro"})]),s[11]||(s[11]=n('<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">@code_hlo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [optimize </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(args</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p><a href="https://github.com/EnzymeAD/Reactant.jl/blob/952d9529e19acfe5bc303356e6b83474fccc03ec/src/Compiler.jl#L383-L385" target="_blank" rel="noreferrer">source</a></p>',2))]),s[25]||(s[25]=i("h1",{id:"Internal-Functionality",tabindex:"-1"},[a("Internal Functionality "),i("a",{class:"header-anchor",href:"#Internal-Functionality","aria-label":'Permalink to "Internal Functionality {#Internal-Functionality}"'},"​")],-1)),s[26]||(s[26]=i("div",{class:"danger custom-block"},[i("p",{class:"custom-block-title"},"Private"),i("p",null,"These functions are not part of the public API and are subject to change at any time.")],-1)),i("details",y,[i("summary",null,[s[12]||(s[12]=i("a",{id:"Reactant.Compiler.codegen_unflatten!",href:"#Reactant.Compiler.codegen_unflatten!"},[i("span",{class:"jlbinding"},"Reactant.Compiler.codegen_unflatten!")],-1)),s[13]||(s[13]=a()),t(e,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[14]||(s[14]=n('<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">codegen_unflatten!</span></span></code></pre></div><p>Generate Julia code to wrap the XLA buffers back into the output result datatypes. The name is due to its similarity to the <code>unflatten</code> function in <code>jax.tree_util.register_pytree_node</code>.</p><p><a href="https://github.com/EnzymeAD/Reactant.jl/blob/952d9529e19acfe5bc303356e6b83474fccc03ec/src/Compiler.jl#L551-L556" target="_blank" rel="noreferrer">source</a></p>',3))]),i("details",u,[i("summary",null,[s[15]||(s[15]=i("a",{id:"Reactant.Compiler.codegen_flatten!",href:"#Reactant.Compiler.codegen_flatten!"},[i("span",{class:"jlbinding"},"Reactant.Compiler.codegen_flatten!")],-1)),s[16]||(s[16]=a()),t(e,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[17]||(s[17]=n('<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">codegen_flatten!</span></span></code></pre></div><p>Generate Julia code to extract the XLA buffers from input arguments. The name is due to its similarity to the <code>flatten</code> function in <code>jax.tree_util.register_pytree_node</code>.</p><p><strong>Arguments</strong></p><ul><li><code>linear_args</code>: A list of arguments to be flattened.</li></ul><p><strong>Returns</strong></p><ul><li><p><code>flatten_names</code>: A list of <code>Symbol</code>s representing the names of the flattened arguments.</p></li><li><p><code>flatten_code</code>: A list of <code>Expr</code>s to extract the XLA buffers from the input arguments.</p></li></ul><p><strong>Note</strong></p><p>The <em>linearized arguments</em> do not directly refer to the are the arguments that have been flattened into a single list.</p><p><a href="https://github.com/EnzymeAD/Reactant.jl/blob/952d9529e19acfe5bc303356e6b83474fccc03ec/src/Compiler.jl#L475-L493" target="_blank" rel="noreferrer">source</a></p>',9))]),i("details",m,[i("summary",null,[s[18]||(s[18]=i("a",{id:"Reactant.Compiler.codegen_xla_call",href:"#Reactant.Compiler.codegen_xla_call"},[i("span",{class:"jlbinding"},"Reactant.Compiler.codegen_xla_call")],-1)),s[19]||(s[19]=a()),t(e,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),s[20]||(s[20]=n('<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">codegen_xla_call</span></span></code></pre></div><p>Generate Julia code to call the XLA executable.</p><p><strong>Arguments</strong></p><ul><li><p><code>exec</code>: The XLA executable to call.</p></li><li><p><code>flatten_names</code>: A list of <code>Symbol</code>s representing the names of the flattened linear arguments.</p></li><li><p><code>donated_args_mask</code>: A list of <code>UInt8</code>s representing whether the argument is donated.</p></li><li><p><code>nresults</code>: The number of results to expect.</p></li></ul><p><a href="https://github.com/EnzymeAD/Reactant.jl/blob/952d9529e19acfe5bc303356e6b83474fccc03ec/src/Compiler.jl#L639-L650" target="_blank" rel="noreferrer">source</a></p>',5))])])}const D=l(r,[["render",E]]);export{j as __pageData,D as default};
