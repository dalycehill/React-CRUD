const db = require('../connection');

module.exports = {
    index(req,res,next) {
        db.query(`SELECT * FROM items`, (err, results) => {
            if (err) {
                return res.sendStatus(500);
            }
            return res.send({items:results});
        });
    },

    store(req,res,next) {
        db.query(`INSERT INTO items (category_id, title, description, price, quantity, sku) VALUES (?, ?, ?, ?, ?, ?)`, 
        [req.body.item.category_id, req.body.item.title, req.body.item.description, req.body.item.price, req.body.item.quantity, req.body.item.sku], (err, result) => {
            if (err) {
                return res.sendStatus(500);
            }
            return res.send({
                item: {
                    id: result.insertId,
                    category_id: req.body.item.category_id,
                    title: req.body.item.title,
                    description: req.body.item.description,
                    price: req.body.item.price,
                    quantity: req.body.item.quantity,
                    sku: req.body.item.sku
                }
            });
        });
    },

    update(req,res,next) {
        db.query(`UPDATE items SET category_id = ?, title = ?, description = ?, price = ?, quantity = ?, sku = ? WHERE id = ?`, 
        [req.body.item.category_id, req.body.item.title, req.body.item.description, req.body.item.price, req.body.item.quantity, req.body.item.sku, req.params.item], (err, results) => {
            if (err) {
                return res.sendStatus(500);
            }
            return res.sendStatus(200);
        });
    },

    destroy(req,res,next) {
        db.query(`DELETE FROM items WHERE id = ?`, [req.params.item], (err, result) => {
            if (err) {
                return res.sendStatus(500);
            }
            return res.sendStatus(200);
        });
    }

}