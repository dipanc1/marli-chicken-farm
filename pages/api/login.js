const handler = (req, res) => {
    const { username, password } = req.body;
    const user = {
        username,
        password,
    };
    const token = jwt.sign(user, process.env.SECRET_KEY);
    res.json({
        success: true,
        token,
    });
}

export default handler;