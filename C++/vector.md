## std::vector

- 기존 동적 배열을 대체해서 사용할 수 있다.

- vector의 장점 : 동적할당과 다르게 메모리를 알아서 지워준다. 블록받거나 리턴 받아서 나갈 때 메모리가 지워진다.

- 예시 1)

```c
#include <iostream>
#include <vector> // 벡터를 사용하기 위해서는 벡터를 include 해야 한다.

using namespace std;

int main()
{
	//std::array<int,5> array; // std::array 같은 경우는 숫자를 적어줘야하지만

	std::vector<int> array; // vector는 적지 않는다.

	std::vector<int> array2 = { 1,2,3,4,5 };

	cout << array2.size() << endl; // 결과 값 5

	std::vector<int> array3 = { 1,2,3, };

	cout << array3.size() << endl; // 결과 값 3

	std::vector<int> array4{ 1,2,3, };

	cout << array4.size() << endl; // 결과 값 3

	return 0;
}
```

- 예시 2)

```c
#include <iostream>
#include <vector>

using namespace std;

int main()
{
	vector<int> arr = { 1,2,3,4,5 };

	arr.resize(10); // 사이즈를 바꿀 수 있다. 초기화가 안된 요소는 0으로 초기화

	for (const auto &number : arr) // for-each문 사용
	{
		cout << number << " ";
	}
	cout << endl;

	cout << arr.size() << endl; // vector size 출력
	cout << arr[1] << endl;
	cout << arr.at(1) << endl;

	return 0;
}
```

## std::vector 사용법

```c
#include <iostream>
#include <vector>

using namespace std;

int main()
{
	// int *v_ptr = new int[3]{1,2,3};

	std::vector<int> v{ 1,2,3 };

	v.reserve(1024); // 메모리 공간(capacity)를 1024만큼 확보 하겠다. 하는 이유 : 원소를 추가할 때 추가하는 작업이 없어지므로 속도가 빨라진다.

	//v.resize(2); // 메모리는 실질적으로 3개 가지고 있으나, 2개인거처럼 행동해라

	for (auto& element : v)
	{
		cout << element<<" ";
	}
	cout << endl;

	cout << v.size() << " " << v.capacity() << endl;

	//cout << v.at(2) << endl;

	int* ptr = v.data(); // 포인터를 가지고 올 수 있다.

	cout << ptr[2] << endl; // 마지막을 가지고 올 수 있다.

	// size, capacity(용량)
	// capacity는 실질적으로 가지고 있는 용량이고, 그 중 사용하고 있는 용량을 size로 표시한다.
	// new, delete는 느리기 때문에 많이 사용하지 않는 걸 추천

	return 0;
}
```

## std::vector 사용법 2

```c
#include <iostream>
#include <vector>

using namespace std;

void printStack(const std::vector<int>& stack)
{
for (auto& element : stack)
{
cout << element << " ";
}
cout << endl;
}

int main()
{
std::vector<int> stack;

    //stack.reserve(1024);
	//reserve로 용량 초과 시 new를 쓰지 않으므로 속도가 향상된다. 다만, 크기를 너무 크게 할 경우 용량을 많이 차지 하는 경우가 발생한다.

    stack.push_back(3);//뒤에 데이터 추가
    printStack(stack);

    stack.push_back(5);//뒤에 데이터 추가
    printStack(stack);

    stack.push_back(7);//뒤에 데이터 추가
    printStack(stack);

    stack.pop_back(); // 맨 뒤에 데이터 제거
    printStack(stack);

    stack.pop_back(); // 맨 뒤에 데이터 제거
    printStack(stack);

    stack.pop_back(); // 맨 뒤에 데이터 제거
    printStack(stack);

    return 0;
}
```
