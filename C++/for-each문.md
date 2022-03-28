## For-each 반복문

- 배열 출력 시 용이하게 사용

```c
#include <iostream>

int main()
{
    const int fibonacci[] = {0,1,1,2,3,5,8,13,21,34,55,89};

    for(int number : fibonacci)
        cout<< number << " ";
    cout<<endl;
    //위의 number에는 fibonacci에 있는 원소들이 각각 한번씩 들어가게 된다.


    for(const auto &number : fibonacci)
        cout<< number << " ";
    cout<<endl;
    //많이 사용하는 방식은 위와 같다.

    return 0;
}

```
