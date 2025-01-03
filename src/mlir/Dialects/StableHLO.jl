module stablehlo
using ...IR
import ...IR: NamedAttribute, Value, Location, Block, Region, Attribute, create_operation, context, IndexType
import ..Dialects: namedattribute, operandsegmentsizes
import ...API
using EnumX

struct ChannelHandle
	handle::Int
	type::Int
end
IR.Attribute(s::ChannelHandle) = parse(IR.Attribute,"#stablehlo.channel_handle<handle = $(s.handle), type = $(s.type)>")@enumx ComparisonDirection EQ NE GE GT LE LT 

@enumx ComparisonType NOTYPE FLOAT TOTALORDER SIGNED UNSIGNED 

struct Conv
	inputBatchDimension::Int
	inputFeatureDimension::Int
	inputSpatialDimensions::Vector{Int}
	kernelInputFeatureDimension::Int
	kernelOutputFeatureDimension::Int
	kernelSpatialDimensions::Vector{Int}
	outputBatchDimension::Int
	outputFeatureDimension::Int
	outputSpatialDimensions::Vector{Int}
end
IR.Attribute(s::Conv) = parse(IR.Attribute,"#stablehlo.conv<inputBatchDimension = $(s.inputBatchDimension), inputFeatureDimension = $(s.inputFeatureDimension), inputSpatialDimensions = $(s.inputSpatialDimensions), kernelInputFeatureDimension = $(s.kernelInputFeatureDimension), kernelOutputFeatureDimension = $(s.kernelOutputFeatureDimension), kernelSpatialDimensions = $(s.kernelSpatialDimensions), outputBatchDimension = $(s.outputBatchDimension), outputFeatureDimension = $(s.outputFeatureDimension), outputSpatialDimensions = $(s.outputSpatialDimensions)>")@enumx CustomCallApiVersion API_VERSION_UNSPECIFIED=0 API_VERSION_ORIGINAL=1 API_VERSION_STATUS_RETURNING=2 API_VERSION_STATUS_RETURNING_UNIFIED=3 API_VERSION_TYPED_FFI=4 

struct DotAlgorithm
	lhsPrecisionType::IR.Type
	rhsPrecisionType::IR.Type
	accumulationType::IR.Type
	lhsComponentCount::Int
	rhsComponentCount::Int
	numPrimitiveOperations::Int
	allowImpreciseAccumulation::Bool
end
IR.Attribute(s::DotAlgorithm) = parse(IR.Attribute,"#stablehlo.dot_algorithm<lhsPrecisionType = $(s.lhsPrecisionType), rhsPrecisionType = $(s.rhsPrecisionType), accumulationType = $(s.accumulationType), lhsComponentCount = $(s.lhsComponentCount), rhsComponentCount = $(s.rhsComponentCount), numPrimitiveOperations = $(s.numPrimitiveOperations), allowImpreciseAccumulation = $(s.allowImpreciseAccumulation)>")struct Dot
	lhsBatchingDimensions::Vector{Int}
	rhsBatchingDimensions::Vector{Int}
	lhsContractingDimensions::Vector{Int}
	rhsContractingDimensions::Vector{Int}
end
IR.Attribute(s::Dot) = parse(IR.Attribute,"#stablehlo.dot<lhsBatchingDimensions = $(s.lhsBatchingDimensions), rhsBatchingDimensions = $(s.rhsBatchingDimensions), lhsContractingDimensions = $(s.lhsContractingDimensions), rhsContractingDimensions = $(s.rhsContractingDimensions)>")@enumx FftType FFT IFFT RFFT IRFFT 

struct Gather
	offsetDims::Vector{Int}
	collapsedSliceDims::Vector{Int}
	operandBatchingDims::Vector{Int}
	startIndicesBatchingDims::Vector{Int}
	startIndexMap::Vector{Int}
	indexVectorDim::Int
end
IR.Attribute(s::Gather) = parse(IR.Attribute,"#stablehlo.gather<offsetDims = $(s.offsetDims), collapsedSliceDims = $(s.collapsedSliceDims), operandBatchingDims = $(s.operandBatchingDims), startIndicesBatchingDims = $(s.startIndicesBatchingDims), startIndexMap = $(s.startIndexMap), indexVectorDim = $(s.indexVectorDim)>")struct OutputOperandAlias
	outputTupleIndices::Vector{Int}
	operandIndex::Int
	operandTupleIndices::Vector{Int}
end
IR.Attribute(s::OutputOperandAlias) = parse(IR.Attribute,"#stablehlo.output_operand_alias<outputTupleIndices = $(s.outputTupleIndices), operandIndex = $(s.operandIndex), operandTupleIndices = $(s.operandTupleIndices)>")@enumx Precision DEFAULT HIGH HIGHEST 

@enumx RngAlgorithm DEFAULT THREE_FRY PHILOX 

@enumx RngDistribution UNIFORM NORMAL 

struct Scatter
	updateWindowDims::Vector{Int}
	insertedWindowDims::Vector{Int}
	inputBatchingDims::Vector{Int}
	scatterIndicesBatchingDims::Vector{Int}
	scatterDimsToOperandDims::Vector{Int}
	indexVectorDim::Int
end
IR.Attribute(s::Scatter) = parse(IR.Attribute,"#stablehlo.scatter<updateWindowDims = $(s.updateWindowDims), insertedWindowDims = $(s.insertedWindowDims), inputBatchingDims = $(s.inputBatchingDims), scatterIndicesBatchingDims = $(s.scatterIndicesBatchingDims), scatterDimsToOperandDims = $(s.scatterDimsToOperandDims), indexVectorDim = $(s.indexVectorDim)>")@enumx Transpose TRANSPOSE_INVALID NO_TRANSPOSE TRANSPOSE ADJOINT 

struct TypeExtensions
	bounds::Vector{Int}
