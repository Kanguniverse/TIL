# 정렬(sorting)

- 데이터를 특정 조건에 따라 일정한 순서가 되도록 다시 배열하는 일

- 정렬을 해야 되는 이유 : 탐색을 빨리 하기 위해서(정렬이 되어있다면 이진 탐색 등 강력한 알고리즘을 사용할 수 있다)

## bubble sort(거품 정렬)

> Time complexity

- 최악의 경우 O(n<sup>2</sup>)
- 평균의 경우 O(n<sup>2</sup>)
- 최고의 경우 O
  (n)

- for구문이 중첩된 형태로 쓰임

```c
#include <stdio.h>

int main(void)
{
    int a[]={20,40,50,10,30};

    int i,j;

    int n = 5; //a 배열 요소의 개수

    int temp;

    //loop part
    for(i=0;i<n-1;i++){
        for(j=0;j<n-1-i;j++){
            if(a[j]>a[j+1]){
                //swap
                temp=a[j];
                a[j]=a[j+1];
                a[j+1]=temp;
            }
        }
    }

    for(i=0;i<n;i++)
    {
        printf("%d",a[i]);
    }

    return 0;
}
```
