import os
import random
import time
from datetime import datetime

# Configure Git
GIT_USER = "GitHub Action"
GIT_EMAIL = "action@github.com"
REPO_PATH = "./"  # Set this to your repo directory if running outside the repo

os.system(f"git config --global user.name '{GIT_USER}'")
os.system(f"git config --global user.email '{GIT_EMAIL}'")

# Generate 2 to 3 random commits
total_commits = random.randint(2, 3)
for i in range(1, total_commits + 1):
    with open("random-commit.txt", "a") as f:
        f.write(f"Commit #{i} on {datetime.now()}\n")
    
    os.system("git add random-commit.txt")
    os.system(f"git commit -m 'Random commit {i}: {datetime.now()}'")
    
    sleep_time = random.randint(10, 30)
    print(f"Sleeping for {sleep_time} seconds before next commit...")
    time.sleep(sleep_time)

# Push changes
os.system("git push")
print("All commits pushed!")
