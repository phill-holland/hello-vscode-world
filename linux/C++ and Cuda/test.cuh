#include "cuda_runtime.h"
#include "device_launch_parameters.h"

namespace cuda
{
    class test
    {
        int4 *cudaInt4ArrayA, *cudaInt4ArrayB;
    public:
        test() { init(); }
        ~test() { cleanup(); }

        void init();
        void run();
        void cleanup();
    };
};