end
IR.Attribute(s::TypeExtensions) = parse(IR.Attribute,"#stablehlo.type_extensions<bounds = $(s.bounds)>")
"""
`abs`

Performs element-wise abs operation on `operand` tensor and produces a
`result` tensor.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#abs

# Example
```mlir
%result = stablehlo.abs %operand : tensor<3xi32>
```
"""
function abs(operand::Value; result::Union{Nothing, IR.Type}=nothing, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[operand, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[]
    !isnothing(result) && push!(op_ty_results, result)
    
    create_operation(
        "stablehlo.abs", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`add`

Performs element-wise addition of two tensors `lhs` and `rhs` and produces a
`result` tensor.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#add

# Example
```mlir
%result = stablehlo.add %lhs, %rhs : tensor<2x2xi32>
```
"""
function add(lhs::Value, rhs::Value; result::Union{Nothing, IR.Type}=nothing, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[lhs, rhs, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[]
    !isnothing(result) && push!(op_ty_results, result)
    
    create_operation(
        "stablehlo.add", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`after_all`

Ensures that the operations producing the `inputs` are executed before any
operations that depend on `result`.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#after_all

# Example
```mlir
%result = stablehlo.after_all %input0, %input1 : !stablehlo.token
```
"""
function after_all(inputs::Vector{Value}; result::Union{Nothing, IR.Type}=nothing, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[inputs..., ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[]
    !isnothing(result) && push!(op_ty_results, result)
    
    create_operation(
        "stablehlo.after_all", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`all_gather`

Within each process group in the process grid, concatenates the values of the
`operand` tensor from each process along `all_gather_dim` and produces a
`result` tensor.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#all_gather

# Example
```mlir
%result:2 = \"stablehlo.all_gather\"(%operand0, %operand1) {
  all_gather_dim = 1 : i64,
  replica_groups = dense<[[0, 1]]> : tensor<1x2xi64>,
  channel_handle = #stablehlo.channel_handle<handle = 0, type = 0>
} : (tensor<2x2xi64>, tensor<2x2xi64>) -> (tensor<2x4xi64>, tensor<2x4xi64>)
```
"""
function all_gather(operands::Vector{Value}; result::Tuple{Vararg{IR.Type}}, all_gather_dim::Int64, replica_groups::Attribute, channel_handle::Union{ChannelHandle, Nothing}=nothing, use_global_device_ids::Union{Attribute, Nothing}=nothing, location=Location())
    op_ty_results = IR.Type[result..., ]
    operands = Value[operands..., ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[namedattribute("all_gather_dim", Attribute(all_gather_dim)), namedattribute("replica_groups", replica_groups), ]
    !isnothing(channel_handle) && push!(attributes, namedattribute("channel_handle", Attribute(channel_handle)))
    !isnothing(use_global_device_ids) && push!(attributes, namedattribute("use_global_device_ids", use_global_device_ids))
    
    create_operation(
        "stablehlo.all_gather", location;
        operands, owned_regions, successors, attributes,
        results=op_ty_results,
        result_inference=false
    )
end

"""
`all_reduce`

Within each process group in the process grid, applies a reduction function
`computation` to the values of the `operand` tensor from each process and
produces a `result` tensor.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#all_reduce

# Example
```mlir
%result:2 = \"stablehlo.all_reduce\"(%operand0, %operand0) ({
  ^bb0(%arg0: tensor<i64>, %arg1: tensor<i64>):
  %0 = \"stablehlo.add\"(%arg0, %arg1) : (tensor<i64>, tensor<i64>) -> tensor<i64>
  \"stablehlo.return\"(%0) : (tensor<i64>) -> ()
}) {
  replica_groups = dense<[[0, 1]]> : tensor<1x2xi64>,
  channel_handle = #stablehlo.channel_handle<handle = 0, type = 0>
} : (tensor<4xi64>, tensor<4xi64>) -> (tensor<4xi64>, tensor<4xi64>)
```
"""
function all_reduce(operands::Vector{Value}; result::Tuple{Vararg{IR.Type}}, replica_groups::Attribute, channel_handle::Union{ChannelHandle, Nothing}=nothing, use_global_device_ids::Union{Attribute, Nothing}=nothing, computation::Region, location=Location())
    op_ty_results = IR.Type[result..., ]
    operands = Value[operands..., ]
    owned_regions = Region[computation, ]
    successors = Block[]
    attributes = NamedAttribute[namedattribute("replica_groups", replica_groups), ]
    !isnothing(channel_handle) && push!(attributes, namedattribute("channel_handle", Attribute(channel_handle)))
    !isnothing(use_global_device_ids) && push!(attributes, namedattribute("use_global_device_ids", use_global_device_ids))
    
    create_operation(
        "stablehlo.all_reduce", location;
        operands, owned_regions, successors, attributes,
        results=op_ty_results,
        result_inference=false
    )
end

"""
`all_to_all`

Within each process group in the process grid, splits the values of the
`operand` tensor along `split_dimension` into parts, scatters the split parts
between the processes, concatenates the scattered parts along `concat_dimension`
and produces a `result` tensor.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#all_to_all

# Example
```mlir
%result:2 = \"stablehlo.all_to_all\"(%operand1, %operand2) {
  split_dimension = 1 : i64,
  concat_dimension = 0 : i64,
  split_count = 2 : i64,
  replica_groups = dense<[[0, 1]]> : tensor<1x2xi64>
} : (tensor<2x4xi64>, tensor<2x4xi64>) -> (tensor<4x2xi64>, tensor<4x2xi64>)
```
"""
function all_to_all(operands::Vector{Value}; result::Union{Nothing, Tuple{Vararg{IR.Type}}}=nothing, split_dimension::Int64, concat_dimension::Int64, split_count::Int64, replica_groups::Attribute, channel_handle::Union{ChannelHandle, Nothing}=nothing, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[operands..., ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[namedattribute("split_dimension", Attribute(split_dimension)), namedattribute("concat_dimension", Attribute(concat_dimension)), namedattribute("split_count", Attribute(split_count)), namedattribute("replica_groups", replica_groups), ]
    !isnothing(result) && push!(op_ty_results, result...)
    !isnothing(channel_handle) && push!(attributes, namedattribute("channel_handle", Attribute(channel_handle)))
    
    create_operation(
        "stablehlo.all_to_all", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`and`

Performs element-wise AND of two tensors `lhs` and `rhs` and produces a
`result` tensor

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#and

# Example
```mlir
%result = stablehlo.and %lhs, %rhs : tensor<2x2xi32>
```
"""
function and(lhs::Value, rhs::Value; result::Union{Nothing, IR.Type}=nothing, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[lhs, rhs, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[]
    !isnothing(result) && push!(op_ty_results, result)
    
    create_operation(
        "stablehlo.and", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`atan2`

Performs element-wise atan2 operation on `lhs` and `rhs` tensor and produces
a `result` tensor.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#atan2

# Example
```mlir
%result = stablehlo.atan2 %lhs, %rhs : tensor<3xf64>
```
"""
function atan2(lhs::Value, rhs::Value; result::Union{Nothing, IR.Type}=nothing, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[lhs, rhs, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[]
    !isnothing(result) && push!(op_ty_results, result)
    
    create_operation(
        "stablehlo.atan2", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`batch_norm_grad`

Computes gradients of several inputs of BatchNormTrainingOp backpropagating
from `grad_output`, and produces `grad_operand`, `grad_scale` and
`grad_offset` tensors.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#batch_norm_grad

# Example
```mlir
%grad_operand, %grad_scale, %grad_offset =
\"stablehlo.batch_norm_grad\"(%operand, %scale, %mean, %variance, %grad_output) {
  epsilon = 0.0 : f32,
  feature_index = 2 : i64
} : (tensor<2x2x2xf64>, tensor<2xf64>, tensor<2xf64>, tensor<2xf64>,
     tensor<2x2x2xf64>) -> (tensor<2x2x2xf64>, tensor<2xf64>, tensor<2xf64>)
```
"""
function batch_norm_grad(operand::Value, scale::Value, mean::Value, variance::Value, grad_output::Value; grad_operand::Union{Nothing, IR.Type}=nothing, grad_scale::Union{Nothing, IR.Type}=nothing, grad_offset::Union{Nothing, IR.Type}=nothing, epsilon::Float32, feature_index::Int64, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[operand, scale, mean, variance, grad_output, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[namedattribute("epsilon", Attribute(epsilon)), namedattribute("feature_index", Attribute(feature_index)), ]
    !isnothing(grad_operand) && push!(op_ty_results, grad_operand)
    !isnothing(grad_scale) && push!(op_ty_results, grad_scale)
    !isnothing(grad_offset) && push!(op_ty_results, grad_offset)
    
    create_operation(
        "stablehlo.batch_norm_grad", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`batch_norm_inference`

Normalizes the `operand` tensor across all dimensions except for the
`feature_index` dimension and produces a `result` tensor.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#batch_norm_inference

# Example
```mlir
%result = \"stablehlo.batch_norm_inference\"(%operand, %scale, %offset, %mean, %variance) {
  epsilon = 0.0 : f32,
  feature_index = 2 : i64
} : (tensor<2x2x2xf64>, tensor<2xf64>, tensor<2xf64>, tensor<2xf64>, tensor<2xf64>) -> tensor<2x2x2xf64>
```
"""
function batch_norm_inference(operand::Value, scale::Value, offset::Value, mean::Value, variance::Value; result::Union{Nothing, IR.Type}=nothing, epsilon::Float32, feature_index::Int64, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[operand, scale, offset, mean, variance, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[namedattribute("epsilon", Attribute(epsilon)), namedattribute("feature_index", Attribute(feature_index)), ]
    !isnothing(result) && push!(op_ty_results, result)
    
    create_operation(
        "stablehlo.batch_norm_inference", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`batch_norm_training`

Computes mean and variance across batch and spatial dimensions and
normalizes the `operand` tensor, for each feature in the `feature_index`
dimension and produces `output`, `batch_mean` and `batch_var` tensors.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#batch_norm_training

# Example
```mlir
%output, %batch_mean, %batch_var = \"stablehlo.batch_norm_training\"(%operand, %scale, %offset) {
  epsilon = 0.0 : f32,
  feature_index = 2 : i64
} : (tensor<2x2x2xf64>, tensor<2xf64>, tensor<2xf64>) ->
    (tensor<2x2x2xf64>, tensor<2xf64>, tensor<2xf64>)
```
"""
function batch_norm_training(operand::Value, scale::Value, offset::Value; output::Union{Nothing, IR.Type}=nothing, batch_mean::Union{Nothing, IR.Type}=nothing, batch_var::Union{Nothing, IR.Type}=nothing, epsilon::Float32, feature_index::Int64, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[operand, scale, offset, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[namedattribute("epsilon", Attribute(epsilon)), namedattribute("feature_index", Attribute(feature_index)), ]
    !isnothing(output) && push!(op_ty_results, output)
    !isnothing(batch_mean) && push!(op_ty_results, batch_mean)
    !isnothing(batch_var) && push!(op_ty_results, batch_var)
    
    create_operation(
        "stablehlo.batch_norm_training", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`bitcast_convert`

Performs a bitcast operation on `operand` tensor and produces a `result`
tensor where the bits of the entire `operand` tensor are reinterpreted using
the type of the `result` tensor.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#bitcast_convert

# Example
```mlir
%result = stablehlo.bitcast_convert %operand : (tensor<f64>) -> tensor<4xf16>
```
"""
function bitcast_convert(operand::Value; result::IR.Type, location=Location())
    op_ty_results = IR.Type[result, ]
    operands = Value[operand, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[]
    
    create_operation(
        "stablehlo.bitcast_convert", location;
        operands, owned_regions, successors, attributes,
        results=op_ty_results,
        result_inference=false
    )
end

"""
`broadcast_in_dim`

Expands the dimensions and/or rank of an input tensor by duplicating the
data in the `operand` tensor and produces a `result` tensor.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#broadcast_in_dim

# Example
```mlir
%result = stablehlo.broadcast_in_dim %operand, dims = [2, 1] : (tensor<1x3xi32>) -> tensor<2x3x2xi32>
```
"""
function broadcast_in_dim(operand::Value; result::IR.Type, broadcast_dimensions::Vector{Int64}, location=Location())
    op_ty_results = IR.Type[result, ]
    operands = Value[operand, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[namedattribute("broadcast_dimensions", Attribute(broadcast_dimensions)), ]
    
    create_operation(
        "stablehlo.broadcast_in_dim", location;
        operands, owned_regions, successors, attributes,
        results=op_ty_results,
        result_inference=false
    )
end

"""
`broadcast`

This operation is on its way out of StableHLO, so it is not included in
the StableHLO specification: https://github.com/openxla/stablehlo/issues/3.

Informally, this operation does the same thing as XLA\'s Broadcast:
https://www.tensorflow.org/xla/operation_semantics#broadcast

# Example
```mlir
%result = stablehlo.broadcast %operand, sizes = [1, 2] : (tensor<3xi32>) -> tensor<1x2x3xi32>
```
"""
function broadcast(operand::Value; result::Union{Nothing, IR.Type}=nothing, broadcast_sizes::Vector{Int64}, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[operand, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[namedattribute("broadcast_sizes", Attribute(broadcast_sizes)), ]
    !isnothing(result) && push!(op_ty_results, result)
    
    create_operation(
        "stablehlo.broadcast", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`case`

Produces the output from executing exactly one `function` from `branches`
depending on the value of `index`.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#case

# Example
```mlir
%result0, %result1 = \"stablehlo.case\"(%index) ({
  stablehlo.return %result_branch0, %result_branch0 : tensor<2xi64>, tensor<2xi64>
}, {
  stablehlo.return %result_branch1, %result_branch1 : tensor<2xi64>, tensor<2xi64>
}) : (tensor<i32>) -> (tensor<2xi64>, tensor<2xi64>)
```
"""
function case(index::Value; result::Tuple{Vararg{IR.Type}}, branches::Vector{Region}, location=Location())
    op_ty_results = IR.Type[result..., ]
    operands = Value[index, ]
    owned_regions = Region[branches..., ]
    successors = Block[]
    attributes = NamedAttribute[]
    
    create_operation(
        "stablehlo.case", location;
        operands, owned_regions, successors, attributes,
        results=op_ty_results,
        result_inference=false
    )
end

"""
`cbrt`

Performs element-wise cubic root operation on `operand` tensor and produces
a `result` tensor.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#cbrt

# Example
```mlir
%result = stablehlo.cbrt %operand : tensor<4xf64>
```
"""
function cbrt(operand::Value; result::Union{Nothing, IR.Type}=nothing, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[operand, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[]
    !isnothing(result) && push!(op_ty_results, result)
    
    create_operation(
        "stablehlo.cbrt", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`ceil`

Performs element-wise ceil of `operand` tensor and produces a `result` tensor.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#ceil

# Example
```mlir
%result = stablehlo.ceil %operand : tensor<5xf32>
```
"""
function ceil(operand::Value; result::Union{Nothing, IR.Type}=nothing, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[operand, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[]
    !isnothing(result) && push!(op_ty_results, result)
    
    create_operation(
        "stablehlo.ceil", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`cholesky`

Computes the Cholesky decomposition of a batch of matrices.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#cholesky

# Example
```mlir
%result = stablehlo.cholesky %a, lower = true : tensor<3x3xf64>
```
"""
function cholesky(a::Value; result::Union{Nothing, IR.Type}=nothing, lower::Union{Bool, Nothing}=nothing, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[a, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[]
    !isnothing(result) && push!(op_ty_results, result)
    !isnothing(lower) && push!(attributes, namedattribute("lower", Attribute(lower)))
    
    create_operation(
        "stablehlo.cholesky", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`clamp`

Clamps every element of the `operand` tensor between a minimum and maximum
value and produces a `result` tensor.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#clamp

# Example
```mlir
%result = stablehlo.clamp %min, %operand, %max : tensor<3xi32>
```
"""
function clamp(min::Value, operand::Value, max::Value; result::Union{Nothing, IR.Type}=nothing, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[min, operand, max, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[]
    !isnothing(result) && push!(op_ty_results, result)
    
    create_operation(
        "stablehlo.clamp", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`count_leading_zeros`

Performs element-wise count of the number of leading zero bits in the
`operand` tensor and produces a `result` tensor.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#count_leading_zeros

# Example
```mlir
%result = stablehlo.count_leading_zeros %operand : tensor<2x2xi64>
```
"""
function count_leading_zeros(operand::Value; result::Union{Nothing, IR.Type}=nothing, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[operand, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[]
    !isnothing(result) && push!(op_ty_results, result)
    
    create_operation(
        "stablehlo.count_leading_zeros", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`collective_broadcast`

Within each process group in the process grid, send the value of the
`operand` tensor from the source process to the target processes and produce a
`result` tensor.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#collective_broadcast

# Example
```mlir
%result = \"stablehlo.collective_broadcast\"(%operand) {
  replica_groups = dense<[[0, 1]]> : tensor<1x2xi64>,
  channel_handle = #stablehlo.channel_handle<handle = 0, type = 0>
} : (tensor<1x2xi64>) -> tensor<1x2xi64>
```
"""
function collective_broadcast(operand::Value; result::Union{Nothing, IR.Type}=nothing, replica_groups::Attribute, channel_handle::Union{ChannelHandle, Nothing}=nothing, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[operand, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[namedattribute("replica_groups", replica_groups), ]
    !isnothing(result) && push!(op_ty_results, result)
    !isnothing(channel_handle) && push!(attributes, namedattribute("channel_handle", Attribute(channel_handle)))
    
    create_operation(
        "stablehlo.collective_broadcast", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`collective_permute`

Within each process group in the process grid, sends the value of the
`operand` tensor from the source process to the target process and produces
a `result` tensor.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#collective_permute

# Example
```mlir
%result = \"stablehlo.collective_permute\"(%operand) {
  source_target_pairs = dense<[[0, 1], [1, 2]]> : tensor<2x2xi64>,
  channel_handle = #stablehlo.channel_handle<handle = 0, type = 0>
} : (tensor<2x2xi64>) -> tensor<2x2xi64>
```
"""
function collective_permute(operand::Value; result::Union{Nothing, IR.Type}=nothing, source_target_pairs::Attribute, channel_handle::Union{ChannelHandle, Nothing}=nothing, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[operand, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[namedattribute("source_target_pairs", source_target_pairs), ]
    !isnothing(result) && push!(op_ty_results, result)
    !isnothing(channel_handle) && push!(attributes, namedattribute("channel_handle", Attribute(channel_handle)))
    
    create_operation(
        "stablehlo.collective_permute", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`compare`

Performs element-wise comparison of `lhs` and `rhs` tensors according to
`comparison_direction` and `compare_type`, and produces a `result` tensor.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#compare

# Example
```mlir
%result = stablehlo.compare LT, %lhs, %rhs, FLOAT : (tensor<2xf32>, tensor<2xf32>) -> tensor<2xi1>
```
"""
function compare(lhs::Value, rhs::Value; result::Union{Nothing, IR.Type}=nothing, comparison_direction::ComparisonDirection.T, compare_type::Union{ComparisonType.T, Nothing}=nothing, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[lhs, rhs, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[namedattribute("comparison_direction", parse(Attribute,"#stablehlo.comparison_direction<$(string(comparison_direction))>")), ]
    !isnothing(result) && push!(op_ty_results, result)
    !isnothing(compare_type) && push!(attributes, namedattribute("compare_type", parse(Attribute,"#stablehlo.compare_type<$(string(compare_type))>")))
    
    create_operation(
        "stablehlo.compare", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`complex`

Performs element-wise conversion to a complex value from a pair of real and
imaginary values, `lhs` and `rhs`, and produces a `result` tensor.
See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#complex
# Example
```mlir
%result = stablehlo.complex %lhs, %rhs : tensor<2xcomplex<f64>>
```
"""
function complex(lhs::Value, rhs::Value; result::Union{Nothing, IR.Type}=nothing, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[lhs, rhs, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[]
    !isnothing(result) && push!(op_ty_results, result)
    
    create_operation(
        "stablehlo.complex", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`composite`

Encapsulates an operation made up (composed) of other StableHLO operations,
taking `inputs` and `composite_attributes` and producing `results`. The
semantics of the op are implemented by the `decomposition` attribute. The
`composite` op can be replaced with its decomposition without changing program
semantics. In cases where inlining the decomposition does not provide the same
op semantics, prefer using `custom_call`.

The `version` field (defaults to `0`) is used to denote when a composite\'s
semantics change.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#composite

# Example
```mlir
%results = stablehlo.composite \"my.op\" %input0, %input1 {
  composite_attributes = {
    my_attribute = \"my_value\"
  },
  decomposition = @my_op,
  version = 1 : i32
} : (tensor<f32>, tensor<f32>) -> tensor<f32>
```
"""
function composite(inputs::Vector{Value}; result::Tuple{Vararg{IR.Type}}, name::String, composite_attributes::Union{Attribute, Nothing}=nothing, decomposition::Attribute, version::Union{Int32, Nothing}=nothing, location=Location())
    op_ty_results = IR.Type[result..., ]
    operands = Value[inputs..., ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[namedattribute("name", Attribute(name)), namedattribute("decomposition", decomposition), ]
    !isnothing(composite_attributes) && push!(attributes, namedattribute("composite_attributes", composite_attributes))
    !isnothing(version) && push!(attributes, namedattribute("version", Attribute(version)))
    
    create_operation(
        "stablehlo.composite", location;
        operands, owned_regions, successors, attributes,
        results=op_ty_results,
        result_inference=false
    )
end

"""
`concatenate`

Concatenates a variadic number of tensors in `inputs` along `dimension`
dimension in the same order as the given arguments and produces a `result`
tensor.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#concatenate

# Example
```mlir
%result = stablehlo.concatenate %input0, %input1, dim = 0 : (tensor<3x2xi64>, tensor<1x2xi64>) -> tensor<4x2xi64>
```
"""
function concatenate(inputs::Vector{Value}; result::Union{Nothing, IR.Type}=nothing, dimension::Int64, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[inputs..., ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[namedattribute("dimension", Attribute(dimension)), ]
    !isnothing(result) && push!(op_ty_results, result)
    
    create_operation(
        "stablehlo.concatenate", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`constant`

Produces an `output` tensor from a constant `value`.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#constant

# Example
```mlir
%output = stablehlo.constant dense<[[0.0, 1.0], [2.0, 3.0]]> : tensor<2x2xf32>
```
"""
function constant(; output::Union{Nothing, IR.Type}=nothing, value::Attribute, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[namedattribute("value", value), ]
    !isnothing(output) && push!(op_ty_results, output)
    
    create_operation(
        "stablehlo.constant", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`convert`

Performs an element-wise conversion from one element type to another on
`operand` tensor and produces a `result` tensor.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#convert

# Example
```mlir
%result = stablehlo.convert %operand : (tensor<3xi64>) -> tensor<3xcomplex<f64>>
```
"""
function convert(operand::Value; result::IR.Type, location=Location())
    op_ty_results = IR.Type[result, ]
    operands = Value[operand, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[]
    
    create_operation(
        "stablehlo.convert", location;
        operands, owned_regions, successors, attributes,
        results=op_ty_results,
        result_inference=false
    )
end

"""
`convolution`

Computes dot products between windows of `lhs` and slices of `rhs` and
produces `result`.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#convolution

# Example
```mlir
%result = stablehlo.convolution(%lhs, %rhs)
  dim_numbers = [b, 0, 1, f]x[0, 1, i, o]->[b, 0, 1, f],
  window = {
    stride = [4, 4],
    pad = [[0, 0], [0, 0]],
    lhs_dilate = [2, 2],
    rhs_dilate = [1, 1],
    reverse = [0, 0]
  } {
    feature_group_count = 1 : i64,
    batch_group_count = 1 : i64,
    precision_config = [#stablehlo<precision DEFAULT>, #stablehlo<precision DEFAULT>]
  } :
(tensor<1x4x4x1xi64>, tensor<3x3x1x1xi64>) -> tensor<1x2x2x1xi64>
```
"""
function convolution(lhs::Value, rhs::Value; result::IR.Type, window_strides::Union{Vector{Int64}, Nothing}=nothing, padding::Union{Attribute, Nothing}=nothing, lhs_dilation::Union{Vector{Int64}, Nothing}=nothing, rhs_dilation::Union{Vector{Int64}, Nothing}=nothing, window_reversal::Union{Attribute, Nothing}=nothing, dimension_numbers::Conv, feature_group_count::Int64, batch_group_count::Int64, precision_config::Union{Attribute, Nothing}=nothing, location=Location())
    op_ty_results = IR.Type[result, ]
    operands = Value[lhs, rhs, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[namedattribute("dimension_numbers", Attribute(dimension_numbers)), namedattribute("feature_group_count", Attribute(feature_group_count)), namedattribute("batch_group_count", Attribute(batch_group_count)), ]
    !isnothing(window_strides) && push!(attributes, namedattribute("window_strides", Attribute(window_strides)))
    !isnothing(padding) && push!(attributes, namedattribute("padding", padding))
    !isnothing(lhs_dilation) && push!(attributes, namedattribute("lhs_dilation", Attribute(lhs_dilation)))
    !isnothing(rhs_dilation) && push!(attributes, namedattribute("rhs_dilation", Attribute(rhs_dilation)))
    !isnothing(window_reversal) && push!(attributes, namedattribute("window_reversal", window_reversal))
    !isnothing(precision_config) && push!(attributes, namedattribute("precision_config", precision_config))
    
    create_operation(
        "stablehlo.convolution", location;
        operands, owned_regions, successors, attributes,
        results=op_ty_results,
        result_inference=false
    )
end

"""
`cosine`

Performs element-wise cosine operation on `operand` tensor and produces a
`result` tensor.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#cosine

# Example
```mlir
%result = stablehlo.cosine %operand : tensor<2xf32>
```
"""
function cosine(operand::Value; result::Union{Nothing, IR.Type}=nothing, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[operand, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[]
    !isnothing(result) && push!(op_ty_results, result)
    
    create_operation(
        "stablehlo.cosine", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`create_token`

This operation is on its way out of StableHLO, so it is not included in
the StableHLO specification: https://github.com/openxla/stablehlo/issues/3.

Informally, this operation does the same thing as AfterAllOp with 0 inputs:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#after_all

# Example
```mlir
%output = stablehlo.create_token : !stablehlo.token
```
"""
function create_token(; output::Union{Nothing, IR.Type}=nothing, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[]
    !isnothing(output) && push!(op_ty_results, output)
    
    create_operation(
        "stablehlo.create_token", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`cross_replica_sum`

This operation is on its way out of StableHLO, so it is not included in
the StableHLO specification: https://github.com/openxla/stablehlo/issues/3.

Informally, this operation does the same thing as AllReduceOp with
`channel_id = 0`, `use_global_device_ids = false` and `computation`
implementing addition:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#all_reduce

# Example
```mlir
%result = \"stablehlo.cross-replica-sum\"(%operand) {
  replica_groups = dense<[[0, 1]]> : tensor<1x2xi64>
} : (tensor<4xf32>) -> tensor<4xf32>
```
"""
function cross_replica_sum(operand::Value; result::Union{Nothing, IR.Type}=nothing, replica_groups::Attribute, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[operand, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[namedattribute("replica_groups", replica_groups), ]
    !isnothing(result) && push!(op_ty_results, result)
    
    create_operation(
        "stablehlo.cross-replica-sum", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`custom_call`

Encapsulates an implementation-defined operation `call_target_name` that
takes `inputs` and `called_computations` and produces `results`.

Depending on the API version there are two ways to pass extra bits of static
information to the external function:
1. Use `API_VERSION_TYPED_FFI` which allows passing a dictionary attribute.
2. Use a previous API version with a StringAttr to encode backend config.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#custom_call

# Example
```mlir
%results = stablehlo.custom_call @foo(%input0) {
  backend_config = {bar = 42 : i32},
  api_version = 4 : i32,
  called_computations = [@foo]
} : (tensor<f64>) -> tensor<f64>
```
"""
function custom_call(inputs::Vector{Value}; result::Tuple{Vararg{IR.Type}}, call_target_name::String, has_side_effect::Union{Bool, Nothing}=nothing, backend_config::Union{Attribute, Nothing}=nothing, api_version::Union{CustomCallApiVersion.T, Nothing}=nothing, called_computations::Union{Attribute, Nothing}=nothing, operand_layouts::Union{Attribute, Nothing}=nothing, result_layouts::Union{Attribute, Nothing}=nothing, output_operand_aliases::Union{Attribute, Nothing}=nothing, location=Location())
    op_ty_results = IR.Type[result..., ]
    operands = Value[inputs..., ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[namedattribute("call_target_name", Attribute(call_target_name)), ]
    !isnothing(has_side_effect) && push!(attributes, namedattribute("has_side_effect", Attribute(has_side_effect)))
    !isnothing(backend_config) && push!(attributes, namedattribute("backend_config", backend_config))
    !isnothing(api_version) && push!(attributes, namedattribute("api_version", Int(api_version)))
    !isnothing(called_computations) && push!(attributes, namedattribute("called_computations", called_computations))
    !isnothing(operand_layouts) && push!(attributes, namedattribute("operand_layouts", operand_layouts))
    !isnothing(result_layouts) && push!(attributes, namedattribute("result_layouts", result_layouts))
    !isnothing(output_operand_aliases) && push!(attributes, namedattribute("output_operand_aliases", output_operand_aliases))
    
    create_operation(
        "stablehlo.custom_call", location;
        operands, owned_regions, successors, attributes,
        results=op_ty_results,
        result_inference=false
    )
end

"""
`divide`

Performs element-wise division of dividend `lhs` and divisor `rhs` tensors
and produces a `result` tensor.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#divide

# Example
```mlir
%result = stablehlo.divide %lhs, %rhs : tensor<4xf32>
```
"""
function divide(lhs::Value, rhs::Value; result::Union{Nothing, IR.Type}=nothing, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[lhs, rhs, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[]
    !isnothing(result) && push!(op_ty_results, result)
    
    create_operation(
        "stablehlo.divide", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`dot_general`

Computes dot products between slices of `lhs` and slices of `rhs` and
produces a `result` tensor.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#dot_general

# Example
```mlir
%result = stablehlo.dot_general %lhs, %rhs,
  batching_dims = [0] x [0],
  contracting_dims = [2] x [1],
  precision = [DEFAULT, DEFAULT],
  algorithm = <lhs_precision_type = tf32, rhs_precision_type = tf32, accumulation_type = f32, lhs_component_count = 1, rhs_component_count = 1, num_primitive_operations = 1, allow_imprecise_accumulation = false>
  : (tensor<2x2x2xi64>, tensor<2x2x2xi64>) -> tensor<2x2x2xi64>
```
"""
function dot_general(lhs::Value, rhs::Value; result::IR.Type, dot_dimension_numbers::Dot, precision_config::Union{Attribute, Nothing}=nothing, algorithm::Union{DotAlgorithm, Nothing}=nothing, location=Location())
    op_ty_results = IR.Type[result, ]
    operands = Value[lhs, rhs, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[namedattribute("dot_dimension_numbers", Attribute(dot_dimension_numbers)), ]
    !isnothing(precision_config) && push!(attributes, namedattribute("precision_config", precision_config))
    !isnothing(algorithm) && push!(attributes, namedattribute("algorithm", Attribute(algorithm)))
    
    create_operation(
        "stablehlo.dot_general", location;
        operands, owned_regions, successors, attributes,
        results=op_ty_results,
        result_inference=false
    )
end

"""
`dot`

This operation is on its way out of StableHLO, so it is not included in
the StableHLO specification: https://github.com/openxla/stablehlo/issues/3.

Informally, this operation does the same thing as XLA\'s Dot:
https://www.tensorflow.org/xla/operation_semantics#dot

# Example
```mlir
%0 = stablehlo.dot %arg0, %arg1 : (tensor<1x2xi32>, tensor<2x1xi32>) -> tensor<1x1xi32>
```
"""
function dot(lhs::Value, rhs::Value; result::IR.Type, precision_config::Union{Attribute, Nothing}=nothing, location=Location())
    op_ty_results = IR.Type[result, ]
    operands = Value[lhs, rhs, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[]
    !isnothing(precision_config) && push!(attributes, namedattribute("precision_config", precision_config))
    
    create_operation(
        "stablehlo.dot", location;
        operands, owned_regions, successors, attributes,
        results=op_ty_results,
        result_inference=false
    )
end

"""
`dynamic_broadcast_in_dim`

This operation is functionally identical to
[broadcast_in_dim](https://github.com/openxla/stablehlo/blob/main/docs/spec.md#broadcast_in_dim)
op, but the result shape is specified dynamically via `output_dimensions`.

It also accepts optional attributes to express static knowledge about the
expanding behavior of dimensions. If not specified, all dimensions are
assumed to be possibly expanding. The sets of dimensions that are known to
be expanding and the set of dimensions that are known to be non-expanding
must be disjoint and they must be a subset of the operand\'s dimensions.

See: https://github.com/openxla/stablehlo/blob/main/docs/spec.md#dynamic_broadcast_in_dim

# Example
```mlir
%operand = stablehlo.constant dense<[[1, 2, 3]]> : tensor<1x3xi64>
%output_dimensions = stablehlo.constant dense<[2, 3, 2]> : tensor<3xi64>
%result = \"stablehlo.dynamic_broadcast_in_dim\"(%operand, %output_dimensions) {
  broadcast_dimensions = array<i64: 2, 1>,
  known_expanding_dimensions = array<i64: 0>,
  known_nonexpanding_dimensions = array<i64: 1>
} : (tensor<1x3xi64>, tensor<3xi64>) -> tensor<2x3x2xi64>
```
"""
function dynamic_broadcast_in_dim(operand::Value, output_dimensions::Value; result::IR.Type, broadcast_dimensions::Vector{Int64}, known_expanding_dimensions::Union{Vector{Int64}, Nothing}=nothing, known_nonexpanding_dimensions::Union{Vector{Int64}, Nothing}=nothing, location=Location())
    op_ty_results = IR.Type[result, ]
    operands = Value[operand, output_dimensions, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[namedattribute("broadcast_dimensions", Attribute(broadcast_dimensions)), ]
    !isnothing(known_expanding_dimensions) && push!(attributes, namedattribute("known_expanding_dimensions", Attribute(known_expanding_dimensions)))
    !isnothing(known_nonexpanding_dimensions) && push!(attributes, namedattribute("known_nonexpanding_dimensions", Attribute(known_nonexpanding_dimensions)))
    
    create_operation(
        "stablehlo.dynamic_broadcast_in_dim", location;
        operands, owned_regions, successors, attributes,
        results=op_ty_results,
        result_inference=false
    )
end

"""
`dynamic_conv`

This operation is functionally identical to
[convolution](https://github.com/openxla/stablehlo/blob/main/docs/spec.md#convolution)
op, but the padding is specified dynamically via `padding`.

# Example
```mlir
%padding = stablehlo.constant dense<2> : tensor<2x2xi64>
%result = \"stablehlo.dynamic_conv\"(%lhs, %rhs, %padding) {
  window_strides = array<i64: 4, 4>,
  lhs_dilation = array<i64: 2, 2>,
  rhs_dilation = array<i64: 1, 1>,
  window_reversal = array<i1: false, false>,
  dimension_numbers = #stablehlo.conv<[b, 0, 1, f]x[0, 1, i, o]->[b, 0, 1, f]>,
  batch_group_count = 1 : i64,
  feature_group_count = 1 : i64,
  precision_config = [#stablehlo<precision DEFAULT>, #stablehlo<precision DEFAULT>]
} : (tensor<1x4x4x1xi64>, tensor<3x3x1x1xi64>, tensor<2x2xi64>) -> tensor<1x2x2x1xi64>
```
"""
function dynamic_conv(lhs::Value, rhs::Value, padding::Value; result::IR.Type, window_strides::Union{Vector{Int64}, Nothing}=nothing, lhs_dilation::Union{Vector{Int64}, Nothing}=nothing, rhs_dilation::Union{Vector{Int64}, Nothing}=nothing, window_reversal::Union{Attribute, Nothing}=nothing, dimension_numbers::Conv, feature_group_count::Int64, batch_group_count::Int64, precision_config::Union{Attribute, Nothing}=nothing, location=Location())
    op_ty_results = IR.Type[result, ]
    operands = Value[lhs, rhs, padding, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[namedattribute("dimension_numbers", Attribute(dimension_numbers)), namedattribute("feature_group_count", Attribute(feature_group_count)), namedattribute("batch_group_count", Attribute(batch_group_count)), ]
    !isnothing(window_strides) && push!(attributes, namedattribute("window_strides", Attribute(window_strides)))
    !isnothing(lhs_dilation) && push!(attributes, namedattribute("lhs_dilation", Attribute(lhs_dilation)))
    !isnothing(rhs_dilation) && push!(attributes, namedattribute("rhs_dilation", Attribute(rhs_dilation)))
    !isnothing(window_reversal) && push!(attributes, namedattribute("window_reversal", window_reversal))
    !isnothing(precision_config) && push!(attributes, namedattribute("precision_config", precision_config))
    
    create_operation(
        "stablehlo.dynamic_conv", location;
        operands, owned_regions, successors, attributes,
        results=op_ty_results,
        result_inference=false
    )
end

"""
`dynamic_gather`

This operation is functionally identical to
[gather](https://github.com/openxla/stablehlo/blob/main/docs/spec.md#gather)
op, with the `slice_sizes` specified dynamically as an operand.

# Example
```mlir
%slice_sizes = stablehlo.constant dense<[1, 2, 2]> : tensor<3xi64>
%result = \"stablehlo.dynamic_gather\"(%operand, %start_indices, %slice_sizes) {
  dimension_numbers = #stablehlo.gather<
    offset_dims = [2, 3],
    collapsed_slice_dims = [0],
    start_index_map = [0, 2],
    index_vector_dim = 2>,
  indices_are_sorted = false
} : (tensor<3x4x2xi64>, tensor<2x3x2xi64>, tensor<3xi64>) -> tensor<2x3x2x2xi64>
```
"""
function dynamic_gather(operand::Value, start_indices::Value, slice_sizes::Value; result::Union{Nothing, IR.Type}=nothing, dimension_numbers::Gather, indices_are_sorted::Union{Bool, Nothing}=nothing, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[operand, start_indices, slice_sizes, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[namedattribute("dimension_numbers", Attribute(dimension_numbers)), ]
    !isnothing(result) && push!(op_ty_results, result)
    !isnothing(indices_are_sorted) && push!(attributes, namedattribute("indices_are_sorted", Attribute(indices_are_sorted)))
    
    create_operation(
        "stablehlo.dynamic_gather", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`dynamic_iota`

This operation is functionally identical to
[iota](https://github.com/openxla/stablehlo/blob/main/docs/spec.md#iota)
op, but the result shape is specified dynamically via `output_shape`.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#dynamic_iota

# Example
```mlir
%output_shape = stablehlo.constant dense<[4, 5]> : tensor<2xi64>
%0 = stablehlo.dynamic_iota %output_shape, dim = 0 : (tensor<2xi64>) -> tensor<4x5xi64>
```
"""
function dynamic_iota(output_shape::Value; result::IR.Type, iota_dimension::Int64, location=Location())
    op_ty_results = IR.Type[result, ]
    operands = Value[output_shape, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[namedattribute("iota_dimension", Attribute(iota_dimension)), ]
    
    create_operation(
        "stablehlo.dynamic_iota", location;
        operands, owned_regions, successors, attributes,
        results=op_ty_results,
        result_inference=false
    )
end

"""
`dynamic_pad`

This operation is functionally identical to
[pad](https://github.com/openxla/stablehlo/blob/main/docs/spec.md#pad)
https://github.com/openxla/stablehlo/pull/2306#discussion_r1595669709
op, but with `edge_padding_low`, `edge_padding_high` and `interior_padding`
specified dynamically as values.

See: https://github.com/openxla/stablehlo/blob/main/docs/spec.md#dynamic_pad

# Example
```mlir
%edge_padding_low = stablehlo.constant dense<[0, 1]> : tensor<2xi32>
%edge_padding_high = stablehlo.constant dense<[2, 1]> : tensor<2xi32>
%interior_padding = stablehlo.constant dense<[1, 2]> : tensor<2xi32>
%result = stablehlo.dynamic_pad %operand, %padding_value,
            %edge_padding_low, %edge_padding_high, %interior_padding
            : (tensor<2x3xi64>, tensor<i64>, tensor<2xi64>, tensor<2xi64>, tensor<2xi64>) -> tensor<5x9xi64>
```
"""
function dynamic_pad(operand::Value, padding_value::Value, edge_padding_low::Value, edge_padding_high::Value, interior_padding::Value; result::IR.Type, location=Location())
    op_ty_results = IR.Type[result, ]
    operands = Value[operand, padding_value, edge_padding_low, edge_padding_high, interior_padding, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[]
    
    create_operation(
        "stablehlo.dynamic_pad", location;
        operands, owned_regions, successors, attributes,
        results=op_ty_results,
        result_inference=false
    )
end

"""
`dynamic_reshape`

This operation is functionally identical to
[reshape](https://github.com/openxla/stablehlo/blob/main/docs/spec.md#reshape)
op, but the result shape is specified dynamically via `output_shape`.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#dynamic_reshape

# Example
```mlir
%output_shape = stablehlo.constant dense<[3, 2]> : tensor<2xi64>
%result = stablehlo.dynamic_reshape %operand, %output_shape : (tensor<2x3xi64>, tensor<2xi64>) -> tensor<3x2xi64>
```
"""
function dynamic_reshape(operand::Value, output_shape::Value; result::IR.Type, location=Location())
    op_ty_results = IR.Type[result, ]
    operands = Value[operand, output_shape, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[]
    
    create_operation(
        "stablehlo.dynamic_reshape", location;
        operands, owned_regions, successors, attributes,
        results=op_ty_results,
        result_inference=false
    )
end

"""
`dynamic_slice`

Extracts a slice from the `operand` using dynamically-computed starting
indices and produces a `result` tensor.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#dynamic_slice

# Example
```mlir
%result = stablehlo.dynamic_slice %operand, %start_indices0, %start_indices1, sizes = [2, 2]
  : (tensor<4x4xi32>, tensor<i64>, tensor<i64>) -> tensor<2x2xi32>
```
"""
function dynamic_slice(operand::Value, start_indices::Vector{Value}; result::Union{Nothing, IR.Type}=nothing, slice_sizes::Vector{Int64}, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[operand, start_indices..., ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[namedattribute("slice_sizes", Attribute(slice_sizes)), ]
    !isnothing(result) && push!(op_ty_results, result)
    
    create_operation(
        "stablehlo.dynamic_slice", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`dynamic_update_slice`

Produces a `result` tensor which is equal to the `operand` tensor except
that the slice starting at `start_indices` is updated with the values in
`update`.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#dynamic_update_slice

# Example
```mlir
%result = stablehlo.dynamic_update_slice %operand, %update, %start_indices0, %start_indices1
  : (tensor<4x4xi32>, tensor<2x2xi32>, tensor<i64>, tensor<i64>) -> tensor<4x4xi32>
```
"""
function dynamic_update_slice(operand::Value, update::Value, start_indices::Vector{Value}; result::Union{Nothing, IR.Type}=nothing, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[operand, update, start_indices..., ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[]
    !isnothing(result) && push!(op_ty_results, result)
    
    create_operation(
        "stablehlo.dynamic_update_slice", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`einsum`

This operation is on its way out of StableHLO, so it is not included in
the StableHLO specification: https://github.com/openxla/stablehlo/issues/3.

Informally, this operation does the same thing as TF\'s einsum:
https://www.tensorflow.org/api_docs/python/tf/einsum

# Example
```mlir
%result = \"stablehlo.einsum\"(%lhs, %rhs) {
  einsum_config = \"ab,bc->ac\"
} : (tensor<4x16xf32>, tensor<16x4xf32>) -> tensor<4x4xf32>
```
"""
function einsum(lhs::Value, rhs::Value; result::IR.Type, einsum_config::String, location=Location())
    op_ty_results = IR.Type[result, ]
    operands = Value[lhs, rhs, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[namedattribute("einsum_config", Attribute(einsum_config)), ]
    
    create_operation(
        "stablehlo.einsum", location;
        operands, owned_regions, successors, attributes,
        results=op_ty_results,
        result_inference=false
    )
end

"""
`exponential`

Performs element-wise exponential operation on `operand` tensor and produces
a `result` tensor.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#exponential

# Example
```mlir
%result = stablehlo.exponential %operand : tensor<2x2xf64>
```
"""
function exponential(operand::Value; result::Union{Nothing, IR.Type}=nothing, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[operand, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[]
    !isnothing(result) && push!(op_ty_results, result)
    
    create_operation(
        "stablehlo.exponential", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`exponential_minus_one`

Performs element-wise exponential minus one operation on `operand` tensor
and produces a `result` tensor.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#exponential_minus_one

# Example
```mlir
%result = stablehlo.exponential_minus_one %operand : tensor<2xf64>
```
"""
function exponential_minus_one(operand::Value; result::Union{Nothing, IR.Type}=nothing, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[operand, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[]
    !isnothing(result) && push!(op_ty_results, result)
    
    create_operation(
        "stablehlo.exponential_minus_one", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`fft`

Performs the forward and inverse Fourier transforms for real and complex
inputs/outputs.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#fft

# Example
```mlir
%result = stablehlo.fft %operand, type = FFT, length = [4] : (tensor<4xcomplex<f32>>) -> tensor<4xcomplex<f32>>
```
"""
function fft(operand::Value; result::Union{Nothing, IR.Type}=nothing, fft_type::FftType.T, fft_length::Vector{Int64}, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[operand, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[namedattribute("fft_type", parse(Attribute,"#stablehlo.fft_type<$(string(fft_type))>")), namedattribute("fft_length", Attribute(fft_length)), ]
    !isnothing(result) && push!(op_ty_results, result)
    
    create_operation(
        "stablehlo.fft", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`floor`

Performs element-wise floor of `operand` tensor and produces a `result`
tensor.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#floor

# Example
```mlir
%result = stablehlo.floor %operand : tensor<2xf32>
```
"""
function floor(operand::Value; result::Union{Nothing, IR.Type}=nothing, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[operand, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[]
    !isnothing(result) && push!(op_ty_results, result)
    
    create_operation(
        "stablehlo.floor", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`gather`

Gathers slices from `operand` tensor from offsets specified in
`start_indices` and produces a `result` tensor.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#gather

# Example
```mlir
%result = \"stablehlo.gather\"(%operand, %start_indices) {
  dimension_numbers = #stablehlo.gather<
    offset_dims = [3, 4],
    collapsed_slice_dims = [1],
    operand_batching_dims = [0],
    start_indices_batching_dims = [1],
    start_index_map = [2, 1],
    index_vector_dim = 3>,
  slice_sizes = array<i64: 1, 1, 2, 2>,
  indices_are_sorted = false
} : (tensor<2x3x4x2xi64>, tensor<2x2x3x2xi64>) -> tensor<2x2x3x2x2xi64>
```
"""
function gather(operand::Value, start_indices::Value; result::Union{Nothing, IR.Type}=nothing, dimension_numbers::Gather, slice_sizes::Vector{Int64}, indices_are_sorted::Union{Bool, Nothing}=nothing, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[operand, start_indices, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[namedattribute("dimension_numbers", Attribute(dimension_numbers)), namedattribute("slice_sizes", Attribute(slice_sizes)), ]
    !isnothing(result) && push!(op_ty_results, result)
    !isnothing(indices_are_sorted) && push!(attributes, namedattribute("indices_are_sorted", Attribute(indices_are_sorted)))
    
    create_operation(
        "stablehlo.gather", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`get_dimension_size`

Produces the size of the given `dimension` of the `operand`.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#get_dimension_size

# Example
```mlir
%result = stablehlo.get_dimension_size %operand, dim = 1 : (tensor<2x3xi64>) -> tensor<i32>
```
"""
function get_dimension_size(operand::Value; result::Union{Nothing, IR.Type}=nothing, dimension::Int64, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[operand, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[namedattribute("dimension", Attribute(dimension)), ]
    !isnothing(result) && push!(op_ty_results, result)
    
    create_operation(
        "stablehlo.get_dimension_size", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`get_tuple_element`

Extracts element at `index` position of the `operand` tuple and produces a
`result`.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#get_tuple_element

# Example
```mlir
%result = stablehlo.get_tuple_element %operand[0] : (tuple<tensor<2xf64>, tuple<tensor<i64>>>) -> tensor<2xf64>
```
"""
function get_tuple_element(operand::Value; result::Union{Nothing, IR.Type}=nothing, index::Int32, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[operand, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[namedattribute("index", Attribute(index)), ]
    !isnothing(result) && push!(op_ty_results, result)
    
    create_operation(
        "stablehlo.get_tuple_element", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`if_`

Produces the output from executing exactly one branch from `true_branch` or
`false_branch` depending on the value of `pred`.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#if

# Example
%result = \"stablehlo.if\"(%pred) ({
  \"stablehlo.return\"(%result_true_branch) : (tensor<i32>) -> ()
}, {
  \"stablehlo.return\"(%result_false_branch) : (tensor<i32>) -> ()
}) : (tensor<i1>) -> tensor<i32>
"""
function if_(pred::Value; result::Tuple{Vararg{IR.Type}}, true_branch::Region, false_branch::Region, location=Location())
    op_ty_results = IR.Type[result..., ]
    operands = Value[pred, ]
    owned_regions = Region[true_branch, false_branch, ]
    successors = Block[]
    attributes = NamedAttribute[]
    
    create_operation(
        "stablehlo.if", location;
        operands, owned_regions, successors, attributes,
        results=op_ty_results,
        result_inference=false
    )
end

"""
`imag`

Extracts the imaginary part, element-wise, from the `operand` and produces a
`result` tensor.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#imag

# Example
```mlir
%result = stablehlo.imag %operand : (tensor<2xcomplex<f32>>) -> tensor<2xf32>
```
"""
function imag(operand::Value; result::Union{Nothing, IR.Type}=nothing, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[operand, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[]
    !isnothing(result) && push!(op_ty_results, result)
    
    create_operation(
        "stablehlo.imag", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`infeed`

Reads data from the infeed and produces `results`.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#infeed

# Example
```mlir
%results0:2 = \"stablehlo.infeed\"(%token) :
    (!stablehlo.token) -> (tensor<2x2xi64>, !stablehlo.token)
```
"""
function infeed(token::Value; result::Tuple{Vararg{IR.Type}}, infeed_config::Union{String, Nothing}=nothing, layout::Union{Attribute, Nothing}=nothing, location=Location())
    op_ty_results = IR.Type[result..., ]
    operands = Value[token, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[]
    !isnothing(infeed_config) && push!(attributes, namedattribute("infeed_config", Attribute(infeed_config)))
    !isnothing(layout) && push!(attributes, namedattribute("layout", layout))
    
    create_operation(
        "stablehlo.infeed", location;
        operands, owned_regions, successors, attributes,
        results=op_ty_results,
        result_inference=false
    )
end

"""
`iota`

Fills an `output` tensor with values in increasing order starting from zero
along the `iota_dimension` dimension.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#iota

# Example
```mlir
%output = stablehlo.iota dim = 0 : tensor<4x5xi32>
```
"""
function iota(; output::IR.Type, iota_dimension::Int64, location=Location())
    op_ty_results = IR.Type[output, ]
    operands = Value[]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[namedattribute("iota_dimension", Attribute(iota_dimension)), ]
    
    create_operation(
        "stablehlo.iota", location;
        operands, owned_regions, successors, attributes,
        results=op_ty_results,
        result_inference=false
    )
end

"""
`is_finite`

Performs element-wise check whether the value in `x` is finite (i.e. is
neither +Inf, -Inf, nor NaN) and produces a `y` tensor.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#is_finite

# Example
```mlir
%y = stablehlo.is_finite %x : (tensor<7xf64>) -> tensor<7xi1>
```
"""
function is_finite(x::Value; y::Union{Nothing, IR.Type}=nothing, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[x, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[]
    !isnothing(y) && push!(op_ty_results, y)
    
    create_operation(
        "stablehlo.is_finite", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`log_plus_one`

Performs element-wise logarithm plus one operation on `operand` tensor and
produces a `result` tensor.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#log_plus_one

# Example
```mlir
%result = stablehlo.log_plus_one %operand : tensor<5xf64>
```
"""
function log_plus_one(operand::Value; result::Union{Nothing, IR.Type}=nothing, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[operand, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[]
    !isnothing(result) && push!(op_ty_results, result)
    
    create_operation(
        "stablehlo.log_plus_one", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`log`

Performs element-wise logarithm operation on `operand` tensor and produces a
`result` tensor.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#log

# Example
```mlir
%result = stablehlo.log %operand : tensor<2x2xf64>
```
"""
function log(operand::Value; result::Union{Nothing, IR.Type}=nothing, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[operand, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[]
    !isnothing(result) && push!(op_ty_results, result)
    
    create_operation(
        "stablehlo.log", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`logistic`

Performs element-wise logistic operation on `operand` tensor and produces a
`result` tensor.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#logistic

# Example
```mlir
%result = stablehlo.logistic %operand : tensor<2x2xf64>
```
"""
function logistic(operand::Value; result::Union{Nothing, IR.Type}=nothing, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[operand, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[]
    !isnothing(result) && push!(op_ty_results, result)
    
    create_operation(
        "stablehlo.logistic", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`map`

Applies a map function `computation` to `inputs` along the `dimensions` and
produces a `result` tensor.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#map

# Example
```mlir
%result = \"stablehlo.map\"(%input0, %input1) ({
  ^bb0(%arg0: tensor<i64>, %arg1: tensor<i64>):
    %0 = stablehlo.multiply %arg0, %arg1 : tensor<i64>
    stablehlo.return %0 : tensor<i64>
}) {
  dimensions = array<i64: 0, 1>
} : (tensor<2x2xi64>, tensor<2x2xi64>) -> tensor<2x2xi64>
```
"""
function map(inputs::Vector{Value}; result::IR.Type, dimensions::Vector{Int64}, computation::Region, location=Location())
    op_ty_results = IR.Type[result, ]
    operands = Value[inputs..., ]
    owned_regions = Region[computation, ]
    successors = Block[]
    attributes = NamedAttribute[namedattribute("dimensions", Attribute(dimensions)), ]
    
    create_operation(
        "stablehlo.map", location;
        operands, owned_regions, successors, attributes,
        results=op_ty_results,
        result_inference=false
    )
end

"""
`maximum`

Performs element-wise max operation on tensors `lhs` and `rhs` and produces
a `result` tensor.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#maximum

# Example
```mlir
%result = stablehlo.maximum %lhs, %rhs : tensor<4xf32>
```
"""
function maximum(lhs::Value, rhs::Value; result::Union{Nothing, IR.Type}=nothing, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[lhs, rhs, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[]
    !isnothing(result) && push!(op_ty_results, result)
    
    create_operation(
        "stablehlo.maximum", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`minimum`

Performs element-wise min operation on tensors `lhs` and `rhs` and produces a
`result` tensor.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#minimum

# Example
```mlir
%result = stablehlo.minimum %lhs, %rhs : tensor<4xf32>
```
"""
function minimum(lhs::Value, rhs::Value; result::Union{Nothing, IR.Type}=nothing, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[lhs, rhs, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[]
    !isnothing(result) && push!(op_ty_results, result)
    
    create_operation(
        "stablehlo.minimum", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`multiply`

Performs element-wise product of two tensors `lhs` and `rhs` and produces a
`result` tensor.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#multiply

# Example
```mlir
%result = stablehlo.multiply %lhs, %rhs : tensor<2xi32>
```
"""
function multiply(lhs::Value, rhs::Value; result::Union{Nothing, IR.Type}=nothing, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[lhs, rhs, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[]
    !isnothing(result) && push!(op_ty_results, result)
    
    create_operation(
        "stablehlo.multiply", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`negate`

Performs element-wise negation of `operand` tensor and produces a `result`
tensor.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#negate

# Example
```mlir
%result = stablehlo.negate %operand : tensor<2x3xi32>
```
"""
function negate(operand::Value; result::Union{Nothing, IR.Type}=nothing, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[operand, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[]
    !isnothing(result) && push!(op_ty_results, result)
    
    create_operation(
        "stablehlo.negate", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`not`

Performs element-wise NOT of tensor `operand` of type integer and produces
a `result` tensor.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#not

# Example
```mlir
%result = stablehlo.not %operand : tensor<5x3x1xi1>
```
"""
function not(operand::Value; result::Union{Nothing, IR.Type}=nothing, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[operand, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[]
    !isnothing(result) && push!(op_ty_results, result)
    
    create_operation(
        "stablehlo.not", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`optimization_barrier`

Ensures that the operations that produce the `operand` are executed before any
operations that depend on the `result` and prevents compiler transformations
from moving operations across the barrier. Other than that, the operation is
an identity, i.e. `result` = `operand`.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#optimization_barrier

# Example
```mlir
%result0, %result1 = stablehlo.optimization_barrier %operand0, %operand1 : tensor<f32>, tensor<f32>
```
"""
function optimization_barrier(operand::Vector{Value}; result::Union{Nothing, Tuple{Vararg{IR.Type}}}=nothing, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[operand..., ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[]
    !isnothing(result) && push!(op_ty_results, result...)
    
    create_operation(
        "stablehlo.optimization_barrier", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`or`

Performs element-wise OR of two tensors `lhs` and `rhs` and produces a
`result` tensor.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#or

# Example
```mlir
%result = stablehlo.or %lhs, %rhs : tensor<2xi1>
```
"""
function or(lhs::Value, rhs::Value; result::Union{Nothing, IR.Type}=nothing, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[lhs, rhs, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[]
    !isnothing(result) && push!(op_ty_results, result)
    
    create_operation(
        "stablehlo.or", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`outfeed`

Writes `inputs` to the outfeed and produces a `result` token.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#outfeed

# Example
```mlir
%result = \"stablehlo.outfeed\"(%input0, %token) :
    (tensor<2x2x2xi64>, !stablehlo.token) -> !stablehlo.token
```
"""
function outfeed(inputs::Vector{Value}, token::Value; result::Union{Nothing, IR.Type}=nothing, outfeed_config::Union{String, Nothing}=nothing, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[inputs..., token, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[]
    !isnothing(result) && push!(op_ty_results, result)
    !isnothing(outfeed_config) && push!(attributes, namedattribute("outfeed_config", Attribute(outfeed_config)))
    
    create_operation(
        "stablehlo.outfeed", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`pad`

Expands `operand` by padding around the tensor as well as between the
elements of the tensor with the given `padding_value`.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#pad

# Example
```mlir
%0 = stablehlo.pad %arg0, %arg1, low = [0, 1], high = [2, 1], interior = [1, 2]
  : (tensor<2x3xi32>, tensor<i32>) -> tensor<5x9xi32>
```
"""
function pad(operand::Value, padding_value::Value; result::Union{Nothing, IR.Type}=nothing, edge_padding_low::Vector{Int64}, edge_padding_high::Vector{Int64}, interior_padding::Vector{Int64}, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[operand, padding_value, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[namedattribute("edge_padding_low", Attribute(edge_padding_low)), namedattribute("edge_padding_high", Attribute(edge_padding_high)), namedattribute("interior_padding", Attribute(interior_padding)), ]
    !isnothing(result) && push!(op_ty_results, result)
    
    create_operation(
        "stablehlo.pad", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`partition_id`

Produces `partition_id` of the current process.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#partition_id

# Example
```mlir
%result = stablehlo.partition_id : tensor<ui32>
```
"""
function partition_id(; result::Union{Nothing, IR.Type}=nothing, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[]
    !isnothing(result) && push!(op_ty_results, result)
    
    create_operation(
        "stablehlo.partition_id", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`popcnt`

Performs element-wise count of the number of bits set in the `operand`
tensor and produces a `result` tensor.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#popcnt

# Example
```mlir
%result = stablehlo.popcnt %operand : tensor<4xi64>
```
"""
function popcnt(operand::Value; result::Union{Nothing, IR.Type}=nothing, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[operand, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[]
    !isnothing(result) && push!(op_ty_results, result)
    
    create_operation(
        "stablehlo.popcnt", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`power`

Performs element-wise exponentiation of `lhs` tensor by `rhs` tensor and
produces a `result` tensor.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#power

# Example
```mlir
%result = stablehlo.power %lhs, %rhs : tensor<6xf64>
```
"""
function power(lhs::Value, rhs::Value; result::Union{Nothing, IR.Type}=nothing, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[lhs, rhs, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[]
    !isnothing(result) && push!(op_ty_results, result)
    
    create_operation(
        "stablehlo.power", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`real_dynamic_slice`

This operation is a work in progress, so it is not yet included in
the StableHLO specification: https://github.com/openxla/stablehlo/issues/8.

Informally, this operation does the same thing as SliceOp except
that `start_indices`, `limit_indices` and `strides` are specified dynamically:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#slice

# Example
```mlir
%result = stablehlo.real_dynamic_slice %operand,
            %start_indices, %limit_indices, %strides
       : (tensor<256x?xf32>, tensor<2xindex>, tensor<2xindex>, tensor<2xindex>) -> tensor<256x?xf32>
```
"""
function real_dynamic_slice(operand::Value, start_indices::Value, limit_indices::Value, strides::Value; result::IR.Type, location=Location())
    op_ty_results = IR.Type[result, ]
    operands = Value[operand, start_indices, limit_indices, strides, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[]
    
    create_operation(
        "stablehlo.real_dynamic_slice", location;
        operands, owned_regions, successors, attributes,
        results=op_ty_results,
        result_inference=false
    )
end

"""
`real`

Extracts the real part, element-wise, from the `operand` and produces a
`result` tensor.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#real

# Example
```mlir
%result = stablehlo.real %operand : (tensor<2xcomplex<f32>>) -> tensor<2xf32>
```
"""
function real(operand::Value; result::Union{Nothing, IR.Type}=nothing, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[operand, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[]
    !isnothing(result) && push!(op_ty_results, result)
    
    create_operation(
        "stablehlo.real", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`recv`

Receives data from a channel with `channel_id` and produces `results`.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#recv

# Example
```mlir
%results:2 = \"stablehlo.recv\"(%token) {
  channel_handle = #stablehlo.channel_handle<handle = 1, type = 3>,
  is_host_transfer = true
} : (!stablehlo.token) -> (tensor<2x2xi64>, !stablehlo.token)
```
"""
function recv(token::Value; result::Tuple{Vararg{IR.Type}}, channel_handle::ChannelHandle, is_host_transfer::Union{Bool, Nothing}=nothing, location=Location())
    op_ty_results = IR.Type[result..., ]
    operands = Value[token, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[namedattribute("channel_handle", Attribute(channel_handle)), ]
    !isnothing(is_host_transfer) && push!(attributes, namedattribute("is_host_transfer", Attribute(is_host_transfer)))
    
    create_operation(
        "stablehlo.recv", location;
        operands, owned_regions, successors, attributes,
        results=op_ty_results,
        result_inference=false
    )
end

"""
`reduce`

Applies a reduction function `body` to `inputs` and `init_values` along the
`dimensions` and produces a `result` tensor.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#reduce

# Example
```mlir
%result = \"stablehlo.reduce\"(%input, %init_value) ({
  ^bb0(%arg0: tensor<i64>, %arg1: tensor<i64>):
    %0 = stablehlo.add %arg0, %arg1 : tensor<i64>
    stablehlo.return %0 : tensor<i64>
}) {
  dimensions = array<i64: 1>
} : (tensor<1x6xi64>, tensor<i64>) -> tensor<1xi64>
```
"""
function reduce(inputs::Vector{Value}, init_values::Vector{Value}; result::Tuple{Vararg{IR.Type}}, dimensions::Vector{Int64}, body::Region, location=Location())
    op_ty_results = IR.Type[result..., ]
    operands = Value[inputs..., init_values..., ]
    owned_regions = Region[body, ]
    successors = Block[]
    attributes = NamedAttribute[namedattribute("dimensions", Attribute(dimensions)), ]
    
    create_operation(
        "stablehlo.reduce", location;
        operands, owned_regions, successors, attributes,
        results=op_ty_results,
        result_inference=false
    )
end

"""
`reduce_precision`

Performs element-wise conversion of `operand` to another floating-point type
that uses `exponent_bits` and `mantissa_bits` and back to the original
floating-point type and produces an `output` tensor.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#reduce_precision

# Example
```mlir
%output = stablehlo.reduce_precision %operand, format = e5m10 : tensor<6xf64>
```
"""
function reduce_precision(operand::Value; output::Union{Nothing, IR.Type}=nothing, exponent_bits::Int32, mantissa_bits::Int32, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[operand, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[namedattribute("exponent_bits", Attribute(exponent_bits)), namedattribute("mantissa_bits", Attribute(mantissa_bits)), ]
    !isnothing(output) && push!(op_ty_results, output)
    
    create_operation(
        "stablehlo.reduce_precision", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`reduce_scatter`

Within each process group in the process grid, performs reduction, using
`computations`, over the values of the `operand` tensor from each process,
splits the reduction result along `scatter_dimension` into parts, and
scatters the split parts between the processes to produce the `result`.

    See:
    https://github.com/openxla/stablehlo/blob/main/docs/spec.md#reduce_scatter

    Example:
    ```mlir
    %result = \"stablehlo.reduce_scatter\"(%operand) ({
 ^bb0(%arg0: tensor<i64>, %arg1: tensor<i64>):
 %0 = stablehlo.add %arg0, %arg1 : tensor<i64>
 stablehlo.return %0 : tensor<i64>
    }) {
 scatter_dimension = 1 : i64,
 replica_groups = dense<[[0, 1]]> : tensor<1x2xi64>,
 channel_handle = #stablehlo.channel_handle<handle = 0, type = 0>
    } : (tensor<2x4xi64>) -> tensor<2x2xi64>
    ```
"""
function reduce_scatter(operand::Value; result::IR.Type, scatter_dimension::Int64, replica_groups::Attribute, channel_handle::Union{ChannelHandle, Nothing}=nothing, use_global_device_ids::Union{Attribute, Nothing}=nothing, computation::Region, location=Location())
    op_ty_results = IR.Type[result, ]
    operands = Value[operand, ]
    owned_regions = Region[computation, ]
    successors = Block[]
    attributes = NamedAttribute[namedattribute("scatter_dimension", Attribute(scatter_dimension)), namedattribute("replica_groups", replica_groups), ]
    !isnothing(channel_handle) && push!(attributes, namedattribute("channel_handle", Attribute(channel_handle)))
    !isnothing(use_global_device_ids) && push!(attributes, namedattribute("use_global_device_ids", use_global_device_ids))
    
    create_operation(
        "stablehlo.reduce_scatter", location;
        operands, owned_regions, successors, attributes,
        results=op_ty_results,
        result_inference=false
    )
end

"""
`reduce_window`

Applies a reduction function `body` to windows of `inputs` and `init_values`
and produces `results`.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#reduce_window

# Example
```mlir
%result = \"stablehlo.reduce_window\"(%input, %init_value) ({
  ^bb0(%arg0: tensor<i64>, %arg1: tensor<i64>):
    %0 = stablehlo.add %arg0, %arg1 : tensor<i64>
    stablehlo.return %0 : tensor<i64>
}) {
  window_dimensions = array<i64: 2, 1>,
  window_strides = array<i64: 4, 1>,
  base_dilations = array<i64: 2, 1>,
  window_dilations = array<i64: 3, 1>,
  padding = dense<[[2, 1], [0, 0]]> : tensor<2x2xi64>
} : (tensor<3x2xi64>, tensor<i64>) -> tensor<2x2xi64>
```
"""
function reduce_window(inputs::Vector{Value}, init_values::Vector{Value}; result::Tuple{Vararg{IR.Type}}, window_dimensions::Vector{Int64}, window_strides::Union{Vector{Int64}, Nothing}=nothing, base_dilations::Union{Vector{Int64}, Nothing}=nothing, window_dilations::Union{Vector{Int64}, Nothing}=nothing, padding::Union{Attribute, Nothing}=nothing, body::Region, location=Location())
    op_ty_results = IR.Type[result..., ]
    operands = Value[inputs..., init_values..., ]
    owned_regions = Region[body, ]
    successors = Block[]
    attributes = NamedAttribute[namedattribute("window_dimensions", Attribute(window_dimensions)), ]
    !isnothing(window_strides) && push!(attributes, namedattribute("window_strides", Attribute(window_strides)))
    !isnothing(base_dilations) && push!(attributes, namedattribute("base_dilations", Attribute(base_dilations)))
    !isnothing(window_dilations) && push!(attributes, namedattribute("window_dilations", Attribute(window_dilations)))
    !isnothing(padding) && push!(attributes, namedattribute("padding", padding))
    
    create_operation(
        "stablehlo.reduce_window", location;
        operands, owned_regions, successors, attributes,
        results=op_ty_results,
        result_inference=false
    )
end

"""
`remainder`

Performs element-wise remainder of dividend `lhs` and divisor `rhs` tensors
and produces a `result` tensor.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#remainder

# Example
```mlir
%result = stablehlo.remainder %lhs, %rhs : tensor<4xi64>
```
"""
function remainder(lhs::Value, rhs::Value; result::Union{Nothing, IR.Type}=nothing, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[lhs, rhs, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[]
    !isnothing(result) && push!(op_ty_results, result)
    
    create_operation(
        "stablehlo.remainder", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`replica_id`

Produces `replica_id` of the current process.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#replica_id

# Example
```mlir
%result = stablehlo.replica_id : tensor<ui32>
```
"""
function replica_id(; result::Union{Nothing, IR.Type}=nothing, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[]
    !isnothing(result) && push!(op_ty_results, result)
    
    create_operation(
        "stablehlo.replica_id", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`reshape`

Performs reshape of `operand` tensor to a `result` tensor.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#reshape

# Example
```mlir
%result = stablehlo.reshape %operand : (tensor<2xf32>) -> tensor<1x2xf32>
```
"""
function reshape(operand::Value; result::IR.Type, location=Location())
    op_ty_results = IR.Type[result, ]
    operands = Value[operand, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[]
    
    create_operation(
        "stablehlo.reshape", location;
        operands, owned_regions, successors, attributes,
        results=op_ty_results,
        result_inference=false
    )
end


function return_(results::Vector{Value}; location=Location())
    op_ty_results = IR.Type[]
    operands = Value[results..., ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[]
    
    create_operation(
        "stablehlo.return", location;
        operands, owned_regions, successors, attributes,
        results=op_ty_results,
        result_inference=false
    )
end

"""
`reverse`

Reverses the order of elements in the `operand` along the specified
`dimensions` and produces a `result` tensor.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#reverse

# Example
```mlir
%result = stablehlo.reverse %operand, dims = [1] : tensor<3x2xi32>
```
"""
function reverse(operand::Value; result::Union{Nothing, IR.Type}=nothing, dimensions::Vector{Int64}, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[operand, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[namedattribute("dimensions", Attribute(dimensions)), ]
    !isnothing(result) && push!(op_ty_results, result)
    
    create_operation(
        "stablehlo.reverse", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`rng_bit_generator`

Returns an `output` filled with uniform random data and an updated output
state `output_state` given an initial state `initial_state` using the
pseudorandom number generator algorithm `rng_algorithm`.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#rng_bit_generator

# Example
```mlir
%output_state, %output = stablehlo.rng_bit_generator %initial_state, algorithm = THREE_FRY : (tensor<2xui64>) -> (tensor<2xui64>, tensor<2x2xui64>)
```
"""
function rng_bit_generator(initial_state::Value; output_state::IR.Type, output::IR.Type, rng_algorithm::RngAlgorithm.T, location=Location())
    op_ty_results = IR.Type[output_state, output, ]
    operands = Value[initial_state, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[namedattribute("rng_algorithm", parse(Attribute,"#stablehlo.rng_algorithm<$(string(rng_algorithm))>")), ]
    
    create_operation(
        "stablehlo.rng_bit_generator", location;
        operands, owned_regions, successors, attributes,
        results=op_ty_results,
        result_inference=false
    )
end

"""
`rng`

Generates random numbers using the `rng_distribution` algorithm and produces
a `result` tensor of a given shape `shape`.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#rng

# Example
```mlir
%result = stablehlo.rng %a, %b, %shape, distribution = NORMAL : (tensor<i32>, tensor<i32>, tensor<2xi64>) -> tensor<3x3xi32>
```
"""
function rng(a::Value, b::Value, shape::Value; result::Union{Nothing, IR.Type}=nothing, rng_distribution::RngDistribution.T, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[a, b, shape, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[namedattribute("rng_distribution", parse(Attribute,"#stablehlo.rng_distribution<$(string(rng_distribution))>")), ]
    !isnothing(result) && push!(op_ty_results, result)
    
    create_operation(
        "stablehlo.rng", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`round_nearest_even`

Performs element-wise rounding towards the nearest integer, breaking ties
towards the even integer, on the `operand` tensor and produces a `result`
tensor.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#round_nearest_even

# Example
```mlir
%result = stablehlo.round_nearest_even %operand : tensor<5xf64>
```
"""
function round_nearest_even(operand::Value; result::Union{Nothing, IR.Type}=nothing, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[operand, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[]
    !isnothing(result) && push!(op_ty_results, result)
    
    create_operation(
        "stablehlo.round_nearest_even", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`round_nearest_afz`

Performs element-wise rounding towards the nearest integer, breaking ties
away from zero, on the `operand` tensor and produces a `result` tensor.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#round_nearest_afz

# Example
```mlir
%result = stablehlo.round_nearest_afz %operand : tensor<5xf64>
```
"""
function round_nearest_afz(operand::Value; result::Union{Nothing, IR.Type}=nothing, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[operand, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[]
    !isnothing(result) && push!(op_ty_results, result)
    
    create_operation(
        "stablehlo.round_nearest_afz", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`rsqrt`

Performs element-wise reciprocal square root operation on `operand` tensor
and produces a `result` tensor, implementing the `rSqrt` operation from the
IEEE-754 specification.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#rsqrt

# Example
```mlir
%result = stablehlo.rsqrt %operand : tensor<2x2xf32>
```
"""
function rsqrt(operand::Value; result::Union{Nothing, IR.Type}=nothing, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[operand, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[]
    !isnothing(result) && push!(op_ty_results, result)
    
    create_operation(
        "stablehlo.rsqrt", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`scatter`

Produces `results` tensors which are equal to `inputs` tensors except that
several slices specified by `scatter_indices` are updated with the values
`updates` using `update_computation`.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#scatter

   Example:
   ```mlir
   %result = \"stablehlo.scatter\"(%input, %scatter_indices, %update) ({
 ^bb0(%arg0: tensor<i64>, %arg1: tensor<i64>):
   %0 = stablehlo.add %arg0, %arg1 : tensor<i64>
   stablehlo.return %0 : tensor<i64>
   }) {
 scatter_dimension_numbers = #stablehlo.scatter<
   update_window_dims = [3, 4],
   inserted_window_dims = [1],
   input_batching_dims = [0],
   scatter_indices_batching_dims = [1],
   scatter_dims_to_operand_dims = [2, 1],
   index_vector_dim = 3>,
 indices_are_sorted = false,
 unique_indices = false
   } : (tensor<2x3x4x2xi64>, tensor<2x2x3x2xi64>, tensor<2x2x3x2x2xi64>) -> tensor<2x3x4x2xi64>
   ```
"""
function scatter(inputs::Vector{Value}, scatter_indices::Value, updates::Vector{Value}; result::Tuple{Vararg{IR.Type}}, scatter_dimension_numbers::Scatter, indices_are_sorted::Union{Bool, Nothing}=nothing, unique_indices::Union{Bool, Nothing}=nothing, update_computation::Region, location=Location())
    op_ty_results = IR.Type[result..., ]
    operands = Value[inputs..., scatter_indices, updates..., ]
    owned_regions = Region[update_computation, ]
    successors = Block[]
    attributes = NamedAttribute[namedattribute("scatter_dimension_numbers", Attribute(scatter_dimension_numbers)), ]
    !isnothing(indices_are_sorted) && push!(attributes, namedattribute("indices_are_sorted", Attribute(indices_are_sorted)))
    !isnothing(unique_indices) && push!(attributes, namedattribute("unique_indices", Attribute(unique_indices)))
    
    create_operation(
        "stablehlo.scatter", location;
        operands, owned_regions, successors, attributes,
        results=op_ty_results,
        result_inference=false
    )
end

"""
`select_and_scatter`

Scatters the values from the `source` tensor using `scatter` based on the
outcome of `reduce_window` of the `input` tensor using `select` and produces
a `result` tensor.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#select_and_scatter

# Example
```mlir
%result = \"stablehlo.select_and_scatter\"(%operand, %source, %init_value) ({
  ^bb0(%arg0: tensor<i64>, %arg1: tensor<i64>):
    %0 = stablehlo.compare GE, %arg0, %arg1 : (tensor<i64>, tensor<i64>) -> tensor<i1>
    stablehlo.return %0 : tensor<i1>
}, {
  ^bb0(%arg0: tensor<i64>, %arg1: tensor<i64>):
    %0 = stablehlo.add %arg0, %arg1 : tensor<i64>
    stablehlo.return %0 : tensor<i64>
}) {
  window_dimensions = dense<[3, 1]> : tensor<2xi64>,
  window_strides = dense<[2, 1]> : tensor<2xi64>,
  padding = dense<[[0, 1], [0, 0]]> : tensor<2x2xi64>
} : (tensor<4x2xi64>, tensor<2x2xi64>, tensor<i64>) -> tensor<4x2xi64>
```
"""
function select_and_scatter(operand::Value, source::Value, init_value::Value; result::IR.Type, window_dimensions::Union{Vector{Int64}, Nothing}=nothing, window_strides::Union{Vector{Int64}, Nothing}=nothing, padding::Union{Attribute, Nothing}=nothing, select::Region, scatter::Region, location=Location())
    op_ty_results = IR.Type[result, ]
    operands = Value[operand, source, init_value, ]
    owned_regions = Region[select, scatter, ]
    successors = Block[]
    attributes = NamedAttribute[]
    !isnothing(window_dimensions) && push!(attributes, namedattribute("window_dimensions", Attribute(window_dimensions)))
    !isnothing(window_strides) && push!(attributes, namedattribute("window_strides", Attribute(window_strides)))
    !isnothing(padding) && push!(attributes, namedattribute("padding", padding))
    
    create_operation(
        "stablehlo.select_and_scatter", location;
        operands, owned_regions, successors, attributes,
        results=op_ty_results,
        result_inference=false
    )
end

"""
`select`

Produces a `result` tensor where each element is selected from `on_true` or
`on_false` tensor based on the value of the corresponding element of `pred`.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#select

# Example
```mlir
%result = stablehlo.select %pred, %on_true, %on_false : tensor<2x2xi1>, tensor<2x2xi32>
```
"""
function select(pred::Value, on_true::Value, on_false::Value; result::Union{Nothing, IR.Type}=nothing, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[pred, on_true, on_false, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[]
    !isnothing(result) && push!(op_ty_results, result)
    
    create_operation(
        "stablehlo.select", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`send`

Sends `inputs` to a channel `channel_id` and produces a `result` token.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#send

# Example
```mlir
%result = \"stablehlo.send\"(%operand, %token) {
  channel_handle = #stablehlo.channel_handle<handle = 1, type = 2>,
  is_host_transfer = true
} : (tensor<2x2xi64>, !stablehlo.token) -> !stablehlo.token
```
"""
function send(inputs::Vector{Value}, token::Value; result::Union{Nothing, IR.Type}=nothing, channel_handle::ChannelHandle, is_host_transfer::Union{Bool, Nothing}=nothing, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[inputs..., token, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[namedattribute("channel_handle", Attribute(channel_handle)), ]
    !isnothing(result) && push!(op_ty_results, result)
    !isnothing(is_host_transfer) && push!(attributes, namedattribute("is_host_transfer", Attribute(is_host_transfer)))
    
    create_operation(
        "stablehlo.send", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`set_dimension_size`

This operation is a work in progress, so it is not yet included in
the StableHLO specification: https://github.com/openxla/stablehlo/issues/8.

Informally, this operation does the same thing as XLA\'s SetDimensionSize:
https://www.tensorflow.org/xla/operation_semantics#setdimensionsize

# Example
```mlir
%0 = stablehlo.set_dimension_size %arg0, %arg1, dim = 1 : (tensor<4x2xf32>, tensor<i32>) -> tensor<4x2xf32>
```
"""
function set_dimension_size(operand::Value, size::Value; result::Union{Nothing, IR.Type}=nothing, dimension::Int64, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[operand, size, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[namedattribute("dimension", Attribute(dimension)), ]
    !isnothing(result) && push!(op_ty_results, result)
    
    create_operation(
        "stablehlo.set_dimension_size", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`shift_left`

Performs element-wise left-shift operation on the `lhs` tensor by `rhs`
number of bits and produces a `result` tensor.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#shift_left

# Example
```mlir
%result = stablehlo.shift_left %lhs, %rhs : tensor<3xi64>
```
"""
function shift_left(lhs::Value, rhs::Value; result::Union{Nothing, IR.Type}=nothing, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[lhs, rhs, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[]
    !isnothing(result) && push!(op_ty_results, result)
    
    create_operation(
        "stablehlo.shift_left", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`shift_right_arithmetic`

Performs element-wise arithmetic right-shift operation on the `lhs` tensor
by `rhs` number of bits and produces a `result` tensor.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#shift_right_arithmetic

# Example
```mlir
%result = stablehlo.shift_right_arithmetic %lhs, %rhs : tensor<3xi64>
```
"""
function shift_right_arithmetic(lhs::Value, rhs::Value; result::Union{Nothing, IR.Type}=nothing, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[lhs, rhs, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[]
    !isnothing(result) && push!(op_ty_results, result)
    
    create_operation(
        "stablehlo.shift_right_arithmetic", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`shift_right_logical`

Performs element-wise logical right-shift operation on the `lhs` tensor by
`rhs` number of bits and produces a `result` tensor.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#shift_right_logical

# Example
```mlir
%result = stablehlo.shift_right_logical %lhs, %rhs : tensor<3xi64>
```
"""
function shift_right_logical(lhs::Value, rhs::Value; result::Union{Nothing, IR.Type}=nothing, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[lhs, rhs, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[]
    !isnothing(result) && push!(op_ty_results, result)
    
    create_operation(
        "stablehlo.shift_right_logical", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`sign`

Returns the sign of the `operand` element-wise and produces a `result`
tensor.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#sign

# Example
```mlir
%result = stablehlo.sign %operand : tensor<5xf64>
```
"""
function sign(operand::Value; result::Union{Nothing, IR.Type}=nothing, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[operand, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[]
    !isnothing(result) && push!(op_ty_results, result)
    
    create_operation(
        "stablehlo.sign", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`sine`

Performs element-wise sine operation on `operand` tensor and produces a
`result` tensor.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#sine

# Example
```mlir
%result = stablehlo.sine %operand : tensor<2xf32>
```
"""
function sine(operand::Value; result::Union{Nothing, IR.Type}=nothing, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[operand, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[]
    !isnothing(result) && push!(op_ty_results, result)
    
    create_operation(
        "stablehlo.sine", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`slice`

Extracts a slice from the `operand` using statically-computed starting
indices and produces a `result` tensor.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#slice

# Example
```mlir
%result = stablehlo.slice %operand [1:3, 4:8:2]
   : (tensor<3x8xi64>) -> tensor<2x2xi64>

// Same in generic form: the `1:3` above is mapped to the first entry in
// `start_indices` and `limit_indices`, while `strides` is implicitly 1.
// The `4:8:2` above is parsed into the second entry of `start_indices`,
// `limit_indices` and `strides` respectively.
%result = \"stablehlo.slice\" (%operand) {
  start_indices = array<i64: 1, 4>,
  limit_indices = array<i64: 3, 8>,
  strides = array<i64: 1, 2>
} : (tensor<3x8xi64>) -> tensor<2x2xi64>
```
"""
function slice(operand::Value; result::Union{Nothing, IR.Type}=nothing, start_indices::Vector{Int64}, limit_indices::Vector{Int64}, strides::Vector{Int64}, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[operand, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[namedattribute("start_indices", Attribute(start_indices)), namedattribute("limit_indices", Attribute(limit_indices)), namedattribute("strides", Attribute(strides)), ]
    !isnothing(result) && push!(op_ty_results, result)
    
    create_operation(
        "stablehlo.slice", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`sort`

Sorts a variadic number of tensors in `inputs` together, according to a
custom `comparator`, along the given `dimension` and produces a variadic
number of tensors as `results`.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#sort

# Example
```mlir
%result0, %result1 = \"stablehlo.sort\"(%input0, %input1) ({
  ^bb0(%arg0: tensor<i64>, %arg1: tensor<i64>, %arg2: tensor<i64>, %arg3: tensor<i64>):
    %predicate = stablehlo.compare GT, %arg0, %arg1 : (tensor<i64>, tensor<i64>) -> tensor<i1>
    stablehlo.return %predicate : tensor<i1>
}) {
  dimension = 0 : i64,
  is_stable = true
} : (tensor<2x3xi64>, tensor<2x3xi64>) -> (tensor<2x3xi64>, tensor<2x3xi64>)
"""
function sort(inputs::Vector{Value}; result::Tuple{Vararg{IR.Type}}, dimension::Union{Int64, Nothing}=nothing, is_stable::Union{Bool, Nothing}=nothing, comparator::Region, location=Location())
    op_ty_results = IR.Type[result..., ]
    operands = Value[inputs..., ]
    owned_regions = Region[comparator, ]
    successors = Block[]
    attributes = NamedAttribute[]
    !isnothing(dimension) && push!(attributes, namedattribute("dimension", Attribute(dimension)))
    !isnothing(is_stable) && push!(attributes, namedattribute("is_stable", Attribute(is_stable)))
    
    create_operation(
        "stablehlo.sort", location;
        operands, owned_regions, successors, attributes,
        results=op_ty_results,
        result_inference=false
    )
end

"""
`sqrt`

Performs element-wise square root operation on `operand` tensor and produces
a `result` tensor.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#sqrt

# Example
```mlir
%result = stablehlo.sqrt %operand : tensor<2x2xf32>
```
"""
function sqrt(operand::Value; result::Union{Nothing, IR.Type}=nothing, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[operand, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[]
    !isnothing(result) && push!(op_ty_results, result)
    
    create_operation(
        "stablehlo.sqrt", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`subtract`

Performs element-wise subtraction of two tensors `lhs` and `rhs` and
produces a `result` tensor.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#subtract

# Example
```mlir
%result = stablehlo.subtract %lhs, %rhs : tensor<2xi32>
```
"""
function subtract(lhs::Value, rhs::Value; result::Union{Nothing, IR.Type}=nothing, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[lhs, rhs, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[]
    !isnothing(result) && push!(op_ty_results, result)
    
    create_operation(
        "stablehlo.subtract", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`tan`

Performs element-wise tangent operation on `operand` tensor and
produces a `result` tensor.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#tan

# Example
```mlir
%result = stablehlo.tan %operand : tensor<2x2xf64>
```
"""
function tan(operand::Value; result::Union{Nothing, IR.Type}=nothing, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[operand, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[]
    !isnothing(result) && push!(op_ty_results, result)
    
    create_operation(
        "stablehlo.tan", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`tanh`

Performs element-wise hyperbolic tangent operation on `operand` tensor and
produces a `result` tensor.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#tanh

# Example
```mlir
%result = stablehlo.tanh %operand : tensor<2xf32>
```
"""
function tanh(operand::Value; result::Union{Nothing, IR.Type}=nothing, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[operand, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[]
    !isnothing(result) && push!(op_ty_results, result)
    
    create_operation(
        "stablehlo.tanh", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`torch_index_select`

This operation is on its way out of StableHLO, so it is not included in
the StableHLO specification: https://github.com/openxla/stablehlo/issues/3.

Informally, this operation does the same thing as PyTorch\'s index_select,
augmented with support for batch dimensions:
https://pytorch.org/docs/stable/generated/torch.index_select.html.

The `batch_dims` attribute specifies the number of major batch dimensions
(0 or more) that act like a multidimensional loop over both the operand and
the index.

# Example
```mlir
%result = \"stablehlo.torch_index_select\"(%operand, %index) {
  dim = 2 : i64,
  batch_dims = 1 : i64
} : (tensor<8x128x3072x64xf32>, tensor<8x16x1024xi32>) -> tensor<8x128x16x1024x64xf32>
```
"""
function torch_index_select(operand::Value, index::Value; result::IR.Type, dim::Int64, batch_dims::Int64, location=Location())
    op_ty_results = IR.Type[result, ]
    operands = Value[operand, index, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[namedattribute("dim", Attribute(dim)), namedattribute("batch_dims", Attribute(batch_dims)), ]
    
    create_operation(
        "stablehlo.torch_index_select", location;
        operands, owned_regions, successors, attributes,
        results=op_ty_results,
        result_inference=false
    )
end

"""
`transpose`

Permutes the dimensions of `operand` tensor using `permutation` and produces
a `result` tensor.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#transpose

# Example
```mlir
%0 = stablehlo.transpose %arg0, dims = [2, 1, 0] : (tensor<1x2x3xi32>) -> tensor<3x2x1xi32>
```
"""
function transpose(operand::Value; result::Union{Nothing, IR.Type}=nothing, permutation::Vector{Int64}, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[operand, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[namedattribute("permutation", Attribute(permutation)), ]
    !isnothing(result) && push!(op_ty_results, result)
    
    create_operation(
        "stablehlo.transpose", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`triangular_solve`

Solves batches of systems of linear equations with lower or upper triangular
coefficient matrices.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#triangular_solve

# Example
```mlir
%result = \"stablehlo.triangular_solve\"(%a, %b) {
  left_side = true,
  lower = true,
  unit_diagonal = false,
  transpose_a = #stablehlo<transpose NO_TRANSPOSE>
} : (tensor<3x3xf32>, tensor<3x3xf32>) -> tensor<3x3xf32>
```
"""
function triangular_solve(a::Value, b::Value; result::Union{Nothing, IR.Type}=nothing, left_side::Bool, lower::Bool, unit_diagonal::Bool, transpose_a::Transpose.T, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[a, b, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[namedattribute("left_side", Attribute(left_side)), namedattribute("lower", Attribute(lower)), namedattribute("unit_diagonal", Attribute(unit_diagonal)), namedattribute("transpose_a", parse(Attribute,"#stablehlo.transpose_a<$(string(transpose_a))>")), ]
    !isnothing(result) && push!(op_ty_results, result)
    
    create_operation(
        "stablehlo.triangular_solve", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`tuple`

Produces a `result` tuple from values `val`.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#tuple

# Example
```mlir
%result = stablehlo.tuple %val0, %val1 : tuple<tensor<2xf64>, tuple<tensor<i64>>>
```
"""
function tuple(val::Vector{Value}; result::Union{Nothing, IR.Type}=nothing, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[val..., ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[]
    !isnothing(result) && push!(op_ty_results, result)
    
    create_operation(
        "stablehlo.tuple", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`unary_einsum`

This operation is on its way out of StableHLO, so it is not included in
the StableHLO specification: https://github.com/openxla/stablehlo/issues/3.

Informally, this operation does the same thing as TF\'s einsum:
https://www.tensorflow.org/api_docs/python/tf/einsum

# Example
```mlir
%result = \"stablehlo.unary_einsum\"(%operand) {
  einsum_config = \"ab->a\"
} : (tensor<4x16xf32>) -> tensor<4xf32>
```
"""
function unary_einsum(operand::Value; result::IR.Type, einsum_config::String, location=Location())
    op_ty_results = IR.Type[result, ]
    operands = Value[operand, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[namedattribute("einsum_config", Attribute(einsum_config)), ]
    
    create_operation(
        "stablehlo.unary_einsum", location;
        operands, owned_regions, successors, attributes,
        results=op_ty_results,
        result_inference=false
    )
end

"""
`uniform_dequantize`

Performs element-wise conversion of quantized tensor `operand` to a
floating-point tensor `result` according to the quantization parameters
defined by the `operand` type.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#uniform_dequantize

# Example
```mlir
%result = stablehlo.uniform_dequantize %operand : (tensor<2x!quant.uniform<i8:f32:0, {0.1:-30,0.5:-20}>>) -> tensor<2xf32>
```
"""
function uniform_dequantize(operand::Value; result::Union{Nothing, IR.Type}=nothing, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[operand, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[]
    !isnothing(result) && push!(op_ty_results, result)
    
    create_operation(
        "stablehlo.uniform_dequantize", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

"""
`uniform_quantize`

Performs element-wise conversion of floating-point tensor or quantized
tensor `operand` to a quantized tensor `result` according to the
quantization parameters defined by the `result` type.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#uniform_quantize

# Example
```mlir
%result = stablehlo.uniform_quantize %operand : (tensor<2xf32>) -> tensor<2x!quant.uniform<i8:f32:0, {0.1:-30,0.5:-20}>>
```
"""
function uniform_quantize(operand::Value; result::IR.Type, location=Location())
    op_ty_results = IR.Type[result, ]
    operands = Value[operand, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[]
    
    create_operation(
        "stablehlo.uniform_quantize", location;
        operands, owned_regions, successors, attributes,
        results=op_ty_results,
        result_inference=false
    )
end

"""
`while_`

Produces the output from executing `body` function 0 or more times while the
`cond` function outputs `true`.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#while

# Example
```mlir
%results0, %results1 = stablehlo.while(%arg0 = %init_i, %arg1 = %init_sum) : tensor<i64>, tensor<i64>
cond {
  %cond = stablehlo.compare LT, %arg0, %ten : (tensor<i64>, tensor<i64>) -> tensor<i1>
  stablehlo.return %cond : tensor<i1>
} do {
  %new_sum = stablehlo.add %arg1, %one : tensor<i64>
  %new_i = stablehlo.add %arg0, %one : tensor<i64>
  stablehlo.return %new_i, %new_sum : tensor<i64>, tensor<i64>
}
```
"""
function while_(operand::Vector{Value}; result::Tuple{Vararg{IR.Type}}, cond::Region, body::Region, location=Location())
    op_ty_results = IR.Type[result..., ]
    operands = Value[operand..., ]
    owned_regions = Region[cond, body, ]
    successors = Block[]
    attributes = NamedAttribute[]
    
    create_operation(
        "stablehlo.while", location;
        operands, owned_regions, successors, attributes,
        results=op_ty_results,
        result_inference=false
    )
end

"""
`xor`

Performs element-wise XOR of two tensors `lhs` and `rhs` and produces a
`result` tensor.

See:
https://github.com/openxla/stablehlo/blob/main/docs/spec.md#xor

# Example
```mlir
%result = stablehlo.xor %lhs, %rhs : tensor<2xi32>
```
"""
function xor(lhs::Value, rhs::Value; result::Union{Nothing, IR.Type}=nothing, location=Location())
    op_ty_results = IR.Type[]
    operands = Value[lhs, rhs, ]
    owned_regions = Region[]
    successors = Block[]
    attributes = NamedAttribute[]
    !isnothing(result) && push!(op_ty_results, result)
    
    create_operation(
        "stablehlo.xor", location;
        operands, owned_regions, successors, attributes,
        results=(isempty(op_ty_results) ? nothing : op_ty_results),
        result_inference=isempty(op_ty_results)
    )
end

end # stablehlo
