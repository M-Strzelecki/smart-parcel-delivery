from sqlalchemy import create_engine
from .database import Base
from .models import User, Parcel

DATABASE_URL = "postgresql://user:password@localhost:5432/smartparcel"

engine = create_engine(DATABASE_URL)

Base.metadata.create_all(bind=engine)