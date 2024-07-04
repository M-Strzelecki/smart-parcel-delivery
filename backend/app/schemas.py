from pydantic import BaseModel
from typing import Optional, List

class UserBase(BaseModel):
    username: str
    email: str
    
class UserCreate(UserBase):
    password: str
    
class User(UserBase):
    id: int
    is_active: bool
    
    class Config:
        orm_mode = True
        
class Token(BaseModel):
    access_token: str
    token_type: str
    
class TokenData(BaseModel):
    username: Optional[str] = None
    
class ParcelBase(BaseModel):
    sender_id: int
    recipient_name: str
    recipient_address: str
    status: Optional[str] = "Pending"
    
class ParcelCreate(ParcelBase):
    pass

class Parcel(ParcelBase):
    id: int
    
    class Config:
        orm_mode = True