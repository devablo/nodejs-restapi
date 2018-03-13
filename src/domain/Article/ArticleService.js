// @flow

import v1 from 'uuid';
import type {Article} from "./Article";
import * as R from 'ramda';
import * as validators from "../Helpers/Validators"

export type CreateArticleDto = {
    +title: string;
    +author: string;
  }

export type ArticleService = {
    createArticle(articleFields: CreateArticleDto): ?Article;
    isTitleValid(title: string): boolean;
    isAuthorValid(author: string): boolean;
}

export const getArticles = (): ?Array<Article> => {
    return [
        {
            id: v1(),
            title: "Article",
            author: "Author 1"
        },
        {
            id: v1(),
            title: "Article 2",
            author: "Author 2"
        }
    ]
};

export const createArticle = (articleFields: CreateArticleDto): ?Article => {
    const {title, author} = articleFields;
    return isTitleValid(title) && isAuthorValid(author) ?
        
        Object.freeze({
            id: v1(),
            title,
            author
        })
    :  null;
};

export const isTitleValid = (title: string) =>
    R.allPass([
    validators.isString,
    validators.isLengthGreaterThen(0)
])(title);

export const isAuthorValid = (author: string) =>
  R.allPass([
    validators.isString,
    validators.isLengthGreaterThen(0)
  ])(author);

export const ArticleServiceFactory = () => ({
  createArticle,
  isTitleValid,
  isAuthorValid
});

export const articleService = ArticleServiceFactory();