# IEnumerable 인터페이스

1. 정의

   - 제네릭이 아닌 컬렉션에서 단순하게 반복할 수 있도록 지원하는 열거자를 노출합니다.

2. 인터페이스 내부 멤버들

```C#
interface IEnumerable
{
    IEnumerator GetEnumerator();
}

interface IEnumerator
{
    bool MoveNext(); //다음 요소 위치로 이동, 더 이상 없으면 false 반환
    void Reset();       //초기 상태로 바꿈
    Object Current    //현재 위치의 요소를 가져오기
    {
        get;
    }
}
```

3. IEnumerable 활용 예시 - 1

```C#
class Member
{
    public int Id
    {
        get;
        private set;
    }
    public string Name
    {
        get;
        private set;
    }
    public Member(int id, string name)
    {
        Id = id;
        Name = name;
    }
    public override string ToString()
    {
        return string.Format("아이디:{0} 이름:{1}", Id, Name);
    }
}

class MemberCollection:IEnumerable
{
    ArrayList ar = new ArrayList(); //내부 컬렉션
    IEnumerator IEnumerable.GetEnumerator()//IEnumerable에 약속된 메서드 구현
    {
        return ar.GetEnumerator();//내부 컬렉션을 이용하여 IEnuerator 반환
    }
    public void AddMemer(Member member)
    {
        ar.Add(member);
    }
}

class Program
{
    static void Main(string[] args)
    {
        MemberCollection mc = new MemberCollection();
        mc.AddMemer(new Member(1,"홍길동"));
        mc.AddMemer(new Member(2,"강감찬"));

        foreach(Member member in mc)
        {
            Console.WriteLine(member.ToString());
        }
    }
}

```
