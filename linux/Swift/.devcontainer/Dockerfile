FROM ubuntu:20.04
RUN apt-get update && apt-get install build-essential wget -y
ARG DEBIAN_FRONTEND=noninteractive
RUN apt-get update && apt-get install gdb -y
RUN apt-get install curl clang libicu-dev git libatomic1 libxml2 libcurl4 zlib1g-dev libbsd0 tzdata libssl-dev libsqlite3-dev libblocksruntime-dev libncurses5-dev libdispatch-dev -y
RUN apt-get update && apt-get install python2.7 -y
RUN apt-get update && apt-get install lldb-3.9 -y
WORKDIR /swift
WORKDIR /init
RUN wget https://swift.org/builds/swift-5.3.3-release/ubuntu2004/swift-5.3.3-RELEASE/swift-5.3.3-RELEASE-ubuntu20.04.tar.gz
RUN tar -xvzf swift-5.3.3-RELEASE-ubuntu20.04.tar.gz -C /swift
ENV PATH="/swift/swift-5.3.3-RELEASE-ubuntu20.04/usr/bin:${PATH}"
#RUN ln -s /swift/swift-5.3.3-RELEASE-ubuntu20.04/usr/bin/swift /usr/local/bin/swift
