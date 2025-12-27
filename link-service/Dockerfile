FROM python:3.11-slim

WORKDIR /app

# Copy dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY . .

# Expose the port
EXPOSE 3000

# Start FastAPI with uvicorn, binding to 0.0.0.0 so ECS can access it
CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "3000"]
