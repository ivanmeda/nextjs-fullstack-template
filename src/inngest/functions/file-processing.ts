import { inngest } from "../client";

// Process file after Vercel Blob upload
export const processUploadedFile = inngest.createFunction(
  {
    id: "process-uploaded-file",
    retries: 3,
    concurrency: { limit: 5 },
  },
  { event: "app/file.uploaded" },
  async ({ event, step }) => {
    const { blobUrl, fileType } = event.data;

    // Step 1: Process the file (e.g., generate thumbnail, extract metadata)
    await step.run("process-file", async () => {
      console.log(`Processing file: ${blobUrl} (${fileType})`);
      // Add your file processing logic here
    });
  }
);
