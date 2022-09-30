## tuple 

- 여러개의 값을 반환 할때 사용한다.(구조체 반환을 통해 여러개의 값을 반환해도 된다.)  
   

- tuple을 사용함으로써 사용자 자료형을 만든다.

- 예시

```c
#include <iostream>
#include <tuple> // tuple을 사용하기 위해서는 tuple을 includ를 한다.

using namespace std;

std::tuple<int, double> getTuple() // tuple<int, double> 사용자 자료형 생성 
// 해당 값에는 구조체도 포함 가능하다.
{
	int a = 10;
	double d = 3.14;
	return	std::make_tuple(a, d); // return 할 때는 make_tuple을 반환
}

int main()
{
    //c++ 17표준 이전 출력 사용 시
	std::tuple<int, double> my_tp = getTuple();
	cout << std::get<0>(my_tp) << endl; // 출력할때는 std::get<index> 사용 
	cout << std::get<1>(my_tp) << endl; // 출력할때는 std::get<index> 사용 

    //c++ 17표준 이후 출력 사용 시
    auto[a,d] = getTuple(); // 각각 받는 값을 변수 선언하면서 리턴값을 받는다.
    cout << a << endl;
    cout << d << endl;

	return 0;
}
```