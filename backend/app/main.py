from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routers import auth, parcels


app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix="/auth", tags=["auth"])
app.include_router(parcels.router, prefix="/parcels", tags=["parcels"])

@app.get("/")
def read_rood():
    return {"message": "Welcome to Smart Parcel Delivery System"}