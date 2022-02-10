FROM ubuntu:latest

RUN apt-get update && apt-get install build-essential wget -y
ARG DEBIAN_FRONTEND=noninteractive
RUN apt-get update && apt-get install curl -y
RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
RUN rm /bin/sh && ln -s /bin/bash /bin/sh
RUN source $HOME/.cargo/env