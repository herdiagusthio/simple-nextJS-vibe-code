import { fetchExternalData, Post } from "../utils/api";

const mockPost: Post = {
  userId: 1,
  id: 1,
  title: "Test Title",
  body: "Test Body",
};

global.fetch = jest.fn();

describe("fetchExternalData", () => {
  beforeEach(() => {
    (fetch as jest.Mock).mockClear();
  });

  it("fetches data successfully", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockPost,
    } as Response);

    const data = await fetchExternalData();
    expect(data).toEqual(mockPost);
  });

  it("throws error when fetch fails", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
    } as Response);
    await expect(fetchExternalData()).rejects.toThrow("Failed to fetch data");
  });

  it("throws error on request timeout", async () => {
    (fetch as jest.Mock).mockImplementationOnce(
      () =>
        new Promise((_, reject) => {
          const error = new Error("Aborted");
          error.name = "AbortError";
          reject(error);
        })
    );
    await expect(fetchExternalData()).rejects.toThrow("Request timed out");
  });
});
