module.exports = ({ env }) => ({
  host: env("HOST", "206.189.48.12"),
  port: env.int("PORT", 1337),
  admin: {
    url: "/admin",
    auth: {
      secret: env("ADMIN_JWT_SECRET", "945fcb0ac64320ce536e5506efd7b10a"),
    },
  },
});
