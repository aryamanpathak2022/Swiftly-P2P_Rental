from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

# Print the value of DATABASE_URL
print(os.environ.get("DATABASE_URL"))
