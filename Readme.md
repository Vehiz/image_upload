The image upload API is created using cloudinary as the image storage and MongoDB as database.

## create a cloudinary account if you don't have one

please take note of the cloudinary credentials in the .env file, which can be gotten by creating a cloudinary account(it is free).

## create an env file

this are the contents of the env file.

- MONGO_URI=''
- CLOUDINARY_CLOUD_NAME=''
- CLOUDINARY_API_KEY=''
- CLOUDINARY_API_SECRET=''

## Endpoints

Endpoints for both route can be found in the route folder and also, take note of the route middleware in the index.ts file. The endpoints won't work without it.

MAY THE CODES BE WITH US ALL...