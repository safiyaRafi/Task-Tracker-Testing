from fastapi import FastAPI, HTTPException, Depends
from sqlalchemy.orm import Session
from database import SessionLocal, engine
import models

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/")
def home():
    return {"message": "Task Tracker API"}

@app.post("/tasks")
def create_task(title: str, db: Session = Depends(get_db)):
    task = models.Task(title=title)
    db.add(task)
    db.commit()
    db.refresh(task)
    return task

@app.get("/tasks")
def read_tasks(db: Session = Depends(get_db)):
    return db.query(models.Task).all()


@app.post("/login")
def login(username: str, password: str):
    # Step 1: Check username and password
    if username == "admin" and password == "123":
        return {"token": "abc123"}  # Step 2: Return a fake token
    # Step 3: Raise error for wrong credentials
    raise HTTPException(status_code=401, detail="Invalid credentials")
