# Grokking Algos - implementing what's in the book
list = [2, 3, 5, 9, 7]

# OWN Solution
# returns the sum of all integers in a list using recursion
def sum(x, i=0):
    if i == len(list):
      return 0
    else:
      return list[i] + sum(list, i+1)

print(f"sum: {sum(list)}")


# counts number of items in a list using recursion
def count(x):
  if x == []:
    return 0
  else:
    return 1 + count(x[1:]) # why not "index out or range- error?"

print(f"count: {count(list)}")


# OWN Solution
# returns maximum element in a list using recursion
def maximum(x):
  if x == []:
    return 0
  else:
    if x[0] < maximum(x[1:]):
      return maximum(x[1:])
    else:
      return x[0]

print(f"max: {maximum(list)}")


# recursive quicksort
def quicksort(x):
  if len(x) < 2:
    return x
  else:
    pivot = x[0]
    less = [i for i in x[1:] if i <= pivot]
    greater = [i for i in x[1:] if i > pivot]
    return quicksort(less) + [pivot] + quicksort(greater)

print(quicksort(list))


# breath-first graph: looking for a mango seller
from collections import deque
  # build graph
graph = {}
  # insert nodes (people)
graph['you'] = ['alice', 'bob', 'claire']
graph['bob'] = ['anuj', 'peggy']
graph['alice'] = ['peggy']
graph['claire'] = ['thom', 'jonny']
graph['anuj'] = []
graph['peggy'] = []
graph['thom'] = []
graph['jonny'] = []


def search(name):
  search_queue = deque()
  search_queue += graph['you']
  searched = []
  while search_queue:
    person = search_queue.popleft()
    if person_is_seller(person):
      print(person + ' is a mango seller!')
      return True
    else:
      search_queue += graph[person]
      searched.append(person)
  return False

  # arbitrary measure of what makes a seller
def person_is_seller(name):
  return name[-1] == 'm'

search('you')







