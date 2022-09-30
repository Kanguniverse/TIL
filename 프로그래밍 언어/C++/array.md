## std::array

- 기존 정적 배열을 대체해서 사용할 수 있다.

예시 1)
```c
#include <iostream>
#include <array> // array 사용을 위한 include

int main()
{
    using namespace std; 

	int array_a[5] = { 1,2,3,4,5 };

	array<int, 5> my_arr = { 1,2,3,4,5 }; // 가로 안에 숫자가 무조건 포함되어 있어야 한다! ex) <int, 5>

    my_arr = { 0,1,2,3,4 }; // 배열의 요소를 쉽게 바꿀 수 있다.
    my_arr = { 0,1,2 }; // 배열의 요소를 쉽게 바꿀 수 있다, 이 때 나머지 숫자는 0으로 변경된다.

    cout << my_arr[10]<<endl; // 배열의 해당 인덱스에 요소가 있는 지 여부와 상관없이 작동한다.
    cout << my_arr.at(10) <<endl; //  미리 배열의 해당 인덱스에 요소가 있는지를 판단하고 없으면 예외 처리를 한다.(작동 속도는 약간 떨어진다.)

    cout << my_arr.size()<<endl; // 해당 배열의 원소가 몇개인지 도출할 때 사용

	return 0;
}
```

예시 2)

```c
#include <iostream>
#include <array> // array 사용을 위한 include

using namespace std; 

void printLength(array<int, 5> my_arr)
{
	cout << my_arr.size() << endl; // 일반적인 배열을 매개변수로 받을 때와 다르게 해당 배열의 사이즈가 출력이 된다. 
    // 다만 array<int, 5> my_arr로 사용하면 해당 배열이 복제 되기 때문에 작동시간이 오래 걸릴 수 있다.
    // 작동시간이 오래걸릴 수 있으므로 포인터를 사용하거나 참조를 사용한다. ex) const arr<int,5>& my_arr
}

int main()
{
	array<int, 5> my_arr = { 1,2,3,4,5 }; // 가로 안에 숫자가 무조건 포함되어 있어야 한다! ex) <int, 5>

    cout << my_arr.size()<<endl; // 해당 배열의 원소가 몇개인지 도출할 때 사용

    printLength(my_arr); 

	return 0;
}
```

