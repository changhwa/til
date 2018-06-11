# 텐서플로우 서빙 설치
sudo -E yum -y install freetype-devel libpng12-devel zip zlib-devel giflib-devel zeromq3-devel numpy python-devel python-pip
git clone --recurse-submodules https://github.com/tensorflow/serving
cd serving
vi tools/bazel.rc

build:cuda --crosstool_top=@org_tensorflow//third_party/gpus/crosstool
build:cuda --define=using_cuda=false --define=using_cuda_nvcc=false
build --action_env PYTHON_BIN_PATH="/home/anaconda3/envs/tensorflow/bin/python"
build --define PYTHON_BIN_PATH=/home/anaconda3/envs/tensorflow/bin/python

bazel build -c opt tensorflow_serving/...


# 모델 서버 실행

./serving/bazel-bin/tensorflow_serving/model_servers/tensorflow_model_server --port=9000 --model_name=saved_model --model_base_path=/home/model
