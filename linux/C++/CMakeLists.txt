cmake_minimum_required(VERSION 3.18)

project(cplusplus)

set(CMAKE_BUILD_TYPE "Debug")

set(THREADS_PREFER_PTHREAD_FLAG ON)
find_package(Threads REQUIRED)

include_directories("/usr/include")

file(GLOB SOURCE CONFIGURE_DEPENDS "${PROJECT_SOURCE_DIR}/*.cpp")

add_executable(${PROJECT_NAME} ${SOURCE})

target_link_libraries(${PROJECT_NAME} "${CMAKE_THREAD_LIBS_INIT}")
