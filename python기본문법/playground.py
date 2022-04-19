from argparse import BooleanOptionalAction
from copy import copy


print("enter ", end='foo')
print("?")

## immutable, tuple dose not support iitem assignment

y_tuple = ('a', 'b')
print(y_tuple[1])

## False
# y_tuple[1] = 'c'
# print(y_tuple[1])


my_str = """*
**
***"""
print(my_str)

slice_ = 'hello, world'
print(slice_[1:8],"||",slice_[:10])
print(slice_.split(),"||", slice_.split("l"), "||", slice_.split("l"))

print(slice_.index("l"))
print(".".join("abcd"),"||", " ".join(slice_))
print(slice_.lower(), slice_.upper())

trim = "    t r i m     "
print(trim.lstrip())
print(trim.rsplit(" "))
print(trim.replace(" ", "*"))

# List 추가
mylist= []
mylist.append('찹쌀떡')
mylist.append('배고파')
mylist.append('하나')
mylist.append('둘')
mylist.append('셋')
mylist3 = [1, 2, 3]

print(mylist)
del mylist[3]
print(mylist)
print(mylist.count('셋'))


print(len(mylist))
mylist.sort()
print(mylist)

pac = 1,2,3,4,5  # Tuple
up1, up2 , up3 = [1,2,3]
print(up1, up2 , up3, pac)

sH = {
    'a': 1,
    'b' : 2,
    'c' : 3,
}

print(sH['a'])

print(sH.values())
print(sH.keys())
print(sH.items())
print(sH.get('a'))
print('a' in sH)

arr1 = [1,2,3,4,5]
arr2 = [2,3,4]



#  SET
#  중복없음, 무순서
s1 = set([11,22,33,44,55])
s2 = set([22,33,44])
print('intersection',s1.intersection(s2))
print('intersection', s1 & s2)

print("union", s1 | s2)
print('union', s1.union(s2))

print('difference', s1-s2)
print('difference', s1.difference(s2))

s1.add(66)
print(s1)

s1.update([66,77,88])
print(s1)

# boolearn
print(bool("") , bool("a"), bool(0), bool(1))

oarr = [1,2,3]
oarr2 = [1,2,3]
carr1 = copy(oarr)
print(oarr == oarr2)
# 얕은 복사해도 true임
print(oarr == carr1)
print(id(oarr) ,id(carr1))
print(id(oarr) == id(carr1))

n = 5
if(n): 
    print(n)


arr = [1,0,2,0,3]
print(arr)

if 1 in arr:
    print("1")
    pass
else:
    print("no")


prompt = """
... 1. Add
... 2. Del
... 3. List
... 4. Quit
...
... Enter number: """

num = 0

# while num != 4:
#     print(prompt)
#     num = int(input())

arr = [1,2,3,4]
for a in arr:
    print(a)
arr = [(1,2), (2,3), (3,4),(4,5)]
for [lt,rt] in arr:
    print(lt, rt)


for i in range(2,5):
    print(i)
arr = [1,2,3,4]
result = [i*2 for i in arr if i % 2 == 0]
print(result)

# rest parameters
print(' ')
print('rest parameter')
def a(*arg):
    for i in arg:
        print(i)

a(98,99,100)

# dictionary
print(' ')
print('keyword parameter')
def k(**kwarg):
    print(kwarg)

k(i=1)