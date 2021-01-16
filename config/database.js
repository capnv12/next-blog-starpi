module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        uri: env("DATABASE_URI"),
      },
      options: {
        ssl: env.bool("DATABASE_SSL", true),
      },
    },
  },
});
// module.exports = ({ env }) => ({
//   defaultConnection: "default",
//   connections: {
//     default: {
//       connector: "mongoose",
//       settings: {
//         host: env("DATABASE_HOST", "localhost"),
//         srv: env.bool("DATABASE_SRV", false),
//         port: env.int("DATABASE_PORT", 27017),
//         database: env("DATABASE_NAME", "next-blog"),
//         username: env("DATABASE_USERNAME", null),
//         password: env("DATABASE_PASSWORD", null),
//       },
//       options: {
//         authenticationDatabase: env("AUTHENTICATION_DATABASE", null),
//         ssl: env.bool("DATABASE_SSL", false),
//       },
//     },
//   },
// });
