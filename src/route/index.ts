import express from 'express';
import { uploadImage, getImage } from '../controller/index';
import { upload} from '../utils/multer';

const router = express.Router();

router.post('/upload', upload.single('image'), uploadImage);
router.get('/get_image/:id', getImage);

export default router