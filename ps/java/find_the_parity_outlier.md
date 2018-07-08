**문제**  
[codewars](https://www.codewars.com/kata/5526fc09a1bbd946250002dc)

```java

import java.util.Arrays;

public class FindOutlier {
  static int find(int[] integers){
    int sum = Arrays.stream(integers).limit(3).map(i -> Math.abs(i) % 2).sum();
    int mod = (sum == 0 || sum == 1) ? 1 : 0;
    return Arrays.stream(integers).filter(n -> Math.abs(n) % 2 == mod).findFirst().getAsInt();
  }
}
```
