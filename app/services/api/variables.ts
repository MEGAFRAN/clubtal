export const API =
{
    test:
    {
        url: process.env.TEST_API || process.env.NEXT_PUBLIC_TEST_API,
        endpoint: process.env.TEST_API_ENDPOINT || process.env.NEXT_PUBLIC_TEST_API_ENDPOINT
    }
}