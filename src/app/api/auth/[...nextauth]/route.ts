import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import LineProvider from "next-auth/providers/line";
import Facebook from "next-auth/providers/facebook";

const Options = {
  providers: [
    GoogleProvider({
      name: "google",
      clientId:
        "38755709920-90tltprbqdvmkse85m3d919aqb7ccb33.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    LineProvider({
      name: "line",
      clientId: "2005582181",
      clientSecret: "c439f6eb7b8e5ab34f9b1bbad5e230e2",
    }),
    Facebook({
      name: "facebook",
      clientId: "1500210577521097",
      clientSecret: "bc168921668e3ab877cbecdd36573b8b",
    }),
  ],
};

const handler = NextAuth(Options);

export { handler as GET, handler as POST };
