# def my_decorator(func):
#     def my_wrapper(*args, **kwargs):
#         print("Before execution")

#         ans = func(*args, **kwargs)

#         print(f"Answer produced by {func.__name__} is {ans}")

#         print("After execution")
#     return my_wrapper

# @my_decorator
# def sum(a, b):
#     return a + b

# sum(1,2)

def what(func):
    print("I don't know")
    def wrap():
        func()
    return wrap

def what2(func):
    print("I really don't know")
    def wrap():
        func()
    return wrap

@what
@what2
def whatt():
    print("seriously what is going on?")
    pass

whatt()