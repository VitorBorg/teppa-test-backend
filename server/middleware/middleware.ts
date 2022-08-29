const admin = require("../infra/database");

class Middleware {
  async decodeToken(req, res, next) {
    const authorization = req.headers;
    const token = authorization?.authorization.split(" ")[1];
    try {
      const decodeValue = await admin.auth().verifyIdToken(token);
      if (decodeValue) {
        req.user = decodeValue;
        return next();
      }
      return res.json({ message: "Unauthorized" });
    } catch (e) {
      console.log(e.code);

      if (e.code === "auth/id-token-expired")
        res.json({ code: "404", message: e.code });
      else return res.json({ code: "405", message: "Internal Error" });
    }
  }
}

module.exports = new Middleware();
