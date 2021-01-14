module.exports = ({ env }) => ({
  host: env("HOST", "localhost"),
  port: env.int("PORT", 1337),
  admin: {
    url: "/admin",
    serveAdminPanel: true,
    auth: {
      secret: env("ADMIN_JWT_SECRET", "945fcb0ac64320ce536e5506efd7b10a"),
    },
  },
});
