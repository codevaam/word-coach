import re
with open('../words/data.txt', 'r') as file:
    data = file.read().replace('\n', ' ')
filtered_data = re.sub(r'\b\w{1,3}\b', '', data)

arr = filtered_data.split()
x = int(len(arr)/3)

easy = ' '.join(arr[0: x])
medium = ' '.join(arr[x: 2*x])
hard = ' '.join(arr[2*x: 3*x])

f = open('../words/easy.txt', 'w+')
f.write(easy)

f = open('../words/medium.txt', 'w+')
f.write(medium)

f = open('../words/hard.txt', 'w+')
f.write(hard)
