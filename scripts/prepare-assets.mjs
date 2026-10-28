import { copyFile, mkdir } from 'node:fs/promises';

// Keep the CV URL used by the previous website serving the current CV.
const legacyDirectory = new URL('../public/uploads/', import.meta.url);
await mkdir(legacyDirectory, { recursive: true });
await copyFile(
  new URL('../public/assets/binh-minh-tran-cv.pdf', import.meta.url),
  new URL('Binh_Minh_Tran_CV.pdf', legacyDirectory),
);
