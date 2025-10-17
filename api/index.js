import express from "express";
import postsRoutes from "./routes/posts.js";
import authRoutes from "./routes/auth.js";
import usersRoutes from "./routes/users.js";
const app = express();

app.use(express.json());
app.use("/api/posts",postsRoutes);
app.use("/api/auth",authRoutes)
app.use("/api/users",usersRoutes)

app.listen(8800, () => {
    console.log("connected");
});
