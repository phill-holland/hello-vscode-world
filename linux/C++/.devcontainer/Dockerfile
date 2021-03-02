FROM ubuntu:latest
RUN apt-get update && apt-get install build-essential wget -y
ARG DEBIAN_FRONTEND=noninteractive
RUN apt-get update && apt-get install gdb -y
WORKDIR /init
RUN wget https://github.com/Kitware/CMake/releases/download/v3.18.4/cmake-3.18.4-Linux-x86_64.sh
RUN sh cmake-3.18.4-Linux-x86_64.sh --skip-license
RUN ln -s /init/bin/cmake /usr/local/bin/cmake