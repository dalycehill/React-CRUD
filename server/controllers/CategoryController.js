const db = require('../connection');

module.exports = {
    index(req,res,next) {
        db.query(`SELECT * FROM categories`, (err, results) => {
            if (err) {
                return res.sendStatus(500);
            }
            return res.send({categories:results});
        });
    },

    store(req,res,next) {
        db.query(`INSERT INTO categories (category) VALUES (?)`, 
        [req.body.category.category], (err, result) => {
            if (err) {
                return res.sendStatus(500);
            }
            return res.send({
                category: {
                    id: result.insertId,
                    category: req.body.category.category
                }
            });
        });
    },

    update(req,res,next) {
        db.query(`UPDATE categories SET category = ? WHERE id = ?`, 
        [req.body.category.category, req.params.category], (err, results) => {
            if (err) {
                return res.sendStatus(500);
            }
            return res.sendStatus(200);
        });
    },

    destroy(req,res,next) {
        db.query(`DELETE FROM categories WHERE id = ?`, [req.params.category], (err, result) => {
            if (err) {
                return res.sendStatus(500);
            }
            return res.sendStatus(200);
        });
    }

}