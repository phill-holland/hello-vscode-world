FROM ubuntu:latest
RUN apt-get update && apt-get install build-essential wget -y
ARG DEBIAN_FRONTEND=noninteractive
RUN apt-get update && apt-get install gdb -y
RUN apt-get update && apt-get install open-cobol -y