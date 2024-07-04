import { GetFeedResponseInterFace } from "./getFeedResponse.interface";

export interface FeedStateInterface {
    isLoading: boolean;
    error: string | null;
    data: GetFeedResponseInterFace | null;
}