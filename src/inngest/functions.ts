import { inngest } from "./client";

// Define the expected shape of the event data
interface HelloWorldEventData {
  email: string;
}

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    // Validate event data before using
    if (!event || !event.data || typeof event.data.email !== "string") {
      return {
        error: "Invalid event data: email is required and must be a string",
      };
    }

    const eventData = event.data as HelloWorldEventData;

    // Imagine this is a download step
    await step.sleep("wait-a-moment", "30s");

    // Imagine this is a transcript step
    await step.sleep("still-waiting", "10s");

    // Imagine this is a summary step
    await step.sleep("almost-done", "5s");

    return { message: `Hello ${eventData.email}!` };
  }
);
