import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { join } from 'path';

@Injectable()
export class ImageService {
  deleteImage(relativePath: string) {
    try {
      const filePath = join(__dirname, '../../../', relativePath);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        return true;
      }
    } catch (err) {
      console.error('Failed to delete image:', err);
    }
    return false;
  }

  getUniqueFileName(originalName: string, prefix: string) {
    const ext = originalName.split('.').pop();
    const uniqueName = `${prefix}-${Date.now()}-${Math.round(Math.random() * 1e9)}.${ext}`;
    return uniqueName;
  }
}
