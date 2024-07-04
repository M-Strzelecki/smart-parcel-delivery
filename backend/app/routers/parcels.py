from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from .. import crud, schemas, database
from ..dependencies import get_db

router = APIRouter()

@router.post("/", response_model=schemas.Parcel)
def create_parcel(parcel: schemas.ParcelCreate, db: Session = Depends(get_db)):
    return crud.create_parcel(db=db, parcel=parcel)

@router.get("/{parcel_id}", response_model=schemas.Parcel)
def read_parcel(parcel_id: int, db: Session = Depends(get_db)):
    db_parcel = crud.get_parcel(db, parcel_id=parcel_id)
    if db_parcel is None:
        raise HTTPException(status_code=404, detail="Parcel not found")
    return db_parcel

@router.get("/user/{user_id}", response_model=List[schemas.Parcel])
def read_parcels_by_user(user_id: int, db: Session = Depends(get_db)):
    parcels = crud.get_parcels_by_user(db, user_id=user_id)
    return parcels