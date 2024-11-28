import {createAction} from "@reduxjs/toolkit";

export const publicationsNewsLoading = createAction('PUBLICATIONS_NEWS_LOADING');

export const publicationsArticleLoading = createAction('PUBLICATIONS_ARTICLE_LOADING');

export const publicationsNewsSuccess = createAction('PUBLICATIONS_NEWS_SUCCESS');

export const publicationsArticlesSuccess = createAction('PUBLICATIONS_ARTICLES_SUCCESS');

export const publicationsListFailed = createAction('PUBLICATIONS_LIST__FAILED');
