import * as articleService from "../domain/Article/ArticleService";

const articlesController = {};

articlesController.get = (req, res) => {
    res.json({
      data: articleService.getArticles()
    });
    console.log('Articles Controller GET');
  };

  export default articlesController;  