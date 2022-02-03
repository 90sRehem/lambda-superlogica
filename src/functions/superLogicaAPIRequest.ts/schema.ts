export const schema = {
  type: "object",
  properties: {
    url: { type: 'string' },
    headers: {
      type: "object",
      properties: {
        appToken: { type: 'string' },
        accessToken: { type: 'string' },
      },
    },
    params: { type: "object" }
  },
  required: ['url', 'headers']
} as const;
