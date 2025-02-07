/* tslint:disable */
/* eslint-disable */

/** Types generated for queries found in "toy/query.sql" */
import { PreparedQuery } from '@pgtyped/query';

export type CommentStatusEnum = 'archived' | 'complete' | 'deleted' | 'pending';

export type CommentStatusEnumArray = (CommentStatusEnum)[];

/** 'GetComments' parameters type */
export type GetCommentsParams = void;

/** 'GetComments' return type */
export interface GetCommentsResult {
  author_id: string;
  /** Content of the comment, formatted with Markdown. May contain @mentions. */
  content_md: string;
  created_at: string | null;
  doc_id: string;
  id: string;
  /** Additional comment info @type {CommentMetadata} */
  metadata: unknown | null;
  modified_at: string | null;
  /** List of statuses; Just an array for testing! */
  statuses: CommentStatusEnumArray | null;
}

/** 'GetComments' query type */
export interface GetCommentsQuery {
  params: GetCommentsParams;
  result: GetCommentsResult;
}

const getCommentsIR: any = {"name":"getComments","params":[],"usedParamSet":{},"statement":{"body":"SELECT * FROM comment","loc":{"a":24,"b":44,"line":2,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM comment
 * ```
 */
export const getComments = new PreparedQuery<GetCommentsParams,GetCommentsResult>(getCommentsIR);


/** 'GetTime' parameters type */
export type GetTimeParams = void;

/** 'GetTime' return type */
export interface GetTimeResult {
  now: string | null;
}

/** 'GetTime' query type */
export interface GetTimeQuery {
  params: GetTimeParams;
  result: GetTimeResult;
}

const getTimeIR: any = {"name":"getTime","params":[],"usedParamSet":{},"statement":{"body":"SELECT NOW()","loc":{"a":68,"b":79,"line":5,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * SELECT NOW()
 * ```
 */
export const getTime = new PreparedQuery<GetTimeParams,GetTimeResult>(getTimeIR);


