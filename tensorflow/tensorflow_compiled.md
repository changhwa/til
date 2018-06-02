# 아나콘다 클라이언트 설치

```
sudo -E yum -y update
sudo -E yum -y install https://centos7.iuscommunity.org/ius-release.rpm
sudo -E yum -y install python36u
sudo -E yum -y install python36u-pip
sudo -E pip3.6 install anaconda-client
wget https://repo.continuum.io/archive/Anaconda3-5.1.0-Linux-x86_64.sh
chmod 755 Anaconda3-5.1.0-Linux-x86_64.sh
./Anaconda3-5.1.0-Linux-x86_64.sh
```

# bazel 설치

```
sudo -E vi /etc/yum.repos.d/vbatts-bazel-epel-7.repo

[vbatts-bazel]
name=Copr repo for bazel owned by vbatts
baseurl=https://copr-be.cloud.fedoraproject.org/results/vbatts/bazel/epel-7-$basearch/
type=rpm-md
skip_if_unavailable=True
gpgcheck=1
gpgkey=https://copr-be.cloud.fedoraproject.org/results/vbatts/bazel/pubkey.gpg
repo_gpgcheck=0
enabled=1
enabled_metadata=1

sudo -E yum -y install bazel
```

# 아나콘다 텐서플로우 프로필 생성

```
conda create -n tensorflow python=3.5
source activate tensorflow
```

# 필요 라이브러리 업데이트
```
pip install --upgrade numpy scipy wheel cryptography
```


# 텐서플로우 설치
```
git clone https://github.com/tensorflow/tensorflow
cd tensorflow/
git checkout r1.8
./configure
bazel build --config=mkl --copt="-DEIGEN_USE_VML" -c opt //tensorflow/tools/pip_package:build_pip_package
./bazel-bin/tensorflow/tools/pip_package/build_pip_package /tmp/tensorflow_pkg
pip install /tmp/tensorflow_pkg/tensorflow-1.7.1-cp35-cp35m-linux_x86_64.whl
```

# CPU 옵션
```
bazel build --config=mkl -c opt --copt=-mavx --copt=-mavx2 --copt=-mfma --copt=-mavx512f --copt=-mavx512dq --copt=-mavx512cd --copt=-mavx512bw --copt=-mavx512vl --copt="-DEIGEN_USE_VML" //tensorflow/tools/pip_package:build_pip_package
```
