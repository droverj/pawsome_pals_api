const express = require('express');
const router = express.Router();
const messageQueries = require('../db/queries/messages');

router.get('/', (req, res) => {
  const user = req.session.user_id;

  messageQueries.getInboxForUser(user)
    .then(messages => {
      res.json({ messages });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;
