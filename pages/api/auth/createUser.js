import dbConnect from "@/db/connect";
import User from "@/db/models/User";
import bcrypt from "bcrypt";

export default async function handler(request, response) {
  if (request.method === "POST") {
    const { name, email, password } = request.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    await dbConnect();
    await User.create({
      name,
      email,
      password: hashedPassword,
    });

    response.status(201).json({
      message: "User created successfully.",
    });
  } else {
    response.status(405).json({
      message: "Method not allowed.",
    });
  }
}
