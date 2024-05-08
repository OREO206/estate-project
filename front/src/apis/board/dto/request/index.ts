export interface PostBoardRequestDto {
    title : string;
    contents : string;
}

export interface PostCommentRequestDto {
    comment: string;
} 

export interface PutBoardRequestDto {
    title: string;
    contents: string;
}