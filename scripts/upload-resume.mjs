#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { put } from '@vercel/blob';

const filePath = process.argv[2];
const blobPath = process.argv[3] || 'resumes/saahilbasak_resume.pdf';

if (!filePath) {
  console.error('Usage: node scripts/upload-resume.mjs <file-path> [blob-path]');
  process.exit(1);
}

if (!fs.existsSync(filePath)) {
  console.error(`File not found: ${filePath}`);
  process.exit(1);
}

async function uploadResume() {
  try {
    const fileBuffer = fs.readFileSync(filePath);
    const fileName = path.basename(filePath);

    console.log(`Uploading ${fileName} to Vercel Blob as ${blobPath}...`);

    const blob = await put(blobPath, fileBuffer, {
      access: 'public',
    });

    console.log('✅ Upload successful!');
    console.log(`URL: ${blob.url}`);
  } catch (error) {
    console.error('❌ Upload failed:', error.message);
    process.exit(1);
  }
}

uploadResume();
