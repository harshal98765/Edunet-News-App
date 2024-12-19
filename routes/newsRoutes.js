const express = require('express');
const News = require('../models/News');
const router = express.Router();

// Get all news
router.get('/', async (req, res) => {
    try {
        const news = await News.find();
        res.status(200).json(news);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

// Create a news article
router.post('/', async (req, res) => {
    const { title, description, author } = req.body;
    try {
        const newArticle = new News({ title, description, author });
        const savedArticle = await newArticle.save();
        res.status(201).json(savedArticle);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update a news article

router.put('/:id', async (req, res) => {
    try {
        const { title, description, author } = req.body;
        const news = await News.findById(req.params.id);
        if (!news) {
            return res.status(404).json({ message: 'News not found' });
        }
        // Update fields if provided, else keep the existing ones
        news.title = title || news.title;
        news.description = description || news.description;
        news.author = author || news.author;

        const updatedNews = await news.save();
        res.status(200).json(updatedNews);
    } catch (error) {
        res.status(500).json({ message: 'Error updating news', error: error.message });
    }
});


// Delete a news article
router.delete('/:id', async (req, res) => {
    try {
        const news = await News.findById(req.params.id);
        if (!news) {
            return res.status(404).json({ message: 'News not found' });
        }

        await news.deleteOne(); // Deletes the document
        res.status(200).json({ message: 'News deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting news', error: error.message });
    }
});


module.exports = router;
