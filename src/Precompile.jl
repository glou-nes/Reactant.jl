using PrecompileTools: @setup_workload, @compile_workload

function infer_sig(sig)
    interp = ReactantInterpreter()

    min_world = Ref{UInt}(typemin(UInt))
    max_world = Ref{UInt}(typemax(UInt))

    lookup_result = Reactant.lookup_world(
        sig, interp.world, Core.Compiler.method_table(interp), min_world, max_world
    )
    match = lookup_result::Core.MethodMatch
    # look up the method and code instance
    mi = ccall(
        :jl_specializations_get_linfo,
        Ref{Core.MethodInstance},
        (Any, Any, Any),
        match.method,
        match.spec_types,
        match.sparams,
    )

    @static if VERSION < v"1.11"
        # For older Julia versions, we vendor in some of the code to prevent
        # having to build the MethodInstance twice.
        result = CC.InferenceResult(mi, CC.typeinf_lattice(interp))
        frame = CC.InferenceState(result, :no, interp)
        @assert !isnothing(frame)
        CC.typeinf(interp, frame)
        ir = CC.run_passes(frame.src, CC.OptimizationState(frame, interp), result, nothing)
        rt = CC.widenconst(CC.ignorelimited(result.result))
    else
        ir, rt = CC.typeinf_ircode(interp, mi, nothing)
    end
end

@setup_workload begin
    initialize_dialect()
    @compile_workload begin
        # infer_sig(Tuple{typeof(Base.sum), Reactant.TracedRArray{Float64, 2}})

        infer_sig(Tuple{typeof(Base.sin), Reactant.TracedRNumber{Float64}})
    end
    deinitialize_dialect()
    for v in oc_capture_vec
        if v isa Base.RefValue
            p = Ptr{Ptr{Cvoid}}(pointer_from_objref(v))
            Base.atomic_pointerset(p, C_NULL, :monotonic)
        else
            empty!(v)
        end
    end
end