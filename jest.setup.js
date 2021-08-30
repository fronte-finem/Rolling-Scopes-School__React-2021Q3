const { server } = require('./tests-mocks/server/server');

beforeAll(() => server.listen());
// beforeAll(() =>
//   server.listen({
//     onUnhandledRequest: (req) => {
//       console.log(req);
//     },
//   })
// );

afterAll(() => server.close());

afterEach(() => server.resetHandlers());
