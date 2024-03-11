import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/db/models/User";
import dbConnect from "@/db/connect";
import bcrypt from "bcrypt";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        name: {
          label: "Name",
          type: "text",
          placeholder: "e.g. GuNShOtzZ",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        await dbConnect();

        const user = await User.findOne({ name: credentials.name });

        if (user) {
          const match = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (match) {
            return Promise.resolve(user);
          } else {
            return Promise.resolve(null);
          }
        } else {
          return Promise.resolve(null);
        }
      },
    }),
  ],
};
export default NextAuth(authOptions);
