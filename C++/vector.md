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

	arr.resize(10); // 사이즈를 바꿀 수 있다. 

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
