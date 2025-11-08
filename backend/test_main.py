from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_home():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Task Tracker API"}

def test_create_task():
    response = client.post("/tasks?title=Buy Milk")
    assert response.status_code == 200
    data = response.json()
    assert data["title"] == "Buy Milk"

def test_read_tasks():
    response = client.get("/tasks")
    assert response.status_code == 200
    assert isinstance(response.json(), list)


from database import SessionLocal
from models import Task

def test_database_connection():
    # Step 1: Create a DB session
    db = SessionLocal()

    # Step 2: Create a new Task object
    new_task = Task(title="Test DB")

    # Step 3: Add to DB
    db.add(new_task)
    db.commit()

    # Step 4: Query the record we just added
    task_in_db = db.query(Task).filter_by(title="Test DB").first()

    # Step 5: Validate result
    assert task_in_db is not None
    assert task_in_db.title == "Test DB"

    # Step 6: Close session
    db.close()


def test_login_success():
    # Send correct credentials
    response = client.post("/login?username=admin&password=123")
    assert response.status_code == 200
    assert "token" in response.json()
    assert response.json()["token"] == "abc123"

def test_login_failure():
    # Send incorrect credentials
    response = client.post("/login?username=wrong&password=nope")
    assert response.status_code == 401
    assert response.json()["detail"] == "Invalid credentials"
