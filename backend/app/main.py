from fastapi import FastAPI
from .routers import auth, parcels


app = FastAPI()

app.include_router(auth.router, prefix="/auth", tags=["auth"])
app.include_router(parcels.router, prefix="/parcels", tags=["parcels"])

@app.get("/")
def read_rood():
    return {"message": "Welcome to Smart Parcel Delivery System"}