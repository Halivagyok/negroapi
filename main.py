import tkinter as tk 
import webbrowser
import random
rand = random.randint(1,5)
print(rand)

root = tk.Tk()

root.title("teszt")
#root.geometry("300x200")
label = tk.Label(root, text="api test", font=('Arial', 18))
label.grid()

def api1():
    url1 = f"http://localhost:8080/negro/{rand}"
    webbrowser.open_new_tab(url1)


button1 = tk.Button(root, text="random negró íz", command=api1)
button1.grid(row="1", column="0")

root.mainloop()