import os

class Config:
  SECRET_KEY=os.environ.get('SECRET_KEY')
  SQLALCHEMY_TRACK_MODIFICATIONS=False
  SQLALCHEMY_DATABASE_URI="postgresql://rubiksuser:password@localhost/rubikstable"
  SQLALCHEMY_ECHO=True