## 매개변수의 기본값 

- 선언과 정의가 분리 될 경우에는 **한 곳에서만 기본값을 입력해줘야된다**.

- 예시 1)   

```c
#include <iostream>
using namespace std;

void print(int x= 1024); // default parameter, 아무 값도 입력하지 않을 시 1024가 입력이 된다.
// 보통 선언 부분에 기본값을 입력한다.

void print(int x)
{
	cout << x << endl;
}


int main()
{
	print(10); // 10이 출력
	print(); // 아무 값도 입력하지 않았음으로 1024가 출력이 된다. 

	return 0;
}
```

- 예시 2) 

- 매개변수의 기본 값 입력시 **오른쪽에 위치한 매개변수부터 입력**을 해줘야한다.

```c
#include <iostream>
using namespace std;

void print(int x, int y=20, int z= 30) 
// (int x = 10, int y, int z), (int x, int y=10, int z) 일 경우 작동하지 않음으로 매개변수 기본값을 사용 할 경우에는 오른쪽 매개변수부터 기본값을 입력해줘야 한다.
{
	cout << x << " "<<y<< " " << z<< endl;
}

int main()
{
	print(10); // 출력 값 : 10 20 30

    print(10,100); // 출력 값 : 10 100 30 (y에 있는 기본값은 무시된다)

	return 0;
}
```