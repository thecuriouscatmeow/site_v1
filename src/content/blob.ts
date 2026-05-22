export const BLOB_BASE_URL =
  "https://jcfcpzapgka7jsrv.public.blob.vercel-storage.com";
export const RESUME_PATH = "resumes";
export const DEFAULT_RESUME = "saahilbasak_resume.pdf";

/** Build the full URL for a given resume filename */
export function getResumeUrl(filename: string): string {
  return `${BLOB_BASE_URL}/${RESUME_PATH}/${filename}`;
}

/** Build the URL for a numbered resume (from ?ab= param) */
export function getIndexedResumeUrl(ab: string): string {
  return getResumeUrl(`${ab}.pdf`);
}

/** The default fallback resume URL */
export const DEFAULT_RESUME_URL = getResumeUrl(DEFAULT_RESUME);
