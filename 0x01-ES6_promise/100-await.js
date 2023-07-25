import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  try {
    const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);
    return { photo, user };
  } catch (error) {
    console.error(error); // Log the error for debugging, if needed
    return { photo: null, user: null };
  }
}

export default asyncUploadUser;
