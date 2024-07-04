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
    // TODO: Add author interface
}