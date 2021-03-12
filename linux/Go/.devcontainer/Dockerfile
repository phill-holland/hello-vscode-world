FROM ubuntu:latest
RUN apt-get update && apt-get install build-essential wget -y
RUN apt-get update && apt-get install git -y
ARG DEBIAN_FRONTEND=noninteractive
RUN apt-get update && apt-get install gdb -y
WORKDIR /init
RUN wget -c https://dl.google.com/go/go1.14.2.linux-amd64.tar.gz -O - | tar -xz -C /usr/local
ENV PATH="/usr/local/go/bin:${PATH}"
RUN go get -v github.com/go-delve/delve/cmd/dlv
RUN go get -v golang.org/x/tools/gopls
RUN go get -v github.com/ramya-rao-a/go-outline