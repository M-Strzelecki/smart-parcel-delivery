from sqlalchemy.orm import Session
from . import models, schemas
from passlib.context import CryptContext
from typing import List

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def get_user(db: Session, user_id: int):
    return db.query(models.User).filter(models.User.id == user_id).first()

def get_user_by_username(db: Session, username: str):
    return db.query(models.User).filter(models.User.username == username).first()

def get_user_by_email(db: Session, email: str):
    return db.query(models.User).filter(models.User.email == email).first()

def create_user(db: Session, user: schemas.UserCreate):
    hashed_password = pwd_context.hash(user.password)
    db_user = models.User(username=user.username, email=user.email, hashed_password=hashed_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def create_parcel(db: Session, parcel: schemas.ParcelCreate):
    db_parcel = models.Parcel(**parcel.dict())
    db.add(db_parcel)
    db.commit()
    db.refresh(db_parcel)
    return db_parcel

def get_parcel(db: Session, parcel_id: int):
    return db.query(models.Parcel).filter(models.Parcel.id == parcel_id).first()

def get_parcels_by_user(db: Session, user_id: int):
    return db.query(models.Parcel).filter(models.Parcel.sender_id == user_id).all()
