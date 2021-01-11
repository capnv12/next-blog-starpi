module.exports = ({ env }) => ({
  host: env("HOST", "159.89.97.246"),
  port: env.int("PORT", 1337),
  admin: {
    url: "/dashboard",
    auth: {
      secret: env("ADMIN_JWT_SECRET", "945fcb0ac64320ce536e5506efd7b10a"),
    },
  },
});
