const connection = require('../../Services/connection');

async function adminLogin(req, res) {
    const sql = "SELECT * FROM admin WHERE username = ? AND password = ?";

    connection.query(sql, [req.body.username, req.body.password], (err, result) => {
        if (err) {
            console.error("Error executing SQL query:", err);
            return res.status(500).json({ error: "Internal server error" });
        }
        
        
        if (result.length > 0) {
            // User found, set session data
            req.session.admin = true;
            req.session.username = req.body.username;

            res.setHeader('Set-Cookie', serializeSessionCookie(req.session));
            return res.status(200).json({ message: "Admin login successful"});
        } else {
            return res.status(401).json({ error: "Invalid username or password" });
        }
    });
}

function serializeSessionCookie(session) {
    const cookie = `session=${session.id}; HttpOnly; Max-Age=${session.cookie.maxAge}; Path=/`;
    return cookie;
}

module.exports = adminLogin;
