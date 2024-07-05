import { ProfileInterface } from "./profile.interface";

export interface ArticleInterface {
    body: string;
    createdAt: Date;
    description: string;
    favorited: boolean;
    favoritesCount: number;
    slug: string;
    tagList: string[];
    title: string;
    updatedAt: string;
    author: ProfileInterface;
}