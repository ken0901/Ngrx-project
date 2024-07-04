import { ArticleInterface } from "../../../types/article.interface";

export interface GetFeedResponseInterFace {
    articles: ArticleInterface[];
    articlesCount: number;
}