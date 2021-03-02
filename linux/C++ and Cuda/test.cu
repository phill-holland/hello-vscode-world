#include "test.cuh"

__global__ void TestCopy(int4 *source, int4 *destination, const int N)
{
    int idx = blockIdx.x * blockDim.x + threadIdx.x;

	if (idx < N)
	{
        destination[idx] = source[idx];
    }
}

void cuda::test::init()
{
    int length = 256;

    if (cudaMalloc((void**)&cudaInt4ArrayA, sizeof(int4) * length) != ::cudaSuccess) return;
    if (cudaMalloc((void**)&cudaInt4ArrayB, sizeof(int4) * length) != ::cudaSuccess) return;
}

void cuda::test::run()
{
    int grids = 2;
    int threads = 128;

    TestCopy<<<grids, threads>>>(cudaInt4ArrayA, cudaInt4ArrayB, 256);
}

void cuda::test::cleanup()
{
    cudaFree(cudaInt4ArrayB);
    cudaFree(cudaInt4ArrayA);
}