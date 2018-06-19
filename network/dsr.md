우선 DSR, inline 차이점 보기
```
https://ssup2.github.io/theory_analysis/SLB/
http://wiki.daumkakao.com/pages/viewpage.action?pageId=69932159
```
  
loopback 설정 확인
```
ifconfig lo:0 에 VIP 로 설정되어 있는지 확인
or cat /etc/sysconfig/network-scripts/ifcfg-lo:0
```
  
l3dsr 서비스 재시작하기
```
sudo -E service stop l3dsr
sudo -E service start l3dsr
```
