import threading
import time

def task():
    print("Starting task")
    time.sleep(2)
    print("Task done")

task()
task()

t1 = threading.Thread(target=task)
t2 = threading.Thread(target=task)

t1.start()
t2.start()

t1.join()
t2.join()