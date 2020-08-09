#OOP problem set by Andreas & Elsita
#https://github.com/HackBulgaria/Programming101-2/tree/master/week1/1-Python-OOP-problems-set

class CashDeck:

  def __init__(self):
    self.money = {100:0, 50:0, 20:0, 10:0, 5:0, 2:0, 1:0}
  
  def take_money(self, taken):
    #add to CashDeck
    for key in self.money:
      if key in taken.keys():
        self.money[key] = taken[key] + self.money[key]
      else:
       self.money[key] = 0 + self.money[key]   
    #self.taken = taken

  def total(self):
    self.sum = 0
    for key in self.money:
      value = key*self.money[key]
      self.sum += value
    return self.sum
  # do we have the right bills do withdraw X amount?
  def can_withdraw_money(self, amount):
    for bill in self.money:
      for i in range(self.money[bill]):
        if amount - (i+1 * bill) < 0:
          pass
        else:
          amount -= bill
    if amount > 0:
      return False
    return True
  
  # do we have enough money?
  def sufficient_money(self, amount):  
    if amount < self.sum:
      return True
    else: 
      return False

print("Empty Cash Deck")
my_cash_desk = CashDeck() 
print(my_cash_desk.money)

print("Add Money!")
my_cash_desk.take_money({1:2, 50:1, 20:1, 100:4})
print(my_cash_desk.money)

print("Count money: here's my total")
print(my_cash_desk.total())

print("do I have $30?")
print(my_cash_desk.sufficient_money(30))
print("can I withdraw $201?")
print(my_cash_desk.can_withdraw_money(201))

'''
#how dictionaries work
dict1 = {1:2, 50:1, 20:1}
print(dict1.keys())
sum = 0
for key in dict1:
      print(key)
      print(dict1[key])
      value = key*dict1[key]
      sum += value
print(sum) 

#dict[key] #gives the value of that key

dict2 = {100:0, 50:0, 20:0, 10:0, 5:0, 2:0, 1:0}
for key in dict2:
    if key in dict1.keys():
      dict2[key] = dict1[key] + dict2[key]
    else:
      dict2[key] = 0 + dict2[key]
print(dict2)
'''