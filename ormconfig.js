module.exports = {
  type: "postgres",
  host: "ec2-107-20-237-78.compute-1.amazonaws.com",
  port: 5432,
  username: "eyhfipuelriyfp",
  password:
    "aeb32ae434229f89d8806f5bb144fc988be08c7bea803f185ac8b2d90b290170",
  database: "d7metqs00n8qha",
  synchronize: true,
  extra: {
    ssl: true
  },
  entities: [
    "src/entity/**/*.ts"
  ]
};