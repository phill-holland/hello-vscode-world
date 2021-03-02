cmake_minimum_required(VERSION 3.18)

project(cpluspluscuda)

set(CMAKE_CUDA_COMPILER "/usr/local/cuda/bin/nvcc")
set(CMAKE_CUDA_COMPILER_ENV_VAR "")

set(CMAKE_BUILD_TYPE "Debug")

enable_language(CUDA)

set(THREADS_PREFER_PTHREAD_FLAG ON)
find_package(Threads REQUIRED)

include_directories("/usr/local/cuda/include")
include_directories("/usr/include")

file(GLOB SOURCE CONFIGURE_DEPENDS "${PROJECT_SOURCE_DIR}/*.cpp" "${PROJECT_SOURCE_DIR}/*.cu")

link_directories("/usr/local/cuda/lib64")

add_executable(${PROJECT_NAME} ${SOURCE})

set_property(TARGET ${PROJECT_NAME} PROPERTY CUDA_ARCHITECTURES 61)

target_link_libraries(${PROJECT_NAME} "${CMAKE_THREAD_LIBS_INIT}")
