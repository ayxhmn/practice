# # Lambda function
# sum = lambda x, y: x+y
# print(sum(1, 2))


# # Iterate -> Repeating something
# # Iterator ->  Object used to iterate over iterable objects (e.g, lists).
# myString = "Hlo, W!"
# myStringIterator = iter(myString)

# print(myStringIterator)
# print(next(myStringIterator))
# print(next(myStringIterator))
# print(next(myStringIterator))
# print(next(myStringIterator))
# print(next(myStringIterator))
# print(next(myStringIterator))
# print(next(myStringIterator))


# Generators -> Function that returns an iterator using yield keyword.
# Example 1
def threeTwoOne():
    yield 3
    yield 2
    yield 1

x = threeTwoOne()

for num in x:
    print(num, end=" ")
print()

# Example 2
def fib(limit):
    a, b = 0, 1

    while a<limit:
        yield a
        a, b = b, a+b

for i in fib(9):
    print(i, end=" ")
print()

# Generator expression
myGenerator = (i*5 for i in range(1, 10) if i%2==0)

for item in myGenerator:
    print(item, end=" ")
print()