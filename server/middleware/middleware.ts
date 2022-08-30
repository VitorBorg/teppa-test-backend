const admin: any = require("../infra/database");

class Middleware {
  async decodeToken(req: any, res: any, next: any) {
    const authorization = req.headers;
    const token = authorization?.authorization.split(" ")[1];
    try {
      const decodeValue = await admin.auth().verifyIdToken(token);
      if (decodeValue) {
        req.user = decodeValue;
        return next();
      }
      return res.json({ message: "Unauthorized" });
    } catch (e: any) {
      console.log(e.code);

      if (e.code === "auth/id-token-expired")
        res.json({ code: "404", message: e.code });
      else return res.json({ code: "405", message: "Internal Error" });
    }
  }
}

export {};
module.exports = new Middleware();
